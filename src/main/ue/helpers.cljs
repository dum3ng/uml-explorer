(ns ue.helpers
  (:require [oops.core :refer [oget]]))

(defn event-value [e]
  (-> e
      (oget "target")
      (oget "value")))
