goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app,ident,c){
if(cljs.core.truth_((function (){var and__4210__auto__ = c;
if(cljs.core.truth_(and__4210__auto__)){
return ident;
} else {
return and__4210__auto__;
}
})())){
var map__56806 = app;
var map__56806__$1 = cljs.core.__destructure_map(map__56806);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56806__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__4212__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_computed.call(null,c));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = (function (){var G__56811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__56812 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__56811,G__56812) : com.fulcrologic.fulcro.components.computed.call(null,G__56811,G__56812));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,-564508183,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__56814 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__56814) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__56814));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,2111405246,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app,ident){
var seq__56817 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app,ident));
var chunk__56818 = null;
var count__56819 = (0);
var i__56820 = (0);
while(true){
if((i__56820 < count__56819)){
var c = chunk__56818.cljs$core$IIndexed$_nth$arity$2(null,i__56820);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident,c);


var G__56981 = seq__56817;
var G__56982 = chunk__56818;
var G__56983 = count__56819;
var G__56984 = (i__56820 + (1));
seq__56817 = G__56981;
chunk__56818 = G__56982;
count__56819 = G__56983;
i__56820 = G__56984;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56817);
if(temp__5753__auto__){
var seq__56817__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56817__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__56817__$1);
var G__56986 = cljs.core.chunk_rest(seq__56817__$1);
var G__56987 = c__4638__auto__;
var G__56988 = cljs.core.count(c__4638__auto__);
var G__56989 = (0);
seq__56817 = G__56986;
chunk__56818 = G__56987;
count__56819 = G__56988;
i__56820 = G__56989;
continue;
} else {
var c = cljs.core.first(seq__56817__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident,c);


var G__56990 = cljs.core.next(seq__56817__$1);
var G__56991 = null;
var G__56992 = (0);
var G__56993 = (0);
seq__56817 = G__56990;
chunk__56818 = G__56991;
count__56819 = G__56992;
i__56820 = G__56993;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app,ident);

var map__56836 = app;
var map__56836__$1 = cljs.core.__destructure_map(map__56836);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56836__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__56837 = cljs.core.deref(runtime_atom);
var map__56837__$1 = cljs.core.__destructure_map(map__56837);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56837__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__56838 = indexes;
var map__56838__$1 = cljs.core.__destructure_map(map__56838);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56838__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56838__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56838__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__4212__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__56839 = cljs.core.seq(classes);
var chunk__56840 = null;
var count__56841 = (0);
var i__56842 = (0);
while(true){
if((i__56842 < count__56841)){
var class$ = chunk__56840.cljs$core$IIndexed$_nth$arity$2(null,i__56842);
var seq__56881_56994 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__56883_56995 = null;
var count__56884_56996 = (0);
var i__56885_56997 = (0);
while(true){
if((i__56885_56997 < count__56884_56996)){
var component_56998 = chunk__56883_56995.cljs$core$IIndexed$_nth$arity$2(null,i__56885_56997);
var component_ident_56999 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_56998) : com.fulcrologic.fulcro.components.get_ident.call(null,component_56998));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_56999,component_56998);


var G__57000 = seq__56881_56994;
var G__57001 = chunk__56883_56995;
var G__57002 = count__56884_56996;
var G__57003 = (i__56885_56997 + (1));
seq__56881_56994 = G__57000;
chunk__56883_56995 = G__57001;
count__56884_56996 = G__57002;
i__56885_56997 = G__57003;
continue;
} else {
var temp__5753__auto___57004 = cljs.core.seq(seq__56881_56994);
if(temp__5753__auto___57004){
var seq__56881_57005__$1 = temp__5753__auto___57004;
if(cljs.core.chunked_seq_QMARK_(seq__56881_57005__$1)){
var c__4638__auto___57006 = cljs.core.chunk_first(seq__56881_57005__$1);
var G__57007 = cljs.core.chunk_rest(seq__56881_57005__$1);
var G__57008 = c__4638__auto___57006;
var G__57009 = cljs.core.count(c__4638__auto___57006);
var G__57010 = (0);
seq__56881_56994 = G__57007;
chunk__56883_56995 = G__57008;
count__56884_56996 = G__57009;
i__56885_56997 = G__57010;
continue;
} else {
var component_57014 = cljs.core.first(seq__56881_57005__$1);
var component_ident_57016 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_57014) : com.fulcrologic.fulcro.components.get_ident.call(null,component_57014));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_57016,component_57014);


