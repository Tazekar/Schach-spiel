(ns chess-app.core
  (:require
    [reagent.core :as reagent :refer [atom]]
    [reagent.dom :as rd]))

(enable-console-print!)

(println "This text is printed from src/chess-app/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

; (def app-state (atom [["T" "H" "B" "Q" "K" "B" "H" "T"]
;                      ["S" "S" "S" "S" "S" "S" "S" "S"]
;                      [nil nil nil nil nil nil nil nil]
;                      [nil nil nil nil nil nil nil nil]
;                      [nil nil nil nil nil nil nil nil]
;                      [nil nil nil nil nil nil nil nil]
;                      ["S" "S" "S" "S" "S" "S" "S" "S"]
;                      ["T" "H" "B" "Q" "K" "B" "H" "T"]]))
(def app-state (atom [[:img-src "/Users/alachiq/Downloads/Chess_rlt45.svg"] "H" "B" "Q" "K" "B" "H" "T"]
                     ["S" "S" "S" "S" "S" "S" "S" "S"]
                     [nil nil nil nil nil nil nil nil]
                     [nil nil nil nil nil nil nil nil]
                     [nil nil nil nil nil nil nil nil]
                     [nil nil nil nil nil nil nil nil]
                     ["S" "S" "S" "S" "S" "S" "S" "S"]
                     ["T" "H" "B" "Q" "K" "B" "H" "T"]))

(defn hello-world []
  (let [rows @app-state]
    (into [:div
           {:style {:width 500 :height 500 :border " 1px solid gray"}}]
          (map-indexed (fn [i row]
                         (into
                           [:div
                            {:style {:height      (/ 500 8)
                                     :display     "flex"
                                     :font-family "sans-serif"
                                     :font-size   "18"
                                     :background  (if (odd? i) "white" "gray")
                                     }}]
                           (map-indexed (fn [j field]
                                          (into
                                            [:div
                                             {:style {:width           (/ 500 8)
                                                      :display         "flex"
                                                      :align-items     "center"
                                                      :justify-content " center"
                                                      :background ; (if (odd? i) (if (odd? j) "white" "gray")
                                                      ;                (if (odd? j) "gray" "white")
                                                                       (if (odd? j) (if (odd? i) "gray" "white")
                                                                                    (if (odd? i) "white" "gray"))
                                                      }}]
                                            field)))
                           row))
                       rows))))

(rd/render [hello-world]
           (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
