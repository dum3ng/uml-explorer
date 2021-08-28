goog.provide('ue.views');

var options__45455__auto___52183 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),(function (this$,props){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),"..."], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function ue$views$render_Search(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({}),"A material button below "]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["form",({"auto-complete": "off", "no-validate": "true"}),com.fulcrologic.fulcro.components.force_children(ue.components.m_text_field(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"search query",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__52176_SHARP_){
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),ue.helpers.event_value(p1__52176_SHARP_)], null));
})], null))),"A button"]),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1(this$))], null),null)], null),null);
}));
})], null);
if((typeof ue !== 'undefined') && (typeof ue.views !== 'undefined') && (typeof ue.views.Search !== 'undefined')){
} else {
/**
 * @constructor
 */
ue.views.Search = (function ue$views$Search(props__45456__auto__){
var this__45457__auto__ = this;
var temp__5751__auto___52184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45455__auto___52183,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___52184)){
var init_state__45458__auto___52185 = temp__5751__auto___52184;
(this__45457__auto__.state = (function (){var obj52178 = ({"fulcro$state":(function (){var G__52179 = this__45457__auto__;
var G__52180 = goog.object.get(props__45456__auto__,"fulcro$value");
return (init_state__45458__auto___52185.cljs$core$IFn$_invoke$arity$2 ? init_state__45458__auto___52185.cljs$core$IFn$_invoke$arity$2(G__52179,G__52180) : init_state__45458__auto___52185.call(null,G__52179,G__52180));
})()});
return obj52178;
})());
} else {
(this__45457__auto__.state = (function (){var obj52182 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj52182;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(ue.views.Search,new cljs.core.Keyword("ue.views","Search","ue.views/Search",1459709580),options__45455__auto___52183);
ue.views.ui_search = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(ue.views.Search);

//# sourceMappingURL=ue.views.js.map
