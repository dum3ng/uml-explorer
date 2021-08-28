goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___50667 = arguments.length;
var i__4819__auto___50668 = (0);
while(true){
if((i__4819__auto___50668 < len__4818__auto___50667)){
args__4824__auto__.push((arguments[i__4819__auto___50668]));

var G__50669 = (i__4819__auto___50668 + (1));
i__4819__auto___50668 = G__50669;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50536){
var G__50537 = cljs.core.first(seq50536);
var seq50536__$1 = cljs.core.next(seq50536);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50537,seq50536__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50538 = cljs.core.seq(sources);
var chunk__50539 = null;
var count__50540 = (0);
var i__50541 = (0);
while(true){
if((i__50541 < count__50540)){
var map__50546 = chunk__50539.cljs$core$IIndexed$_nth$arity$2(null,i__50541);
var map__50546__$1 = cljs.core.__destructure_map(map__50546);
var src = map__50546__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50546__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50546__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50546__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50546__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50547){var e_50670 = e50547;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50670);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50670.message)].join('')));
}

var G__50671 = seq__50538;
var G__50672 = chunk__50539;
var G__50673 = count__50540;
var G__50674 = (i__50541 + (1));
seq__50538 = G__50671;
chunk__50539 = G__50672;
count__50540 = G__50673;
i__50541 = G__50674;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50538);
if(temp__5753__auto__){
var seq__50538__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50538__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50538__$1);
var G__50675 = cljs.core.chunk_rest(seq__50538__$1);
var G__50676 = c__4638__auto__;
var G__50677 = cljs.core.count(c__4638__auto__);
var G__50678 = (0);
seq__50538 = G__50675;
chunk__50539 = G__50676;
count__50540 = G__50677;
i__50541 = G__50678;
continue;
} else {
var map__50548 = cljs.core.first(seq__50538__$1);
var map__50548__$1 = cljs.core.__destructure_map(map__50548);
var src = map__50548__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50548__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50548__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50548__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50548__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50549){var e_50679 = e50549;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50679);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50679.message)].join('')));
}

var G__50680 = cljs.core.next(seq__50538__$1);
var G__50681 = null;
var G__50682 = (0);
var G__50683 = (0);
seq__50538 = G__50680;
chunk__50539 = G__50681;
count__50540 = G__50682;
i__50541 = G__50683;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__50550 = cljs.core.seq(js_requires);
var chunk__50551 = null;
var count__50552 = (0);
var i__50553 = (0);
while(true){
if((i__50553 < count__50552)){
var js_ns = chunk__50551.cljs$core$IIndexed$_nth$arity$2(null,i__50553);
var require_str_50684 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50684);


var G__50685 = seq__50550;
var G__50686 = chunk__50551;
var G__50687 = count__50552;
var G__50688 = (i__50553 + (1));
seq__50550 = G__50685;
chunk__50551 = G__50686;
count__50552 = G__50687;
i__50553 = G__50688;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50550);
if(temp__5753__auto__){
var seq__50550__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50550__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50550__$1);
var G__50689 = cljs.core.chunk_rest(seq__50550__$1);
var G__50690 = c__4638__auto__;
var G__50691 = cljs.core.count(c__4638__auto__);
var G__50692 = (0);
seq__50550 = G__50689;
chunk__50551 = G__50690;
count__50552 = G__50691;
i__50553 = G__50692;
continue;
} else {
var js_ns = cljs.core.first(seq__50550__$1);
var require_str_50693 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50693);


