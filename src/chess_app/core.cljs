;; First attempt at building a browser-based Chess game.

(ns chess-app.core
  (:require
    [clojure.pprint :as pprint]
    [reagent.core :as reagent]
    [reagent.dom :as rd]))

(enable-console-print!)

(println "This text is printed from src/chess-app/core.cljs. Go ahead and edit it and see reloading in action.")



(defn is-valid? [{:keys [figure player]} start-path end-path]
  (and (= figure "P") (= player 0))
  true)



(defn user-input []
    [:div {:style {:border " 1px solid black"}}
     "From To: " [:input {:type "text" :default "check"}]])

#_(defn hello-world []
  (let [rows @app-state]
    (into [:div
           {:style {:width 500 :height 500 :border " 1px solid gray"}}]
          (map-indexed (fn [i row]
                         (into
                           [:div
                            {:style {
                                     :height      (/ 500 8)
                                     :display     "flex"
                                     :font-family "sans-serif"
                                     :font-size   "18"
                                     :background  (if (odd? i) "white" "gray")
                                     }}]
                           (map-indexed (fn [j field]
                                          (into
                                            [:div
                                             {:style {
                                                      :width           (/ 500 8)
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

; (rd/render [hello-world]
;           (. js/document (getElementById "app")))

(defn state-printer []
  [:pre
   {:style {:margin-top 40 :font-family "monospace"}}
   (with-out-str (pprint/pprint @app-state))])

(def alphabet ["a" "b" "c" "d" "e" "f" "g" "h"])
(defn got-input [x f f1 f2 f3]  (first x))
(defn num [x] (replace x  ))
(rd/render [:div
            {:style {:display "flex"}}
            [board-view]
            [:div
             {:style {:margin-left 100}}
             [user-input]
             [state-printer]]] (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
