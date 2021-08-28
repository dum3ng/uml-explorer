goog.provide('ue.store');
ue.store.schema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null);
if((typeof ue !== 'undefined') && (typeof ue.store !== 'undefined') && (typeof ue.store.conn !== 'undefined')){
} else {
ue.store.conn = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(ue.store.schema);
}
ue.store.init_db_BANG_ = (function ue$store$init_db_BANG_(){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["init db."], 0));

var c__42881__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42882__auto__ = (function (){var switch__40213__auto__ = (function (state_52076){
var state_val_52077 = (state_52076[(1)]);
if((state_val_52077 === (1))){
var inst_52051 = cljs_http.client.get("assets/state.xmi");
var state_52076__$1 = state_52076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52076__$1,(2),inst_52051);
} else {
if((state_val_52077 === (2))){
var inst_52053 = (state_52076[(2)]);
var inst_52054 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_52053);
var inst_52055 = ue.parser.parse_xmi(inst_52054);
var inst_52058 = ue.data._STAR_conn_STAR_;
var inst_52059 = ue.store.conn;
var inst_52060 = (ue.data._STAR_conn_STAR_ = inst_52059);
var state_52076__$1 = (function (){var statearr_52078 = state_52076;
(statearr_52078[(7)] = inst_52055);

(statearr_52078[(8)] = inst_52058);

(statearr_52078[(9)] = inst_52060);

return statearr_52078;
})();
var statearr_52079_52095 = state_52076__$1;
(statearr_52079_52095[(2)] = null);

(statearr_52079_52095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52077 === (3))){
var inst_52055 = (state_52076[(7)]);
var _ = (function (){var statearr_52080 = state_52076;
(statearr_52080[(4)] = cljs.core.cons((5),(state_52076[(4)])));

return statearr_52080;
})();
var ___$1 = (function (){var statearr_52081 = state_52076;
(statearr_52081[(4)] = cljs.core.cons((6),(state_52076[(4)])));

return statearr_52081;
})();
var inst_52071 = ue.data.prepare_db_BANG_(inst_52055);
var ___$2 = (function (){var statearr_52082 = state_52076;
(statearr_52082[(4)] = cljs.core.rest((state_52076[(4)])));

return statearr_52082;
})();
var state_52076__$1 = state_52076;
var statearr_52083_52096 = state_52076__$1;
(statearr_52083_52096[(2)] = inst_52071);

(statearr_52083_52096[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52077 === (4))){
var inst_52074 = (state_52076[(2)]);
var state_52076__$1 = state_52076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52076__$1,inst_52074);
} else {
if((state_val_52077 === (5))){
var inst_52058 = (state_52076[(8)]);
var _ = (function (){var statearr_52085 = state_52076;
(statearr_52085[(4)] = cljs.core.rest((state_52076[(4)])));

return statearr_52085;
})();
var inst_52062 = (state_52076[(2)]);
var inst_52063 = (ue.data._STAR_conn_STAR_ = inst_52058);
var ___$1 = (function (){var temp__5753__auto__ = (state_52076[(5)]);
if(cljs.core.truth_(temp__5753__auto__)){
var e__39458__auto__ = temp__5753__auto__;
throw e__39458__auto__;
} else {
return null;
}
})();
var state_52076__$1 = (function (){var statearr_52086 = state_52076;
(statearr_52086[(10)] = inst_52063);

return statearr_52086;
})();
var statearr_52087_52097 = state_52076__$1;
(statearr_52087_52097[(2)] = inst_52062);

(statearr_52087_52097[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52077 === (6))){
var _ = (function (){var statearr_52088 = state_52076;
(statearr_52088[(4)] = cljs.core.rest((state_52076[(4)])));

return statearr_52088;
})();
var state_52076__$1 = state_52076;
var ex52084 = (state_52076__$1[(2)]);
var statearr_52089_52098 = state_52076__$1;
(statearr_52089_52098[(5)] = ex52084);


throw ex52084;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var ue$store$init_db_BANG__$_state_machine__40214__auto__ = null;
var ue$store$init_db_BANG__$_state_machine__40214__auto____0 = (function (){
var statearr_52090 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52090[(0)] = ue$store$init_db_BANG__$_state_machine__40214__auto__);

(statearr_52090[(1)] = (1));

return statearr_52090;
});
var ue$store$init_db_BANG__$_state_machine__40214__auto____1 = (function (state_52076){
while(true){
var ret_value__40215__auto__ = (function (){try{while(true){
var result__40216__auto__ = switch__40213__auto__(state_52076);
if(cljs.core.keyword_identical_QMARK_(result__40216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40216__auto__;
}
break;
}
}catch (e52091){var ex__40217__auto__ = e52091;
var statearr_52092_52099 = state_52076;
(statearr_52092_52099[(2)] = ex__40217__auto__);


if(cljs.core.seq((state_52076[(4)]))){
var statearr_52093_52100 = state_52076;
(statearr_52093_52100[(1)] = cljs.core.first((state_52076[(4)])));

} else {
throw ex__40217__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52101 = state_52076;
state_52076 = G__52101;
continue;
} else {
return ret_value__40215__auto__;
}
break;
}
});
ue$store$init_db_BANG__$_state_machine__40214__auto__ = function(state_52076){
switch(arguments.length){
case 0:
return ue$store$init_db_BANG__$_state_machine__40214__auto____0.call(this);
case 1:
return ue$store$init_db_BANG__$_state_machine__40214__auto____1.call(this,state_52076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ue$store$init_db_BANG__$_state_machine__40214__auto__.cljs$core$IFn$_invoke$arity$0 = ue$store$init_db_BANG__$_state_machine__40214__auto____0;
ue$store$init_db_BANG__$_state_machine__40214__auto__.cljs$core$IFn$_invoke$arity$1 = ue$store$init_db_BANG__$_state_machine__40214__auto____1;
return ue$store$init_db_BANG__$_state_machine__40214__auto__;
})()
})();
var state__42883__auto__ = (function (){var statearr_52094 = f__42882__auto__();
(statearr_52094[(6)] = c__42881__auto__);

return statearr_52094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42883__auto__);
}));

return c__42881__auto__;
});

//# sourceMappingURL=ue.store.js.map
