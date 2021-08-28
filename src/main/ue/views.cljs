(ns ue.views
  (:require
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :as dom]
    [ue.components :refer [m-button m-text-field]]
    [ue.helpers :as h]
    )
  )

(defsc Search [this props]
  {:initLocalState (fn [this props] {:input "..."})}
  (dom/div
    (dom/p "A material button below ")
    (dom/form {:auto-complete "off" :no-validate "true"}
              (m-text-field {:label    "search query" :value (:input (comp/get-state this))
                             :onChange #(comp/set-state! this {:input (h/event-value %)})})
              "A button")
    (dom/p (:input (comp/get-state this))))
  )

(def ui-search (comp/factory Search))
