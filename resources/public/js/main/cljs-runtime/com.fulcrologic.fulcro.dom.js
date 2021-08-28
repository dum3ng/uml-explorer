goog.provide('com.fulcrologic.fulcro.dom');





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return React.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (((cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__59647){
var vec__59648 = p__59647;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59648,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59648,(1),null);
var pair = vec__59648;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__59654){
var vec__59655 = p__59654;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59655,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59655,(1),null);
var pair = vec__59655;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__59662){
var vec__59665 = p__59662;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59665,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59665,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__59670 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59670,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__59670;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return ReactDOM.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must make sure js/ReactDOMServer is defined (e.g. require cljsjs.react.dom.server) to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__59679 = arguments.length;
switch (G__59679) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return ReactDOM.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__59680 = component.refs;
var G__59680__$1 = (((G__59680 == null))?null:goog.object.get(G__59680,name));
if((G__59680__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__59680__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5751__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5751__auto__)){
var ref = temp__5751__auto__;
var G__59683 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__59687 = (function (){var G__59688 = r;
if((G__59688 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__59688);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__59687) : ref.call(null,G__59687));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__59683) : factory.call(null,G__59683));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__59698 = arguments.length;
switch (G__59698) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___61903 = arguments.length;
var i__4819__auto___61904 = (0);
while(true){
if((i__4819__auto___61904 < len__4818__auto___61903)){
args_arr__4839__auto__.push((arguments[i__4819__auto___61904]));

var G__61905 = (i__4819__auto___61904 + (1));
i__4819__auto___61904 = G__61905;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return React.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq59693){
var G__59694 = cljs.core.first(seq59693);
var seq59693__$1 = cljs.core.next(seq59693);
var G__59695 = cljs.core.first(seq59693__$1);
var seq59693__$2 = cljs.core.next(seq59693__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59694,G__59695,seq59693__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return React.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = goog.object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = goog.object.get(next_props,"inputRef");
goog.object.extend(next_state,next_props,({"onChange": on_change}));

goog.object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
goog.object.remove(next_state,"inputRef");

goog.object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__4210__auto__ = tag;
if(cljs.core.truth_(and__4210__auto__)){
var G__59718 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__59718) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__59718));
} else {
return and__4210__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": goog.object.get(props,"inputRef")});
goog.object.extend(state,props,({"onChange": goog.bind(goog.object.get(this$,"onChange"),this$)}));

goog.object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return React.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,React.Component);

var x59722_61909 = ctor.prototype;
(x59722_61909.onChange = (function (event){
var this$ = this;
var temp__5753__auto__ = goog.object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5753__auto__)){
var handler = temp__5753__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,goog.object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x59722_61909.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","cached-props","value");
var this_node = ReactDOM.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__59719_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__59719_SHARP_);
})));
var element_value = goog.object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__4210__auto__ = state_value;
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = element_value;
if(cljs.core.truth_(and__4210__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
}),null)),null,1445233171,null);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,goog.object.get(new_props,"value"));
}
}));

(x59722_61909.render = (function (){
var this$ = this;
return React.createElement(element,goog.object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__61910__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.createElement,ctor,args);
};
var G__61910 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61911__i = 0, G__61911__a = new Array(arguments.length -  0);
while (G__61911__i < G__61911__a.length) {G__61911__a[G__61911__i] = arguments[G__61911__i + 0]; ++G__61911__i;}
  args = new cljs.core.IndexedSeq(G__61911__a,0,null);
} 
return G__61910__delegate.call(this,args);};
G__61910.cljs$lang$maxFixedArity = 0;
G__61910.cljs$lang$applyTo = (function (arglist__61912){
var args = cljs.core.seq(arglist__61912);
return G__61910__delegate(args);
});
G__61910.cljs$core$IFn$_invoke$arity$variadic = G__61910__delegate;
return G__61910;
})()
;
return (function() { 
var G__61913__delegate = function (props,children){
var t = goog.object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"input",props,children);
} else {
var temp__5751__auto__ = goog.object.get(props,"ref");
if(cljs.core.truth_(temp__5751__auto__)){
var r = temp__5751__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
goog.object.extend(p,props);

goog.object.set(p,"inputRef",r);

goog.object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__61913 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__61914__i = 0, G__61914__a = new Array(arguments.length -  1);
while (G__61914__i < G__61914__a.length) {G__61914__a[G__61914__i] = arguments[G__61914__i + 1]; ++G__61914__i;}
  children = new cljs.core.IndexedSeq(G__61914__a,0,null);
} 
return G__61913__delegate.call(this,props,children);};
G__61913.cljs$lang$maxFixedArity = 1;
G__61913.cljs$lang$applyTo = (function (arglist__61915){
var props = cljs.core.first(arglist__61915);
var children = cljs.core.rest(arglist__61915);
return G__61913__delegate(props,children);
});
G__61913.cljs$core$IFn$_invoke$arity$variadic = G__61913__delegate;
return G__61913;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__59744 = tag;
switch (G__59744) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59744)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__59748 = arguments.length;
switch (G__59748) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__59750 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__59751 = cljs.core.seq(vec__59750);
var first__59752 = cljs.core.first(seq__59751);
var seq__59751__$1 = cljs.core.next(seq__59751);
var head = first__59752;
var tail = seq__59751__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__59755 = (function (){var G__59756 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__59756,tail);

return G__59756;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__59755) : f.call(null,G__59755));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__59757 = (function (){var G__59758 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__59758,args);

return G__59758;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__59757) : f.call(null,G__59757));
} else {
if(cljs.core.object_QMARK_(head)){
var G__59759 = (function (){var G__59760 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__59760,tail);

return G__59760;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__59759) : f.call(null,G__59759));
} else {
if(cljs.core.map_QMARK_(head)){
var G__59761 = (function (){var G__59762 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__59762,tail);

return G__59762;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__59761) : f.call(null,G__59761));
} else {
var G__59763 = (function (){var G__59765 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__59765,args);

return G__59765;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__59763) : f.call(null,G__59763));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__59772 = arguments.length;
switch (G__59772) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__59774 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__59775 = cljs.core.seq(vec__59774);
var first__59776 = cljs.core.first(seq__59775);
var seq__59775__$1 = cljs.core.next(seq__59775);
var head = first__59776;
var tail = seq__59775__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__59777 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__59777,tail);

return G__59777;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__59778 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__59778,args);

return G__59778;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__59780 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__59780,tail);

return G__59780;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__59781 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__59781,tail);

return G__59781;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__59782 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__59782,args);