var G__50694 = cljs.core.next(seq__50550__$1);
var G__50695 = null;
var G__50696 = (0);
var G__50697 = (0);
seq__50550 = G__50694;
chunk__50551 = G__50695;
count__50552 = G__50696;
i__50553 = G__50697;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__50555){
var map__50556 = p__50555;
var map__50556__$1 = cljs.core.__destructure_map(map__50556);
var msg = map__50556__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50556__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50556__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50557(s__50558){
return (new cljs.core.LazySeq(null,(function (){
var s__50558__$1 = s__50558;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50558__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__50563 = cljs.core.first(xs__6308__auto__);
var map__50563__$1 = cljs.core.__destructure_map(map__50563);
var src = map__50563__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50563__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50563__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__50558__$1,map__50563,map__50563__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50556,map__50556__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50557_$_iter__50559(s__50560){
return (new cljs.core.LazySeq(null,((function (s__50558__$1,map__50563,map__50563__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50556,map__50556__$1,msg,info,reload_info){
return (function (){
var s__50560__$1 = s__50560;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__50560__$1);
if(temp__5753__auto____$1){
var s__50560__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50560__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__50560__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__50562 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__50561 = (0);
while(true){
if((i__50561 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__50561);
cljs.core.chunk_append(b__50562,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__50698 = (i__50561 + (1));
i__50561 = G__50698;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50562),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50557_$_iter__50559(cljs.core.chunk_rest(s__50560__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50562),null);
}
} else {
var warning = cljs.core.first(s__50560__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50557_$_iter__50559(cljs.core.rest(s__50560__$2)));
}
} else {
return null;
}
break;
}
});})(s__50558__$1,map__50563,map__50563__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50556,map__50556__$1,msg,info,reload_info))
,null,null));
});})(s__50558__$1,map__50563,map__50563__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50556,map__50556__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50557(cljs.core.rest(s__50558__$1)));
} else {
var G__50699 = cljs.core.rest(s__50558__$1);
s__50558__$1 = G__50699;
continue;
}
} else {
var G__50700 = cljs.core.rest(s__50558__$1);
s__50558__$1 = G__50700;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__50564_50701 = cljs.core.seq(warnings);
var chunk__50565_50702 = null;
var count__50566_50703 = (0);
var i__50567_50704 = (0);
while(true){
if((i__50567_50704 < count__50566_50703)){
var map__50576_50705 = chunk__50565_50702.cljs$core$IIndexed$_nth$arity$2(null,i__50567_50704);
var map__50576_50706__$1 = cljs.core.__destructure_map(map__50576_50705);
var w_50707 = map__50576_50706__$1;
var msg_50708__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50576_50706__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50576_50706__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50576_50706__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50576_50706__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50711)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50709),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50710),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50708__$1)].join(''));


var G__50712 = seq__50564_50701;
var G__50713 = chunk__50565_50702;
var G__50714 = count__50566_50703;
var G__50715 = (i__50567_50704 + (1));
seq__50564_50701 = G__50712;
chunk__50565_50702 = G__50713;
count__50566_50703 = G__50714;
i__50567_50704 = G__50715;
continue;
} else {
var temp__5753__auto___50716 = cljs.core.seq(seq__50564_50701);
if(temp__5753__auto___50716){
var seq__50564_50717__$1 = temp__5753__auto___50716;
if(cljs.core.chunked_seq_QMARK_(seq__50564_50717__$1)){
var c__4638__auto___50718 = cljs.core.chunk_first(seq__50564_50717__$1);
var G__50719 = cljs.core.chunk_rest(seq__50564_50717__$1);
var G__50720 = c__4638__auto___50718;
var G__50721 = cljs.core.count(c__4638__auto___50718);
var G__50722 = (0);
seq__50564_50701 = G__50719;
chunk__50565_50702 = G__50720;
count__50566_50703 = G__50721;
i__50567_50704 = G__50722;
continue;
} else {
var map__50577_50723 = cljs.core.first(seq__50564_50717__$1);
var map__50577_50724__$1 = cljs.core.__destructure_map(map__50577_50723);
var w_50725 = map__50577_50724__$1;
var msg_50726__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50577_50724__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50577_50724__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50577_50724__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50577_50724__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50729)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50727),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50728),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50726__$1)].join(''));