var G__57018 = cljs.core.next(seq__56881_57005__$1);
var G__57019 = null;
var G__57020 = (0);
var G__57021 = (0);
seq__56881_56994 = G__57018;
chunk__56883_56995 = G__57019;
count__56884_56996 = G__57020;
i__56885_56997 = G__57021;
continue;
}
} else {
}
}
break;
}


var G__57022 = seq__56839;
var G__57023 = chunk__56840;
var G__57024 = count__56841;
var G__57025 = (i__56842 + (1));
seq__56839 = G__57022;
chunk__56840 = G__57023;
count__56841 = G__57024;
i__56842 = G__57025;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56839);
if(temp__5753__auto__){
var seq__56839__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56839__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__56839__$1);
var G__57026 = cljs.core.chunk_rest(seq__56839__$1);
var G__57027 = c__4638__auto__;
var G__57028 = cljs.core.count(c__4638__auto__);
var G__57029 = (0);
seq__56839 = G__57026;
chunk__56840 = G__57027;
count__56841 = G__57028;
i__56842 = G__57029;
continue;
} else {
var class$ = cljs.core.first(seq__56839__$1);
var seq__56889_57030 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__56891_57031 = null;
var count__56892_57032 = (0);
var i__56893_57033 = (0);
while(true){
if((i__56893_57033 < count__56892_57032)){
var component_57034 = chunk__56891_57031.cljs$core$IIndexed$_nth$arity$2(null,i__56893_57033);
var component_ident_57035 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_57034) : com.fulcrologic.fulcro.components.get_ident.call(null,component_57034));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_57035,component_57034);


var G__57037 = seq__56889_57030;
var G__57038 = chunk__56891_57031;
var G__57039 = count__56892_57032;
var G__57040 = (i__56893_57033 + (1));
seq__56889_57030 = G__57037;
chunk__56891_57031 = G__57038;
count__56892_57032 = G__57039;
i__56893_57033 = G__57040;
continue;
} else {
var temp__5753__auto___57041__$1 = cljs.core.seq(seq__56889_57030);
if(temp__5753__auto___57041__$1){
var seq__56889_57042__$1 = temp__5753__auto___57041__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56889_57042__$1)){
var c__4638__auto___57043 = cljs.core.chunk_first(seq__56889_57042__$1);
var G__57044 = cljs.core.chunk_rest(seq__56889_57042__$1);
var G__57045 = c__4638__auto___57043;
var G__57046 = cljs.core.count(c__4638__auto___57043);
var G__57047 = (0);
seq__56889_57030 = G__57044;
chunk__56891_57031 = G__57045;
count__56892_57032 = G__57046;
i__56893_57033 = G__57047;
continue;
} else {
var component_57048 = cljs.core.first(seq__56889_57042__$1);
var component_ident_57049 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_57048) : com.fulcrologic.fulcro.components.get_ident.call(null,component_57048));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_57049,component_57048);


var G__57051 = cljs.core.next(seq__56889_57042__$1);
var G__57052 = null;
var G__57053 = (0);
var G__57054 = (0);
seq__56889_57030 = G__57051;
chunk__56891_57031 = G__57052;
count__56892_57032 = G__57053;
i__56893_57033 = G__57054;
continue;
}
} else {
}
}
break;
}