return G__59782;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__4824__auto__ = [];
var len__4818__auto___61923 = arguments.length;
var i__4819__auto___61924 = (0);
while(true){
if((i__4819__auto___61924 < len__4818__auto___61923)){
args__4824__auto__.push((arguments[i__4819__auto___61924]));

var G__61925 = (i__4819__auto___61924 + (1));
i__4819__auto___61924 = G__61925;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59799 = conformed_args__58342__auto__;
var map__59799__$1 = cljs.core.__destructure_map(map__59799);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59799__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59799__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59799__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq59793){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59793));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__4824__auto__ = [];
var len__4818__auto___61926 = arguments.length;
var i__4819__auto___61927 = (0);
while(true){
if((i__4819__auto___61927 < len__4818__auto___61926)){
args__4824__auto__.push((arguments[i__4819__auto___61927]));

var G__61928 = (i__4819__auto___61927 + (1));
i__4819__auto___61927 = G__61928;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59805 = conformed_args__58342__auto__;
var map__59805__$1 = cljs.core.__destructure_map(map__59805);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59805__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59805__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59805__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq59802){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59802));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__4824__auto__ = [];
var len__4818__auto___61929 = arguments.length;
var i__4819__auto___61930 = (0);
while(true){
if((i__4819__auto___61930 < len__4818__auto___61929)){
args__4824__auto__.push((arguments[i__4819__auto___61930]));

var G__61932 = (i__4819__auto___61930 + (1));
i__4819__auto___61930 = G__61932;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59810 = conformed_args__58342__auto__;
var map__59810__$1 = cljs.core.__destructure_map(map__59810);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59810__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59810__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59810__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq59808){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59808));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__4824__auto__ = [];
var len__4818__auto___61937 = arguments.length;
var i__4819__auto___61938 = (0);
while(true){
if((i__4819__auto___61938 < len__4818__auto___61937)){
args__4824__auto__.push((arguments[i__4819__auto___61938]));

var G__61939 = (i__4819__auto___61938 + (1));
i__4819__auto___61938 = G__61939;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59814 = conformed_args__58342__auto__;
var map__59814__$1 = cljs.core.__destructure_map(map__59814);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59814__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59814__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59814__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq59812){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59812));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__4824__auto__ = [];
var len__4818__auto___61948 = arguments.length;
var i__4819__auto___61949 = (0);
while(true){
if((i__4819__auto___61949 < len__4818__auto___61948)){
args__4824__auto__.push((arguments[i__4819__auto___61949]));

var G__61950 = (i__4819__auto___61949 + (1));
i__4819__auto___61949 = G__61950;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59819 = conformed_args__58342__auto__;
var map__59819__$1 = cljs.core.__destructure_map(map__59819);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59819__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59819__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59819__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq59818){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59818));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__4824__auto__ = [];
var len__4818__auto___61953 = arguments.length;
var i__4819__auto___61954 = (0);
while(true){
if((i__4819__auto___61954 < len__4818__auto___61953)){
args__4824__auto__.push((arguments[i__4819__auto___61954]));

var G__61955 = (i__4819__auto___61954 + (1));
i__4819__auto___61954 = G__61955;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59823 = conformed_args__58342__auto__;
var map__59823__$1 = cljs.core.__destructure_map(map__59823);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59823__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59823__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59823__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq59822){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59822));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__4824__auto__ = [];
var len__4818__auto___61956 = arguments.length;
var i__4819__auto___61957 = (0);
while(true){
if((i__4819__auto___61957 < len__4818__auto___61956)){
args__4824__auto__.push((arguments[i__4819__auto___61957]));

var G__61958 = (i__4819__auto___61957 + (1));
i__4819__auto___61957 = G__61958;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59831 = conformed_args__58342__auto__;
var map__59831__$1 = cljs.core.__destructure_map(map__59831);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59831__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59831__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59831__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq59828){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59828));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__4824__auto__ = [];
var len__4818__auto___61959 = arguments.length;
var i__4819__auto___61960 = (0);
while(true){
if((i__4819__auto___61960 < len__4818__auto___61959)){
args__4824__auto__.push((arguments[i__4819__auto___61960]));

var G__61961 = (i__4819__auto___61960 + (1));
i__4819__auto___61960 = G__61961;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59837 = conformed_args__58342__auto__;
var map__59837__$1 = cljs.core.__destructure_map(map__59837);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59837__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59837__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59837__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq59834){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59834));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__4824__auto__ = [];
var len__4818__auto___61962 = arguments.length;
var i__4819__auto___61963 = (0);
while(true){
if((i__4819__auto___61963 < len__4818__auto___61962)){
args__4824__auto__.push((arguments[i__4819__auto___61963]));

var G__61964 = (i__4819__auto___61963 + (1));
i__4819__auto___61963 = G__61964;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59842 = conformed_args__58342__auto__;
var map__59842__$1 = cljs.core.__destructure_map(map__59842);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59842__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59842__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59842__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq59840){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59840));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__4824__auto__ = [];
var len__4818__auto___61967 = arguments.length;
var i__4819__auto___61968 = (0);
while(true){
if((i__4819__auto___61968 < len__4818__auto___61967)){
args__4824__auto__.push((arguments[i__4819__auto___61968]));

var G__61969 = (i__4819__auto___61968 + (1));
i__4819__auto___61968 = G__61969;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59848 = conformed_args__58342__auto__;
var map__59848__$1 = cljs.core.__destructure_map(map__59848);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59848__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59848__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59848__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq59845){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59845));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__4824__auto__ = [];
var len__4818__auto___61972 = arguments.length;
var i__4819__auto___61973 = (0);
while(true){
if((i__4819__auto___61973 < len__4818__auto___61972)){
args__4824__auto__.push((arguments[i__4819__auto___61973]));

var G__61974 = (i__4819__auto___61973 + (1));
i__4819__auto___61973 = G__61974;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59858 = conformed_args__58342__auto__;
var map__59858__$1 = cljs.core.__destructure_map(map__59858);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59858__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59858__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59858__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq59851){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59851));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__4824__auto__ = [];
var len__4818__auto___61975 = arguments.length;
var i__4819__auto___61976 = (0);
while(true){
if((i__4819__auto___61976 < len__4818__auto___61975)){
args__4824__auto__.push((arguments[i__4819__auto___61976]));

var G__61978 = (i__4819__auto___61976 + (1));
i__4819__auto___61976 = G__61978;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59868 = conformed_args__58342__auto__;
var map__59868__$1 = cljs.core.__destructure_map(map__59868);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59868__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59868__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59868__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq59863){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59863));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__4824__auto__ = [];
var len__4818__auto___61980 = arguments.length;
var i__4819__auto___61981 = (0);
while(true){
if((i__4819__auto___61981 < len__4818__auto___61980)){
args__4824__auto__.push((arguments[i__4819__auto___61981]));

var G__61982 = (i__4819__auto___61981 + (1));
i__4819__auto___61981 = G__61982;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59877 = conformed_args__58342__auto__;
var map__59877__$1 = cljs.core.__destructure_map(map__59877);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59877__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59877__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59877__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq59873){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59873));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__4824__auto__ = [];
var len__4818__auto___61984 = arguments.length;
var i__4819__auto___61985 = (0);
while(true){
if((i__4819__auto___61985 < len__4818__auto___61984)){
args__4824__auto__.push((arguments[i__4819__auto___61985]));

var G__61986 = (i__4819__auto___61985 + (1));
i__4819__auto___61985 = G__61986;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59882 = conformed_args__58342__auto__;
var map__59882__$1 = cljs.core.__destructure_map(map__59882);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59882__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59882__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59882__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq59879){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59879));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__4824__auto__ = [];
var len__4818__auto___61987 = arguments.length;
var i__4819__auto___61988 = (0);
while(true){
if((i__4819__auto___61988 < len__4818__auto___61987)){
args__4824__auto__.push((arguments[i__4819__auto___61988]));

var G__61989 = (i__4819__auto___61988 + (1));
i__4819__auto___61988 = G__61989;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59887 = conformed_args__58342__auto__;
var map__59887__$1 = cljs.core.__destructure_map(map__59887);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59887__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59887__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59887__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq59885){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59885));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__4824__auto__ = [];
var len__4818__auto___61992 = arguments.length;
var i__4819__auto___61993 = (0);
while(true){
if((i__4819__auto___61993 < len__4818__auto___61992)){
args__4824__auto__.push((arguments[i__4819__auto___61993]));

var G__61994 = (i__4819__auto___61993 + (1));
i__4819__auto___61993 = G__61994;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59893 = conformed_args__58342__auto__;
var map__59893__$1 = cljs.core.__destructure_map(map__59893);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59893__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59893__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59893__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq59890){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59890));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__4824__auto__ = [];
var len__4818__auto___61996 = arguments.length;
var i__4819__auto___61997 = (0);
while(true){
if((i__4819__auto___61997 < len__4818__auto___61996)){
args__4824__auto__.push((arguments[i__4819__auto___61997]));

var G__61998 = (i__4819__auto___61997 + (1));
i__4819__auto___61997 = G__61998;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59895 = conformed_args__58342__auto__;
var map__59895__$1 = cljs.core.__destructure_map(map__59895);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59895__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59895__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59895__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq59894){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59894));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__4824__auto__ = [];
var len__4818__auto___61999 = arguments.length;
var i__4819__auto___62000 = (0);
while(true){
if((i__4819__auto___62000 < len__4818__auto___61999)){
args__4824__auto__.push((arguments[i__4819__auto___62000]));

var G__62001 = (i__4819__auto___62000 + (1));
i__4819__auto___62000 = G__62001;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59899 = conformed_args__58342__auto__;
var map__59899__$1 = cljs.core.__destructure_map(map__59899);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59899__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59899__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59899__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq59898){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59898));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62004 = arguments.length;
var i__4819__auto___62005 = (0);
while(true){
if((i__4819__auto___62005 < len__4818__auto___62004)){
args__4824__auto__.push((arguments[i__4819__auto___62005]));

var G__62006 = (i__4819__auto___62005 + (1));
i__4819__auto___62005 = G__62006;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59904 = conformed_args__58342__auto__;
var map__59904__$1 = cljs.core.__destructure_map(map__59904);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59904__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59904__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59904__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq59901){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59901));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62007 = arguments.length;
var i__4819__auto___62008 = (0);
while(true){
if((i__4819__auto___62008 < len__4818__auto___62007)){
args__4824__auto__.push((arguments[i__4819__auto___62008]));

var G__62009 = (i__4819__auto___62008 + (1));
i__4819__auto___62008 = G__62009;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59907 = conformed_args__58342__auto__;
var map__59907__$1 = cljs.core.__destructure_map(map__59907);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59907__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59907__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59907__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq59906){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59906));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62010 = arguments.length;
var i__4819__auto___62011 = (0);
while(true){
if((i__4819__auto___62011 < len__4818__auto___62010)){
args__4824__auto__.push((arguments[i__4819__auto___62011]));

var G__62012 = (i__4819__auto___62011 + (1));
i__4819__auto___62011 = G__62012;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59909 = conformed_args__58342__auto__;
var map__59909__$1 = cljs.core.__destructure_map(map__59909);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59909__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59909__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59909__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq59908){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59908));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62014 = arguments.length;
var i__4819__auto___62015 = (0);
while(true){
if((i__4819__auto___62015 < len__4818__auto___62014)){
args__4824__auto__.push((arguments[i__4819__auto___62015]));

var G__62016 = (i__4819__auto___62015 + (1));
i__4819__auto___62015 = G__62016;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59914 = conformed_args__58342__auto__;
var map__59914__$1 = cljs.core.__destructure_map(map__59914);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59914__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59914__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59914__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq59911){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59911));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62018 = arguments.length;
var i__4819__auto___62019 = (0);
while(true){
if((i__4819__auto___62019 < len__4818__auto___62018)){
args__4824__auto__.push((arguments[i__4819__auto___62019]));

var G__62020 = (i__4819__auto___62019 + (1));
i__4819__auto___62019 = G__62020;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59921 = conformed_args__58342__auto__;
var map__59921__$1 = cljs.core.__destructure_map(map__59921);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59921__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59921__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59921__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq59919){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59919));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62021 = arguments.length;
var i__4819__auto___62022 = (0);
while(true){
if((i__4819__auto___62022 < len__4818__auto___62021)){
args__4824__auto__.push((arguments[i__4819__auto___62022]));

var G__62024 = (i__4819__auto___62022 + (1));
i__4819__auto___62022 = G__62024;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59925 = conformed_args__58342__auto__;
var map__59925__$1 = cljs.core.__destructure_map(map__59925);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59925__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59925__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59925__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq59923){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59923));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62026 = arguments.length;
var i__4819__auto___62027 = (0);
while(true){
if((i__4819__auto___62027 < len__4818__auto___62026)){
args__4824__auto__.push((arguments[i__4819__auto___62027]));

var G__62028 = (i__4819__auto___62027 + (1));
i__4819__auto___62027 = G__62028;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59930 = conformed_args__58342__auto__;
var map__59930__$1 = cljs.core.__destructure_map(map__59930);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59930__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59930__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59930__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq59926){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59926));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62031 = arguments.length;
var i__4819__auto___62032 = (0);
while(true){
if((i__4819__auto___62032 < len__4818__auto___62031)){
args__4824__auto__.push((arguments[i__4819__auto___62032]));

var G__62033 = (i__4819__auto___62032 + (1));
i__4819__auto___62032 = G__62033;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59934 = conformed_args__58342__auto__;
var map__59934__$1 = cljs.core.__destructure_map(map__59934);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59934__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59934__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59934__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq59933){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59933));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62034 = arguments.length;
var i__4819__auto___62035 = (0);
while(true){
if((i__4819__auto___62035 < len__4818__auto___62034)){
args__4824__auto__.push((arguments[i__4819__auto___62035]));

var G__62036 = (i__4819__auto___62035 + (1));
i__4819__auto___62035 = G__62036;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59938 = conformed_args__58342__auto__;
var map__59938__$1 = cljs.core.__destructure_map(map__59938);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59938__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59938__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59938__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq59937){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59937));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62037 = arguments.length;
var i__4819__auto___62038 = (0);
while(true){
if((i__4819__auto___62038 < len__4818__auto___62037)){
args__4824__auto__.push((arguments[i__4819__auto___62038]));

var G__62039 = (i__4819__auto___62038 + (1));
i__4819__auto___62038 = G__62039;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59954 = conformed_args__58342__auto__;
var map__59954__$1 = cljs.core.__destructure_map(map__59954);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59954__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59954__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59954__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq59941){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59941));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62044 = arguments.length;
var i__4819__auto___62045 = (0);
while(true){
if((i__4819__auto___62045 < len__4818__auto___62044)){
args__4824__auto__.push((arguments[i__4819__auto___62045]));

var G__62046 = (i__4819__auto___62045 + (1));
i__4819__auto___62045 = G__62046;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59959 = conformed_args__58342__auto__;
var map__59959__$1 = cljs.core.__destructure_map(map__59959);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59959__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59959__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59959__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq59957){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59957));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62047 = arguments.length;
var i__4819__auto___62048 = (0);
while(true){
if((i__4819__auto___62048 < len__4818__auto___62047)){
args__4824__auto__.push((arguments[i__4819__auto___62048]));

var G__62049 = (i__4819__auto___62048 + (1));
i__4819__auto___62048 = G__62049;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59964 = conformed_args__58342__auto__;
var map__59964__$1 = cljs.core.__destructure_map(map__59964);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59964__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59964__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59964__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq59961){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59961));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62050 = arguments.length;
var i__4819__auto___62051 = (0);
while(true){
if((i__4819__auto___62051 < len__4818__auto___62050)){
args__4824__auto__.push((arguments[i__4819__auto___62051]));

var G__62053 = (i__4819__auto___62051 + (1));
i__4819__auto___62051 = G__62053;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59968 = conformed_args__58342__auto__;
var map__59968__$1 = cljs.core.__destructure_map(map__59968);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59968__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59968__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59968__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq59966){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59966));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62055 = arguments.length;
var i__4819__auto___62056 = (0);
while(true){
if((i__4819__auto___62056 < len__4818__auto___62055)){
args__4824__auto__.push((arguments[i__4819__auto___62056]));

var G__62057 = (i__4819__auto___62056 + (1));
i__4819__auto___62056 = G__62057;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59972 = conformed_args__58342__auto__;
var map__59972__$1 = cljs.core.__destructure_map(map__59972);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59972__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59972__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59972__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq59970){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59970));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62058 = arguments.length;
var i__4819__auto___62059 = (0);
while(true){
if((i__4819__auto___62059 < len__4818__auto___62058)){
args__4824__auto__.push((arguments[i__4819__auto___62059]));

var G__62060 = (i__4819__auto___62059 + (1));
i__4819__auto___62059 = G__62060;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59976 = conformed_args__58342__auto__;
var map__59976__$1 = cljs.core.__destructure_map(map__59976);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59976__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59976__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59976__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq59974){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59974));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62061 = arguments.length;
var i__4819__auto___62062 = (0);
while(true){
if((i__4819__auto___62062 < len__4818__auto___62061)){
args__4824__auto__.push((arguments[i__4819__auto___62062]));

var G__62063 = (i__4819__auto___62062 + (1));
i__4819__auto___62062 = G__62063;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59981 = conformed_args__58342__auto__;
var map__59981__$1 = cljs.core.__destructure_map(map__59981);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59981__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59981__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59981__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq59979){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59979));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62064 = arguments.length;
var i__4819__auto___62065 = (0);
while(true){
if((i__4819__auto___62065 < len__4818__auto___62064)){
args__4824__auto__.push((arguments[i__4819__auto___62065]));

var G__62066 = (i__4819__auto___62065 + (1));
i__4819__auto___62065 = G__62066;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59986 = conformed_args__58342__auto__;
var map__59986__$1 = cljs.core.__destructure_map(map__59986);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59986__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59986__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59986__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq59984){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59984));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62068 = arguments.length;
var i__4819__auto___62069 = (0);
while(true){
if((i__4819__auto___62069 < len__4818__auto___62068)){
args__4824__auto__.push((arguments[i__4819__auto___62069]));

var G__62070 = (i__4819__auto___62069 + (1));
i__4819__auto___62069 = G__62070;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59991 = conformed_args__58342__auto__;
var map__59991__$1 = cljs.core.__destructure_map(map__59991);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59991__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59991__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59991__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq59989){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59989));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62071 = arguments.length;
var i__4819__auto___62072 = (0);
while(true){
if((i__4819__auto___62072 < len__4818__auto___62071)){
args__4824__auto__.push((arguments[i__4819__auto___62072]));

var G__62073 = (i__4819__auto___62072 + (1));
i__4819__auto___62072 = G__62073;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59996 = conformed_args__58342__auto__;
var map__59996__$1 = cljs.core.__destructure_map(map__59996);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59996__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59996__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59996__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq59994){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59994));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62074 = arguments.length;
var i__4819__auto___62075 = (0);
while(true){
if((i__4819__auto___62075 < len__4818__auto___62074)){
args__4824__auto__.push((arguments[i__4819__auto___62075]));

var G__62076 = (i__4819__auto___62075 + (1));
i__4819__auto___62075 = G__62076;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60001 = conformed_args__58342__auto__;
var map__60001__$1 = cljs.core.__destructure_map(map__60001);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60001__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60001__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60001__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq59999){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59999));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62078 = arguments.length;
var i__4819__auto___62079 = (0);
while(true){
if((i__4819__auto___62079 < len__4818__auto___62078)){
args__4824__auto__.push((arguments[i__4819__auto___62079]));

var G__62080 = (i__4819__auto___62079 + (1));
i__4819__auto___62079 = G__62080;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60007 = conformed_args__58342__auto__;
var map__60007__$1 = cljs.core.__destructure_map(map__60007);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60007__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60007__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60007__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq60004){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60004));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62081 = arguments.length;
var i__4819__auto___62082 = (0);
while(true){
if((i__4819__auto___62082 < len__4818__auto___62081)){
args__4824__auto__.push((arguments[i__4819__auto___62082]));

var G__62083 = (i__4819__auto___62082 + (1));
i__4819__auto___62082 = G__62083;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60012 = conformed_args__58342__auto__;
var map__60012__$1 = cljs.core.__destructure_map(map__60012);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60012__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60012__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60012__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq60009){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60009));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62084 = arguments.length;
var i__4819__auto___62085 = (0);
while(true){
if((i__4819__auto___62085 < len__4818__auto___62084)){
args__4824__auto__.push((arguments[i__4819__auto___62085]));

var G__62086 = (i__4819__auto___62085 + (1));
i__4819__auto___62085 = G__62086;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60016 = conformed_args__58342__auto__;
var map__60016__$1 = cljs.core.__destructure_map(map__60016);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60016__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60016__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60016__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq60014){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60014));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62088 = arguments.length;
var i__4819__auto___62089 = (0);
while(true){
if((i__4819__auto___62089 < len__4818__auto___62088)){
args__4824__auto__.push((arguments[i__4819__auto___62089]));

var G__62090 = (i__4819__auto___62089 + (1));
i__4819__auto___62089 = G__62090;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60018 = conformed_args__58342__auto__;
var map__60018__$1 = cljs.core.__destructure_map(map__60018);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60018__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60018__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60018__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq60017){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60017));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62091 = arguments.length;
var i__4819__auto___62092 = (0);
while(true){
if((i__4819__auto___62092 < len__4818__auto___62091)){
args__4824__auto__.push((arguments[i__4819__auto___62092]));

var G__62093 = (i__4819__auto___62092 + (1));
i__4819__auto___62092 = G__62093;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60020 = conformed_args__58342__auto__;
var map__60020__$1 = cljs.core.__destructure_map(map__60020);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60020__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60020__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60020__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq60019){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60019));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62094 = arguments.length;
var i__4819__auto___62095 = (0);
while(true){
if((i__4819__auto___62095 < len__4818__auto___62094)){
args__4824__auto__.push((arguments[i__4819__auto___62095]));

var G__62096 = (i__4819__auto___62095 + (1));
i__4819__auto___62095 = G__62096;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60026 = conformed_args__58342__auto__;
var map__60026__$1 = cljs.core.__destructure_map(map__60026);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60026__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60026__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60026__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq60023){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60023));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62098 = arguments.length;
var i__4819__auto___62099 = (0);
while(true){
if((i__4819__auto___62099 < len__4818__auto___62098)){
args__4824__auto__.push((arguments[i__4819__auto___62099]));

var G__62100 = (i__4819__auto___62099 + (1));
i__4819__auto___62099 = G__62100;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60032 = conformed_args__58342__auto__;
var map__60032__$1 = cljs.core.__destructure_map(map__60032);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60032__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60032__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60032__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq60031){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60031));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62101 = arguments.length;
var i__4819__auto___62102 = (0);
while(true){
if((i__4819__auto___62102 < len__4818__auto___62101)){
args__4824__auto__.push((arguments[i__4819__auto___62102]));

var G__62103 = (i__4819__auto___62102 + (1));
i__4819__auto___62102 = G__62103;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60078 = conformed_args__58342__auto__;
var map__60078__$1 = cljs.core.__destructure_map(map__60078);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60078__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60078__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60078__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq60055){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60055));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62105 = arguments.length;
var i__4819__auto___62106 = (0);
while(true){
if((i__4819__auto___62106 < len__4818__auto___62105)){
args__4824__auto__.push((arguments[i__4819__auto___62106]));

var G__62107 = (i__4819__auto___62106 + (1));
i__4819__auto___62106 = G__62107;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60094 = conformed_args__58342__auto__;
var map__60094__$1 = cljs.core.__destructure_map(map__60094);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60094__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60094__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60094__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq60090){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60090));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62108 = arguments.length;
var i__4819__auto___62109 = (0);
while(true){
if((i__4819__auto___62109 < len__4818__auto___62108)){
args__4824__auto__.push((arguments[i__4819__auto___62109]));

var G__62110 = (i__4819__auto___62109 + (1));
i__4819__auto___62109 = G__62110;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60107 = conformed_args__58342__auto__;
var map__60107__$1 = cljs.core.__destructure_map(map__60107);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60107__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60107__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60107__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq60097){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60097));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62111 = arguments.length;
var i__4819__auto___62112 = (0);
while(true){
if((i__4819__auto___62112 < len__4818__auto___62111)){
args__4824__auto__.push((arguments[i__4819__auto___62112]));

var G__62113 = (i__4819__auto___62112 + (1));
i__4819__auto___62112 = G__62113;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60149 = conformed_args__58342__auto__;
var map__60149__$1 = cljs.core.__destructure_map(map__60149);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60149__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60149__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60149__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq60124){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60124));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62120 = arguments.length;
var i__4819__auto___62121 = (0);
while(true){
if((i__4819__auto___62121 < len__4818__auto___62120)){
args__4824__auto__.push((arguments[i__4819__auto___62121]));

var G__62122 = (i__4819__auto___62121 + (1));
i__4819__auto___62121 = G__62122;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60158 = conformed_args__58342__auto__;
var map__60158__$1 = cljs.core.__destructure_map(map__60158);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60158__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60158__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60158__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq60153){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60153));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62123 = arguments.length;
var i__4819__auto___62124 = (0);
while(true){
if((i__4819__auto___62124 < len__4818__auto___62123)){
args__4824__auto__.push((arguments[i__4819__auto___62124]));

var G__62125 = (i__4819__auto___62124 + (1));
i__4819__auto___62124 = G__62125;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60173 = conformed_args__58342__auto__;
var map__60173__$1 = cljs.core.__destructure_map(map__60173);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60173__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60173__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60173__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq60163){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60163));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62127 = arguments.length;
var i__4819__auto___62128 = (0);
while(true){
if((i__4819__auto___62128 < len__4818__auto___62127)){
args__4824__auto__.push((arguments[i__4819__auto___62128]));

var G__62129 = (i__4819__auto___62128 + (1));
i__4819__auto___62128 = G__62129;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60177 = conformed_args__58342__auto__;
var map__60177__$1 = cljs.core.__destructure_map(map__60177);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60177__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60177__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60177__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq60175){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60175));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62132 = arguments.length;
var i__4819__auto___62133 = (0);
while(true){
if((i__4819__auto___62133 < len__4818__auto___62132)){
args__4824__auto__.push((arguments[i__4819__auto___62133]));

var G__62134 = (i__4819__auto___62133 + (1));
i__4819__auto___62133 = G__62134;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60183 = conformed_args__58342__auto__;
var map__60183__$1 = cljs.core.__destructure_map(map__60183);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60183__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60183__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60183__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq60182){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60182));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62135 = arguments.length;
var i__4819__auto___62136 = (0);
while(true){
if((i__4819__auto___62136 < len__4818__auto___62135)){
args__4824__auto__.push((arguments[i__4819__auto___62136]));

var G__62137 = (i__4819__auto___62136 + (1));
i__4819__auto___62136 = G__62137;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60189 = conformed_args__58342__auto__;
var map__60189__$1 = cljs.core.__destructure_map(map__60189);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60189__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60189__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60189__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq60187){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60187));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62138 = arguments.length;
var i__4819__auto___62139 = (0);
while(true){
if((i__4819__auto___62139 < len__4818__auto___62138)){
args__4824__auto__.push((arguments[i__4819__auto___62139]));

var G__62140 = (i__4819__auto___62139 + (1));
i__4819__auto___62139 = G__62140;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60219 = conformed_args__58342__auto__;
var map__60219__$1 = cljs.core.__destructure_map(map__60219);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60219__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60219__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60219__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq60215){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60215));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62141 = arguments.length;
var i__4819__auto___62142 = (0);
while(true){
if((i__4819__auto___62142 < len__4818__auto___62141)){
args__4824__auto__.push((arguments[i__4819__auto___62142]));

var G__62143 = (i__4819__auto___62142 + (1));
i__4819__auto___62142 = G__62143;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60241 = conformed_args__58342__auto__;
var map__60241__$1 = cljs.core.__destructure_map(map__60241);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60241__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60241__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60241__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq60230){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60230));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62144 = arguments.length;
var i__4819__auto___62145 = (0);
while(true){
if((i__4819__auto___62145 < len__4818__auto___62144)){
args__4824__auto__.push((arguments[i__4819__auto___62145]));

var G__62146 = (i__4819__auto___62145 + (1));
i__4819__auto___62145 = G__62146;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60259 = conformed_args__58342__auto__;
var map__60259__$1 = cljs.core.__destructure_map(map__60259);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60259__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60259__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60259__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq60249){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60249));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62147 = arguments.length;
var i__4819__auto___62148 = (0);
while(true){
if((i__4819__auto___62148 < len__4818__auto___62147)){
args__4824__auto__.push((arguments[i__4819__auto___62148]));

var G__62149 = (i__4819__auto___62148 + (1));
i__4819__auto___62148 = G__62149;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60298 = conformed_args__58342__auto__;
var map__60298__$1 = cljs.core.__destructure_map(map__60298);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60298__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60298__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60298__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq60286){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60286));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62150 = arguments.length;
var i__4819__auto___62151 = (0);
while(true){
if((i__4819__auto___62151 < len__4818__auto___62150)){
args__4824__auto__.push((arguments[i__4819__auto___62151]));

var G__62152 = (i__4819__auto___62151 + (1));
i__4819__auto___62151 = G__62152;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60304 = conformed_args__58342__auto__;
var map__60304__$1 = cljs.core.__destructure_map(map__60304);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60304__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60304__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60304__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq60300){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60300));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62153 = arguments.length;
var i__4819__auto___62154 = (0);
while(true){
if((i__4819__auto___62154 < len__4818__auto___62153)){
args__4824__auto__.push((arguments[i__4819__auto___62154]));

var G__62155 = (i__4819__auto___62154 + (1));
i__4819__auto___62154 = G__62155;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60325 = conformed_args__58342__auto__;
var map__60325__$1 = cljs.core.__destructure_map(map__60325);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60325__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60325__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60325__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq60317){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60317));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62156 = arguments.length;
var i__4819__auto___62157 = (0);
while(true){
if((i__4819__auto___62157 < len__4818__auto___62156)){
args__4824__auto__.push((arguments[i__4819__auto___62157]));

var G__62158 = (i__4819__auto___62157 + (1));
i__4819__auto___62157 = G__62158;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60359 = conformed_args__58342__auto__;
var map__60359__$1 = cljs.core.__destructure_map(map__60359);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60359__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60359__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60359__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq60337){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60337));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62159 = arguments.length;
var i__4819__auto___62160 = (0);
while(true){
if((i__4819__auto___62160 < len__4818__auto___62159)){
args__4824__auto__.push((arguments[i__4819__auto___62160]));

var G__62161 = (i__4819__auto___62160 + (1));
i__4819__auto___62160 = G__62161;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60410 = conformed_args__58342__auto__;
var map__60410__$1 = cljs.core.__destructure_map(map__60410);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60410__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60410__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60410__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq60376){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60376));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62162 = arguments.length;
var i__4819__auto___62163 = (0);
while(true){
if((i__4819__auto___62163 < len__4818__auto___62162)){
args__4824__auto__.push((arguments[i__4819__auto___62163]));

var G__62164 = (i__4819__auto___62163 + (1));
i__4819__auto___62163 = G__62164;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60466 = conformed_args__58342__auto__;
var map__60466__$1 = cljs.core.__destructure_map(map__60466);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60466__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60466__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60466__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq60433){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60433));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62165 = arguments.length;
var i__4819__auto___62166 = (0);
while(true){
if((i__4819__auto___62166 < len__4818__auto___62165)){
args__4824__auto__.push((arguments[i__4819__auto___62166]));

var G__62167 = (i__4819__auto___62166 + (1));
i__4819__auto___62166 = G__62167;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60488 = conformed_args__58342__auto__;
var map__60488__$1 = cljs.core.__destructure_map(map__60488);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60488__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60488__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60488__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq60477){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60477));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62168 = arguments.length;
var i__4819__auto___62169 = (0);
while(true){
if((i__4819__auto___62169 < len__4818__auto___62168)){
args__4824__auto__.push((arguments[i__4819__auto___62169]));

var G__62170 = (i__4819__auto___62169 + (1));
i__4819__auto___62169 = G__62170;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60506 = conformed_args__58342__auto__;
var map__60506__$1 = cljs.core.__destructure_map(map__60506);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60506__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60506__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60506__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq60496){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60496));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62171 = arguments.length;
var i__4819__auto___62172 = (0);
while(true){
if((i__4819__auto___62172 < len__4818__auto___62171)){
args__4824__auto__.push((arguments[i__4819__auto___62172]));

var G__62173 = (i__4819__auto___62172 + (1));
i__4819__auto___62172 = G__62173;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60524 = conformed_args__58342__auto__;
var map__60524__$1 = cljs.core.__destructure_map(map__60524);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60524__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60524__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60524__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq60515){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60515));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62174 = arguments.length;
var i__4819__auto___62175 = (0);
while(true){
if((i__4819__auto___62175 < len__4818__auto___62174)){
args__4824__auto__.push((arguments[i__4819__auto___62175]));

var G__62176 = (i__4819__auto___62175 + (1));
i__4819__auto___62175 = G__62176;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60556 = conformed_args__58342__auto__;
var map__60556__$1 = cljs.core.__destructure_map(map__60556);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60556__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60556__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60556__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq60537){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60537));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62177 = arguments.length;
var i__4819__auto___62178 = (0);
while(true){
if((i__4819__auto___62178 < len__4818__auto___62177)){
args__4824__auto__.push((arguments[i__4819__auto___62178]));

var G__62179 = (i__4819__auto___62178 + (1));
i__4819__auto___62178 = G__62179;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60578 = conformed_args__58342__auto__;
var map__60578__$1 = cljs.core.__destructure_map(map__60578);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60578__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60578__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60578__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq60568){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60568));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62180 = arguments.length;
var i__4819__auto___62181 = (0);
while(true){
if((i__4819__auto___62181 < len__4818__auto___62180)){
args__4824__auto__.push((arguments[i__4819__auto___62181]));

var G__62182 = (i__4819__auto___62181 + (1));
i__4819__auto___62181 = G__62182;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60603 = conformed_args__58342__auto__;
var map__60603__$1 = cljs.core.__destructure_map(map__60603);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60603__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60603__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60603__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq60602){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60602));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62183 = arguments.length;
var i__4819__auto___62184 = (0);
while(true){
if((i__4819__auto___62184 < len__4818__auto___62183)){
args__4824__auto__.push((arguments[i__4819__auto___62184]));

var G__62185 = (i__4819__auto___62184 + (1));
i__4819__auto___62184 = G__62185;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60620 = conformed_args__58342__auto__;
var map__60620__$1 = cljs.core.__destructure_map(map__60620);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60620__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60620__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60620__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq60618){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60618));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62186 = arguments.length;
var i__4819__auto___62187 = (0);
while(true){
if((i__4819__auto___62187 < len__4818__auto___62186)){
args__4824__auto__.push((arguments[i__4819__auto___62187]));

var G__62188 = (i__4819__auto___62187 + (1));
i__4819__auto___62187 = G__62188;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60627 = conformed_args__58342__auto__;
var map__60627__$1 = cljs.core.__destructure_map(map__60627);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60627__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60627__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60627__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq60624){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60624));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62189 = arguments.length;
var i__4819__auto___62190 = (0);
while(true){
if((i__4819__auto___62190 < len__4818__auto___62189)){
args__4824__auto__.push((arguments[i__4819__auto___62190]));

var G__62191 = (i__4819__auto___62190 + (1));
i__4819__auto___62190 = G__62191;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60639 = conformed_args__58342__auto__;
var map__60639__$1 = cljs.core.__destructure_map(map__60639);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60639__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60639__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60639__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq60638){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60638));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62192 = arguments.length;
var i__4819__auto___62193 = (0);
while(true){
if((i__4819__auto___62193 < len__4818__auto___62192)){
args__4824__auto__.push((arguments[i__4819__auto___62193]));

var G__62194 = (i__4819__auto___62193 + (1));
i__4819__auto___62193 = G__62194;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60650 = conformed_args__58342__auto__;
var map__60650__$1 = cljs.core.__destructure_map(map__60650);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60650__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60650__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60650__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq60645){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60645));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62195 = arguments.length;
var i__4819__auto___62196 = (0);
while(true){
if((i__4819__auto___62196 < len__4818__auto___62195)){
args__4824__auto__.push((arguments[i__4819__auto___62196]));

var G__62197 = (i__4819__auto___62196 + (1));
i__4819__auto___62196 = G__62197;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60665 = conformed_args__58342__auto__;
var map__60665__$1 = cljs.core.__destructure_map(map__60665);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60665__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60665__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60665__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq60658){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60658));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62198 = arguments.length;
var i__4819__auto___62199 = (0);
while(true){
if((i__4819__auto___62199 < len__4818__auto___62198)){
args__4824__auto__.push((arguments[i__4819__auto___62199]));

var G__62200 = (i__4819__auto___62199 + (1));
i__4819__auto___62199 = G__62200;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60674 = conformed_args__58342__auto__;
var map__60674__$1 = cljs.core.__destructure_map(map__60674);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60674__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60674__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60674__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq60671){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60671));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62201 = arguments.length;
var i__4819__auto___62202 = (0);
while(true){
if((i__4819__auto___62202 < len__4818__auto___62201)){
args__4824__auto__.push((arguments[i__4819__auto___62202]));

var G__62203 = (i__4819__auto___62202 + (1));
i__4819__auto___62202 = G__62203;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60695 = conformed_args__58342__auto__;
var map__60695__$1 = cljs.core.__destructure_map(map__60695);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60695__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60695__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60695__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq60683){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60683));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62204 = arguments.length;
var i__4819__auto___62205 = (0);
while(true){
if((i__4819__auto___62205 < len__4818__auto___62204)){
args__4824__auto__.push((arguments[i__4819__auto___62205]));

var G__62206 = (i__4819__auto___62205 + (1));
i__4819__auto___62205 = G__62206;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60713 = conformed_args__58342__auto__;
var map__60713__$1 = cljs.core.__destructure_map(map__60713);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60713__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60713__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60713__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq60705){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60705));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62207 = arguments.length;
var i__4819__auto___62208 = (0);
while(true){
if((i__4819__auto___62208 < len__4818__auto___62207)){
args__4824__auto__.push((arguments[i__4819__auto___62208]));

var G__62209 = (i__4819__auto___62208 + (1));
i__4819__auto___62208 = G__62209;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60725 = conformed_args__58342__auto__;
var map__60725__$1 = cljs.core.__destructure_map(map__60725);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60725__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60725__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60725__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq60723){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60723));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62210 = arguments.length;
var i__4819__auto___62211 = (0);
while(true){
if((i__4819__auto___62211 < len__4818__auto___62210)){
args__4824__auto__.push((arguments[i__4819__auto___62211]));

var G__62212 = (i__4819__auto___62211 + (1));
i__4819__auto___62211 = G__62212;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60740 = conformed_args__58342__auto__;
var map__60740__$1 = cljs.core.__destructure_map(map__60740);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60740__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60740__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60740__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq60729){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60729));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62213 = arguments.length;
var i__4819__auto___62214 = (0);
while(true){
if((i__4819__auto___62214 < len__4818__auto___62213)){
args__4824__auto__.push((arguments[i__4819__auto___62214]));

var G__62215 = (i__4819__auto___62214 + (1));
i__4819__auto___62214 = G__62215;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60756 = conformed_args__58342__auto__;
var map__60756__$1 = cljs.core.__destructure_map(map__60756);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60756__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60756__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60756__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq60743){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60743));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62216 = arguments.length;
var i__4819__auto___62217 = (0);
while(true){
if((i__4819__auto___62217 < len__4818__auto___62216)){
args__4824__auto__.push((arguments[i__4819__auto___62217]));

var G__62218 = (i__4819__auto___62217 + (1));
i__4819__auto___62217 = G__62218;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60771 = conformed_args__58342__auto__;
var map__60771__$1 = cljs.core.__destructure_map(map__60771);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60771__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60771__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60771__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq60768){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60768));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62219 = arguments.length;
var i__4819__auto___62220 = (0);
while(true){
if((i__4819__auto___62220 < len__4818__auto___62219)){
args__4824__auto__.push((arguments[i__4819__auto___62220]));

var G__62221 = (i__4819__auto___62220 + (1));
i__4819__auto___62220 = G__62221;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60782 = conformed_args__58342__auto__;
var map__60782__$1 = cljs.core.__destructure_map(map__60782);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60782__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60782__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60782__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq60777){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60777));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62222 = arguments.length;
var i__4819__auto___62223 = (0);
while(true){
if((i__4819__auto___62223 < len__4818__auto___62222)){
args__4824__auto__.push((arguments[i__4819__auto___62223]));

var G__62224 = (i__4819__auto___62223 + (1));
i__4819__auto___62223 = G__62224;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60790 = conformed_args__58342__auto__;
var map__60790__$1 = cljs.core.__destructure_map(map__60790);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60790__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60790__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60790__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq60786){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60786));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62225 = arguments.length;
var i__4819__auto___62226 = (0);
while(true){
if((i__4819__auto___62226 < len__4818__auto___62225)){
args__4824__auto__.push((arguments[i__4819__auto___62226]));

var G__62227 = (i__4819__auto___62226 + (1));
i__4819__auto___62226 = G__62227;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60803 = conformed_args__58342__auto__;
var map__60803__$1 = cljs.core.__destructure_map(map__60803);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60803__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60803__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60803__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq60796){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60796));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62228 = arguments.length;
var i__4819__auto___62229 = (0);
while(true){
if((i__4819__auto___62229 < len__4818__auto___62228)){
args__4824__auto__.push((arguments[i__4819__auto___62229]));

var G__62230 = (i__4819__auto___62229 + (1));
i__4819__auto___62229 = G__62230;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60816 = conformed_args__58342__auto__;
var map__60816__$1 = cljs.core.__destructure_map(map__60816);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60816__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60816__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60816__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq60809){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60809));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62231 = arguments.length;
var i__4819__auto___62232 = (0);
while(true){
if((i__4819__auto___62232 < len__4818__auto___62231)){
args__4824__auto__.push((arguments[i__4819__auto___62232]));

var G__62233 = (i__4819__auto___62232 + (1));
i__4819__auto___62232 = G__62233;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60829 = conformed_args__58342__auto__;
var map__60829__$1 = cljs.core.__destructure_map(map__60829);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60829__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60829__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60829__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq60828){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60828));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62234 = arguments.length;
var i__4819__auto___62235 = (0);
while(true){
if((i__4819__auto___62235 < len__4818__auto___62234)){
args__4824__auto__.push((arguments[i__4819__auto___62235]));

var G__62236 = (i__4819__auto___62235 + (1));
i__4819__auto___62235 = G__62236;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60833 = conformed_args__58342__auto__;
var map__60833__$1 = cljs.core.__destructure_map(map__60833);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60833__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60833__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60833__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq60831){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60831));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62237 = arguments.length;
var i__4819__auto___62238 = (0);
while(true){
if((i__4819__auto___62238 < len__4818__auto___62237)){
args__4824__auto__.push((arguments[i__4819__auto___62238]));

var G__62239 = (i__4819__auto___62238 + (1));
i__4819__auto___62238 = G__62239;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60843 = conformed_args__58342__auto__;
var map__60843__$1 = cljs.core.__destructure_map(map__60843);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60843__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60843__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60843__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq60835){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60835));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62240 = arguments.length;
var i__4819__auto___62241 = (0);
while(true){
if((i__4819__auto___62241 < len__4818__auto___62240)){
args__4824__auto__.push((arguments[i__4819__auto___62241]));

var G__62242 = (i__4819__auto___62241 + (1));
i__4819__auto___62241 = G__62242;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60855 = conformed_args__58342__auto__;
var map__60855__$1 = cljs.core.__destructure_map(map__60855);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60855__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60855__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60855__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq60848){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60848));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62243 = arguments.length;
var i__4819__auto___62244 = (0);
while(true){
if((i__4819__auto___62244 < len__4818__auto___62243)){
args__4824__auto__.push((arguments[i__4819__auto___62244]));

var G__62245 = (i__4819__auto___62244 + (1));
i__4819__auto___62244 = G__62245;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60866 = conformed_args__58342__auto__;
var map__60866__$1 = cljs.core.__destructure_map(map__60866);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60866__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60866__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60866__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq60858){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60858));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62246 = arguments.length;
var i__4819__auto___62247 = (0);
while(true){
if((i__4819__auto___62247 < len__4818__auto___62246)){
args__4824__auto__.push((arguments[i__4819__auto___62247]));

var G__62248 = (i__4819__auto___62247 + (1));
i__4819__auto___62247 = G__62248;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60877 = conformed_args__58342__auto__;
var map__60877__$1 = cljs.core.__destructure_map(map__60877);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60877__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60877__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60877__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq60870){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60870));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62249 = arguments.length;
var i__4819__auto___62250 = (0);
while(true){
if((i__4819__auto___62250 < len__4818__auto___62249)){
args__4824__auto__.push((arguments[i__4819__auto___62250]));

var G__62251 = (i__4819__auto___62250 + (1));
i__4819__auto___62250 = G__62251;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60888 = conformed_args__58342__auto__;
var map__60888__$1 = cljs.core.__destructure_map(map__60888);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60888__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60888__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60888__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq60879){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60879));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62252 = arguments.length;
var i__4819__auto___62253 = (0);
while(true){
if((i__4819__auto___62253 < len__4818__auto___62252)){
args__4824__auto__.push((arguments[i__4819__auto___62253]));

var G__62254 = (i__4819__auto___62253 + (1));
i__4819__auto___62253 = G__62254;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60896 = conformed_args__58342__auto__;
var map__60896__$1 = cljs.core.__destructure_map(map__60896);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60896__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60896__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60896__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq60890){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60890));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62255 = arguments.length;
var i__4819__auto___62256 = (0);
while(true){
if((i__4819__auto___62256 < len__4818__auto___62255)){
args__4824__auto__.push((arguments[i__4819__auto___62256]));

var G__62257 = (i__4819__auto___62256 + (1));
i__4819__auto___62256 = G__62257;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60903 = conformed_args__58342__auto__;
var map__60903__$1 = cljs.core.__destructure_map(map__60903);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60903__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60903__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60903__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq60902){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60902));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62258 = arguments.length;
var i__4819__auto___62259 = (0);
while(true){
if((i__4819__auto___62259 < len__4818__auto___62258)){
args__4824__auto__.push((arguments[i__4819__auto___62259]));

var G__62260 = (i__4819__auto___62259 + (1));
i__4819__auto___62259 = G__62260;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60914 = conformed_args__58342__auto__;
var map__60914__$1 = cljs.core.__destructure_map(map__60914);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60914__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60914__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60914__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq60905){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60905));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62261 = arguments.length;
var i__4819__auto___62262 = (0);
while(true){
if((i__4819__auto___62262 < len__4818__auto___62261)){
args__4824__auto__.push((arguments[i__4819__auto___62262]));

var G__62263 = (i__4819__auto___62262 + (1));
i__4819__auto___62262 = G__62263;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60925 = conformed_args__58342__auto__;
var map__60925__$1 = cljs.core.__destructure_map(map__60925);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60925__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60925__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60925__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq60919){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60919));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62264 = arguments.length;
var i__4819__auto___62265 = (0);
while(true){
if((i__4819__auto___62265 < len__4818__auto___62264)){
args__4824__auto__.push((arguments[i__4819__auto___62265]));

var G__62266 = (i__4819__auto___62265 + (1));
i__4819__auto___62265 = G__62266;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60934 = conformed_args__58342__auto__;
var map__60934__$1 = cljs.core.__destructure_map(map__60934);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60934__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60934__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60934__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq60928){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60928));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62267 = arguments.length;
var i__4819__auto___62268 = (0);
while(true){
if((i__4819__auto___62268 < len__4818__auto___62267)){
args__4824__auto__.push((arguments[i__4819__auto___62268]));

var G__62269 = (i__4819__auto___62268 + (1));
i__4819__auto___62268 = G__62269;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60943 = conformed_args__58342__auto__;
var map__60943__$1 = cljs.core.__destructure_map(map__60943);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60943__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60943__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60943__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq60937){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60937));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62270 = arguments.length;
var i__4819__auto___62271 = (0);
while(true){
if((i__4819__auto___62271 < len__4818__auto___62270)){
args__4824__auto__.push((arguments[i__4819__auto___62271]));

var G__62272 = (i__4819__auto___62271 + (1));
i__4819__auto___62271 = G__62272;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60948 = conformed_args__58342__auto__;
var map__60948__$1 = cljs.core.__destructure_map(map__60948);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60948__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60948__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60948__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq60946){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60946));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62273 = arguments.length;
var i__4819__auto___62274 = (0);
while(true){
if((i__4819__auto___62274 < len__4818__auto___62273)){
args__4824__auto__.push((arguments[i__4819__auto___62274]));

var G__62275 = (i__4819__auto___62274 + (1));
i__4819__auto___62274 = G__62275;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60957 = conformed_args__58342__auto__;
var map__60957__$1 = cljs.core.__destructure_map(map__60957);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60957__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60957__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60957__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq60952){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60952));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62276 = arguments.length;
var i__4819__auto___62277 = (0);
while(true){
if((i__4819__auto___62277 < len__4818__auto___62276)){
args__4824__auto__.push((arguments[i__4819__auto___62277]));

var G__62278 = (i__4819__auto___62277 + (1));
i__4819__auto___62277 = G__62278;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60962 = conformed_args__58342__auto__;
var map__60962__$1 = cljs.core.__destructure_map(map__60962);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60962__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60962__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60962__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq60959){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60959));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62279 = arguments.length;
var i__4819__auto___62280 = (0);
while(true){
if((i__4819__auto___62280 < len__4818__auto___62279)){
args__4824__auto__.push((arguments[i__4819__auto___62280]));

var G__62281 = (i__4819__auto___62280 + (1));
i__4819__auto___62280 = G__62281;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60971 = conformed_args__58342__auto__;
var map__60971__$1 = cljs.core.__destructure_map(map__60971);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60971__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60971__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60971__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq60968){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60968));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62282 = arguments.length;
var i__4819__auto___62283 = (0);
while(true){
if((i__4819__auto___62283 < len__4818__auto___62282)){
args__4824__auto__.push((arguments[i__4819__auto___62283]));

var G__62284 = (i__4819__auto___62283 + (1));
i__4819__auto___62283 = G__62284;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60981 = conformed_args__58342__auto__;
var map__60981__$1 = cljs.core.__destructure_map(map__60981);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60981__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60981__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60981__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq60975){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60975));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62285 = arguments.length;
var i__4819__auto___62286 = (0);
while(true){
if((i__4819__auto___62286 < len__4818__auto___62285)){
args__4824__auto__.push((arguments[i__4819__auto___62286]));

var G__62287 = (i__4819__auto___62286 + (1));
i__4819__auto___62286 = G__62287;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60994 = conformed_args__58342__auto__;
var map__60994__$1 = cljs.core.__destructure_map(map__60994);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60994__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60994__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60994__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq60984){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60984));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62288 = arguments.length;
var i__4819__auto___62289 = (0);
while(true){
if((i__4819__auto___62289 < len__4818__auto___62288)){
args__4824__auto__.push((arguments[i__4819__auto___62289]));

var G__62290 = (i__4819__auto___62289 + (1));
i__4819__auto___62289 = G__62290;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61011 = conformed_args__58342__auto__;
var map__61011__$1 = cljs.core.__destructure_map(map__61011);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61011__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61011__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61011__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq61002){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61002));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62291 = arguments.length;
var i__4819__auto___62292 = (0);
while(true){
if((i__4819__auto___62292 < len__4818__auto___62291)){
args__4824__auto__.push((arguments[i__4819__auto___62292]));

var G__62293 = (i__4819__auto___62292 + (1));
i__4819__auto___62292 = G__62293;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61020 = conformed_args__58342__auto__;
var map__61020__$1 = cljs.core.__destructure_map(map__61020);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61020__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61020__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61020__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq61015){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61015));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62294 = arguments.length;
var i__4819__auto___62295 = (0);
while(true){
if((i__4819__auto___62295 < len__4818__auto___62294)){
args__4824__auto__.push((arguments[i__4819__auto___62295]));

var G__62296 = (i__4819__auto___62295 + (1));
i__4819__auto___62295 = G__62296;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61030 = conformed_args__58342__auto__;
var map__61030__$1 = cljs.core.__destructure_map(map__61030);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61030__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61030__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61030__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq61024){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61024));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62297 = arguments.length;
var i__4819__auto___62298 = (0);
while(true){
if((i__4819__auto___62298 < len__4818__auto___62297)){
args__4824__auto__.push((arguments[i__4819__auto___62298]));

var G__62299 = (i__4819__auto___62298 + (1));
i__4819__auto___62298 = G__62299;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61039 = conformed_args__58342__auto__;
var map__61039__$1 = cljs.core.__destructure_map(map__61039);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61039__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61039__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61039__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq61033){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61033));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62300 = arguments.length;
var i__4819__auto___62301 = (0);
while(true){
if((i__4819__auto___62301 < len__4818__auto___62300)){
args__4824__auto__.push((arguments[i__4819__auto___62301]));

var G__62302 = (i__4819__auto___62301 + (1));
i__4819__auto___62301 = G__62302;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61047 = conformed_args__58342__auto__;
var map__61047__$1 = cljs.core.__destructure_map(map__61047);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61047__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61047__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61047__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq61043){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61043));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62303 = arguments.length;
var i__4819__auto___62304 = (0);
while(true){
if((i__4819__auto___62304 < len__4818__auto___62303)){
args__4824__auto__.push((arguments[i__4819__auto___62304]));

var G__62305 = (i__4819__auto___62304 + (1));
i__4819__auto___62304 = G__62305;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61057 = conformed_args__58342__auto__;
var map__61057__$1 = cljs.core.__destructure_map(map__61057);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61057__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61057__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61057__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq61053){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61053));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62306 = arguments.length;
var i__4819__auto___62307 = (0);
while(true){
if((i__4819__auto___62307 < len__4818__auto___62306)){
args__4824__auto__.push((arguments[i__4819__auto___62307]));

var G__62308 = (i__4819__auto___62307 + (1));
i__4819__auto___62307 = G__62308;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61067 = conformed_args__58342__auto__;
var map__61067__$1 = cljs.core.__destructure_map(map__61067);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61067__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61067__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61067__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq61061){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61061));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62309 = arguments.length;
var i__4819__auto___62310 = (0);
while(true){
if((i__4819__auto___62310 < len__4818__auto___62309)){
args__4824__auto__.push((arguments[i__4819__auto___62310]));

var G__62311 = (i__4819__auto___62310 + (1));
i__4819__auto___62310 = G__62311;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61074 = conformed_args__58342__auto__;
var map__61074__$1 = cljs.core.__destructure_map(map__61074);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61074__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61074__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61074__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq61073){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61073));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62312 = arguments.length;
var i__4819__auto___62313 = (0);
while(true){
if((i__4819__auto___62313 < len__4818__auto___62312)){
args__4824__auto__.push((arguments[i__4819__auto___62313]));

var G__62314 = (i__4819__auto___62313 + (1));
i__4819__auto___62313 = G__62314;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61088 = conformed_args__58342__auto__;
var map__61088__$1 = cljs.core.__destructure_map(map__61088);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61088__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61088__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61088__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq61080){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61080));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62315 = arguments.length;
var i__4819__auto___62316 = (0);
while(true){
if((i__4819__auto___62316 < len__4818__auto___62315)){
args__4824__auto__.push((arguments[i__4819__auto___62316]));

var G__62317 = (i__4819__auto___62316 + (1));
i__4819__auto___62316 = G__62317;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61096 = conformed_args__58342__auto__;
var map__61096__$1 = cljs.core.__destructure_map(map__61096);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61096__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61096__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61096__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq61095){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61095));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62318 = arguments.length;
var i__4819__auto___62319 = (0);
while(true){
if((i__4819__auto___62319 < len__4818__auto___62318)){
args__4824__auto__.push((arguments[i__4819__auto___62319]));

var G__62320 = (i__4819__auto___62319 + (1));
i__4819__auto___62319 = G__62320;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61108 = conformed_args__58342__auto__;
var map__61108__$1 = cljs.core.__destructure_map(map__61108);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61108__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61108__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61108__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq61102){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61102));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62321 = arguments.length;
var i__4819__auto___62322 = (0);
while(true){
if((i__4819__auto___62322 < len__4818__auto___62321)){
args__4824__auto__.push((arguments[i__4819__auto___62322]));

var G__62323 = (i__4819__auto___62322 + (1));
i__4819__auto___62322 = G__62323;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61115 = conformed_args__58342__auto__;
var map__61115__$1 = cljs.core.__destructure_map(map__61115);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61115__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61115__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61115__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq61111){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61111));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62324 = arguments.length;
var i__4819__auto___62325 = (0);
while(true){
if((i__4819__auto___62325 < len__4818__auto___62324)){
args__4824__auto__.push((arguments[i__4819__auto___62325]));

var G__62326 = (i__4819__auto___62325 + (1));
i__4819__auto___62325 = G__62326;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61135 = conformed_args__58342__auto__;
var map__61135__$1 = cljs.core.__destructure_map(map__61135);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61135__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61135__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61135__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq61118){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61118));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62327 = arguments.length;
var i__4819__auto___62328 = (0);
while(true){
if((i__4819__auto___62328 < len__4818__auto___62327)){
args__4824__auto__.push((arguments[i__4819__auto___62328]));

var G__62329 = (i__4819__auto___62328 + (1));
i__4819__auto___62328 = G__62329;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61147 = conformed_args__58342__auto__;
var map__61147__$1 = cljs.core.__destructure_map(map__61147);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61147__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61147__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61147__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq61142){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61142));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62330 = arguments.length;
var i__4819__auto___62331 = (0);
while(true){
if((i__4819__auto___62331 < len__4818__auto___62330)){
args__4824__auto__.push((arguments[i__4819__auto___62331]));

var G__62332 = (i__4819__auto___62331 + (1));
i__4819__auto___62331 = G__62332;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61162 = conformed_args__58342__auto__;
var map__61162__$1 = cljs.core.__destructure_map(map__61162);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61162__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61162__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61162__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq61154){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61154));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62333 = arguments.length;
var i__4819__auto___62334 = (0);
while(true){
if((i__4819__auto___62334 < len__4818__auto___62333)){
args__4824__auto__.push((arguments[i__4819__auto___62334]));

var G__62335 = (i__4819__auto___62334 + (1));
i__4819__auto___62334 = G__62335;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61175 = conformed_args__58342__auto__;
var map__61175__$1 = cljs.core.__destructure_map(map__61175);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61175__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61175__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61175__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq61171){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61171));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62336 = arguments.length;
var i__4819__auto___62337 = (0);
while(true){
if((i__4819__auto___62337 < len__4818__auto___62336)){
args__4824__auto__.push((arguments[i__4819__auto___62337]));

var G__62338 = (i__4819__auto___62337 + (1));
i__4819__auto___62337 = G__62338;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61182 = conformed_args__58342__auto__;
var map__61182__$1 = cljs.core.__destructure_map(map__61182);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61182__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61182__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61182__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq61177){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61177));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62339 = arguments.length;
var i__4819__auto___62340 = (0);
while(true){
if((i__4819__auto___62340 < len__4818__auto___62339)){
args__4824__auto__.push((arguments[i__4819__auto___62340]));

var G__62341 = (i__4819__auto___62340 + (1));
i__4819__auto___62340 = G__62341;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61190 = conformed_args__58342__auto__;
var map__61190__$1 = cljs.core.__destructure_map(map__61190);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61190__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61190__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61190__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq61184){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61184));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62342 = arguments.length;
var i__4819__auto___62343 = (0);
while(true){
if((i__4819__auto___62343 < len__4818__auto___62342)){
args__4824__auto__.push((arguments[i__4819__auto___62343]));

var G__62344 = (i__4819__auto___62343 + (1));
i__4819__auto___62343 = G__62344;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61195 = conformed_args__58342__auto__;
var map__61195__$1 = cljs.core.__destructure_map(map__61195);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61195__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61195__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61195__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq61193){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61193));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62345 = arguments.length;
var i__4819__auto___62346 = (0);
while(true){
if((i__4819__auto___62346 < len__4818__auto___62345)){
args__4824__auto__.push((arguments[i__4819__auto___62346]));

var G__62347 = (i__4819__auto___62346 + (1));
i__4819__auto___62346 = G__62347;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61200 = conformed_args__58342__auto__;
var map__61200__$1 = cljs.core.__destructure_map(map__61200);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61200__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61200__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61200__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq61198){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61198));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62348 = arguments.length;
var i__4819__auto___62349 = (0);
while(true){
if((i__4819__auto___62349 < len__4818__auto___62348)){
args__4824__auto__.push((arguments[i__4819__auto___62349]));

var G__62350 = (i__4819__auto___62349 + (1));
i__4819__auto___62349 = G__62350;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61205 = conformed_args__58342__auto__;
var map__61205__$1 = cljs.core.__destructure_map(map__61205);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61205__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61205__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61205__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq61203){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61203));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62351 = arguments.length;
var i__4819__auto___62352 = (0);
while(true){
if((i__4819__auto___62352 < len__4818__auto___62351)){
args__4824__auto__.push((arguments[i__4819__auto___62352]));

var G__62353 = (i__4819__auto___62352 + (1));
i__4819__auto___62352 = G__62353;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61209 = conformed_args__58342__auto__;
var map__61209__$1 = cljs.core.__destructure_map(map__61209);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61209__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61209__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61209__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq61207){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61207));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62354 = arguments.length;
var i__4819__auto___62355 = (0);
while(true){
if((i__4819__auto___62355 < len__4818__auto___62354)){
args__4824__auto__.push((arguments[i__4819__auto___62355]));

var G__62356 = (i__4819__auto___62355 + (1));
i__4819__auto___62355 = G__62356;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61214 = conformed_args__58342__auto__;
var map__61214__$1 = cljs.core.__destructure_map(map__61214);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61214__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61214__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61214__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq61212){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61212));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62357 = arguments.length;
var i__4819__auto___62358 = (0);
while(true){
if((i__4819__auto___62358 < len__4818__auto___62357)){
args__4824__auto__.push((arguments[i__4819__auto___62358]));

var G__62359 = (i__4819__auto___62358 + (1));
i__4819__auto___62358 = G__62359;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61223 = conformed_args__58342__auto__;
var map__61223__$1 = cljs.core.__destructure_map(map__61223);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61223__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61223__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61223__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq61216){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61216));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62360 = arguments.length;
var i__4819__auto___62361 = (0);
while(true){
if((i__4819__auto___62361 < len__4818__auto___62360)){
args__4824__auto__.push((arguments[i__4819__auto___62361]));

var G__62362 = (i__4819__auto___62361 + (1));
i__4819__auto___62361 = G__62362;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61236 = conformed_args__58342__auto__;
var map__61236__$1 = cljs.core.__destructure_map(map__61236);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61236__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61236__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61236__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq61230){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61230));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62363 = arguments.length;
var i__4819__auto___62364 = (0);
while(true){
if((i__4819__auto___62364 < len__4818__auto___62363)){
args__4824__auto__.push((arguments[i__4819__auto___62364]));

var G__62365 = (i__4819__auto___62364 + (1));
i__4819__auto___62364 = G__62365;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61246 = conformed_args__58342__auto__;
var map__61246__$1 = cljs.core.__destructure_map(map__61246);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61246__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61246__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61246__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq61240){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61240));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62366 = arguments.length;
var i__4819__auto___62367 = (0);
while(true){
if((i__4819__auto___62367 < len__4818__auto___62366)){
args__4824__auto__.push((arguments[i__4819__auto___62367]));

var G__62368 = (i__4819__auto___62367 + (1));
i__4819__auto___62367 = G__62368;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61255 = conformed_args__58342__auto__;
var map__61255__$1 = cljs.core.__destructure_map(map__61255);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61255__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61255__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61255__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq61250){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61250));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62369 = arguments.length;
var i__4819__auto___62370 = (0);
while(true){
if((i__4819__auto___62370 < len__4818__auto___62369)){
args__4824__auto__.push((arguments[i__4819__auto___62370]));

var G__62371 = (i__4819__auto___62370 + (1));
i__4819__auto___62370 = G__62371;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61262 = conformed_args__58342__auto__;
var map__61262__$1 = cljs.core.__destructure_map(map__61262);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61262__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61262__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61262__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq61259){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61259));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62372 = arguments.length;
var i__4819__auto___62373 = (0);
while(true){
if((i__4819__auto___62373 < len__4818__auto___62372)){
args__4824__auto__.push((arguments[i__4819__auto___62373]));

var G__62374 = (i__4819__auto___62373 + (1));
i__4819__auto___62373 = G__62374;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61273 = conformed_args__58342__auto__;
var map__61273__$1 = cljs.core.__destructure_map(map__61273);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61273__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61273__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61273__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq61268){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61268));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62375 = arguments.length;
var i__4819__auto___62376 = (0);
while(true){
if((i__4819__auto___62376 < len__4818__auto___62375)){
args__4824__auto__.push((arguments[i__4819__auto___62376]));

var G__62377 = (i__4819__auto___62376 + (1));
i__4819__auto___62376 = G__62377;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61279 = conformed_args__58342__auto__;
var map__61279__$1 = cljs.core.__destructure_map(map__61279);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61279__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61279__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61279__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq61274){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61274));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62378 = arguments.length;
var i__4819__auto___62379 = (0);
while(true){
if((i__4819__auto___62379 < len__4818__auto___62378)){
args__4824__auto__.push((arguments[i__4819__auto___62379]));

var G__62380 = (i__4819__auto___62379 + (1));
i__4819__auto___62379 = G__62380;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61289 = conformed_args__58342__auto__;
var map__61289__$1 = cljs.core.__destructure_map(map__61289);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61289__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61289__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61289__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq61284){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61284));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62381 = arguments.length;
var i__4819__auto___62382 = (0);
while(true){
if((i__4819__auto___62382 < len__4818__auto___62381)){
args__4824__auto__.push((arguments[i__4819__auto___62382]));

var G__62383 = (i__4819__auto___62382 + (1));
i__4819__auto___62382 = G__62383;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61299 = conformed_args__58342__auto__;
var map__61299__$1 = cljs.core.__destructure_map(map__61299);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61299__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61299__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61299__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq61293){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61293));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62384 = arguments.length;
var i__4819__auto___62385 = (0);
while(true){
if((i__4819__auto___62385 < len__4818__auto___62384)){
args__4824__auto__.push((arguments[i__4819__auto___62385]));

var G__62386 = (i__4819__auto___62385 + (1));
i__4819__auto___62385 = G__62386;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61307 = conformed_args__58342__auto__;
var map__61307__$1 = cljs.core.__destructure_map(map__61307);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61307__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61307__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61307__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq61303){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61303));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62387 = arguments.length;
var i__4819__auto___62388 = (0);
while(true){
if((i__4819__auto___62388 < len__4818__auto___62387)){
args__4824__auto__.push((arguments[i__4819__auto___62388]));

var G__62389 = (i__4819__auto___62388 + (1));
i__4819__auto___62388 = G__62389;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61318 = conformed_args__58342__auto__;
var map__61318__$1 = cljs.core.__destructure_map(map__61318);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61318__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61318__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61318__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq61312){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61312));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62390 = arguments.length;
var i__4819__auto___62391 = (0);
while(true){
if((i__4819__auto___62391 < len__4818__auto___62390)){
args__4824__auto__.push((arguments[i__4819__auto___62391]));

var G__62392 = (i__4819__auto___62391 + (1));
i__4819__auto___62391 = G__62392;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61330 = conformed_args__58342__auto__;
var map__61330__$1 = cljs.core.__destructure_map(map__61330);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61330__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61330__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61330__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq61322){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61322));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62393 = arguments.length;
var i__4819__auto___62394 = (0);
while(true){
if((i__4819__auto___62394 < len__4818__auto___62393)){
args__4824__auto__.push((arguments[i__4819__auto___62394]));

var G__62395 = (i__4819__auto___62394 + (1));
i__4819__auto___62394 = G__62395;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61352 = conformed_args__58342__auto__;
var map__61352__$1 = cljs.core.__destructure_map(map__61352);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61352__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61352__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61352__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq61340){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61340));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62396 = arguments.length;
var i__4819__auto___62397 = (0);
while(true){
if((i__4819__auto___62397 < len__4818__auto___62396)){
args__4824__auto__.push((arguments[i__4819__auto___62397]));

var G__62398 = (i__4819__auto___62397 + (1));
i__4819__auto___62397 = G__62398;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61372 = conformed_args__58342__auto__;
var map__61372__$1 = cljs.core.__destructure_map(map__61372);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61372__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61372__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61372__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq61362){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61362));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62399 = arguments.length;
var i__4819__auto___62400 = (0);
while(true){
if((i__4819__auto___62400 < len__4818__auto___62399)){
args__4824__auto__.push((arguments[i__4819__auto___62400]));

var G__62401 = (i__4819__auto___62400 + (1));
i__4819__auto___62400 = G__62401;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61379 = conformed_args__58342__auto__;
var map__61379__$1 = cljs.core.__destructure_map(map__61379);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61379__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61379__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61379__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq61373){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61373));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62402 = arguments.length;
var i__4819__auto___62403 = (0);
while(true){
if((i__4819__auto___62403 < len__4818__auto___62402)){
args__4824__auto__.push((arguments[i__4819__auto___62403]));

var G__62404 = (i__4819__auto___62403 + (1));
i__4819__auto___62403 = G__62404;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61386 = conformed_args__58342__auto__;
var map__61386__$1 = cljs.core.__destructure_map(map__61386);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61386__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61386__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61386__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq61385){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61385));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62405 = arguments.length;
var i__4819__auto___62406 = (0);
while(true){
if((i__4819__auto___62406 < len__4818__auto___62405)){
args__4824__auto__.push((arguments[i__4819__auto___62406]));

var G__62407 = (i__4819__auto___62406 + (1));
i__4819__auto___62406 = G__62407;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61395 = conformed_args__58342__auto__;
var map__61395__$1 = cljs.core.__destructure_map(map__61395);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61395__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61395__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61395__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq61390){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61390));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62408 = arguments.length;
var i__4819__auto___62409 = (0);
while(true){
if((i__4819__auto___62409 < len__4818__auto___62408)){
args__4824__auto__.push((arguments[i__4819__auto___62409]));

var G__62410 = (i__4819__auto___62409 + (1));
i__4819__auto___62409 = G__62410;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61403 = conformed_args__58342__auto__;
var map__61403__$1 = cljs.core.__destructure_map(map__61403);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61403__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61403__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61403__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq61399){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61399));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62411 = arguments.length;
var i__4819__auto___62412 = (0);
while(true){
if((i__4819__auto___62412 < len__4818__auto___62411)){
args__4824__auto__.push((arguments[i__4819__auto___62412]));

var G__62413 = (i__4819__auto___62412 + (1));
i__4819__auto___62412 = G__62413;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61412 = conformed_args__58342__auto__;
var map__61412__$1 = cljs.core.__destructure_map(map__61412);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq61407){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61407));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62414 = arguments.length;
var i__4819__auto___62415 = (0);
while(true){
if((i__4819__auto___62415 < len__4818__auto___62414)){
args__4824__auto__.push((arguments[i__4819__auto___62415]));

var G__62416 = (i__4819__auto___62415 + (1));
i__4819__auto___62415 = G__62416;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61427 = conformed_args__58342__auto__;
var map__61427__$1 = cljs.core.__destructure_map(map__61427);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61427__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61427__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61427__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq61422){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61422));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62417 = arguments.length;
var i__4819__auto___62418 = (0);
while(true){
if((i__4819__auto___62418 < len__4818__auto___62417)){
args__4824__auto__.push((arguments[i__4819__auto___62418]));

var G__62419 = (i__4819__auto___62418 + (1));
i__4819__auto___62418 = G__62419;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61432 = conformed_args__58342__auto__;
var map__61432__$1 = cljs.core.__destructure_map(map__61432);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61432__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61432__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61432__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq61430){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61430));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62420 = arguments.length;
var i__4819__auto___62421 = (0);
while(true){
if((i__4819__auto___62421 < len__4818__auto___62420)){
args__4824__auto__.push((arguments[i__4819__auto___62421]));

var G__62422 = (i__4819__auto___62421 + (1));
i__4819__auto___62421 = G__62422;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61437 = conformed_args__58342__auto__;
var map__61437__$1 = cljs.core.__destructure_map(map__61437);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61437__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61437__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61437__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq61433){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61433));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62423 = arguments.length;
var i__4819__auto___62424 = (0);
while(true){
if((i__4819__auto___62424 < len__4818__auto___62423)){
args__4824__auto__.push((arguments[i__4819__auto___62424]));

var G__62425 = (i__4819__auto___62424 + (1));
i__4819__auto___62424 = G__62425;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61441 = conformed_args__58342__auto__;
var map__61441__$1 = cljs.core.__destructure_map(map__61441);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61441__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61441__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61441__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq61440){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61440));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62426 = arguments.length;
var i__4819__auto___62427 = (0);
while(true){
if((i__4819__auto___62427 < len__4818__auto___62426)){
args__4824__auto__.push((arguments[i__4819__auto___62427]));

var G__62428 = (i__4819__auto___62427 + (1));
i__4819__auto___62427 = G__62428;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61448 = conformed_args__58342__auto__;
var map__61448__$1 = cljs.core.__destructure_map(map__61448);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61448__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61448__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61448__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq61447){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61447));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62429 = arguments.length;
var i__4819__auto___62430 = (0);
while(true){
if((i__4819__auto___62430 < len__4818__auto___62429)){
args__4824__auto__.push((arguments[i__4819__auto___62430]));

var G__62431 = (i__4819__auto___62430 + (1));
i__4819__auto___62430 = G__62431;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61454 = conformed_args__58342__auto__;
var map__61454__$1 = cljs.core.__destructure_map(map__61454);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61454__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61454__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61454__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq61449){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61449));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62432 = arguments.length;
var i__4819__auto___62433 = (0);
while(true){
if((i__4819__auto___62433 < len__4818__auto___62432)){
args__4824__auto__.push((arguments[i__4819__auto___62433]));

var G__62434 = (i__4819__auto___62433 + (1));
i__4819__auto___62433 = G__62434;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61460 = conformed_args__58342__auto__;
var map__61460__$1 = cljs.core.__destructure_map(map__61460);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61460__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61460__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61460__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq61455){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61455));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62435 = arguments.length;
var i__4819__auto___62436 = (0);
while(true){
if((i__4819__auto___62436 < len__4818__auto___62435)){
args__4824__auto__.push((arguments[i__4819__auto___62436]));

var G__62437 = (i__4819__auto___62436 + (1));
i__4819__auto___62436 = G__62437;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61462 = conformed_args__58342__auto__;
var map__61462__$1 = cljs.core.__destructure_map(map__61462);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61462__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61462__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61462__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq61461){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61461));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62438 = arguments.length;
var i__4819__auto___62439 = (0);
while(true){
if((i__4819__auto___62439 < len__4818__auto___62438)){
args__4824__auto__.push((arguments[i__4819__auto___62439]));

var G__62440 = (i__4819__auto___62439 + (1));
i__4819__auto___62439 = G__62440;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61468 = conformed_args__58342__auto__;
var map__61468__$1 = cljs.core.__destructure_map(map__61468);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61468__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61468__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61468__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq61464){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61464));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62441 = arguments.length;
var i__4819__auto___62442 = (0);
while(true){
if((i__4819__auto___62442 < len__4818__auto___62441)){
args__4824__auto__.push((arguments[i__4819__auto___62442]));

var G__62443 = (i__4819__auto___62442 + (1));
i__4819__auto___62442 = G__62443;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61480 = conformed_args__58342__auto__;
var map__61480__$1 = cljs.core.__destructure_map(map__61480);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61480__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61480__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61480__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq61476){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61476));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62444 = arguments.length;
var i__4819__auto___62445 = (0);
while(true){
if((i__4819__auto___62445 < len__4818__auto___62444)){
args__4824__auto__.push((arguments[i__4819__auto___62445]));

var G__62446 = (i__4819__auto___62445 + (1));
i__4819__auto___62445 = G__62446;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61488 = conformed_args__58342__auto__;
var map__61488__$1 = cljs.core.__destructure_map(map__61488);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61488__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61488__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61488__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq61485){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61485));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62447 = arguments.length;
var i__4819__auto___62448 = (0);
while(true){
if((i__4819__auto___62448 < len__4818__auto___62447)){
args__4824__auto__.push((arguments[i__4819__auto___62448]));

var G__62449 = (i__4819__auto___62448 + (1));
i__4819__auto___62448 = G__62449;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61497 = conformed_args__58342__auto__;
var map__61497__$1 = cljs.core.__destructure_map(map__61497);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61497__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61497__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61497__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq61494){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61494));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62450 = arguments.length;
var i__4819__auto___62451 = (0);
while(true){
if((i__4819__auto___62451 < len__4818__auto___62450)){
args__4824__auto__.push((arguments[i__4819__auto___62451]));

var G__62452 = (i__4819__auto___62451 + (1));
i__4819__auto___62451 = G__62452;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61508 = conformed_args__58342__auto__;
var map__61508__$1 = cljs.core.__destructure_map(map__61508);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61508__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61508__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61508__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq61502){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61502));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62453 = arguments.length;
var i__4819__auto___62454 = (0);
while(true){
if((i__4819__auto___62454 < len__4818__auto___62453)){
args__4824__auto__.push((arguments[i__4819__auto___62454]));

var G__62455 = (i__4819__auto___62454 + (1));
i__4819__auto___62454 = G__62455;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61517 = conformed_args__58342__auto__;
var map__61517__$1 = cljs.core.__destructure_map(map__61517);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61517__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61517__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61517__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq61513){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61513));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62456 = arguments.length;
var i__4819__auto___62457 = (0);
while(true){
if((i__4819__auto___62457 < len__4818__auto___62456)){
args__4824__auto__.push((arguments[i__4819__auto___62457]));

var G__62458 = (i__4819__auto___62457 + (1));
i__4819__auto___62457 = G__62458;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61524 = conformed_args__58342__auto__;
var map__61524__$1 = cljs.core.__destructure_map(map__61524);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61524__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61524__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61524__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq61522){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61522));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62459 = arguments.length;
var i__4819__auto___62460 = (0);
while(true){
if((i__4819__auto___62460 < len__4818__auto___62459)){
args__4824__auto__.push((arguments[i__4819__auto___62460]));

var G__62461 = (i__4819__auto___62460 + (1));
i__4819__auto___62460 = G__62461;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61531 = conformed_args__58342__auto__;
var map__61531__$1 = cljs.core.__destructure_map(map__61531);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61531__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61531__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61531__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq61526){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61526));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62462 = arguments.length;
var i__4819__auto___62463 = (0);
while(true){
if((i__4819__auto___62463 < len__4818__auto___62462)){
args__4824__auto__.push((arguments[i__4819__auto___62463]));

var G__62464 = (i__4819__auto___62463 + (1));
i__4819__auto___62463 = G__62464;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61540 = conformed_args__58342__auto__;
var map__61540__$1 = cljs.core.__destructure_map(map__61540);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61540__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61540__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61540__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq61536){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61536));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62465 = arguments.length;
var i__4819__auto___62466 = (0);
while(true){
if((i__4819__auto___62466 < len__4818__auto___62465)){
args__4824__auto__.push((arguments[i__4819__auto___62466]));

var G__62467 = (i__4819__auto___62466 + (1));
i__4819__auto___62466 = G__62467;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61546 = conformed_args__58342__auto__;
var map__61546__$1 = cljs.core.__destructure_map(map__61546);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61546__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61546__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61546__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq61543){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61543));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62468 = arguments.length;
var i__4819__auto___62469 = (0);
while(true){
if((i__4819__auto___62469 < len__4818__auto___62468)){
args__4824__auto__.push((arguments[i__4819__auto___62469]));

var G__62470 = (i__4819__auto___62469 + (1));
i__4819__auto___62469 = G__62470;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61550 = conformed_args__58342__auto__;
var map__61550__$1 = cljs.core.__destructure_map(map__61550);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61550__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61550__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61550__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq61547){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61547));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62471 = arguments.length;
var i__4819__auto___62472 = (0);
while(true){
if((i__4819__auto___62472 < len__4818__auto___62471)){
args__4824__auto__.push((arguments[i__4819__auto___62472]));

var G__62473 = (i__4819__auto___62472 + (1));
i__4819__auto___62472 = G__62473;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61561 = conformed_args__58342__auto__;
var map__61561__$1 = cljs.core.__destructure_map(map__61561);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61561__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61561__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61561__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq61553){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61553));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62474 = arguments.length;
var i__4819__auto___62475 = (0);
while(true){
if((i__4819__auto___62475 < len__4818__auto___62474)){
args__4824__auto__.push((arguments[i__4819__auto___62475]));

var G__62476 = (i__4819__auto___62475 + (1));
i__4819__auto___62475 = G__62476;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61567 = conformed_args__58342__auto__;
var map__61567__$1 = cljs.core.__destructure_map(map__61567);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61567__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61567__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61567__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq61566){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61566));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62477 = arguments.length;
var i__4819__auto___62478 = (0);
while(true){
if((i__4819__auto___62478 < len__4818__auto___62477)){
args__4824__auto__.push((arguments[i__4819__auto___62478]));

var G__62479 = (i__4819__auto___62478 + (1));
i__4819__auto___62478 = G__62479;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61577 = conformed_args__58342__auto__;
var map__61577__$1 = cljs.core.__destructure_map(map__61577);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61577__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61577__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61577__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq61569){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61569));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62480 = arguments.length;
var i__4819__auto___62481 = (0);
while(true){
if((i__4819__auto___62481 < len__4818__auto___62480)){
args__4824__auto__.push((arguments[i__4819__auto___62481]));

var G__62482 = (i__4819__auto___62481 + (1));
i__4819__auto___62481 = G__62482;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61583 = conformed_args__58342__auto__;
var map__61583__$1 = cljs.core.__destructure_map(map__61583);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61583__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61583__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61583__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq61580){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61580));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62483 = arguments.length;
var i__4819__auto___62484 = (0);
while(true){
if((i__4819__auto___62484 < len__4818__auto___62483)){
args__4824__auto__.push((arguments[i__4819__auto___62484]));

var G__62485 = (i__4819__auto___62484 + (1));
i__4819__auto___62484 = G__62485;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61592 = conformed_args__58342__auto__;
var map__61592__$1 = cljs.core.__destructure_map(map__61592);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61592__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61592__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61592__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq61591){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61591));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62486 = arguments.length;
var i__4819__auto___62487 = (0);
while(true){
if((i__4819__auto___62487 < len__4818__auto___62486)){
args__4824__auto__.push((arguments[i__4819__auto___62487]));

var G__62488 = (i__4819__auto___62487 + (1));
i__4819__auto___62487 = G__62488;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61599 = conformed_args__58342__auto__;
var map__61599__$1 = cljs.core.__destructure_map(map__61599);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61599__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61599__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61599__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq61595){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61595));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62489 = arguments.length;
var i__4819__auto___62490 = (0);
while(true){
if((i__4819__auto___62490 < len__4818__auto___62489)){
args__4824__auto__.push((arguments[i__4819__auto___62490]));

var G__62491 = (i__4819__auto___62490 + (1));
i__4819__auto___62490 = G__62491;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61605 = conformed_args__58342__auto__;
var map__61605__$1 = cljs.core.__destructure_map(map__61605);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61605__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61605__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61605__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq61604){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61604));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62492 = arguments.length;
var i__4819__auto___62493 = (0);
while(true){
if((i__4819__auto___62493 < len__4818__auto___62492)){
args__4824__auto__.push((arguments[i__4819__auto___62493]));

var G__62494 = (i__4819__auto___62493 + (1));
i__4819__auto___62493 = G__62494;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61612 = conformed_args__58342__auto__;
var map__61612__$1 = cljs.core.__destructure_map(map__61612);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61612__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61612__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61612__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq61607){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61607));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62495 = arguments.length;
var i__4819__auto___62496 = (0);
while(true){
if((i__4819__auto___62496 < len__4818__auto___62495)){
args__4824__auto__.push((arguments[i__4819__auto___62496]));

var G__62497 = (i__4819__auto___62496 + (1));
i__4819__auto___62496 = G__62497;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61616 = conformed_args__58342__auto__;
var map__61616__$1 = cljs.core.__destructure_map(map__61616);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61616__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61616__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61616__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq61613){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61613));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62498 = arguments.length;
var i__4819__auto___62499 = (0);
while(true){
if((i__4819__auto___62499 < len__4818__auto___62498)){
args__4824__auto__.push((arguments[i__4819__auto___62499]));

var G__62500 = (i__4819__auto___62499 + (1));
i__4819__auto___62499 = G__62500;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61619 = conformed_args__58342__auto__;
var map__61619__$1 = cljs.core.__destructure_map(map__61619);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61619__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61619__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61619__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq61617){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61617));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62501 = arguments.length;
var i__4819__auto___62502 = (0);
while(true){
if((i__4819__auto___62502 < len__4818__auto___62501)){
args__4824__auto__.push((arguments[i__4819__auto___62502]));

var G__62503 = (i__4819__auto___62502 + (1));
i__4819__auto___62502 = G__62503;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61624 = conformed_args__58342__auto__;
var map__61624__$1 = cljs.core.__destructure_map(map__61624);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61624__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61624__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61624__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq61622){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61622));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62504 = arguments.length;
var i__4819__auto___62505 = (0);
while(true){
if((i__4819__auto___62505 < len__4818__auto___62504)){
args__4824__auto__.push((arguments[i__4819__auto___62505]));

var G__62506 = (i__4819__auto___62505 + (1));
i__4819__auto___62505 = G__62506;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61628 = conformed_args__58342__auto__;
var map__61628__$1 = cljs.core.__destructure_map(map__61628);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61628__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61628__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61628__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq61627){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61627));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62507 = arguments.length;
var i__4819__auto___62508 = (0);
while(true){
if((i__4819__auto___62508 < len__4818__auto___62507)){
args__4824__auto__.push((arguments[i__4819__auto___62508]));

var G__62509 = (i__4819__auto___62508 + (1));
i__4819__auto___62508 = G__62509;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61634 = conformed_args__58342__auto__;
var map__61634__$1 = cljs.core.__destructure_map(map__61634);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61634__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61634__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61634__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq61630){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61630));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62510 = arguments.length;
var i__4819__auto___62511 = (0);
while(true){
if((i__4819__auto___62511 < len__4818__auto___62510)){
args__4824__auto__.push((arguments[i__4819__auto___62511]));

var G__62512 = (i__4819__auto___62511 + (1));
i__4819__auto___62511 = G__62512;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61639 = conformed_args__58342__auto__;
var map__61639__$1 = cljs.core.__destructure_map(map__61639);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61639__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61639__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61639__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq61637){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61637));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62513 = arguments.length;
var i__4819__auto___62514 = (0);
while(true){
if((i__4819__auto___62514 < len__4818__auto___62513)){
args__4824__auto__.push((arguments[i__4819__auto___62514]));

var G__62515 = (i__4819__auto___62514 + (1));
i__4819__auto___62514 = G__62515;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61643 = conformed_args__58342__auto__;
var map__61643__$1 = cljs.core.__destructure_map(map__61643);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61643__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61643__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61643__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq61642){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61642));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62516 = arguments.length;
var i__4819__auto___62517 = (0);
while(true){
if((i__4819__auto___62517 < len__4818__auto___62516)){
args__4824__auto__.push((arguments[i__4819__auto___62517]));

var G__62518 = (i__4819__auto___62517 + (1));
i__4819__auto___62517 = G__62518;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61645 = conformed_args__58342__auto__;
var map__61645__$1 = cljs.core.__destructure_map(map__61645);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61645__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61645__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61645__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq61644){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61644));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62519 = arguments.length;
var i__4819__auto___62520 = (0);
while(true){
if((i__4819__auto___62520 < len__4818__auto___62519)){
args__4824__auto__.push((arguments[i__4819__auto___62520]));

var G__62521 = (i__4819__auto___62520 + (1));
i__4819__auto___62520 = G__62521;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61650 = conformed_args__58342__auto__;
var map__61650__$1 = cljs.core.__destructure_map(map__61650);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61650__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61650__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61650__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq61646){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61646));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62522 = arguments.length;
var i__4819__auto___62523 = (0);
while(true){
if((i__4819__auto___62523 < len__4818__auto___62522)){
args__4824__auto__.push((arguments[i__4819__auto___62523]));

var G__62524 = (i__4819__auto___62523 + (1));
i__4819__auto___62523 = G__62524;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61663 = conformed_args__58342__auto__;
var map__61663__$1 = cljs.core.__destructure_map(map__61663);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61663__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61663__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61663__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq61657){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61657));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62525 = arguments.length;
var i__4819__auto___62526 = (0);
while(true){
if((i__4819__auto___62526 < len__4818__auto___62525)){
args__4824__auto__.push((arguments[i__4819__auto___62526]));

var G__62527 = (i__4819__auto___62526 + (1));
i__4819__auto___62526 = G__62527;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61691 = conformed_args__58342__auto__;
var map__61691__$1 = cljs.core.__destructure_map(map__61691);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61691__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61691__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61691__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq61669){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61669));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62528 = arguments.length;
var i__4819__auto___62529 = (0);
while(true){
if((i__4819__auto___62529 < len__4818__auto___62528)){
args__4824__auto__.push((arguments[i__4819__auto___62529]));

var G__62530 = (i__4819__auto___62529 + (1));
i__4819__auto___62529 = G__62530;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61702 = conformed_args__58342__auto__;
var map__61702__$1 = cljs.core.__destructure_map(map__61702);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61702__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61702__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61702__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq61698){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61698));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62531 = arguments.length;
var i__4819__auto___62532 = (0);
while(true){
if((i__4819__auto___62532 < len__4818__auto___62531)){
args__4824__auto__.push((arguments[i__4819__auto___62532]));

var G__62533 = (i__4819__auto___62532 + (1));
i__4819__auto___62532 = G__62533;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61715 = conformed_args__58342__auto__;
var map__61715__$1 = cljs.core.__destructure_map(map__61715);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61715__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61715__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61715__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq61709){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61709));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62534 = arguments.length;
var i__4819__auto___62535 = (0);
while(true){
if((i__4819__auto___62535 < len__4818__auto___62534)){
args__4824__auto__.push((arguments[i__4819__auto___62535]));

var G__62536 = (i__4819__auto___62535 + (1));
i__4819__auto___62535 = G__62536;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61719 = conformed_args__58342__auto__;
var map__61719__$1 = cljs.core.__destructure_map(map__61719);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61719__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61719__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61719__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq61717){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61717));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62537 = arguments.length;
var i__4819__auto___62538 = (0);
while(true){
if((i__4819__auto___62538 < len__4818__auto___62537)){
args__4824__auto__.push((arguments[i__4819__auto___62538]));

var G__62539 = (i__4819__auto___62538 + (1));
i__4819__auto___62538 = G__62539;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61739 = conformed_args__58342__auto__;
var map__61739__$1 = cljs.core.__destructure_map(map__61739);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61739__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61739__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61739__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq61721){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61721));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62540 = arguments.length;
var i__4819__auto___62541 = (0);
while(true){
if((i__4819__auto___62541 < len__4818__auto___62540)){
args__4824__auto__.push((arguments[i__4819__auto___62541]));

var G__62542 = (i__4819__auto___62541 + (1));
i__4819__auto___62541 = G__62542;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61791 = conformed_args__58342__auto__;
var map__61791__$1 = cljs.core.__destructure_map(map__61791);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61791__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61791__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61791__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq61766){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61766));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62543 = arguments.length;
var i__4819__auto___62544 = (0);
while(true){
if((i__4819__auto___62544 < len__4818__auto___62543)){
args__4824__auto__.push((arguments[i__4819__auto___62544]));

var G__62545 = (i__4819__auto___62544 + (1));
i__4819__auto___62544 = G__62545;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61825 = conformed_args__58342__auto__;
var map__61825__$1 = cljs.core.__destructure_map(map__61825);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61825__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61825__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61825__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq61808){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61808));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62546 = arguments.length;
var i__4819__auto___62547 = (0);
while(true){
if((i__4819__auto___62547 < len__4818__auto___62546)){
args__4824__auto__.push((arguments[i__4819__auto___62547]));

var G__62548 = (i__4819__auto___62547 + (1));
i__4819__auto___62547 = G__62548;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61827 = conformed_args__58342__auto__;
var map__61827__$1 = cljs.core.__destructure_map(map__61827);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61827__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61827__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61827__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq61826){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61826));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62549 = arguments.length;
var i__4819__auto___62550 = (0);
while(true){
if((i__4819__auto___62550 < len__4818__auto___62549)){
args__4824__auto__.push((arguments[i__4819__auto___62550]));

var G__62551 = (i__4819__auto___62550 + (1));
i__4819__auto___62550 = G__62551;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61841 = conformed_args__58342__auto__;
var map__61841__$1 = cljs.core.__destructure_map(map__61841);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61841__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61841__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61841__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq61837){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61837));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62552 = arguments.length;
var i__4819__auto___62553 = (0);
while(true){
if((i__4819__auto___62553 < len__4818__auto___62552)){
args__4824__auto__.push((arguments[i__4819__auto___62553]));

var G__62554 = (i__4819__auto___62553 + (1));
i__4819__auto___62553 = G__62554;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61844 = conformed_args__58342__auto__;
var map__61844__$1 = cljs.core.__destructure_map(map__61844);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61844__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61844__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61844__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq61843){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61843));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62555 = arguments.length;
var i__4819__auto___62556 = (0);
while(true){
if((i__4819__auto___62556 < len__4818__auto___62555)){
args__4824__auto__.push((arguments[i__4819__auto___62556]));

var G__62557 = (i__4819__auto___62556 + (1));
i__4819__auto___62556 = G__62557;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61850 = conformed_args__58342__auto__;
var map__61850__$1 = cljs.core.__destructure_map(map__61850);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61850__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61850__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61850__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq61849){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61849));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62558 = arguments.length;
var i__4819__auto___62559 = (0);
while(true){
if((i__4819__auto___62559 < len__4818__auto___62558)){
args__4824__auto__.push((arguments[i__4819__auto___62559]));

var G__62560 = (i__4819__auto___62559 + (1));
i__4819__auto___62559 = G__62560;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61853 = conformed_args__58342__auto__;
var map__61853__$1 = cljs.core.__destructure_map(map__61853);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61853__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61853__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61853__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq61851){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61851));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62561 = arguments.length;
var i__4819__auto___62562 = (0);
while(true){
if((i__4819__auto___62562 < len__4818__auto___62561)){
args__4824__auto__.push((arguments[i__4819__auto___62562]));

var G__62563 = (i__4819__auto___62562 + (1));
i__4819__auto___62562 = G__62563;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61856 = conformed_args__58342__auto__;
var map__61856__$1 = cljs.core.__destructure_map(map__61856);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61856__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61856__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61856__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq61855){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61855));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62564 = arguments.length;
var i__4819__auto___62565 = (0);
while(true){
if((i__4819__auto___62565 < len__4818__auto___62564)){
args__4824__auto__.push((arguments[i__4819__auto___62565]));

var G__62566 = (i__4819__auto___62565 + (1));
i__4819__auto___62565 = G__62566;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61860 = conformed_args__58342__auto__;
var map__61860__$1 = cljs.core.__destructure_map(map__61860);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61860__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61860__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61860__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq61857){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61857));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__4824__auto__ = [];
var len__4818__auto___62567 = arguments.length;
var i__4819__auto___62568 = (0);
while(true){
if((i__4819__auto___62568 < len__4818__auto___62567)){
args__4824__auto__.push((arguments[i__4819__auto___62568]));

var G__62569 = (i__4819__auto___62568 + (1));
i__4819__auto___62568 = G__62569;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58342__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61865 = conformed_args__58342__auto__;
var map__61865__$1 = cljs.core.__destructure_map(map__61865);
var children__58344__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61865__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__58345__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61865__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58343__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61865__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58344__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58344__auto__);
var attrs_value__58346__auto__ = (function (){var or__4212__auto__ = cljs.core.second(attrs__58343__auto__);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58346__auto__], null),children__58344__auto____$1),css__58345__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq61863){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61863));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