var G__50730 = cljs.core.next(seq__50564_50717__$1);
var G__50731 = null;
var G__50732 = (0);
var G__50733 = (0);
seq__50564_50701 = G__50730;
chunk__50565_50702 = G__50731;
count__50566_50703 = G__50732;
i__50567_50704 = G__50733;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__50554_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50554_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__50581){
var map__50582 = p__50581;
var map__50582__$1 = cljs.core.__destructure_map(map__50582);
var msg = map__50582__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50582__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__50583 = cljs.core.seq(updates);
var chunk__50585 = null;
var count__50586 = (0);
var i__50587 = (0);
while(true){
if((i__50587 < count__50586)){
var path = chunk__50585.cljs$core$IIndexed$_nth$arity$2(null,i__50587);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50617_50734 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50621_50735 = null;
var count__50622_50736 = (0);
var i__50623_50737 = (0);
while(true){
if((i__50623_50737 < count__50622_50736)){
var node_50738 = chunk__50621_50735.cljs$core$IIndexed$_nth$arity$2(null,i__50623_50737);
if(cljs.core.not(node_50738.shadow$old)){
var path_match_50739 = shadow.cljs.devtools.client.browser.match_paths(node_50738.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50739)){
var new_link_50740 = (function (){var G__50629 = node_50738.cloneNode(true);
G__50629.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50739),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50629;
})();
(node_50738.shadow$old = true);

(new_link_50740.onload = ((function (seq__50617_50734,chunk__50621_50735,count__50622_50736,i__50623_50737,seq__50583,chunk__50585,count__50586,i__50587,new_link_50740,path_match_50739,node_50738,path,map__50582,map__50582__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50738);
});})(seq__50617_50734,chunk__50621_50735,count__50622_50736,i__50623_50737,seq__50583,chunk__50585,count__50586,i__50587,new_link_50740,path_match_50739,node_50738,path,map__50582,map__50582__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50739], 0));

goog.dom.insertSiblingAfter(new_link_50740,node_50738);


var G__50741 = seq__50617_50734;
var G__50742 = chunk__50621_50735;
var G__50743 = count__50622_50736;
var G__50744 = (i__50623_50737 + (1));
seq__50617_50734 = G__50741;
chunk__50621_50735 = G__50742;
count__50622_50736 = G__50743;
i__50623_50737 = G__50744;
continue;
} else {
var G__50745 = seq__50617_50734;
var G__50746 = chunk__50621_50735;
var G__50747 = count__50622_50736;
var G__50748 = (i__50623_50737 + (1));
seq__50617_50734 = G__50745;
chunk__50621_50735 = G__50746;
count__50622_50736 = G__50747;
i__50623_50737 = G__50748;
continue;
}
} else {
var G__50749 = seq__50617_50734;
var G__50750 = chunk__50621_50735;
var G__50751 = count__50622_50736;
var G__50752 = (i__50623_50737 + (1));
seq__50617_50734 = G__50749;
chunk__50621_50735 = G__50750;
count__50622_50736 = G__50751;
i__50623_50737 = G__50752;
continue;
}
} else {
var temp__5753__auto___50753 = cljs.core.seq(seq__50617_50734);
if(temp__5753__auto___50753){
var seq__50617_50754__$1 = temp__5753__auto___50753;
if(cljs.core.chunked_seq_QMARK_(seq__50617_50754__$1)){
var c__4638__auto___50755 = cljs.core.chunk_first(seq__50617_50754__$1);
var G__50756 = cljs.core.chunk_rest(seq__50617_50754__$1);
var G__50757 = c__4638__auto___50755;
var G__50758 = cljs.core.count(c__4638__auto___50755);
var G__50759 = (0);
seq__50617_50734 = G__50756;
chunk__50621_50735 = G__50757;
count__50622_50736 = G__50758;
i__50623_50737 = G__50759;
continue;
} else {
var node_50760 = cljs.core.first(seq__50617_50754__$1);
if(cljs.core.not(node_50760.shadow$old)){
var path_match_50761 = shadow.cljs.devtools.client.browser.match_paths(node_50760.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50761)){
var new_link_50762 = (function (){var G__50630 = node_50760.cloneNode(true);
G__50630.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50761),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50630;
})();
(node_50760.shadow$old = true);

(new_link_50762.onload = ((function (seq__50617_50734,chunk__50621_50735,count__50622_50736,i__50623_50737,seq__50583,chunk__50585,count__50586,i__50587,new_link_50762,path_match_50761,node_50760,seq__50617_50754__$1,temp__5753__auto___50753,path,map__50582,map__50582__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50760);
});})(seq__50617_50734,chunk__50621_50735,count__50622_50736,i__50623_50737,seq__50583,chunk__50585,count__50586,i__50587,new_link_50762,path_match_50761,node_50760,seq__50617_50754__$1,temp__5753__auto___50753,path,map__50582,map__50582__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50761], 0));

goog.dom.insertSiblingAfter(new_link_50762,node_50760);


var G__50763 = cljs.core.next(seq__50617_50754__$1);
var G__50764 = null;
var G__50765 = (0);
var G__50766 = (0);
seq__50617_50734 = G__50763;
chunk__50621_50735 = G__50764;
count__50622_50736 = G__50765;
i__50623_50737 = G__50766;
continue;
} else {
var G__50767 = cljs.core.next(seq__50617_50754__$1);
var G__50768 = null;
var G__50769 = (0);
var G__50770 = (0);
seq__50617_50734 = G__50767;
chunk__50621_50735 = G__50768;
count__50622_50736 = G__50769;
i__50623_50737 = G__50770;
continue;
}
} else {
var G__50771 = cljs.core.next(seq__50617_50754__$1);
var G__50772 = null;
var G__50773 = (0);
var G__50774 = (0);
seq__50617_50734 = G__50771;
chunk__50621_50735 = G__50772;
count__50622_50736 = G__50773;
i__50623_50737 = G__50774;
continue;
}
}
} else {
}
}
break;
}