var G__57055 = cljs.core.next(seq__56839__$1);
var G__57056 = null;
var G__57057 = (0);
var G__57058 = (0);
seq__56839 = G__57055;
chunk__56840 = G__57056;
count__56841 = G__57057;
i__56842 = G__57058;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app,property_set){
if(cljs.core.seq(property_set)){
var map__56914 = app;
var map__56914__$1 = cljs.core.__destructure_map(map__56914);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56914__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__56915 = cljs.core.deref(runtime_atom);
var map__56915__$1 = cljs.core.__destructure_map(map__56915);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56915__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__56916 = indexes;
var map__56916__$1 = cljs.core.__destructure_map(map__56916);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56916__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56916__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__56908_SHARP_,p2__56909_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__56908_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__56909_SHARP_) : class__GT_components.call(null,p2__56909_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app){
var map__56921 = app;
var map__56921__$1 = cljs.core.__destructure_map(map__56921);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56921__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56921__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__56922 = cljs.core.deref(runtime_atom);
var map__56922__$1 = cljs.core.__destructure_map(map__56922);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56922__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56922__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56922__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56922__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__56923 = indexes;
var map__56923__$1 = cljs.core.__destructure_map(map__56923);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56923__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56923__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56923__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56923__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__56928 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__56928__$1 = cljs.core.__destructure_map(map__56928);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56928__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56928__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app,limited_props);
var seq__56929_57066 = cljs.core.seq(limited_to_render);
var chunk__56931_57067 = null;
var count__56932_57068 = (0);
var i__56933_57069 = (0);
while(true){
if((i__56933_57069 < count__56932_57068)){
var c_57071 = chunk__56931_57067.cljs$core$IIndexed$_nth$arity$2(null,i__56933_57069);
var ident_57072 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_57071) : com.fulcrologic.fulcro.components.get_ident.call(null,c_57071));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident_57072,c_57071);


var G__57073 = seq__56929_57066;
var G__57074 = chunk__56931_57067;
var G__57075 = count__56932_57068;
var G__57076 = (i__56933_57069 + (1));
seq__56929_57066 = G__57073;
chunk__56931_57067 = G__57074;
count__56932_57068 = G__57075;
i__56933_57069 = G__57076;
continue;
} else {
var temp__5753__auto___57078 = cljs.core.seq(seq__56929_57066);
if(temp__5753__auto___57078){
var seq__56929_57079__$1 = temp__5753__auto___57078;
if(cljs.core.chunked_seq_QMARK_(seq__56929_57079__$1)){
var c__4638__auto___57080 = cljs.core.chunk_first(seq__56929_57079__$1);
var G__57083 = cljs.core.chunk_rest(seq__56929_57079__$1);
var G__57084 = c__4638__auto___57080;
var G__57085 = cljs.core.count(c__4638__auto___57080);
var G__57086 = (0);
seq__56929_57066 = G__57083;
chunk__56931_57067 = G__57084;
count__56932_57068 = G__57085;
i__56933_57069 = G__57086;
continue;
} else {
var c_57087 = cljs.core.first(seq__56929_57079__$1);
var ident_57088 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_57087) : com.fulcrologic.fulcro.components.get_ident.call(null,c_57087));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident_57088,c_57087);


var G__57089 = cljs.core.next(seq__56929_57079__$1);
var G__57090 = null;
var G__57091 = (0);
var G__57092 = (0);
seq__56929_57066 = G__57089;
chunk__56931_57067 = G__57090;
count__56932_57068 = G__57091;
i__56933_57069 = G__57092;
continue;
}
} else {
}
}
break;
}

