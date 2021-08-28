goog.provide('ue.data');
ue.data.tid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
ue.data.gen_datoms = (function ue$data$gen_datoms(data,owner_id){
var datoms = cljs.core.PersistentVector.EMPTY;
var i = (0);
while(true){
if((i < cljs.core.count(data))){
var entries = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,data);
var entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(entries,i);
var vec__52022 = entry;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52022,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52022,(1),null);
if(clojure.string.starts_with_QMARK_(cljs.core.name(k),ue.constants.attr_prefix)){
var G__52039 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(datoms,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("db","id","db/id",-1388397098),owner_id,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k),((ue.constants.attr_prefix).length))),v]));
var G__52040 = (i + (1));
datoms = G__52039;
i = G__52040;
continue;
} else {
if(cljs.core.vector_QMARK_(v)){
var children = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (datoms,i,entries,entry,vec__52022,k,v){
return (function (p1__52016_SHARP_){
var G__52025 = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,p1__52016_SHARP_]);
var G__52026 = owner_id;
return (ue.data.gen_datoms.cljs$core$IFn$_invoke$arity$2 ? ue.data.gen_datoms.cljs$core$IFn$_invoke$arity$2(G__52025,G__52026) : ue.data.gen_datoms.call(null,G__52025,G__52026));
});})(datoms,i,entries,entry,vec__52022,k,v))
,v);
var cds = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,children);
var G__52041 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datoms,cds));
var G__52042 = (i + (1));
datoms = G__52041;
i = G__52042;
continue;
} else {
var eid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ue.data.tid,cljs.core.dec);
var entity = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid,new cljs.core.Keyword("entity","type","entity/type",-1331966609),k], null);
var entity__$1 = (((owner_id == null))?entity:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword(null,"owner","owner",-392611939),owner_id));
if(typeof v === 'string'){
var G__52043 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(datoms,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity__$1,new cljs.core.Keyword(null,"text","text",-1790561697),v));
var G__52044 = (i + (1));
datoms = G__52043;
i = G__52044;
continue;
} else {
var G__52045 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(datoms,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity__$1], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(ue.data.gen_datoms.cljs$core$IFn$_invoke$arity$2 ? ue.data.gen_datoms.cljs$core$IFn$_invoke$arity$2(v,eid) : ue.data.gen_datoms.call(null,v,eid))], 0)));
var G__52046 = (i + (1));
datoms = G__52045;
i = G__52046;
continue;
}
}
}
} else {
return datoms;
}
break;
}
});
ue.data.prepare_db_BANG_ = (function ue$data$prepare_db_BANG_(data){
var m = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var xmi = cljs.core.select_keys(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xmi:XMI","xmi:XMI",-1910163376)], null));
var datoms = ue.data.gen_datoms(xmi,null);
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(ue.data._STAR_conn_STAR_,datoms);
});
ue.data.q = (function ue$data$q(var_args){
var G__52030 = arguments.length;
switch (G__52030) {
case 1:
return ue.data.q.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___52048 = arguments.length;
var i__4819__auto___52049 = (0);
while(true){
if((i__4819__auto___52049 < len__4818__auto___52048)){
args_arr__4839__auto__.push((arguments[i__4819__auto___52049]));

var G__52050 = (i__4819__auto___52049 + (1));
i__4819__auto___52049 = G__52050;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((1)),(0),null));
return ue.data.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4840__auto__);

}
});

(ue.data.q.cljs$core$IFn$_invoke$arity$1 = (function (query){
var G__52031 = query;
var G__52032 = cljs.core.deref(ue.data._STAR_conn_STAR_);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__52031,G__52032) : datascript.core.q.call(null,G__52031,G__52032));
}));

(ue.data.q.cljs$core$IFn$_invoke$arity$variadic = (function (query,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.core.q,query,cljs.core.deref(ue.data._STAR_conn_STAR_),args);
}));

/** @this {Function} */
(ue.data.q.cljs$lang$applyTo = (function (seq52028){
var G__52029 = cljs.core.first(seq52028);
var seq52028__$1 = cljs.core.next(seq52028);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52029,seq52028__$1);
}));

(ue.data.q.cljs$lang$maxFixedArity = (1));

ue.data.pull = (function ue$data$pull(pattern,id){
var G__52033 = cljs.core.deref(ue.data._STAR_conn_STAR_);
var G__52034 = pattern;
var G__52035 = id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__52033,G__52034,G__52035) : datascript.core.pull.call(null,G__52033,G__52034,G__52035));
});
ue.data.pull_many = (function ue$data$pull_many(pattern,ids){
var G__52036 = cljs.core.deref(ue.data._STAR_conn_STAR_);
var G__52037 = pattern;
var G__52038 = ids;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__52036,G__52037,G__52038) : datascript.core.pull.call(null,G__52036,G__52037,G__52038));
});
ue.data.clear_db_BANG_ = (function ue$data$clear_db_BANG_(new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(ue.data._STAR_conn_STAR_,new_db);
});

//# sourceMappingURL=ue.data.js.map
