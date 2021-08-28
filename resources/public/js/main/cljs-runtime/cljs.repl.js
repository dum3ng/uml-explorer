goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__44784){
var map__44785 = p__44784;
var map__44785__$1 = cljs.core.__destructure_map(map__44785);
var m = map__44785__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44785__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44785__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44790_45066 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44791_45067 = null;
var count__44792_45068 = (0);
var i__44793_45069 = (0);
while(true){
if((i__44793_45069 < count__44792_45068)){
var f_45073 = chunk__44791_45067.cljs$core$IIndexed$_nth$arity$2(null,i__44793_45069);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45073], 0));


var G__45074 = seq__44790_45066;
var G__45075 = chunk__44791_45067;
var G__45076 = count__44792_45068;
var G__45077 = (i__44793_45069 + (1));
seq__44790_45066 = G__45074;
chunk__44791_45067 = G__45075;
count__44792_45068 = G__45076;
i__44793_45069 = G__45077;
continue;
} else {
var temp__5753__auto___45078 = cljs.core.seq(seq__44790_45066);
if(temp__5753__auto___45078){
var seq__44790_45079__$1 = temp__5753__auto___45078;
if(cljs.core.chunked_seq_QMARK_(seq__44790_45079__$1)){
var c__4638__auto___45080 = cljs.core.chunk_first(seq__44790_45079__$1);
var G__45081 = cljs.core.chunk_rest(seq__44790_45079__$1);
var G__45082 = c__4638__auto___45080;
var G__45083 = cljs.core.count(c__4638__auto___45080);
var G__45084 = (0);
seq__44790_45066 = G__45081;
chunk__44791_45067 = G__45082;
count__44792_45068 = G__45083;
i__44793_45069 = G__45084;
continue;
} else {
var f_45085 = cljs.core.first(seq__44790_45079__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45085], 0));


var G__45086 = cljs.core.next(seq__44790_45079__$1);
var G__45087 = null;
var G__45088 = (0);
var G__45089 = (0);
seq__44790_45066 = G__45086;
chunk__44791_45067 = G__45087;
count__44792_45068 = G__45088;
i__44793_45069 = G__45089;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45090 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45090], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45090)))?cljs.core.second(arglists_45090):arglists_45090)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44803_45094 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44804_45095 = null;
var count__44805_45096 = (0);
var i__44806_45097 = (0);
while(true){
if((i__44806_45097 < count__44805_45096)){
var vec__44827_45098 = chunk__44804_45095.cljs$core$IIndexed$_nth$arity$2(null,i__44806_45097);
var name_45099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44827_45098,(0),null);
var map__44830_45100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44827_45098,(1),null);
var map__44830_45101__$1 = cljs.core.__destructure_map(map__44830_45100);
var doc_45102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44830_45101__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44830_45101__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45099], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45103], 0));

if(cljs.core.truth_(doc_45102)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45102], 0));
} else {
}


var G__45105 = seq__44803_45094;
var G__45106 = chunk__44804_45095;
var G__45107 = count__44805_45096;
var G__45108 = (i__44806_45097 + (1));
seq__44803_45094 = G__45105;
chunk__44804_45095 = G__45106;
count__44805_45096 = G__45107;
i__44806_45097 = G__45108;
continue;
} else {
var temp__5753__auto___45109 = cljs.core.seq(seq__44803_45094);
if(temp__5753__auto___45109){
var seq__44803_45113__$1 = temp__5753__auto___45109;
if(cljs.core.chunked_seq_QMARK_(seq__44803_45113__$1)){
var c__4638__auto___45114 = cljs.core.chunk_first(seq__44803_45113__$1);
var G__45115 = cljs.core.chunk_rest(seq__44803_45113__$1);
var G__45116 = c__4638__auto___45114;
var G__45117 = cljs.core.count(c__4638__auto___45114);
var G__45118 = (0);
seq__44803_45094 = G__45115;
chunk__44804_45095 = G__45116;
count__44805_45096 = G__45117;
i__44806_45097 = G__45118;
continue;
} else {
var vec__44839_45119 = cljs.core.first(seq__44803_45113__$1);
var name_45120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44839_45119,(0),null);
var map__44842_45121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44839_45119,(1),null);
var map__44842_45122__$1 = cljs.core.__destructure_map(map__44842_45121);
var doc_45123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44842_45122__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44842_45122__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45120], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45124], 0));

if(cljs.core.truth_(doc_45123)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45123], 0));
} else {
}


var G__45135 = cljs.core.next(seq__44803_45113__$1);
var G__45136 = null;
var G__45137 = (0);
var G__45138 = (0);
seq__44803_45094 = G__45135;
chunk__44804_45095 = G__45136;
count__44805_45096 = G__45137;
i__44806_45097 = G__45138;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__44846 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__44848 = null;
var count__44849 = (0);
var i__44850 = (0);
while(true){
if((i__44850 < count__44849)){
var role = chunk__44848.cljs$core$IIndexed$_nth$arity$2(null,i__44850);
var temp__5753__auto___45143__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___45143__$1)){
var spec_45144 = temp__5753__auto___45143__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45144)], 0));
} else {
}


