goog.provide('oops.messages');
oops.messages.post_process_message = (function oops$messages$post_process_message(msg){
return ["Oops",", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('');
});
if((typeof oops !== 'undefined') && (typeof oops.messages !== 'undefined') && (typeof oops.messages.runtime_message !== 'undefined')){
} else {
oops.messages.runtime_message = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__54213 = cljs.core.get_global_hierarchy;
return (fexpr__54213.cljs$core$IFn$_invoke$arity$0 ? fexpr__54213.cljs$core$IFn$_invoke$arity$0() : fexpr__54213.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("oops.messages","runtime-message"),(function() { 
var G__54269__delegate = function (type,_){
return type;
};
var G__54269 = function (type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__54270__i = 0, G__54270__a = new Array(arguments.length -  1);
while (G__54270__i < G__54270__a.length) {G__54270__a[G__54270__i] = arguments[G__54270__i + 1]; ++G__54270__i;}
  _ = new cljs.core.IndexedSeq(G__54270__a,0,null);
} 
return G__54269__delegate.call(this,type,_);};
G__54269.cljs$lang$maxFixedArity = 1;
G__54269.cljs$lang$applyTo = (function (arglist__54273){
var type = cljs.core.first(arglist__54273);
var _ = cljs.core.rest(arglist__54273);
return G__54269__delegate(type,_);
});
G__54269.cljs$core$IFn$_invoke$arity$variadic = G__54269__delegate;
return G__54269;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),(function (_type,info){
var map__54220 = info;
var map__54220__$1 = cljs.core.__destructure_map(map__54220);
var flavor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54220__$1,new cljs.core.Keyword(null,"flavor","flavor",-1331636636));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54220__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return oops.messages.post_process_message.call(null,["Unexpected object value (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(flavor),")",((cljs.core.empty_QMARK_(path))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''))].join(''));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),(function (_type,info){
var map__54222 = info;
var map__54222__$1 = cljs.core.__destructure_map(map__54222);
var soft_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54222__$1,new cljs.core.Keyword(null,"soft?","soft?",-1339668477));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54222__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54222__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return oops.messages.post_process_message.call(null,["Expected a function",(cljs.core.truth_(soft_QMARK_)?" or nil":null),((cljs.core.empty_QMARK_(path))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')),", got <",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.typeOf(fn)),"> instead"].join(''));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),(function (_type,info){
var map__54229 = info;
var map__54229__$1 = cljs.core.__destructure_map(map__54229);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54229__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54229__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return oops.messages.post_process_message.call(null,["Missing expected object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",((((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''))].join(''));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),(function (_type,info){
var map__54234 = info;
var map__54234__$1 = cljs.core.__destructure_map(map__54234);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54234__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54234__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var frozen_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54234__$1,new cljs.core.Keyword(null,"frozen?","frozen?",613726824));
return oops.messages.post_process_message.call(null,["Object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"' is not writable",((((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')),(cljs.core.truth_(frozen_QMARK_)?" because the object is frozen":null)].join(''));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),(function (_type,info){
var map__54242 = info;
var map__54242__$1 = cljs.core.__destructure_map(map__54242);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54242__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54242__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return oops.messages.post_process_message.call(null,["Cannot create object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",((((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''))," because the object is sealed"].join(''));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),(function (_type,info){
var map__54250 = info;
var map__54250__$1 = cljs.core.__destructure_map(map__54250);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54250__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54250__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return oops.messages.post_process_message.call(null,["Cannot create object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",((((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''))," because the object is frozen"].join(''));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),(function (_type){
return oops.messages.post_process_message.call(null,"Invalid selector");
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"unexpected-empty-selector","unexpected-empty-selector",-572791900),(function (_type){
return oops.messages.post_process_message.call(null,"Unexpected empty selector");
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"unexpected-punching-selector","unexpected-punching-selector",-1934135338),(function (_type){
return oops.messages.post_process_message.call(null,"Unexpected punching selector (\"!\" makes sense only with oset!)");
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"unexpected-soft-selector","unexpected-soft-selector",-1117708580),(function (_type){
return oops.messages.post_process_message.call(null,"Unexpected soft selector (\"?\" does not make sense with oset!)");
}));

//# sourceMappingURL=oops.messages.js.map