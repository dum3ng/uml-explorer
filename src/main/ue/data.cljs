(ns ue.data
  (:require [clojure.string :as str]
            [datascript.core :as d]
            [ue.constants :refer [attr-prefix]]))


;(def schema
;  {:owner {:db/valueType :db.type/ref}})
;
(declare ^:dynamic *conn*)

(def tid (atom -1))

(defn gen-datoms
  ;; generate datoms by an xmi object
  ;; the data should be clj map
  [data owner-id]
  (loop [datoms []
         i 0]
    (if (< i (count data))
      (let [entries (into [] data)
            entry (nth entries i)
            [k v] entry]
        (if (str/starts-with? (name k) attr-prefix)
          ;;if k start with attribute prefix, then it will be a plain text ,
          ;; and will be save as attributes of an existed entity
          (recur (conj datoms {:db/id                                        owner-id
                               (keyword (subs (name k) (count attr-prefix))) v})
                 (inc i))
          (if (vector? v)
            ;; if value is array, then create a collection of specified
            ;; entities.
            (let [children (map #(gen-datoms {k %} owner-id) v)
                  cds (into [] cat children)]
              (recur (vec (concat datoms cds)) (inc i)))
            ;;if value is an object/string, then create an empty entity with
            ;; only :entity/type, and set its owner
            (let [eid (swap! tid dec)
                  entity {:db/id eid :entity/type k}
                  entity (if (nil? owner-id) entity
                                             (assoc entity :owner owner-id))]
              (if (string? v)
                (recur (conj datoms (assoc entity :text v)) (inc i))
                (recur (vec (concat datoms [entity] (gen-datoms v eid)))
                       (inc i)))))))
      datoms)))

(defn prepare-db!
  ;; data is js object
  [data]
  (let [m (js->clj data :keywordize-keys true)
        xmi (select-keys m [:xmi:XMI])
        datoms (gen-datoms xmi nil)]
    (d/transact! *conn* datoms)))

(defn q
  ([query]
   (d/q query @*conn*))
  ([query & args]
   (apply d/q query @*conn* args)))


(defn pull [pattern id]
  (d/pull @*conn* pattern id))

(defn pull-many [pattern ids]
  (d/pull @*conn* pattern ids))

(defn clear-db! [new-db] (d/reset-conn! *conn* new-db))

