goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__45049,res){
var map__45050 = p__45049;
var map__45050__$1 = cljs.core.__destructure_map(map__45050);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45050__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45050__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__45056 = res;
var G__45056__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45056,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__45056);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45056__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__45056__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__45063 = arguments.length;
switch (G__45063) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__45070,msg,handlers,timeout_after_ms){
var map__45072 = p__45070;
var map__45072__$1 = cljs.core.__destructure_map(map__45072);
var runtime = map__45072__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45072__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___45250 = arguments.length;
var i__4819__auto___45251 = (0);
while(true){
if((i__4819__auto___45251 < len__4818__auto___45250)){
args__4824__auto__.push((arguments[i__4819__auto___45251]));

var G__45252 = (i__4819__auto___45251 + (1));
i__4819__auto___45251 = G__45252;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__45125,ev,args){
var map__45126 = p__45125;
var map__45126__$1 = cljs.core.__destructure_map(map__45126);
var runtime = map__45126__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45126__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__45127 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__45130 = null;
var count__45131 = (0);
var i__45132 = (0);
while(true){
if((i__45132 < count__45131)){
var ext = chunk__45130.cljs$core$IIndexed$_nth$arity$2(null,i__45132);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__45257 = seq__45127;
var G__45258 = chunk__45130;
var G__45259 = count__45131;
var G__45260 = (i__45132 + (1));
seq__45127 = G__45257;
chunk__45130 = G__45258;
count__45131 = G__45259;
i__45132 = G__45260;
continue;
} else {
var G__45261 = seq__45127;
var G__45262 = chunk__45130;
var G__45263 = count__45131;
var G__45264 = (i__45132 + (1));
seq__45127 = G__45261;
chunk__45130 = G__45262;
count__45131 = G__45263;
i__45132 = G__45264;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45127);
if(temp__5753__auto__){
var seq__45127__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45127__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45127__$1);
var G__45265 = cljs.core.chunk_rest(seq__45127__$1);
var G__45266 = c__4638__auto__;
var G__45267 = cljs.core.count(c__4638__auto__);
var G__45268 = (0);
seq__45127 = G__45265;
chunk__45130 = G__45266;
count__45131 = G__45267;
i__45132 = G__45268;
continue;
} else {
var ext = cljs.core.first(seq__45127__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__45269 = cljs.core.next(seq__45127__$1);
var G__45270 = null;
var G__45271 = (0);
var G__45272 = (0);
seq__45127 = G__45269;
chunk__45130 = G__45270;
count__45131 = G__45271;
i__45132 = G__45272;
continue;
} else {
var G__45273 = cljs.core.next(seq__45127__$1);
var G__45274 = null;
var G__45275 = (0);
var G__45276 = (0);
seq__45127 = G__45273;
chunk__45130 = G__45274;
count__45131 = G__45275;
i__45132 = G__45276;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq45091){
var G__45092 = cljs.core.first(seq45091);
var seq45091__$1 = cljs.core.next(seq45091);
var G__45093 = cljs.core.first(seq45091__$1);
var seq45091__$2 = cljs.core.next(seq45091__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45092,G__45093,seq45091__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__45175,p__45176){
var map__45177 = p__45175;
var map__45177__$1 = cljs.core.__destructure_map(map__45177);
var runtime = map__45177__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45177__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__45178 = p__45176;
var map__45178__$1 = cljs.core.__destructure_map(map__45178);
var msg = map__45178__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45178__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__45179 = cljs.core.deref(state_ref);
var map__45179__$1 = cljs.core.__destructure_map(map__45179);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45179__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45179__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__45186){
var map__45187 = p__45186;
var map__45187__$1 = cljs.core.__destructure_map(map__45187);
var runtime = map__45187__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45187__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__45193,msg){
var map__45194 = p__45193;
var map__45194__$1 = cljs.core.__destructure_map(map__45194);
var runtime = map__45194__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45194__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__45205,key,p__45206){
var map__45207 = p__45205;
var map__45207__$1 = cljs.core.__destructure_map(map__45207);
var state = map__45207__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45207__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__45208 = p__45206;
var map__45208__$1 = cljs.core.__destructure_map(map__45208);
var spec = map__45208__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45208__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__45209,key,spec){
var map__45210 = p__45209;
var map__45210__$1 = cljs.core.__destructure_map(map__45210);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45210__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__45211_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__45211_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__45212_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__45212_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__45213_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__45213_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__45214_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__45214_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__45215_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__45215_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__45222,key){
var map__45223 = p__45222;
var map__45223__$1 = cljs.core.__destructure_map(map__45223);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45223__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__45224,msg){
var map__45225 = p__45224;
var map__45225__$1 = cljs.core.__destructure_map(map__45225);
var runtime = map__45225__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45225__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__45226,p__45227){
var map__45228 = p__45226;
var map__45228__$1 = cljs.core.__destructure_map(map__45228);
var runtime = map__45228__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45228__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__45229 = p__45227;
var map__45229__$1 = cljs.core.__destructure_map(map__45229);
var msg = map__45229__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45229__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45229__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__45230 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__45233 = null;
var count__45234 = (0);
var i__45235 = (0);
while(true){
if((i__45235 < count__45234)){
var map__45243 = chunk__45233.cljs$core$IIndexed$_nth$arity$2(null,i__45235);
var map__45243__$1 = cljs.core.__destructure_map(map__45243);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45243__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__45286 = seq__45230;
var G__45287 = chunk__45233;
var G__45288 = count__45234;
var G__45289 = (i__45235 + (1));
seq__45230 = G__45286;
chunk__45233 = G__45287;
count__45234 = G__45288;
i__45235 = G__45289;
continue;
} else {
var G__45290 = seq__45230;
var G__45291 = chunk__45233;
var G__45292 = count__45234;
var G__45293 = (i__45235 + (1));
seq__45230 = G__45290;
chunk__45233 = G__45291;
count__45234 = G__45292;
i__45235 = G__45293;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45230);
if(temp__5753__auto__){
var seq__45230__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45230__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45230__$1);
var G__45294 = cljs.core.chunk_rest(seq__45230__$1);
var G__45295 = c__4638__auto__;
var G__45296 = cljs.core.count(c__4638__auto__);
var G__45297 = (0);
seq__45230 = G__45294;
chunk__45233 = G__45295;
count__45234 = G__45296;
i__45235 = G__45297;
continue;
} else {
var map__45244 = cljs.core.first(seq__45230__$1);
var map__45244__$1 = cljs.core.__destructure_map(map__45244);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45244__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__45302 = cljs.core.next(seq__45230__$1);
var G__45303 = null;
var G__45304 = (0);
var G__45305 = (0);
seq__45230 = G__45302;
chunk__45233 = G__45303;
count__45234 = G__45304;
i__45235 = G__45305;
continue;
} else {
var G__45306 = cljs.core.next(seq__45230__$1);
var G__45307 = null;
var G__45308 = (0);
var G__45309 = (0);
seq__45230 = G__45306;
chunk__45233 = G__45307;
count__45234 = G__45308;
i__45235 = G__45309;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