var G__50775 = seq__50583;
var G__50776 = chunk__50585;
var G__50777 = count__50586;
var G__50778 = (i__50587 + (1));
seq__50583 = G__50775;
chunk__50585 = G__50776;
count__50586 = G__50777;
i__50587 = G__50778;
continue;
} else {
var G__50779 = seq__50583;
var G__50780 = chunk__50585;
var G__50781 = count__50586;
var G__50782 = (i__50587 + (1));
seq__50583 = G__50779;
chunk__50585 = G__50780;
count__50586 = G__50781;
i__50587 = G__50782;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50583);
if(temp__5753__auto__){
var seq__50583__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50583__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50583__$1);
var G__50783 = cljs.core.chunk_rest(seq__50583__$1);
var G__50784 = c__4638__auto__;
var G__50785 = cljs.core.count(c__4638__auto__);
var G__50786 = (0);
seq__50583 = G__50783;
chunk__50585 = G__50784;
count__50586 = G__50785;
i__50587 = G__50786;
continue;
} else {
var path = cljs.core.first(seq__50583__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50631_50787 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50635_50788 = null;
var count__50636_50789 = (0);
var i__50637_50790 = (0);
while(true){
if((i__50637_50790 < count__50636_50789)){
var node_50791 = chunk__50635_50788.cljs$core$IIndexed$_nth$arity$2(null,i__50637_50790);
if(cljs.core.not(node_50791.shadow$old)){
var path_match_50792 = shadow.cljs.devtools.client.browser.match_paths(node_50791.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50792)){
var new_link_50793 = (function (){var G__50643 = node_50791.cloneNode(true);
G__50643.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50792),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50643;
})();
(node_50791.shadow$old = true);

(new_link_50793.onload = ((function (seq__50631_50787,chunk__50635_50788,count__50636_50789,i__50637_50790,seq__50583,chunk__50585,count__50586,i__50587,new_link_50793,path_match_50792,node_50791,path,seq__50583__$1,temp__5753__auto__,map__50582,map__50582__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50791);
});})(seq__50631_50787,chunk__50635_50788,count__50636_50789,i__50637_50790,seq__50583,chunk__50585,count__50586,i__50587,new_link_50793,path_match_50792,node_50791,path,seq__50583__$1,temp__5753__auto__,map__50582,map__50582__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50792], 0));

goog.dom.insertSiblingAfter(new_link_50793,node_50791);


var G__50794 = seq__50631_50787;
var G__50795 = chunk__50635_50788;
var G__50796 = count__50636_50789;
var G__50797 = (i__50637_50790 + (1));
seq__50631_50787 = G__50794;
chunk__50635_50788 = G__50795;
count__50636_50789 = G__50796;
i__50637_50790 = G__50797;
continue;
} else {
var G__50798 = seq__50631_50787;
var G__50799 = chunk__50635_50788;
var G__50800 = count__50636_50789;
var G__50801 = (i__50637_50790 + (1));
seq__50631_50787 = G__50798;
chunk__50635_50788 = G__50799;
count__50636_50789 = G__50800;
i__50637_50790 = G__50801;
continue;
}
} else {
var G__50802 = seq__50631_50787;
var G__50803 = chunk__50635_50788;
var G__50804 = count__50636_50789;
var G__50805 = (i__50637_50790 + (1));
seq__50631_50787 = G__50802;
chunk__50635_50788 = G__50803;
count__50636_50789 = G__50804;
i__50637_50790 = G__50805;
continue;
}
} else {
var temp__5753__auto___50806__$1 = cljs.core.seq(seq__50631_50787);
if(temp__5753__auto___50806__$1){
var seq__50631_50807__$1 = temp__5753__auto___50806__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50631_50807__$1)){
var c__4638__auto___50808 = cljs.core.chunk_first(seq__50631_50807__$1);
var G__50809 = cljs.core.chunk_rest(seq__50631_50807__$1);
var G__50810 = c__4638__auto___50808;
var G__50811 = cljs.core.count(c__4638__auto___50808);
var G__50812 = (0);
seq__50631_50787 = G__50809;
chunk__50635_50788 = G__50810;
count__50636_50789 = G__50811;
i__50637_50790 = G__50812;
continue;
} else {
var node_50813 = cljs.core.first(seq__50631_50807__$1);
if(cljs.core.not(node_50813.shadow$old)){
var path_match_50814 = shadow.cljs.devtools.client.browser.match_paths(node_50813.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50814)){
var new_link_50815 = (function (){var G__50644 = node_50813.cloneNode(true);
G__50644.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50814),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50644;
})();
(node_50813.shadow$old = true);

(new_link_50815.onload = ((function (seq__50631_50787,chunk__50635_50788,count__50636_50789,i__50637_50790,seq__50583,chunk__50585,count__50586,i__50587,new_link_50815,path_match_50814,node_50813,seq__50631_50807__$1,temp__5753__auto___50806__$1,path,seq__50583__$1,temp__5753__auto__,map__50582,map__50582__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50813);
});})(seq__50631_50787,chunk__50635_50788,count__50636_50789,i__50637_50790,seq__50583,chunk__50585,count__50586,i__50587,new_link_50815,path_match_50814,node_50813,seq__50631_50807__$1,temp__5753__auto___50806__$1,path,seq__50583__$1,temp__5753__auto__,map__50582,map__50582__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50814], 0));

