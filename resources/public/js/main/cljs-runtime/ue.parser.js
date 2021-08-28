goog.provide('ue.parser');
var module$node_modules$fast_xml_parser$src$parser=shadow.js.require("module$node_modules$fast_xml_parser$src$parser", {});
/**
 * Take a xmi string, and return parsed json object.
 */
ue.parser.parse_xmi = (function ue$parser$parse_xmi(xmi_data){
var opts = ({"attributeNamePrefix": ue.constants.attr_prefix, "ignoreAttributes": false});
var target_obj_54935 = module$node_modules$fast_xml_parser$src$parser;
var _STAR_runtime_state_STAR__orig_val__54939 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__54940 = oops.state.prepare_state(target_obj_54935,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__54940);

try{var call_info_54937 = [target_obj_54935,(function (){var next_obj_54938 = ((oops.core.validate_object_access_dynamically(target_obj_54935,(0),"parse",true,true,false))?(target_obj_54935["parse"]):null);
return next_obj_54938;
})()];
var fn_54936 = (call_info_54937[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_54936,oops.state.get_last_access_modifier())){
if((!((fn_54936 == null)))){
return fn_54936.call((call_info_54937[(0)]),xmi_data,opts);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__54939);
}});

//# sourceMappingURL=ue.parser.js.map
