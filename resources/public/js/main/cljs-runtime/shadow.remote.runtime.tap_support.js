goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__46646,p__46647){
var map__46648 = p__46646;
var map__46648__$1 = cljs.core.__destructure_map(map__46648);
var svc = map__46648__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46648__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46648__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46648__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__46649 = p__46647;
var map__46649__$1 = cljs.core.__destructure_map(map__46649);
var msg = map__46649__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46649__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46649__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46649__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46649__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__46654,p__46655){
var map__46658 = p__46654;
var map__46658__$1 = cljs.core.__destructure_map(map__46658);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46658__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__46659 = p__46655;
var map__46659__$1 = cljs.core.__destructure_map(map__46659);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46659__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__46662,p__46663){
var map__46665 = p__46662;
var map__46665__$1 = cljs.core.__destructure_map(map__46665);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46665__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46665__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__46666 = p__46663;
var map__46666__$1 = cljs.core.__destructure_map(map__46666);
var msg = map__46666__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46666__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__46669,tid){
var map__46670 = p__46669;
var map__46670__$1 = cljs.core.__destructure_map(map__46670);
var svc = map__46670__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46670__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__46680 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__46681 = null;
var count__46682 = (0);
var i__46683 = (0);
while(true){
if((i__46683 < count__46682)){
var vec__46694 = chunk__46681.cljs$core$IIndexed$_nth$arity$2(null,i__46683);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46694,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46694,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__46708 = seq__46680;
var G__46709 = chunk__46681;
var G__46710 = count__46682;
var G__46711 = (i__46683 + (1));
seq__46680 = G__46708;
chunk__46681 = G__46709;
count__46682 = G__46710;
i__46683 = G__46711;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46680);
if(temp__5753__auto__){
var seq__46680__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46680__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__46680__$1);
var G__46712 = cljs.core.chunk_rest(seq__46680__$1);
var G__46713 = c__4638__auto__;
var G__46714 = cljs.core.count(c__4638__auto__);
var G__46715 = (0);
seq__46680 = G__46712;
chunk__46681 = G__46713;
count__46682 = G__46714;
i__46683 = G__46715;
continue;
} else {
var vec__46697 = cljs.core.first(seq__46680__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46697,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46697,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__46716 = cljs.core.next(seq__46680__$1);
var G__46717 = null;
var G__46718 = (0);
var G__46719 = (0);
seq__46680 = G__46716;
chunk__46681 = G__46717;
count__46682 = G__46718;
i__46683 = G__46719;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__46671_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__46671_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__46672_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__46672_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__46673_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__46673_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__46674_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__46674_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__46703){
var map__46704 = p__46703;
var map__46704__$1 = cljs.core.__destructure_map(map__46704);
var svc = map__46704__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46704__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46704__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
