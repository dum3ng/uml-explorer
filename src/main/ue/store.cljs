(ns ue.store
  (:require
    [cljs.core.async :refer [go <!]]
    [cljs.core.async.interop :refer-macros [<p!]]
    [cljs-http.client :as http]
    [datascript.core :as d]
    [ue.parser :as parser]
    [ue.data :as db]))

(def schema
  {:owner {:db/valueType :db.type/ref}})

(defonce conn (d/create-conn schema))

(defn init-db! []
  (print "init db.")
  (go
    (let [resp (<! (http/get "assets/state.xmi"))
          body (:body resp)
          js-data (parser/parse-xmi body)
          ]
      (binding [db/*conn* conn]
        (db/prepare-db! js-data))
      )))