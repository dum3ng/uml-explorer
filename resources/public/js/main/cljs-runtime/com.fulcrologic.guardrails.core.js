goog.provide('com.fulcrologic.guardrails.core');
com.fulcrologic.guardrails.core._EQ__GT_ = new cljs.core.Keyword(null,"ret","ret",-468222814);
com.fulcrologic.guardrails.core._BAR_ = new cljs.core.Keyword(null,"st","st",1455255828);
com.fulcrologic.guardrails.core._LT__ = new cljs.core.Keyword(null,"gen","gen",142575302);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.pending_check_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.pending_check_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10000)));
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.async_go_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.async_go_channel = (function (){var c__49544__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49545__auto__ = (function (){var switch__49226__auto__ = (function (state_55119){
var state_val_55120 = (state_55119[(1)]);
if((state_val_55120 === (7))){
var inst_55115 = (state_55119[(2)]);
var state_55119__$1 = state_55119;
var statearr_55125_55214 = state_55119__$1;
(statearr_55125_55214[(2)] = inst_55115);

(statearr_55125_55214[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55120 === (1))){
var state_55119__$1 = state_55119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55119__$1,(2),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_55120 === (4))){
var inst_55117 = (state_55119[(2)]);
var state_55119__$1 = state_55119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55119__$1,inst_55117);
} else {
if((state_val_55120 === (6))){
var inst_55113 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Guardrails ASYNC LOOP STOPPED ****************************************"], 0));
var state_55119__$1 = state_55119;
var statearr_55129_55215 = state_55119__$1;
(statearr_55129_55215[(2)] = inst_55113);

(statearr_55129_55215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55120 === (3))){
var inst_55096 = (state_55119[(7)]);
var state_55119__$1 = state_55119;
if(cljs.core.truth_(inst_55096)){
var statearr_55136_55216 = state_55119__$1;
(statearr_55136_55216[(1)] = (5));

} else {
var statearr_55137_55217 = state_55119__$1;
(statearr_55137_55217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55120 === (12))){
var inst_55110 = (state_55119[(2)]);
var inst_55096 = inst_55110;
var state_55119__$1 = (function (){var statearr_55140 = state_55119;
(statearr_55140[(7)] = inst_55096);

return statearr_55140;
})();
var statearr_55141_55218 = state_55119__$1;
(statearr_55141_55218[(2)] = null);

(statearr_55141_55218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55120 === (2))){
var inst_55095 = (state_55119[(2)]);
var inst_55096 = inst_55095;
var state_55119__$1 = (function (){var statearr_55142 = state_55119;
(statearr_55142[(7)] = inst_55096);

return statearr_55142;
})();
var statearr_55143_55219 = state_55119__$1;
(statearr_55143_55219[(2)] = null);

(statearr_55143_55219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55120 === (11))){
var _ = (function (){var statearr_55144 = state_55119;
(statearr_55144[(4)] = cljs.core.rest((state_55119[(4)])));

return statearr_55144;
})();
var state_55119__$1 = state_55119;
var ex55139 = (state_55119__$1[(2)]);
var statearr_55146_55220 = state_55119__$1;
(statearr_55146_55220[(5)] = ex55139);


var statearr_55149_55221 = state_55119__$1;
(statearr_55149_55221[(1)] = (10));

(statearr_55149_55221[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55120 === (9))){
var inst_55108 = (state_55119[(2)]);
var state_55119__$1 = (function (){var statearr_55150 = state_55119;
(statearr_55150[(8)] = inst_55108);

return statearr_55150;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55119__$1,(12),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_55120 === (5))){
var state_55119__$1 = state_55119;
var statearr_55151_55222 = state_55119__$1;
(statearr_55151_55222[(2)] = null);

(statearr_55151_55222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55120 === (10))){
var inst_55099 = (state_55119[(2)]);
var state_55119__$1 = (function (){var statearr_55152 = state_55119;
(statearr_55152[(9)] = inst_55099);

return statearr_55152;
})();
var statearr_55154_55223 = state_55119__$1;
(statearr_55154_55223[(2)] = null);

(statearr_55154_55223[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55120 === (8))){
var inst_55096 = (state_55119[(7)]);
var _ = (function (){var statearr_55156 = state_55119;
(statearr_55156[(4)] = cljs.core.cons((11),(state_55119[(4)])));

return statearr_55156;
})();
var inst_55105 = (inst_55096.cljs$core$IFn$_invoke$arity$0 ? inst_55096.cljs$core$IFn$_invoke$arity$0() : inst_55096.call(null));
var ___$1 = (function (){var statearr_55157 = state_55119;
(statearr_55157[(4)] = cljs.core.rest((state_55119[(4)])));

return statearr_55157;
})();
var state_55119__$1 = state_55119;
var statearr_55158_55224 = state_55119__$1;
(statearr_55158_55224[(2)] = inst_55105);

(statearr_55158_55224[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$fulcrologic$guardrails$core$state_machine__49227__auto__ = null;
var com$fulcrologic$guardrails$core$state_machine__49227__auto____0 = (function (){
var statearr_55162 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55162[(0)] = com$fulcrologic$guardrails$core$state_machine__49227__auto__);

(statearr_55162[(1)] = (1));

return statearr_55162;
});
var com$fulcrologic$guardrails$core$state_machine__49227__auto____1 = (function (state_55119){
while(true){
var ret_value__49228__auto__ = (function (){try{while(true){
var result__49229__auto__ = switch__49226__auto__(state_55119);
if(cljs.core.keyword_identical_QMARK_(result__49229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49229__auto__;
}
break;
}
}catch (e55164){var ex__49230__auto__ = e55164;
var statearr_55165_55225 = state_55119;
(statearr_55165_55225[(2)] = ex__49230__auto__);


if(cljs.core.seq((state_55119[(4)]))){
var statearr_55167_55226 = state_55119;
(statearr_55167_55226[(1)] = cljs.core.first((state_55119[(4)])));

} else {
throw ex__49230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55227 = state_55119;
state_55119 = G__55227;
continue;
} else {
return ret_value__49228__auto__;
}
break;
}
});
com$fulcrologic$guardrails$core$state_machine__49227__auto__ = function(state_55119){
switch(arguments.length){
case 0:
return com$fulcrologic$guardrails$core$state_machine__49227__auto____0.call(this);
case 1:
return com$fulcrologic$guardrails$core$state_machine__49227__auto____1.call(this,state_55119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$guardrails$core$state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$guardrails$core$state_machine__49227__auto____0;
com$fulcrologic$guardrails$core$state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$guardrails$core$state_machine__49227__auto____1;
return com$fulcrologic$guardrails$core$state_machine__49227__auto__;
})()
})();
var state__49546__auto__ = (function (){var statearr_55169 = f__49545__auto__();
(statearr_55169[(6)] = c__49544__auto__);

return statearr_55169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49546__auto__);
}));

return c__49544__auto__;
})();
}
com.fulcrologic.guardrails.core.output_fn = (function com$fulcrologic$guardrails$core$output_fn(data){
var map__55170 = data;
var map__55170__$1 = cljs.core.__destructure_map(map__55170);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55170__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55170__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55170__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55170__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55170__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55170__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55170__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55170__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [clojure.string.upper_case(cljs.core.name(level))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),(function (){var temp__5753__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5753__auto__)){
var err = temp__5753__auto__;
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1(err))].join('');
} else {
return null;
}
})()].join('');
});
com.fulcrologic.guardrails.core.now_ms = (function com$fulcrologic$guardrails$core$now_ms(){
return cljs.core.inst_ms((new Date()));
});
com.fulcrologic.guardrails.core.run_check = (function com$fulcrologic$guardrails$core$run_check(p__55176,spec,value){
var map__55177 = p__55176;
var map__55177__$1 = cljs.core.__destructure_map(map__55177);
var args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55177__$1,new cljs.core.Keyword(null,"args?","args?",-1963723548));
var vararg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55177__$1,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777));
var callsite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55177__$1,new cljs.core.Keyword(null,"callsite","callsite",243654023));
var throw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55177__$1,new cljs.core.Keyword(null,"throw?","throw?",-2036749118));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55177__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var expound_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55177__$1,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481));
var start_55228 = com.fulcrologic.guardrails.core.now_ms();
var vargs_QMARK__55229 = (function (){var and__4210__auto__ = args_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return vararg_QMARK_;
} else {
return and__4210__auto__;
}
})();
var varg_55230 = (cljs.core.truth_(vargs_QMARK__55229)?cljs.core.last(cljs.core.seq(value)):null);
var specable_args_55231 = (cljs.core.truth_(vargs_QMARK__55229)?((cljs.core.map_QMARK_(varg_55230))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.flatten(cljs.core.seq(varg_55230))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.seq(varg_55230))):value);
var valid_exception_55232 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
try{if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,specable_args_55231)){
} else {
var problem_55233 = expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3(spec,specable_args_55231,expound_opts);
var description_55234 = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(cljs.core.truth_(args_QMARK_)?" argument list":" return type"),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problem_55233)].join('');
if(cljs.core.truth_(throw_QMARK_)){
cljs.core.reset_BANG_(valid_exception_55232,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(description_55234,cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.guardrails","val","com.fulcrologic.guardrails/val",132345656),specable_args_55231], null))));
} else {
com.fulcrologic.guardrails.utils.report_problem([description_55234,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = callsite;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY);
}
})()))].join(''));
}
}
}catch (e55180){var e_55235 = e55180;
com.fulcrologic.guardrails.utils.report_exception(e_55235,"BUG: Internal error in expound or clojure spec.\n");
}finally {var duration_55237 = (com.fulcrologic.guardrails.core.now_ms() - start_55228);
if((duration_55237 > (100))){
com.fulcrologic.guardrails.utils.report_problem(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," ",(cljs.core.truth_(args_QMARK_)?"argument specs":"return spec")," took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration_55237),"ms to run."].join(''));
} else {
}
}
if(cljs.core.truth_(cljs.core.deref(valid_exception_55232))){
throw cljs.core.deref(valid_exception_55232);
} else {
}

return null;
});
com.fulcrologic.guardrails.core.callsite_exception = (function com$fulcrologic$guardrails$core$callsite_exception(){
return (new Error(""));
});

//# sourceMappingURL=com.fulcrologic.guardrails.core.js.map
