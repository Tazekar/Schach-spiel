// Compiled by ClojureScript 1.10.773 {}
goog.provide('chess_app.core');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('reagent.core');
goog.require('reagent.dom');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"This text is printed from src/chess-app/core.cljs. Go ahead and edit it and see reloading in action.");
chess_app.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"T",new cljs.core.Keyword(null,"player","player",-97687400),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"H",new cljs.core.Keyword(null,"player","player",-97687400),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"B",new cljs.core.Keyword(null,"player","player",-97687400),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"Q",new cljs.core.Keyword(null,"player","player",-97687400),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"K",new cljs.core.Keyword(null,"player","player",-97687400),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"B",new cljs.core.Keyword(null,"player","player",-97687400),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"H",new cljs.core.Keyword(null,"player","player",-97687400),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"T",new cljs.core.Keyword(null,"player","player",-97687400),(0)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"P",new cljs.core.Keyword(null,"player","player",-97687400),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"P",new cljs.core.Keyword(null,"player","player",-97687400),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"P",new cljs.core.Keyword(null,"player","player",-97687400),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"P",new cljs.core.Keyword(null,"player","player",-97687400),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"P",new cljs.core.Keyword(null,"player","player",-97687400),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"P",new cljs.core.Keyword(null,"player","player",-97687400),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"P",new cljs.core.Keyword(null,"player","player",-97687400),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"P",new cljs.core.Keyword(null,"player","player",-97687400),(0)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"P",new cljs.core.Keyword(null,"player","player",-97687400),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"P",new cljs.core.Keyword(null,"player","player",-97687400),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"P",new cljs.core.Keyword(null,"player","player",-97687400),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"P",new cljs.core.Keyword(null,"player","player",-97687400),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"P",new cljs.core.Keyword(null,"player","player",-97687400),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"P",new cljs.core.Keyword(null,"player","player",-97687400),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"P",new cljs.core.Keyword(null,"player","player",-97687400),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"P",new cljs.core.Keyword(null,"player","player",-97687400),(1)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"T",new cljs.core.Keyword(null,"player","player",-97687400),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"H",new cljs.core.Keyword(null,"player","player",-97687400),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"B",new cljs.core.Keyword(null,"player","player",-97687400),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"Q",new cljs.core.Keyword(null,"player","player",-97687400),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"K",new cljs.core.Keyword(null,"player","player",-97687400),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"B",new cljs.core.Keyword(null,"player","player",-97687400),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"H",new cljs.core.Keyword(null,"player","player",-97687400),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figure","figure",-561394079),"T",new cljs.core.Keyword(null,"player","player",-97687400),(1)], null)], null)], null)], null));
chess_app.core.is_valid_QMARK_ = (function chess_app$core$is_valid_QMARK_(p__27807,start_path,end_path){
var map__27808 = p__27807;
var map__27808__$1 = (((((!((map__27808 == null))))?(((((map__27808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27808):map__27808);
var figure = cljs.core.get.call(null,map__27808__$1,new cljs.core.Keyword(null,"figure","figure",-561394079));
var player = cljs.core.get.call(null,map__27808__$1,new cljs.core.Keyword(null,"player","player",-97687400));
((cljs.core._EQ_.call(null,figure,"P")) && (cljs.core._EQ_.call(null,player,(0))));

return true;
});
chess_app.core.board_view = (function chess_app$core$board_view(){
var map__27811 = cljs.core.deref.call(null,chess_app.core.app_state);
var map__27811__$1 = (((((!((map__27811 == null))))?(((((map__27811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27811):map__27811);
var board = cljs.core.get.call(null,map__27811__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var current_drag = cljs.core.get.call(null,map__27811__$1,new cljs.core.Keyword(null,"current-drag","current-drag",-754563771));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"height","height",1025178622),(500),new cljs.core.Keyword(null,"border","border",1444987323)," 1px solid gray"], null)], null)], null),cljs.core.map_indexed.call(null,(function (i,row){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),((500) / (8)),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"sans-serif",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"18px",new cljs.core.Keyword(null,"background","background",-863952629),((cljs.core.odd_QMARK_.call(null,i))?"white":"gray")], null)], null)], null),cljs.core.map_indexed.call(null,(function (j,p__27813){
var map__27814 = p__27813;
var map__27814__$1 = (((((!((map__27814 == null))))?(((((map__27814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27814):map__27814);
var player = cljs.core.get.call(null,map__27814__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var figure = cljs.core.get.call(null,map__27814__$1,new cljs.core.Keyword(null,"figure","figure",-561394079));
var highlight_QMARK_ = cljs.core.get.call(null,map__27814__$1,new cljs.core.Keyword(null,"highlight?","highlight?",1074358487));
var bg_color = ((cljs.core.odd_QMARK_.call(null,j))?((cljs.core.odd_QMARK_.call(null,i))?"gray":"white"):((cljs.core.odd_QMARK_.call(null,i))?"white":"gray"));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (event){
event.preventDefault();

event.stopPropagation();

return cljs.core.swap_BANG_.call(null,chess_app.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j,new cljs.core.Keyword(null,"highlight?","highlight?",1074358487)], null),true);
}),new cljs.core.Keyword(null,"on-drag-leave","on-drag-leave",-373180078),(function (event){
return cljs.core.swap_BANG_.call(null,chess_app.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j,new cljs.core.Keyword(null,"highlight?","highlight?",1074358487)], null),false);
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (event){
var dragging_figure = cljs.core.get_in.call(null,cljs.core.deref.call(null,chess_app.core.app_state),current_drag);
if(((cljs.core.not_EQ_.call(null,current_drag,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j], null))) && (chess_app.core.is_valid_QMARK_.call(null,dragging_figure,current_drag,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j], null))))){
cljs.core.swap_BANG_.call(null,chess_app.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j], null),dragging_figure);

return cljs.core.swap_BANG_.call(null,chess_app.core.app_state,cljs.core.assoc_in,current_drag,null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),((500) / (8)),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(highlight_QMARK_)?"yellow":bg_color)], null)], null),(cljs.core.truth_(figure)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"src","src",-1651076051),["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figure),"-",(((player === (0)))?"white":"dark"),".svg"].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"move"], null),new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),(function (p1__27810_SHARP_){
cljs.core.swap_BANG_.call(null,chess_app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-drag","current-drag",-754563771),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j], null));

return p1__27810_SHARP_.dataTransfer.setData("text/plain",null);
}),new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),(function (){
return cljs.core.swap_BANG_.call(null,chess_app.core.app_state,cljs.core.dissoc,new cljs.core.Keyword(null,"current-drag","current-drag",-754563771));
})], null)], null):null)], null);
}),row));
}),board));
});
chess_app.core.user_input = (function chess_app$core$user_input(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323)," 1px solid black"], null)], null),"From To: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"default","default",-1987822328),"check"], null)], null)], null);
});
chess_app.core.state_printer = (function chess_app$core$state_printer(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(40),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27816_27820 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27817_27821 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27818_27822 = true;
var _STAR_print_fn_STAR__temp_val__27819_27823 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27818_27822);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27819_27823);

try{cljs.pprint.pprint.call(null,cljs.core.deref.call(null,chess_app.core.app_state));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27817_27821);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27816_27820);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})()], null);
});
chess_app.core.alphabet = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c","d","e","f","g","h"], null);
chess_app.core.got_input = (function chess_app$core$got_input(x,f,f1,f2,f3){
return cljs.core.first.call(null,x);
});
chess_app.core.num = (function chess_app$core$num(x){
return cljs.core.replace.call(null,x);
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chess_app.core.board_view], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(100)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chess_app.core.user_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chess_app.core.state_printer], null)], null)], null),document.getElementById("app"));
chess_app.core.on_js_reload = (function chess_app$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1649165939695
