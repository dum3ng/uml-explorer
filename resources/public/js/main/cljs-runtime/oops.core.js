goog.provide('oops.core');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__54849 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__54849)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__54849)){
var G__54851 = (console["error"]);
var G__54852 = msg;
var G__54853 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__54850 = oops.state.get_console_reporter();
return (fexpr__54850.cljs$core$IFn$_invoke$arity$3 ? fexpr__54850.cljs$core$IFn$_invoke$arity$3(G__54851,G__54852,G__54853) : fexpr__54850.call(null,G__54851,G__54852,G__54853));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__54849)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54849)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__54854 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__54854)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__54854)){
var G__54856 = (console["warn"]);
var G__54857 = msg;
var G__54858 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__54855 = oops.state.get_console_reporter();
return (fexpr__54855.cljs$core$IFn$_invoke$arity$3 ? fexpr__54855.cljs$core$IFn$_invoke$arity$3(G__54856,G__54857,G__54858) : fexpr__54855.call(null,G__54856,G__54857,G__54858));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__54854)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54854)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4824__auto__ = [];
var len__4818__auto___54931 = arguments.length;
var i__4819__auto___54932 = (0);
while(true){
if((i__4819__auto___54932 < len__4818__auto___54931)){
args__4824__auto__.push((arguments[i__4819__auto___54932]));

var G__54933 = (i__4819__auto___54932 + (1));
i__4819__auto___54932 = G__54933;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__54861){
var vec__54862 = p__54861;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54862,(0),null);

if(cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),msg_id)){
} else {
var G__54865_54934 = oops.config.get_config_key(msg_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warn","warn",-436710552),G__54865_54934)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__54865_54934)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__54865_54934)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__54865_54934)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54865_54934)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq54859){
var G__54860 = cljs.core.first(seq54859);
var seq54859__$1 = cljs.core.next(seq54859);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54860,seq54859__$1);
}));

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((cljs.core.boolean_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((typeof obj === 'number')?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((typeof obj === 'string')?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((cljs.core.not(goog.isObject(obj)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_(key);

oops.state.set_last_access_modifier_BANG_(mode);
} else {
}

var and__4210__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && (cljs.core.not(goog.object.containsKey(obj,key)))))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)):true):true);
if(cljs.core.truth_(and__4210__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5755__auto__ = oops.helpers.get_property_descriptor(obj,key);
if((temp__5755__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_(obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_(obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
} else {
return true;

}
}
} else {
var descriptor_54866 = temp__5755__auto__;
var temp__5755__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_54866);
if((temp__5755__auto____$1 == null)){
return true;
} else {
var reason_54867 = temp__5755__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_54867,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
}
}
} else {
return true;
}
} else {
return and__4210__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1))) && ((fn == null)))){
return true;
} else {
if(typeof fn === 'function'){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_54869 = oops.config.get_child_factory();
var child_factory_54869__$1 = (function (){var G__54870 = child_factory_54869;
var G__54870__$1 = (((G__54870 instanceof cljs.core.Keyword))?G__54870.fqn:null);
switch (G__54870__$1) {
case "js-obj":
return (function (){
return ({});
});

break;
case "js-array":
return (function (){
return [];
});

break;
default:
return child_factory_54869;

}
})();

var child_obj_54868 = (child_factory_54869__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_54869__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_54869__$1.call(null,obj,key));
if(oops.core.validate_object_access_dynamically(obj,(2),key,false,true,true)){
(obj[key] = child_obj_54868);
} else {
}

return child_obj_54868;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_54873 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_54873);

return selector_path_54873;
} else {
var selector_path_54874 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_54874);

