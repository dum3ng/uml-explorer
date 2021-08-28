(ns ue.components
  (:require ["@material-ui/core" :refer [Button
                                         TextField]]
            [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
            [com.fulcrologic.fulcro.dom :as dom]
            [com.fulcrologic.fulcro.algorithms.react-interop :refer [react-factory]]))

(def m-button (react-factory Button))
(def m-text-field (react-factory TextField))