var seq__56940 = cljs.core.seq(limited_idents);
var chunk__56941 = null;
var count__56942 = (0);
var i__56943 = (0);
while(true){
if((i__56943 < count__56942)){
var i = chunk__56941.cljs$core$IIndexed$_nth$arity$2(null,i__56943);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i);


var G__57094 = seq__56940;
var G__57095 = chunk__56941;
var G__57096 = count__56942;
var G__57097 = (i__56943 + (1));
seq__56940 = G__57094;
chunk__56941 = G__57095;
count__56942 = G__57096;
i__56943 = G__57097;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56940);
if(temp__5753__auto__){
var seq__56940__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56940__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__56940__$1);
var G__57098 = cljs.core.chunk_rest(seq__56940__$1);
var G__57099 = c__4638__auto__;
var G__57100 = cljs.core.count(c__4638__auto__);
var G__57101 = (0);
seq__56940 = G__57098;
chunk__56941 = G__57099;
count__56942 = G__57100;
i__56943 = G__57101;
continue;
} else {
var i = cljs.core.first(seq__56940__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i);


var G__57107 = cljs.core.next(seq__56940__$1);
var G__57108 = null;
var G__57109 = (0);
var G__57110 = (0);
seq__56940 = G__57107;
chunk__56941 = G__57108;
count__56942 = G__57109;
i__56943 = G__57110;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__4212__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__56946 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__56946__$1 = cljs.core.__destructure_map(map__56946);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56946__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56946__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__56948_57112 = cljs.core.seq(all_idents);
var chunk__56949_57113 = null;
var count__56950_57114 = (0);
var i__56951_57115 = (0);
while(true){
if((i__56951_57115 < count__56950_57114)){
var i_57117 = chunk__56949_57113.cljs$core$IIndexed$_nth$arity$2(null,i__56951_57115);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i_57117);


var G__57118 = seq__56948_57112;
var G__57119 = chunk__56949_57113;
var G__57120 = count__56950_57114;
var G__57121 = (i__56951_57115 + (1));
seq__56948_57112 = G__57118;
chunk__56949_57113 = G__57119;
count__56950_57114 = G__57120;
i__56951_57115 = G__57121;
continue;
} else {
var temp__5753__auto___57123 = cljs.core.seq(seq__56948_57112);
if(temp__5753__auto___57123){
var seq__56948_57124__$1 = temp__5753__auto___57123;
if(cljs.core.chunked_seq_QMARK_(seq__56948_57124__$1)){
var c__4638__auto___57126 = cljs.core.chunk_first(seq__56948_57124__$1);
var G__57128 = cljs.core.chunk_rest(seq__56948_57124__$1);
var G__57129 = c__4638__auto___57126;
var G__57130 = cljs.core.count(c__4638__auto___57126);
var G__57131 = (0);
seq__56948_57112 = G__57128;
chunk__56949_57113 = G__57129;
count__56950_57114 = G__57130;
i__56951_57115 = G__57131;
continue;
} else {
var i_57132 = cljs.core.first(seq__56948_57124__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i_57132);


var G__57133 = cljs.core.next(seq__56948_57124__$1);
var G__57134 = null;
var G__57135 = (0);
var G__57136 = (0);
seq__56948_57112 = G__57133;
chunk__56949_57113 = G__57134;
count__56950_57114 = G__57135;
i__56951_57115 = G__57136;
continue;
}
} else {
}
}
break;
}

var seq__56953 = cljs.core.seq(extra_to_force);
var chunk__56954 = null;
var count__56955 = (0);
var i__56956 = (0);
while(true){
if((i__56956 < count__56955)){
var c = chunk__56954.cljs$core$IIndexed$_nth$arity$2(null,i__56956);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__57139 = seq__56953;
var G__57140 = chunk__56954;
var G__57141 = count__56955;
var G__57142 = (i__56956 + (1));
seq__56953 = G__57139;
chunk__56954 = G__57140;
count__56955 = G__57141;
i__56956 = G__57142;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56953);
if(temp__5753__auto__){
var seq__56953__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56953__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__56953__$1);
var G__57143 = cljs.core.chunk_rest(seq__56953__$1);
var G__57144 = c__4638__auto__;
var G__57145 = cljs.core.count(c__4638__auto__);
var G__57146 = (0);
seq__56953 = G__57143;
chunk__56954 = G__57144;
count__56955 = G__57145;
i__56956 = G__57146;
continue;
} else {
var c = cljs.core.first(seq__56953__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__57148 = cljs.core.next(seq__56953__$1);
var G__57149 = null;
var G__57150 = (0);
var G__57151 = (0);
seq__56953 = G__57148;
chunk__56954 = G__57149;
count__56955 = G__57150;
i__56956 = G__57151;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__56961 = arguments.length;
switch (G__56961) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,p__56966){
var map__56967 = p__56966;
var map__56967__$1 = cljs.core.__destructure_map(map__56967);
var options = map__56967__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56967__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56967__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4212__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app);
}catch (e56970){var e = e56970;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,-230522353,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
