goog.provide('ue.client');
if((typeof ue !== 'undefined') && (typeof ue.client !== 'undefined') && (typeof ue.client.app !== 'undefined')){
} else {
ue.client.app = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();
}

var options__45455__auto___52192 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function ue$client$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"TODO",com.fulcrologic.fulcro.components.force_children((ue.views.ui_search.cljs$core$IFn$_invoke$arity$1 ? ue.views.ui_search.cljs$core$IFn$_invoke$arity$1(null) : ue.views.ui_search.call(null,null)))]);
}));
})], null);
if((typeof ue !== 'undefined') && (typeof ue.client !== 'undefined') && (typeof ue.client.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
ue.client.Root = (function ue$client$Root(props__45456__auto__){
var this__45457__auto__ = this;
var temp__5751__auto___52193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__45455__auto___52192,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___52193)){
var init_state__45458__auto___52194 = temp__5751__auto___52193;
(this__45457__auto__.state = (function (){var obj52187 = ({"fulcro$state":(function (){var G__52188 = this__45457__auto__;
var G__52189 = goog.object.get(props__45456__auto__,"fulcro$value");
return (init_state__45458__auto___52194.cljs$core$IFn$_invoke$arity$2 ? init_state__45458__auto___52194.cljs$core$IFn$_invoke$arity$2(G__52188,G__52189) : init_state__45458__auto___52194.call(null,G__52188,G__52189));
})()});
return obj52187;
})());
} else {
(this__45457__auto__.state = (function (){var obj52191 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj52191;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(ue.client.Root,new cljs.core.Keyword("ue.client","Root","ue.client/Root",-2067027049),options__45455__auto___52192);
/**
 * Shadow-cljs sets this up to be our entry-point function. See shadow-cljs.edn `:init-fn` in the modules of the main build.
 */
ue.client.init = (function ue$client$init(){
ue.store.init_db_BANG_();

com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(ue.client.app,ue.client.Root,"app");

return console.log("Loaded");
});
goog.exportSymbol('ue.client.init', ue.client.init);
/**
 * During development, shadow-cljs will call this on every hot reload of source. See shadow-cljs.edn
 */
ue.client.refresh = (function ue$client$refresh(){
com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(ue.client.app,ue.client.Root,"app");

com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$1(ue.client.app);

return console.log("Hot reload");
});
goog.exportSymbol('ue.client.refresh', ue.client.refresh);

//# sourceMappingURL=ue.client.js.map
