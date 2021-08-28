goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_45811 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_45811(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_45813 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_45813(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__44778 = coll;
var G__44779 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__44778,G__44779) : shadow.dom.lazy_native_coll_seq.call(null,G__44778,G__44779));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__44787 = arguments.length;
switch (G__44787) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__44789 = arguments.length;
switch (G__44789) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__44796 = arguments.length;
switch (G__44796) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__44798 = arguments.length;
switch (G__44798) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__44802 = arguments.length;
switch (G__44802) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__44826 = arguments.length;
switch (G__44826) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e44845){if((e44845 instanceof Object)){
var e = e44845;
return console.log("didnt support attachEvent",el,e);
} else {
throw e44845;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__44864 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__44865 = null;
var count__44866 = (0);
var i__44867 = (0);
while(true){
if((i__44867 < count__44866)){
var el = chunk__44865.cljs$core$IIndexed$_nth$arity$2(null,i__44867);
var handler_45850__$1 = ((function (seq__44864,chunk__44865,count__44866,i__44867,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44864,chunk__44865,count__44866,i__44867,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45850__$1);


var G__45851 = seq__44864;
var G__45852 = chunk__44865;
var G__45853 = count__44866;
var G__45854 = (i__44867 + (1));
seq__44864 = G__45851;
chunk__44865 = G__45852;
count__44866 = G__45853;
i__44867 = G__45854;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44864);
if(temp__5753__auto__){
var seq__44864__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44864__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__44864__$1);
var G__45855 = cljs.core.chunk_rest(seq__44864__$1);
var G__45856 = c__4638__auto__;
var G__45857 = cljs.core.count(c__4638__auto__);
var G__45858 = (0);
seq__44864 = G__45855;
chunk__44865 = G__45856;
count__44866 = G__45857;
i__44867 = G__45858;
continue;
} else {
var el = cljs.core.first(seq__44864__$1);
var handler_45861__$1 = ((function (seq__44864,chunk__44865,count__44866,i__44867,el,seq__44864__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44864,chunk__44865,count__44866,i__44867,el,seq__44864__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45861__$1);


var G__45863 = cljs.core.next(seq__44864__$1);
var G__45864 = null;
var G__45865 = (0);
var G__45866 = (0);
seq__44864 = G__45863;
chunk__44865 = G__45864;
count__44866 = G__45865;
i__44867 = G__45866;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__44891 = arguments.length;
switch (G__44891) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__44909 = cljs.core.seq(events);
var chunk__44910 = null;
var count__44911 = (0);
var i__44912 = (0);
while(true){
if((i__44912 < count__44911)){
var vec__44926 = chunk__44910.cljs$core$IIndexed$_nth$arity$2(null,i__44912);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44926,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44926,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45874 = seq__44909;
var G__45875 = chunk__44910;
var G__45876 = count__44911;
var G__45877 = (i__44912 + (1));
seq__44909 = G__45874;
chunk__44910 = G__45875;
count__44911 = G__45876;
i__44912 = G__45877;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44909);
if(temp__5753__auto__){
var seq__44909__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44909__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__44909__$1);
var G__45879 = cljs.core.chunk_rest(seq__44909__$1);
var G__45880 = c__4638__auto__;
var G__45881 = cljs.core.count(c__4638__auto__);
var G__45882 = (0);
seq__44909 = G__45879;
chunk__44910 = G__45880;
count__44911 = G__45881;
i__44912 = G__45882;
continue;
} else {
var vec__44935 = cljs.core.first(seq__44909__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44935,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44935,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45886 = cljs.core.next(seq__44909__$1);
var G__45887 = null;
var G__45888 = (0);
var G__45889 = (0);
seq__44909 = G__45886;
chunk__44910 = G__45887;
count__44911 = G__45888;
i__44912 = G__45889;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__44948 = cljs.core.seq(styles);
var chunk__44949 = null;
var count__44950 = (0);
var i__44951 = (0);
while(true){
if((i__44951 < count__44950)){
var vec__44969 = chunk__44949.cljs$core$IIndexed$_nth$arity$2(null,i__44951);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44969,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44969,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45894 = seq__44948;
var G__45895 = chunk__44949;
var G__45896 = count__44950;
var G__45897 = (i__44951 + (1));
seq__44948 = G__45894;
chunk__44949 = G__45895;
count__44950 = G__45896;
i__44951 = G__45897;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44948);
if(temp__5753__auto__){
var seq__44948__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44948__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__44948__$1);
var G__45901 = cljs.core.chunk_rest(seq__44948__$1);
var G__45902 = c__4638__auto__;
var G__45903 = cljs.core.count(c__4638__auto__);
var G__45904 = (0);
seq__44948 = G__45901;
chunk__44949 = G__45902;
count__44950 = G__45903;
i__44951 = G__45904;
continue;
} else {
var vec__44980 = cljs.core.first(seq__44948__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44980,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44980,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45905 = cljs.core.next(seq__44948__$1);
var G__45906 = null;
var G__45907 = (0);
var G__45908 = (0);
seq__44948 = G__45905;
chunk__44949 = G__45906;
count__44950 = G__45907;
i__44951 = G__45908;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__44992_45910 = key;
var G__44992_45911__$1 = (((G__44992_45910 instanceof cljs.core.Keyword))?G__44992_45910.fqn:null);
switch (G__44992_45911__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_45918 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_45918,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_45918,"aria-");
}
})())){
el.setAttribute(ks_45918,value);
} else {
(el[ks_45918] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__45057){
var map__45058 = p__45057;
var map__45058__$1 = cljs.core.__destructure_map(map__45058);
var props = map__45058__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45058__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__45060 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45060,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45060,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45060,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__45064 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__45064,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__45064;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__45071 = arguments.length;
switch (G__45071) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__45104){
var vec__45110 = p__45104;
var seq__45111 = cljs.core.seq(vec__45110);
var first__45112 = cljs.core.first(seq__45111);
var seq__45111__$1 = cljs.core.next(seq__45111);
var nn = first__45112;
var first__45112__$1 = cljs.core.first(seq__45111__$1);
var seq__45111__$2 = cljs.core.next(seq__45111__$1);
var np = first__45112__$1;
var nc = seq__45111__$2;
var node = vec__45110;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45139 = nn;
var G__45140 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45139,G__45140) : create_fn.call(null,G__45139,G__45140));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45141 = nn;
var G__45142 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45141,G__45142) : create_fn.call(null,G__45141,G__45142));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__45159 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45159,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45159,(1),null);
var seq__45162_45941 = cljs.core.seq(node_children);
var chunk__45163_45942 = null;
var count__45164_45943 = (0);
var i__45165_45945 = (0);
while(true){
if((i__45165_45945 < count__45164_45943)){
var child_struct_45947 = chunk__45163_45942.cljs$core$IIndexed$_nth$arity$2(null,i__45165_45945);
var children_45948 = shadow.dom.dom_node(child_struct_45947);
if(cljs.core.seq_QMARK_(children_45948)){
var seq__45199_45949 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45948));
var chunk__45201_45950 = null;
var count__45202_45951 = (0);
var i__45203_45952 = (0);
while(true){
if((i__45203_45952 < count__45202_45951)){
var child_45957 = chunk__45201_45950.cljs$core$IIndexed$_nth$arity$2(null,i__45203_45952);
if(cljs.core.truth_(child_45957)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45957);


var G__45958 = seq__45199_45949;
var G__45959 = chunk__45201_45950;
var G__45960 = count__45202_45951;
var G__45961 = (i__45203_45952 + (1));
seq__45199_45949 = G__45958;
chunk__45201_45950 = G__45959;
count__45202_45951 = G__45960;
i__45203_45952 = G__45961;
continue;
} else {
var G__45962 = seq__45199_45949;
var G__45963 = chunk__45201_45950;
var G__45964 = count__45202_45951;
var G__45965 = (i__45203_45952 + (1));
seq__45199_45949 = G__45962;
chunk__45201_45950 = G__45963;
count__45202_45951 = G__45964;
i__45203_45952 = G__45965;
continue;
}
} else {
var temp__5753__auto___45968 = cljs.core.seq(seq__45199_45949);
if(temp__5753__auto___45968){
var seq__45199_45969__$1 = temp__5753__auto___45968;
if(cljs.core.chunked_seq_QMARK_(seq__45199_45969__$1)){
var c__4638__auto___45970 = cljs.core.chunk_first(seq__45199_45969__$1);
var G__45971 = cljs.core.chunk_rest(seq__45199_45969__$1);
var G__45972 = c__4638__auto___45970;
var G__45973 = cljs.core.count(c__4638__auto___45970);
var G__45974 = (0);
seq__45199_45949 = G__45971;
chunk__45201_45950 = G__45972;
count__45202_45951 = G__45973;
i__45203_45952 = G__45974;
continue;
} else {
var child_45975 = cljs.core.first(seq__45199_45969__$1);
if(cljs.core.truth_(child_45975)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45975);


var G__45976 = cljs.core.next(seq__45199_45969__$1);
var G__45977 = null;
var G__45978 = (0);
var G__45979 = (0);
seq__45199_45949 = G__45976;
chunk__45201_45950 = G__45977;
count__45202_45951 = G__45978;
i__45203_45952 = G__45979;
continue;
} else {
var G__45980 = cljs.core.next(seq__45199_45969__$1);
var G__45981 = null;
var G__45982 = (0);
var G__45983 = (0);
seq__45199_45949 = G__45980;
chunk__45201_45950 = G__45981;
count__45202_45951 = G__45982;
i__45203_45952 = G__45983;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45948);
}


var G__45986 = seq__45162_45941;
var G__45987 = chunk__45163_45942;
var G__45988 = count__45164_45943;
var G__45989 = (i__45165_45945 + (1));
seq__45162_45941 = G__45986;
chunk__45163_45942 = G__45987;
count__45164_45943 = G__45988;
i__45165_45945 = G__45989;
continue;
} else {
var temp__5753__auto___45990 = cljs.core.seq(seq__45162_45941);
if(temp__5753__auto___45990){
var seq__45162_45991__$1 = temp__5753__auto___45990;
if(cljs.core.chunked_seq_QMARK_(seq__45162_45991__$1)){
var c__4638__auto___45992 = cljs.core.chunk_first(seq__45162_45991__$1);
var G__45993 = cljs.core.chunk_rest(seq__45162_45991__$1);
var G__45994 = c__4638__auto___45992;
var G__45995 = cljs.core.count(c__4638__auto___45992);
var G__45996 = (0);
seq__45162_45941 = G__45993;
chunk__45163_45942 = G__45994;
count__45164_45943 = G__45995;
i__45165_45945 = G__45996;
continue;
} else {
var child_struct_45997 = cljs.core.first(seq__45162_45991__$1);
var children_45998 = shadow.dom.dom_node(child_struct_45997);
if(cljs.core.seq_QMARK_(children_45998)){
var seq__45216_45999 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45998));
var chunk__45218_46000 = null;
var count__45219_46001 = (0);
var i__45220_46002 = (0);
while(true){
if((i__45220_46002 < count__45219_46001)){
var child_46003 = chunk__45218_46000.cljs$core$IIndexed$_nth$arity$2(null,i__45220_46002);
if(cljs.core.truth_(child_46003)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46003);


var G__46004 = seq__45216_45999;
var G__46005 = chunk__45218_46000;
var G__46006 = count__45219_46001;
var G__46007 = (i__45220_46002 + (1));
seq__45216_45999 = G__46004;
chunk__45218_46000 = G__46005;
count__45219_46001 = G__46006;
i__45220_46002 = G__46007;
continue;
} else {
var G__46009 = seq__45216_45999;
var G__46010 = chunk__45218_46000;
var G__46011 = count__45219_46001;
var G__46012 = (i__45220_46002 + (1));
seq__45216_45999 = G__46009;
chunk__45218_46000 = G__46010;
count__45219_46001 = G__46011;
i__45220_46002 = G__46012;
continue;
}
} else {
var temp__5753__auto___46014__$1 = cljs.core.seq(seq__45216_45999);
if(temp__5753__auto___46014__$1){
var seq__45216_46015__$1 = temp__5753__auto___46014__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45216_46015__$1)){
var c__4638__auto___46016 = cljs.core.chunk_first(seq__45216_46015__$1);
var G__46017 = cljs.core.chunk_rest(seq__45216_46015__$1);
var G__46018 = c__4638__auto___46016;
var G__46019 = cljs.core.count(c__4638__auto___46016);
var G__46020 = (0);
seq__45216_45999 = G__46017;
chunk__45218_46000 = G__46018;
count__45219_46001 = G__46019;
i__45220_46002 = G__46020;
continue;
} else {
var child_46021 = cljs.core.first(seq__45216_46015__$1);
if(cljs.core.truth_(child_46021)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46021);


var G__46023 = cljs.core.next(seq__45216_46015__$1);
var G__46024 = null;
var G__46025 = (0);
var G__46026 = (0);
seq__45216_45999 = G__46023;
chunk__45218_46000 = G__46024;
count__45219_46001 = G__46025;
i__45220_46002 = G__46026;
continue;
} else {
var G__46029 = cljs.core.next(seq__45216_46015__$1);
var G__46030 = null;
var G__46031 = (0);
var G__46032 = (0);
seq__45216_45999 = G__46029;
chunk__45218_46000 = G__46030;
count__45219_46001 = G__46031;
i__45220_46002 = G__46032;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45998);
}


var G__46033 = cljs.core.next(seq__45162_45991__$1);
var G__46034 = null;
var G__46035 = (0);
var G__46036 = (0);
seq__45162_45941 = G__46033;
chunk__45163_45942 = G__46034;
count__45164_45943 = G__46035;
i__45165_45945 = G__46036;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__45238 = cljs.core.seq(node);
var chunk__45239 = null;
var count__45240 = (0);
var i__45241 = (0);
while(true){
if((i__45241 < count__45240)){
var n = chunk__45239.cljs$core$IIndexed$_nth$arity$2(null,i__45241);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46050 = seq__45238;
var G__46051 = chunk__45239;
var G__46052 = count__45240;
var G__46053 = (i__45241 + (1));
seq__45238 = G__46050;
chunk__45239 = G__46051;
count__45240 = G__46052;
i__45241 = G__46053;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45238);
if(temp__5753__auto__){
var seq__45238__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45238__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45238__$1);
var G__46060 = cljs.core.chunk_rest(seq__45238__$1);
var G__46061 = c__4638__auto__;
var G__46062 = cljs.core.count(c__4638__auto__);
var G__46063 = (0);
seq__45238 = G__46060;
chunk__45239 = G__46061;
count__45240 = G__46062;
i__45241 = G__46063;
continue;
} else {
var n = cljs.core.first(seq__45238__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46074 = cljs.core.next(seq__45238__$1);
var G__46075 = null;
var G__46076 = (0);
var G__46077 = (0);
seq__45238 = G__46074;
chunk__45239 = G__46075;
count__45240 = G__46076;
i__45241 = G__46077;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__45246 = arguments.length;
switch (G__45246) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__45249 = arguments.length;
switch (G__45249) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__45279 = arguments.length;
switch (G__45279) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___46097 = arguments.length;
var i__4819__auto___46098 = (0);
while(true){
if((i__4819__auto___46098 < len__4818__auto___46097)){
args__4824__auto__.push((arguments[i__4819__auto___46098]));

var G__46101 = (i__4819__auto___46098 + (1));
i__4819__auto___46098 = G__46101;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__45298_46104 = cljs.core.seq(nodes);
var chunk__45299_46105 = null;
var count__45300_46106 = (0);
var i__45301_46107 = (0);
while(true){
if((i__45301_46107 < count__45300_46106)){
var node_46109 = chunk__45299_46105.cljs$core$IIndexed$_nth$arity$2(null,i__45301_46107);
fragment.appendChild(shadow.dom._to_dom(node_46109));


var G__46111 = seq__45298_46104;
var G__46112 = chunk__45299_46105;
var G__46113 = count__45300_46106;
var G__46114 = (i__45301_46107 + (1));
seq__45298_46104 = G__46111;
chunk__45299_46105 = G__46112;
count__45300_46106 = G__46113;
i__45301_46107 = G__46114;
continue;
} else {
var temp__5753__auto___46115 = cljs.core.seq(seq__45298_46104);
if(temp__5753__auto___46115){
var seq__45298_46119__$1 = temp__5753__auto___46115;
if(cljs.core.chunked_seq_QMARK_(seq__45298_46119__$1)){
var c__4638__auto___46120 = cljs.core.chunk_first(seq__45298_46119__$1);
var G__46121 = cljs.core.chunk_rest(seq__45298_46119__$1);
var G__46122 = c__4638__auto___46120;
var G__46123 = cljs.core.count(c__4638__auto___46120);
var G__46124 = (0);
seq__45298_46104 = G__46121;
chunk__45299_46105 = G__46122;
count__45300_46106 = G__46123;
i__45301_46107 = G__46124;
continue;
} else {
var node_46126 = cljs.core.first(seq__45298_46119__$1);
fragment.appendChild(shadow.dom._to_dom(node_46126));


var G__46128 = cljs.core.next(seq__45298_46119__$1);
var G__46129 = null;
var G__46130 = (0);
var G__46131 = (0);
seq__45298_46104 = G__46128;
chunk__45299_46105 = G__46129;
count__45300_46106 = G__46130;
i__45301_46107 = G__46131;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq45285){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45285));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__45314_46137 = cljs.core.seq(scripts);
var chunk__45315_46138 = null;
var count__45316_46139 = (0);
var i__45317_46140 = (0);
while(true){
if((i__45317_46140 < count__45316_46139)){
var vec__45324_46141 = chunk__45315_46138.cljs$core$IIndexed$_nth$arity$2(null,i__45317_46140);
var script_tag_46142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45324_46141,(0),null);
var script_body_46143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45324_46141,(1),null);
eval(script_body_46143);


var G__46146 = seq__45314_46137;
var G__46147 = chunk__45315_46138;
var G__46148 = count__45316_46139;
var G__46149 = (i__45317_46140 + (1));
seq__45314_46137 = G__46146;
chunk__45315_46138 = G__46147;
count__45316_46139 = G__46148;
i__45317_46140 = G__46149;
continue;
} else {
var temp__5753__auto___46150 = cljs.core.seq(seq__45314_46137);
if(temp__5753__auto___46150){
var seq__45314_46152__$1 = temp__5753__auto___46150;
if(cljs.core.chunked_seq_QMARK_(seq__45314_46152__$1)){
var c__4638__auto___46154 = cljs.core.chunk_first(seq__45314_46152__$1);
var G__46155 = cljs.core.chunk_rest(seq__45314_46152__$1);
var G__46156 = c__4638__auto___46154;
var G__46157 = cljs.core.count(c__4638__auto___46154);
var G__46158 = (0);
seq__45314_46137 = G__46155;
chunk__45315_46138 = G__46156;
count__45316_46139 = G__46157;
i__45317_46140 = G__46158;
continue;
} else {
var vec__45328_46159 = cljs.core.first(seq__45314_46152__$1);
var script_tag_46160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45328_46159,(0),null);
var script_body_46161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45328_46159,(1),null);
eval(script_body_46161);


var G__46162 = cljs.core.next(seq__45314_46152__$1);
var G__46163 = null;
var G__46164 = (0);
var G__46165 = (0);
seq__45314_46137 = G__46162;
chunk__45315_46138 = G__46163;
count__45316_46139 = G__46164;
i__45317_46140 = G__46165;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__45331){
var vec__45332 = p__45331;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45332,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45332,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__45336 = arguments.length;
switch (G__45336) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__45346 = cljs.core.seq(style_keys);
var chunk__45347 = null;
var count__45348 = (0);
var i__45349 = (0);
while(true){
if((i__45349 < count__45348)){
var it = chunk__45347.cljs$core$IIndexed$_nth$arity$2(null,i__45349);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46174 = seq__45346;
var G__46175 = chunk__45347;
var G__46176 = count__45348;
var G__46177 = (i__45349 + (1));
seq__45346 = G__46174;
chunk__45347 = G__46175;
count__45348 = G__46176;
i__45349 = G__46177;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45346);
if(temp__5753__auto__){
var seq__45346__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45346__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45346__$1);
var G__46178 = cljs.core.chunk_rest(seq__45346__$1);
var G__46179 = c__4638__auto__;
var G__46180 = cljs.core.count(c__4638__auto__);
var G__46181 = (0);
seq__45346 = G__46178;
chunk__45347 = G__46179;
count__45348 = G__46180;
i__45349 = G__46181;
continue;
} else {
var it = cljs.core.first(seq__45346__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46184 = cljs.core.next(seq__45346__$1);
var G__46185 = null;
var G__46186 = (0);
var G__46187 = (0);
seq__45346 = G__46184;
chunk__45347 = G__46185;
count__45348 = G__46186;
i__45349 = G__46187;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k45352,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__45360 = k45352;
var G__45360__$1 = (((G__45360 instanceof cljs.core.Keyword))?G__45360.fqn:null);
switch (G__45360__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45352,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__45363){
var vec__45364 = p__45363;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45364,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45364,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45351){
var self__ = this;
var G__45351__$1 = this;
return (new cljs.core.RecordIter((0),G__45351__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45353,other45354){
var self__ = this;
var this45353__$1 = this;
return (((!((other45354 == null)))) && ((((this45353__$1.constructor === other45354.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45353__$1.x,other45354.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45353__$1.y,other45354.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45353__$1.__extmap,other45354.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k45352){
var self__ = this;
var this__4468__auto____$1 = this;
var G__45377 = k45352;
var G__45377__$1 = (((G__45377 instanceof cljs.core.Keyword))?G__45377.fqn:null);
switch (G__45377__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45352);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__45351){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__45381 = cljs.core.keyword_identical_QMARK_;
var expr__45382 = k__4470__auto__;
if(cljs.core.truth_((pred__45381.cljs$core$IFn$_invoke$arity$2 ? pred__45381.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__45382) : pred__45381.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__45382)))){
return (new shadow.dom.Coordinate(G__45351,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45381.cljs$core$IFn$_invoke$arity$2 ? pred__45381.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__45382) : pred__45381.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__45382)))){
return (new shadow.dom.Coordinate(self__.x,G__45351,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__45351),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__45351){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__45351,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__45355){
var extmap__4501__auto__ = (function (){var G__45395 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45355,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__45355)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45395);
} else {
return G__45395;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__45355),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__45355),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k45411,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__45424 = k45411;
var G__45424__$1 = (((G__45424 instanceof cljs.core.Keyword))?G__45424.fqn:null);
switch (G__45424__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45411,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__45428){
var vec__45430 = p__45428;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45430,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45430,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45410){
var self__ = this;
var G__45410__$1 = this;
return (new cljs.core.RecordIter((0),G__45410__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45412,other45413){
var self__ = this;
var this45412__$1 = this;
return (((!((other45413 == null)))) && ((((this45412__$1.constructor === other45413.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45412__$1.w,other45413.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45412__$1.h,other45413.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45412__$1.__extmap,other45413.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k45411){
var self__ = this;
var this__4468__auto____$1 = this;
var G__45460 = k45411;
var G__45460__$1 = (((G__45460 instanceof cljs.core.Keyword))?G__45460.fqn:null);
switch (G__45460__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45411);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__45410){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__45464 = cljs.core.keyword_identical_QMARK_;
var expr__45465 = k__4470__auto__;
if(cljs.core.truth_((pred__45464.cljs$core$IFn$_invoke$arity$2 ? pred__45464.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__45465) : pred__45464.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__45465)))){
return (new shadow.dom.Size(G__45410,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45464.cljs$core$IFn$_invoke$arity$2 ? pred__45464.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__45465) : pred__45464.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__45465)))){
return (new shadow.dom.Size(self__.w,G__45410,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__45410),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__45410){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__45410,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__45415){
var extmap__4501__auto__ = (function (){var G__45485 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45415,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__45415)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45485);
} else {
return G__45485;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__45415),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__45415),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__46232 = (i + (1));
var G__46233 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__46232;
ret = G__46233;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45531){
var vec__45536 = p__45531;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45536,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45536,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__45545 = arguments.length;
switch (G__45545) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__46240 = ps;
var G__46241 = (i + (1));
el__$1 = G__46240;
i = G__46241;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__45616 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45616,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45616,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45616,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__45621_46248 = cljs.core.seq(props);
var chunk__45622_46249 = null;
var count__45624_46250 = (0);
var i__45625_46251 = (0);
while(true){
if((i__45625_46251 < count__45624_46250)){
var vec__45639_46252 = chunk__45622_46249.cljs$core$IIndexed$_nth$arity$2(null,i__45625_46251);
var k_46253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45639_46252,(0),null);
var v_46254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45639_46252,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_46253);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46253),v_46254);


var G__46255 = seq__45621_46248;
var G__46256 = chunk__45622_46249;
var G__46257 = count__45624_46250;
var G__46258 = (i__45625_46251 + (1));
seq__45621_46248 = G__46255;
chunk__45622_46249 = G__46256;
count__45624_46250 = G__46257;
i__45625_46251 = G__46258;
continue;
} else {
var temp__5753__auto___46259 = cljs.core.seq(seq__45621_46248);
if(temp__5753__auto___46259){
var seq__45621_46261__$1 = temp__5753__auto___46259;
if(cljs.core.chunked_seq_QMARK_(seq__45621_46261__$1)){
var c__4638__auto___46262 = cljs.core.chunk_first(seq__45621_46261__$1);
var G__46263 = cljs.core.chunk_rest(seq__45621_46261__$1);
var G__46264 = c__4638__auto___46262;
var G__46265 = cljs.core.count(c__4638__auto___46262);
var G__46266 = (0);
seq__45621_46248 = G__46263;
chunk__45622_46249 = G__46264;
count__45624_46250 = G__46265;
i__45625_46251 = G__46266;
continue;
} else {
var vec__45643_46267 = cljs.core.first(seq__45621_46261__$1);
var k_46268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45643_46267,(0),null);
var v_46269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45643_46267,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_46268);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46268),v_46269);


var G__46272 = cljs.core.next(seq__45621_46261__$1);
var G__46273 = null;
var G__46274 = (0);
var G__46275 = (0);
seq__45621_46248 = G__46272;
chunk__45622_46249 = G__46273;
count__45624_46250 = G__46274;
i__45625_46251 = G__46275;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__45654 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45654,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45654,(1),null);
var seq__45659_46282 = cljs.core.seq(node_children);
var chunk__45661_46283 = null;
var count__45662_46284 = (0);
var i__45663_46285 = (0);
while(true){
if((i__45663_46285 < count__45662_46284)){
var child_struct_46287 = chunk__45661_46283.cljs$core$IIndexed$_nth$arity$2(null,i__45663_46285);
if((!((child_struct_46287 == null)))){
if(typeof child_struct_46287 === 'string'){
var text_46290 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46290),child_struct_46287].join(''));
} else {
var children_46291 = shadow.dom.svg_node(child_struct_46287);
if(cljs.core.seq_QMARK_(children_46291)){
var seq__45703_46294 = cljs.core.seq(children_46291);
var chunk__45705_46295 = null;
var count__45706_46296 = (0);
var i__45707_46297 = (0);
while(true){
if((i__45707_46297 < count__45706_46296)){
var child_46300 = chunk__45705_46295.cljs$core$IIndexed$_nth$arity$2(null,i__45707_46297);
if(cljs.core.truth_(child_46300)){
node.appendChild(child_46300);


var G__46303 = seq__45703_46294;
var G__46304 = chunk__45705_46295;
var G__46305 = count__45706_46296;
var G__46306 = (i__45707_46297 + (1));
seq__45703_46294 = G__46303;
chunk__45705_46295 = G__46304;
count__45706_46296 = G__46305;
i__45707_46297 = G__46306;
continue;
} else {
var G__46308 = seq__45703_46294;
var G__46309 = chunk__45705_46295;
var G__46310 = count__45706_46296;
var G__46311 = (i__45707_46297 + (1));
seq__45703_46294 = G__46308;
chunk__45705_46295 = G__46309;
count__45706_46296 = G__46310;
i__45707_46297 = G__46311;
continue;
}
} else {
var temp__5753__auto___46314 = cljs.core.seq(seq__45703_46294);
if(temp__5753__auto___46314){
var seq__45703_46315__$1 = temp__5753__auto___46314;
if(cljs.core.chunked_seq_QMARK_(seq__45703_46315__$1)){
var c__4638__auto___46317 = cljs.core.chunk_first(seq__45703_46315__$1);
var G__46318 = cljs.core.chunk_rest(seq__45703_46315__$1);
var G__46319 = c__4638__auto___46317;
var G__46320 = cljs.core.count(c__4638__auto___46317);
var G__46321 = (0);
seq__45703_46294 = G__46318;
chunk__45705_46295 = G__46319;
count__45706_46296 = G__46320;
i__45707_46297 = G__46321;
continue;
} else {
var child_46324 = cljs.core.first(seq__45703_46315__$1);
if(cljs.core.truth_(child_46324)){
node.appendChild(child_46324);


var G__46327 = cljs.core.next(seq__45703_46315__$1);
var G__46328 = null;
var G__46329 = (0);
var G__46330 = (0);
seq__45703_46294 = G__46327;
chunk__45705_46295 = G__46328;
count__45706_46296 = G__46329;
i__45707_46297 = G__46330;
continue;
} else {
var G__46331 = cljs.core.next(seq__45703_46315__$1);
var G__46332 = null;
var G__46333 = (0);
var G__46334 = (0);
seq__45703_46294 = G__46331;
chunk__45705_46295 = G__46332;
count__45706_46296 = G__46333;
i__45707_46297 = G__46334;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46291);
}
}


var G__46337 = seq__45659_46282;
var G__46338 = chunk__45661_46283;
var G__46339 = count__45662_46284;
var G__46340 = (i__45663_46285 + (1));
seq__45659_46282 = G__46337;
chunk__45661_46283 = G__46338;
count__45662_46284 = G__46339;
i__45663_46285 = G__46340;
continue;
} else {
var G__46341 = seq__45659_46282;
var G__46342 = chunk__45661_46283;
var G__46344 = count__45662_46284;
var G__46345 = (i__45663_46285 + (1));
seq__45659_46282 = G__46341;
chunk__45661_46283 = G__46342;
count__45662_46284 = G__46344;
i__45663_46285 = G__46345;
continue;
}
} else {
var temp__5753__auto___46346 = cljs.core.seq(seq__45659_46282);
if(temp__5753__auto___46346){
var seq__45659_46348__$1 = temp__5753__auto___46346;
if(cljs.core.chunked_seq_QMARK_(seq__45659_46348__$1)){
var c__4638__auto___46349 = cljs.core.chunk_first(seq__45659_46348__$1);
var G__46350 = cljs.core.chunk_rest(seq__45659_46348__$1);
var G__46351 = c__4638__auto___46349;
var G__46352 = cljs.core.count(c__4638__auto___46349);
var G__46353 = (0);
seq__45659_46282 = G__46350;
chunk__45661_46283 = G__46351;
count__45662_46284 = G__46352;
i__45663_46285 = G__46353;
continue;
} else {
var child_struct_46354 = cljs.core.first(seq__45659_46348__$1);
if((!((child_struct_46354 == null)))){
if(typeof child_struct_46354 === 'string'){
var text_46356 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46356),child_struct_46354].join(''));
} else {
var children_46358 = shadow.dom.svg_node(child_struct_46354);
if(cljs.core.seq_QMARK_(children_46358)){
var seq__45724_46359 = cljs.core.seq(children_46358);
var chunk__45726_46360 = null;
var count__45727_46361 = (0);
var i__45728_46362 = (0);
while(true){
if((i__45728_46362 < count__45727_46361)){
var child_46364 = chunk__45726_46360.cljs$core$IIndexed$_nth$arity$2(null,i__45728_46362);
if(cljs.core.truth_(child_46364)){
node.appendChild(child_46364);


var G__46365 = seq__45724_46359;
var G__46366 = chunk__45726_46360;
var G__46367 = count__45727_46361;
var G__46368 = (i__45728_46362 + (1));
seq__45724_46359 = G__46365;
chunk__45726_46360 = G__46366;
count__45727_46361 = G__46367;
i__45728_46362 = G__46368;
continue;
} else {
var G__46370 = seq__45724_46359;
var G__46371 = chunk__45726_46360;
var G__46372 = count__45727_46361;
var G__46373 = (i__45728_46362 + (1));
seq__45724_46359 = G__46370;
chunk__45726_46360 = G__46371;
count__45727_46361 = G__46372;
i__45728_46362 = G__46373;
continue;
}
} else {
var temp__5753__auto___46374__$1 = cljs.core.seq(seq__45724_46359);
if(temp__5753__auto___46374__$1){
var seq__45724_46375__$1 = temp__5753__auto___46374__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45724_46375__$1)){
var c__4638__auto___46376 = cljs.core.chunk_first(seq__45724_46375__$1);
var G__46377 = cljs.core.chunk_rest(seq__45724_46375__$1);
var G__46378 = c__4638__auto___46376;
var G__46379 = cljs.core.count(c__4638__auto___46376);
var G__46380 = (0);
seq__45724_46359 = G__46377;
chunk__45726_46360 = G__46378;
count__45727_46361 = G__46379;
i__45728_46362 = G__46380;
continue;
} else {
var child_46381 = cljs.core.first(seq__45724_46375__$1);
if(cljs.core.truth_(child_46381)){
node.appendChild(child_46381);


var G__46382 = cljs.core.next(seq__45724_46375__$1);
var G__46383 = null;
var G__46384 = (0);
var G__46385 = (0);
seq__45724_46359 = G__46382;
chunk__45726_46360 = G__46383;
count__45727_46361 = G__46384;
i__45728_46362 = G__46385;
continue;
} else {
var G__46386 = cljs.core.next(seq__45724_46375__$1);
var G__46387 = null;
var G__46388 = (0);
var G__46389 = (0);
seq__45724_46359 = G__46386;
chunk__45726_46360 = G__46387;
count__45727_46361 = G__46388;
i__45728_46362 = G__46389;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46358);
}
}


var G__46390 = cljs.core.next(seq__45659_46348__$1);
var G__46391 = null;
var G__46392 = (0);
var G__46393 = (0);
seq__45659_46282 = G__46390;
chunk__45661_46283 = G__46391;
count__45662_46284 = G__46392;
i__45663_46285 = G__46393;
continue;
} else {
var G__46394 = cljs.core.next(seq__45659_46348__$1);
var G__46395 = null;
var G__46396 = (0);
var G__46397 = (0);
seq__45659_46282 = G__46394;
chunk__45661_46283 = G__46395;
count__45662_46284 = G__46396;
i__45663_46285 = G__46397;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___46400 = arguments.length;
var i__4819__auto___46402 = (0);
while(true){
if((i__4819__auto___46402 < len__4818__auto___46400)){
args__4824__auto__.push((arguments[i__4819__auto___46402]));

var G__46403 = (i__4819__auto___46402 + (1));
i__4819__auto___46402 = G__46403;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq45742){
var G__45743 = cljs.core.first(seq45742);
var seq45742__$1 = cljs.core.next(seq45742);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45743,seq45742__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__45751 = arguments.length;
switch (G__45751) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__42888__auto___46409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42889__auto__ = (function (){var switch__40213__auto__ = (function (state_45775){
var state_val_45777 = (state_45775[(1)]);
if((state_val_45777 === (1))){
var state_45775__$1 = state_45775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45775__$1,(2),once_or_cleanup);
} else {
if((state_val_45777 === (2))){
var inst_45769 = (state_45775[(2)]);
var inst_45770 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_45775__$1 = (function (){var statearr_45788 = state_45775;
(statearr_45788[(7)] = inst_45769);

return statearr_45788;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45775__$1,inst_45770);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__40214__auto__ = null;
var shadow$dom$state_machine__40214__auto____0 = (function (){
var statearr_45790 = [null,null,null,null,null,null,null,null];
(statearr_45790[(0)] = shadow$dom$state_machine__40214__auto__);

(statearr_45790[(1)] = (1));

return statearr_45790;
});
var shadow$dom$state_machine__40214__auto____1 = (function (state_45775){
while(true){
var ret_value__40215__auto__ = (function (){try{while(true){
var result__40216__auto__ = switch__40213__auto__(state_45775);
if(cljs.core.keyword_identical_QMARK_(result__40216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40216__auto__;
}
break;
}
}catch (e45793){var ex__40217__auto__ = e45793;
var statearr_45794_46417 = state_45775;
(statearr_45794_46417[(2)] = ex__40217__auto__);


if(cljs.core.seq((state_45775[(4)]))){
var statearr_45795_46419 = state_45775;
(statearr_45795_46419[(1)] = cljs.core.first((state_45775[(4)])));

} else {
throw ex__40217__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46421 = state_45775;
state_45775 = G__46421;
continue;
} else {
return ret_value__40215__auto__;
}
break;
}
});
shadow$dom$state_machine__40214__auto__ = function(state_45775){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__40214__auto____0.call(this);
case 1:
return shadow$dom$state_machine__40214__auto____1.call(this,state_45775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__40214__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__40214__auto____0;
shadow$dom$state_machine__40214__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__40214__auto____1;
return shadow$dom$state_machine__40214__auto__;
})()
})();
var state__42890__auto__ = (function (){var statearr_45796 = f__42889__auto__();
(statearr_45796[(6)] = c__42888__auto___46409);

return statearr_45796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42890__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