return selector_path_54874;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5757__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5757__auto__ == null)){
return null;
} else {
var issue_54875 = temp__5757__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_54875);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,false)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_54884 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_54884,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_54877 = (function (){var path_54876 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_54876,(0));

return path_54876;
})();
var len_54878 = path_54877.length;
var i_54879 = (0);
var obj_54880 = obj;
while(true){
if((i_54879 < len_54878)){
var mode_54881 = (path_54877[i_54879]);
var key_54882 = (path_54877[(i_54879 + (1))]);
var next_obj_54883 = oops.core.get_key_dynamically(obj_54880,key_54882,mode_54881);
var G__54885 = mode_54881;
switch (G__54885) {
case (0):
var G__54943 = (i_54879 + (2));
var G__54944 = next_obj_54883;
i_54879 = G__54943;
obj_54880 = G__54944;
continue;

break;
case (1):
if((!((next_obj_54883 == null)))){
var G__54945 = (i_54879 + (2));
var G__54946 = next_obj_54883;
i_54879 = G__54945;
obj_54880 = G__54946;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_54883 == null)))){
var G__54947 = (i_54879 + (2));
var G__54948 = next_obj_54883;
i_54879 = G__54947;
obj_54880 = G__54948;
continue;
} else {
var G__54949 = (i_54879 + (2));
var G__54950 = oops.core.punch_key_dynamically_BANG_.call(null,obj_54880,key_54882);
i_54879 = G__54949;
obj_54880 = G__54950;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54885)].join('')));

}
} else {
return obj_54880;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_54911 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_54911,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_54887 = (function (){var path_54886 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_54886,(0));

return path_54886;
})();
var len_54888 = path_54887.length;
if((len_54888 < (4))){
return [obj,(function (){var path_54890 = path_54887;
var len_54891 = path_54890.length;
var i_54892 = (0);
var obj_54893 = obj;
while(true){
if((i_54892 < len_54891)){
var mode_54894 = (path_54890[i_54892]);
var key_54895 = (path_54890[(i_54892 + (1))]);
var next_obj_54896 = oops.core.get_key_dynamically(obj_54893,key_54895,mode_54894);
var G__54912 = mode_54894;
switch (G__54912) {
case (0):
var G__54952 = (i_54892 + (2));
var G__54953 = next_obj_54896;
i_54892 = G__54952;
obj_54893 = G__54953;
continue;

break;
case (1):
if((!((next_obj_54896 == null)))){
var G__54954 = (i_54892 + (2));
var G__54955 = next_obj_54896;
i_54892 = G__54954;
obj_54893 = G__54955;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_54896 == null)))){
var G__54956 = (i_54892 + (2));
var G__54957 = next_obj_54896;
i_54892 = G__54956;
obj_54893 = G__54957;
continue;
} else {
var G__54958 = (i_54892 + (2));
var G__54959 = oops.core.punch_key_dynamically_BANG_.call(null,obj_54893,key_54895);
i_54892 = G__54958;
obj_54893 = G__54959;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54912)].join('')));

}
} else {
return obj_54893;
}
break;
}
})()];
} else {
var target_obj_54889 = (function (){var path_54897 = path_54887.slice((0),(len_54888 - (2)));
var len_54898 = path_54897.length;
var i_54899 = (0);
var obj_54900 = obj;
while(true){
if((i_54899 < len_54898)){
var mode_54901 = (path_54897[i_54899]);
var key_54902 = (path_54897[(i_54899 + (1))]);
var next_obj_54903 = oops.core.get_key_dynamically(obj_54900,key_54902,mode_54901);
var G__54913 = mode_54901;
switch (G__54913) {
case (0):
var G__54961 = (i_54899 + (2));
var G__54962 = next_obj_54903;
i_54899 = G__54961;
obj_54900 = G__54962;
continue;

break;
case (1):
if((!((next_obj_54903 == null)))){
var G__54967 = (i_54899 + (2));
var G__54968 = next_obj_54903;
i_54899 = G__54967;
obj_54900 = G__54968;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_54903 == null)))){
var G__54970 = (i_54899 + (2));
var G__54971 = next_obj_54903;
i_54899 = G__54970;
obj_54900 = G__54971;
continue;
} else {
var G__54973 = (i_54899 + (2));
var G__54974 = oops.core.punch_key_dynamically_BANG_.call(null,obj_54900,key_54902);
i_54899 = G__54973;
obj_54900 = G__54974;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54913)].join('')));

}
} else {
return obj_54900;
}
break;
}
})();
return [target_obj_54889,(function (){var path_54904 = [(path_54887[(len_54888 - (2))]),(path_54887[(len_54888 - (1))])];
var len_54905 = path_54904.length;
var i_54906 = (0);
var obj_54907 = target_obj_54889;
while(true){
if((i_54906 < len_54905)){
var mode_54908 = (path_54904[i_54906]);
var key_54909 = (path_54904[(i_54906 + (1))]);
var next_obj_54910 = oops.core.get_key_dynamically(obj_54907,key_54909,mode_54908);
var G__54914 = mode_54908;
switch (G__54914) {
case (0):
var G__54979 = (i_54906 + (2));
var G__54980 = next_obj_54910;
i_54906 = G__54979;
obj_54907 = G__54980;
continue;

break;
case (1):
if((!((next_obj_54910 == null)))){
var G__54981 = (i_54906 + (2));
var G__54982 = next_obj_54910;
i_54906 = G__54981;
obj_54907 = G__54982;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_54910 == null)))){
var G__54983 = (i_54906 + (2));
var G__54984 = next_obj_54910;
i_54906 = G__54983;
obj_54907 = G__54984;
continue;
} else {
var G__54985 = (i_54906 + (2));
var G__54986 = oops.core.punch_key_dynamically_BANG_.call(null,obj_54907,key_54909);
i_54906 = G__54985;
obj_54907 = G__54986;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54914)].join('')));

}
} else {
return obj_54907;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_54929 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_54929,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_54916 = (function (){var path_54915 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_54915,(1));

return path_54915;
})();
var len_54919 = path_54916.length;
var parent_obj_path_54920 = path_54916.slice((0),(len_54919 - (2)));
var key_54917 = (path_54916[(len_54919 - (1))]);
var mode_54918 = (path_54916[(len_54919 - (2))]);
var parent_obj_54921 = (function (){var path_54922 = parent_obj_path_54920;
var len_54923 = path_54922.length;
var i_54924 = (0);
var obj_54925 = obj;
while(true){
if((i_54924 < len_54923)){
var mode_54926 = (path_54922[i_54924]);
var key_54927 = (path_54922[(i_54924 + (1))]);
var next_obj_54928 = oops.core.get_key_dynamically(obj_54925,key_54927,mode_54926);
var G__54930 = mode_54926;
switch (G__54930) {
case (0):
var G__54988 = (i_54924 + (2));
var G__54989 = next_obj_54928;
i_54924 = G__54988;
obj_54925 = G__54989;
continue;

break;
case (1):
if((!((next_obj_54928 == null)))){
var G__54990 = (i_54924 + (2));
var G__54991 = next_obj_54928;
i_54924 = G__54990;
obj_54925 = G__54991;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_54928 == null)))){
var G__54992 = (i_54924 + (2));
var G__54993 = next_obj_54928;
i_54924 = G__54992;
obj_54925 = G__54993;
continue;
} else {
var G__54994 = (i_54924 + (2));
var G__54995 = oops.core.punch_key_dynamically_BANG_.call(null,obj_54925,key_54927);
i_54924 = G__54994;
obj_54925 = G__54995;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54930)].join('')));

}
} else {
return obj_54925;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_54921,key_54917,val,mode_54918);
} else {
return null;
}
});

//# sourceMappingURL=oops.core.js.map