goog.dom.insertSiblingAfter(new_link_50815,node_50813);


var G__50816 = cljs.core.next(seq__50631_50807__$1);
var G__50817 = null;
var G__50818 = (0);
var G__50819 = (0);
seq__50631_50787 = G__50816;
chunk__50635_50788 = G__50817;
count__50636_50789 = G__50818;
i__50637_50790 = G__50819;
continue;
} else {
var G__50820 = cljs.core.next(seq__50631_50807__$1);
var G__50821 = null;
var G__50822 = (0);
var G__50823 = (0);
seq__50631_50787 = G__50820;
chunk__50635_50788 = G__50821;
count__50636_50789 = G__50822;
i__50637_50790 = G__50823;
continue;
}
} else {
var G__50824 = cljs.core.next(seq__50631_50807__$1);
var G__50825 = null;
var G__50826 = (0);
var G__50827 = (0);
seq__50631_50787 = G__50824;
chunk__50635_50788 = G__50825;
count__50636_50789 = G__50826;
i__50637_50790 = G__50827;
continue;
}
}
} else {
}
}
break;
}


var G__50828 = cljs.core.next(seq__50583__$1);
var G__50829 = null;
var G__50830 = (0);
var G__50831 = (0);
seq__50583 = G__50828;
chunk__50585 = G__50829;
count__50586 = G__50830;
i__50587 = G__50831;
continue;
} else {
var G__50832 = cljs.core.next(seq__50583__$1);
var G__50833 = null;
var G__50834 = (0);
var G__50835 = (0);
seq__50583 = G__50832;
chunk__50585 = G__50833;
count__50586 = G__50834;
i__50587 = G__50835;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__50645){
var map__50646 = p__50645;
var map__50646__$1 = cljs.core.__destructure_map(map__50646);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50646__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__50647){
var map__50648 = p__50647;
var map__50648__$1 = cljs.core.__destructure_map(map__50648);
var _ = map__50648__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50648__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__50649,done,error){
var map__50650 = p__50649;
var map__50650__$1 = cljs.core.__destructure_map(map__50650);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50650__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__50651,done,error){
var map__50652 = p__50651;
var map__50652__$1 = cljs.core.__destructure_map(map__50652);
var msg = map__50652__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50652__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50652__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50652__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50653){
var map__50654 = p__50653;
var map__50654__$1 = cljs.core.__destructure_map(map__50654);
var src = map__50654__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50654__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__50655 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__50655) : done.call(null,G__50655));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__50656){
var map__50657 = p__50656;
var map__50657__$1 = cljs.core.__destructure_map(map__50657);
var msg__$1 = map__50657__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50657__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e50658){var ex = e50658;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__50659){
var map__50660 = p__50659;
var map__50660__$1 = cljs.core.__destructure_map(map__50660);
var env = map__50660__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50660__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__50661){
var map__50662 = p__50661;
var map__50662__$1 = cljs.core.__destructure_map(map__50662);
var msg = map__50662__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50662__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__50663){
var map__50664 = p__50663;
var map__50664__$1 = cljs.core.__destructure_map(map__50664);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50664__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50664__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__50665){
var map__50666 = p__50665;
var map__50666__$1 = cljs.core.__destructure_map(map__50666);
var svc = map__50666__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50666__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