var G__45145 = seq__44846;
var G__45146 = chunk__44848;
var G__45147 = count__44849;
var G__45148 = (i__44850 + (1));
seq__44846 = G__45145;
chunk__44848 = G__45146;
count__44849 = G__45147;
i__44850 = G__45148;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__44846);
if(temp__5753__auto____$1){
var seq__44846__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__44846__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__44846__$1);
var G__45149 = cljs.core.chunk_rest(seq__44846__$1);
var G__45150 = c__4638__auto__;
var G__45151 = cljs.core.count(c__4638__auto__);
var G__45152 = (0);
seq__44846 = G__45149;
chunk__44848 = G__45150;
count__44849 = G__45151;
i__44850 = G__45152;
continue;
} else {
var role = cljs.core.first(seq__44846__$1);
var temp__5753__auto___45153__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___45153__$2)){
var spec_45154 = temp__5753__auto___45153__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45154)], 0));
} else {
}


var G__45155 = cljs.core.next(seq__44846__$1);
var G__45156 = null;
var G__45157 = (0);
var G__45158 = (0);
seq__44846 = G__45155;
chunk__44848 = G__45156;
count__44849 = G__45157;
i__44850 = G__45158;
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
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__45166 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45167 = cljs.core.ex_cause(t);
via = G__45166;
t = G__45167;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__44904 = datafied_throwable;
var map__44904__$1 = cljs.core.__destructure_map(map__44904);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44904__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44904__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44904__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__44905 = cljs.core.last(via);
var map__44905__$1 = cljs.core.__destructure_map(map__44905);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44905__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44905__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44905__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__44906 = data;
var map__44906__$1 = cljs.core.__destructure_map(map__44906);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44906__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44906__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44906__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__44907 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__44907__$1 = cljs.core.__destructure_map(map__44907);
var top_data = map__44907__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44907__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__44918 = phase;
var G__44918__$1 = (((G__44918 instanceof cljs.core.Keyword))?G__44918.fqn:null);
switch (G__44918__$1) {
case "read-source":
var map__44925 = data;
var map__44925__$1 = cljs.core.__destructure_map(map__44925);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44925__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44925__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__44929 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__44929__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44929,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44929);
var G__44929__$2 = (cljs.core.truth_((function (){var fexpr__44932 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44932.cljs$core$IFn$_invoke$arity$1 ? fexpr__44932.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44932.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44929__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44929__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44929__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44929__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__44934 = top_data;
var G__44934__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44934,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44934);
var G__44934__$2 = (cljs.core.truth_((function (){var fexpr__44940 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44940.cljs$core$IFn$_invoke$arity$1 ? fexpr__44940.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44940.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44934__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44934__$1);
var G__44934__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44934__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44934__$2);
var G__44934__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44934__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44934__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44934__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44934__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__44944 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44944,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44944,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44944,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44944,(3),null);
var G__44952 = top_data;
var G__44952__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44952,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__44952);
var G__44952__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44952__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__44952__$1);
var G__44952__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44952__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__44952__$2);
var G__44952__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44952__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44952__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44952__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44952__$4;
}

break;
case "execution":
var vec__44960 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44960,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44960,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44960,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44960,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__44901_SHARP_){
var or__4212__auto__ = (p1__44901_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__44967 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44967.cljs$core$IFn$_invoke$arity$1 ? fexpr__44967.cljs$core$IFn$_invoke$arity$1(p1__44901_SHARP_) : fexpr__44967.call(null,p1__44901_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__44972 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__44972__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44972,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__44972);
var G__44972__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44972__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44972__$1);
var G__44972__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44972__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__44972__$2);
var G__44972__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44972__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__44972__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44972__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44972__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44918__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__44993){
var map__44995 = p__44993;
var map__44995__$1 = cljs.core.__destructure_map(map__44995);
var triage_data = map__44995__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44995__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44995__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44995__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44995__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44995__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44995__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44995__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44995__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__45008 = phase;
var G__45008__$1 = (((G__45008 instanceof cljs.core.Keyword))?G__45008.fqn:null);
switch (G__45008__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45009 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45010 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45012 = loc;
var G__45013 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45017_45189 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45018_45190 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45020_45191 = true;
var _STAR_print_fn_STAR__temp_val__45021_45192 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45020_45191);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45021_45192);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44987_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44987_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45018_45190);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45017_45189);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45009,G__45010,G__45012,G__45013) : format.call(null,G__45009,G__45010,G__45012,G__45013));

break;
case "macroexpansion":
var G__45026 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45027 = cause_type;
var G__45028 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45029 = loc;
var G__45030 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45026,G__45027,G__45028,G__45029,G__45030) : format.call(null,G__45026,G__45027,G__45028,G__45029,G__45030));

break;
case "compile-syntax-check":
var G__45031 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45032 = cause_type;
var G__45033 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45034 = loc;
var G__45035 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45031,G__45032,G__45033,G__45034,G__45035) : format.call(null,G__45031,G__45032,G__45033,G__45034,G__45035));

break;
case "compilation":
var G__45036 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45037 = cause_type;
var G__45038 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45039 = loc;
var G__45040 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45036,G__45037,G__45038,G__45039,G__45040) : format.call(null,G__45036,G__45037,G__45038,G__45039,G__45040));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45041 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45042 = symbol;
var G__45043 = loc;
var G__45044 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45045_45195 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45046_45196 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45047_45197 = true;
var _STAR_print_fn_STAR__temp_val__45048_45198 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45047_45197);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45048_45198);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44991_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44991_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45046_45196);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45045_45195);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45041,G__45042,G__45043,G__45044) : format.call(null,G__45041,G__45042,G__45043,G__45044));
} else {
var G__45051 = "Execution error%s at %s(%s).\n%s\n";
var G__45052 = cause_type;
var G__45053 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45054 = loc;
var G__45055 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45051,G__45052,G__45053,G__45054,G__45055) : format.call(null,G__45051,G__45052,G__45053,G__45054,G__45055));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45008__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
