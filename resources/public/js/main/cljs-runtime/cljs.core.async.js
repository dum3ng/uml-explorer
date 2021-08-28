goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__49636 = arguments.length;
switch (G__49636) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49637 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49637 = (function (f,blockable,meta49638){
this.f = f;
this.blockable = blockable;
this.meta49638 = meta49638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49639,meta49638__$1){
var self__ = this;
var _49639__$1 = this;
return (new cljs.core.async.t_cljs$core$async49637(self__.f,self__.blockable,meta49638__$1));
}));

(cljs.core.async.t_cljs$core$async49637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49639){
var self__ = this;
var _49639__$1 = this;
return self__.meta49638;
}));

(cljs.core.async.t_cljs$core$async49637.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49637.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49637.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async49637.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async49637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta49638","meta49638",1739882752,null)], null);
}));

(cljs.core.async.t_cljs$core$async49637.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49637");

(cljs.core.async.t_cljs$core$async49637.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async49637");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49637.
 */
cljs.core.async.__GT_t_cljs$core$async49637 = (function cljs$core$async$__GT_t_cljs$core$async49637(f__$1,blockable__$1,meta49638){
return (new cljs.core.async.t_cljs$core$async49637(f__$1,blockable__$1,meta49638));
});

}

return (new cljs.core.async.t_cljs$core$async49637(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__49657 = arguments.length;
switch (G__49657) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__49675 = arguments.length;
switch (G__49675) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__49682 = arguments.length;
switch (G__49682) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_52848 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52848) : fn1.call(null,val_52848));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52848) : fn1.call(null,val_52848));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__49688 = arguments.length;
switch (G__49688) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___52851 = n;
var x_52852 = (0);
while(true){
if((x_52852 < n__4695__auto___52851)){
(a[x_52852] = x_52852);

var G__52853 = (x_52852 + (1));
x_52852 = G__52853;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49713 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49713 = (function (flag,meta49714){
this.flag = flag;
this.meta49714 = meta49714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49715,meta49714__$1){
var self__ = this;
var _49715__$1 = this;
return (new cljs.core.async.t_cljs$core$async49713(self__.flag,meta49714__$1));
}));

(cljs.core.async.t_cljs$core$async49713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49715){
var self__ = this;
var _49715__$1 = this;
return self__.meta49714;
}));

(cljs.core.async.t_cljs$core$async49713.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49713.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async49713.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49713.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async49713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta49714","meta49714",-182308958,null)], null);
}));

(cljs.core.async.t_cljs$core$async49713.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49713");

(cljs.core.async.t_cljs$core$async49713.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async49713");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49713.
 */
cljs.core.async.__GT_t_cljs$core$async49713 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async49713(flag__$1,meta49714){
return (new cljs.core.async.t_cljs$core$async49713(flag__$1,meta49714));
});

}

return (new cljs.core.async.t_cljs$core$async49713(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49726 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49726 = (function (flag,cb,meta49727){
this.flag = flag;
this.cb = cb;
this.meta49727 = meta49727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49728,meta49727__$1){
var self__ = this;
var _49728__$1 = this;
return (new cljs.core.async.t_cljs$core$async49726(self__.flag,self__.cb,meta49727__$1));
}));

(cljs.core.async.t_cljs$core$async49726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49728){
var self__ = this;
var _49728__$1 = this;
return self__.meta49727;
}));

(cljs.core.async.t_cljs$core$async49726.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49726.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async49726.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49726.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async49726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta49727","meta49727",1850816625,null)], null);
}));

(cljs.core.async.t_cljs$core$async49726.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49726");

(cljs.core.async.t_cljs$core$async49726.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async49726");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49726.
 */
cljs.core.async.__GT_t_cljs$core$async49726 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async49726(flag__$1,cb__$1,meta49727){
return (new cljs.core.async.t_cljs$core$async49726(flag__$1,cb__$1,meta49727));
});

}

return (new cljs.core.async.t_cljs$core$async49726(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__49739_SHARP_){
var G__49743 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49739_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__49743) : fret.call(null,G__49743));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__49740_SHARP_){
var G__49744 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49740_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__49744) : fret.call(null,G__49744));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__52864 = (i + (1));
i = G__52864;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___52868 = arguments.length;
var i__4819__auto___52869 = (0);
while(true){
if((i__4819__auto___52869 < len__4818__auto___52868)){
args__4824__auto__.push((arguments[i__4819__auto___52869]));

var G__52870 = (i__4819__auto___52869 + (1));
i__4819__auto___52869 = G__52870;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__49756){
var map__49757 = p__49756;
var map__49757__$1 = cljs.core.__destructure_map(map__49757);
var opts = map__49757__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq49748){
var G__49749 = cljs.core.first(seq49748);
var seq49748__$1 = cljs.core.next(seq49748);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49749,seq49748__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__49783 = arguments.length;
switch (G__49783) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__49544__auto___52875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49545__auto__ = (function (){var switch__49226__auto__ = (function (state_49879){
var state_val_49886 = (state_49879[(1)]);
if((state_val_49886 === (7))){
var inst_49857 = (state_49879[(2)]);
var state_49879__$1 = state_49879;
var statearr_49898_52878 = state_49879__$1;
(statearr_49898_52878[(2)] = inst_49857);

(statearr_49898_52878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49886 === (1))){
var state_49879__$1 = state_49879;
var statearr_49899_52881 = state_49879__$1;
(statearr_49899_52881[(2)] = null);

(statearr_49899_52881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49886 === (4))){
var inst_49820 = (state_49879[(7)]);
var inst_49820__$1 = (state_49879[(2)]);
var inst_49824 = (inst_49820__$1 == null);
var state_49879__$1 = (function (){var statearr_49906 = state_49879;
(statearr_49906[(7)] = inst_49820__$1);

return statearr_49906;
})();
if(cljs.core.truth_(inst_49824)){
var statearr_49910_52882 = state_49879__$1;
(statearr_49910_52882[(1)] = (5));

} else {
var statearr_49911_52884 = state_49879__$1;
(statearr_49911_52884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49886 === (13))){
var state_49879__$1 = state_49879;
var statearr_49912_52885 = state_49879__$1;
(statearr_49912_52885[(2)] = null);

(statearr_49912_52885[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49886 === (6))){
var inst_49820 = (state_49879[(7)]);
var state_49879__$1 = state_49879;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49879__$1,(11),to,inst_49820);
} else {
if((state_val_49886 === (3))){
var inst_49871 = (state_49879[(2)]);
var state_49879__$1 = state_49879;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49879__$1,inst_49871);
} else {
if((state_val_49886 === (12))){
var state_49879__$1 = state_49879;
var statearr_49923_52890 = state_49879__$1;
(statearr_49923_52890[(2)] = null);

(statearr_49923_52890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49886 === (2))){
var state_49879__$1 = state_49879;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49879__$1,(4),from);
} else {
if((state_val_49886 === (11))){
var inst_49837 = (state_49879[(2)]);
var state_49879__$1 = state_49879;
if(cljs.core.truth_(inst_49837)){
var statearr_49924_52894 = state_49879__$1;
(statearr_49924_52894[(1)] = (12));

} else {
var statearr_49927_52895 = state_49879__$1;
(statearr_49927_52895[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49886 === (9))){
var state_49879__$1 = state_49879;
var statearr_49928_52896 = state_49879__$1;
(statearr_49928_52896[(2)] = null);

(statearr_49928_52896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49886 === (5))){
var state_49879__$1 = state_49879;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49930_52897 = state_49879__$1;
(statearr_49930_52897[(1)] = (8));

} else {
var statearr_49931_52898 = state_49879__$1;
(statearr_49931_52898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49886 === (14))){
var inst_49855 = (state_49879[(2)]);
var state_49879__$1 = state_49879;
var statearr_49933_52899 = state_49879__$1;
(statearr_49933_52899[(2)] = inst_49855);

(statearr_49933_52899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49886 === (10))){
var inst_49834 = (state_49879[(2)]);
var state_49879__$1 = state_49879;
var statearr_49936_52900 = state_49879__$1;
(statearr_49936_52900[(2)] = inst_49834);

(statearr_49936_52900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49886 === (8))){
var inst_49829 = cljs.core.async.close_BANG_(to);
var state_49879__$1 = state_49879;
var statearr_49937_52905 = state_49879__$1;
(statearr_49937_52905[(2)] = inst_49829);

(statearr_49937_52905[(1)] = (10));


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
}
}
});
return (function() {
var cljs$core$async$state_machine__49227__auto__ = null;
var cljs$core$async$state_machine__49227__auto____0 = (function (){
var statearr_49938 = [null,null,null,null,null,null,null,null];
(statearr_49938[(0)] = cljs$core$async$state_machine__49227__auto__);

(statearr_49938[(1)] = (1));

return statearr_49938;
});
var cljs$core$async$state_machine__49227__auto____1 = (function (state_49879){
while(true){
var ret_value__49228__auto__ = (function (){try{while(true){
var result__49229__auto__ = switch__49226__auto__(state_49879);
if(cljs.core.keyword_identical_QMARK_(result__49229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49229__auto__;
}
break;
}
}catch (e49940){var ex__49230__auto__ = e49940;
var statearr_49942_52906 = state_49879;
(statearr_49942_52906[(2)] = ex__49230__auto__);


if(cljs.core.seq((state_49879[(4)]))){
var statearr_49943_52907 = state_49879;
(statearr_49943_52907[(1)] = cljs.core.first((state_49879[(4)])));

} else {
throw ex__49230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52908 = state_49879;
state_49879 = G__52908;
continue;
} else {
return ret_value__49228__auto__;
}
break;
}
});
cljs$core$async$state_machine__49227__auto__ = function(state_49879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49227__auto____1.call(this,state_49879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49227__auto____0;
cljs$core$async$state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49227__auto____1;
return cljs$core$async$state_machine__49227__auto__;
})()
})();
var state__49546__auto__ = (function (){var statearr_49944 = f__49545__auto__();
(statearr_49944[(6)] = c__49544__auto___52875);

return statearr_49944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49546__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__49955){
var vec__49956 = p__49955;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49956,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49956,(1),null);
var job = vec__49956;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__49544__auto___52912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49545__auto__ = (function (){var switch__49226__auto__ = (function (state_49963){
var state_val_49964 = (state_49963[(1)]);
if((state_val_49964 === (1))){
var state_49963__$1 = state_49963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49963__$1,(2),res,v);
} else {
if((state_val_49964 === (2))){
var inst_49960 = (state_49963[(2)]);
var inst_49961 = cljs.core.async.close_BANG_(res);
var state_49963__$1 = (function (){var statearr_49969 = state_49963;
(statearr_49969[(7)] = inst_49960);

return statearr_49969;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49963__$1,inst_49961);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____0 = (function (){
var statearr_49971 = [null,null,null,null,null,null,null,null];
(statearr_49971[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__);

(statearr_49971[(1)] = (1));

return statearr_49971;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____1 = (function (state_49963){
while(true){
var ret_value__49228__auto__ = (function (){try{while(true){
var result__49229__auto__ = switch__49226__auto__(state_49963);
if(cljs.core.keyword_identical_QMARK_(result__49229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49229__auto__;
}
break;
}
}catch (e49973){var ex__49230__auto__ = e49973;
var statearr_49974_52916 = state_49963;
(statearr_49974_52916[(2)] = ex__49230__auto__);


if(cljs.core.seq((state_49963[(4)]))){
var statearr_49976_52917 = state_49963;
(statearr_49976_52917[(1)] = cljs.core.first((state_49963[(4)])));

} else {
throw ex__49230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52920 = state_49963;
state_49963 = G__52920;
continue;
} else {
return ret_value__49228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__ = function(state_49963){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____1.call(this,state_49963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__;
})()
})();
var state__49546__auto__ = (function (){var statearr_49977 = f__49545__auto__();
(statearr_49977[(6)] = c__49544__auto___52912);

return statearr_49977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49546__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__49979){
var vec__49980 = p__49979;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49980,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49980,(1),null);
var job = vec__49980;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___52922 = n;
var __52923 = (0);
while(true){
if((__52923 < n__4695__auto___52922)){
var G__49984_52924 = type;
var G__49984_52925__$1 = (((G__49984_52924 instanceof cljs.core.Keyword))?G__49984_52924.fqn:null);
switch (G__49984_52925__$1) {
case "compute":
var c__49544__auto___52927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52923,c__49544__auto___52927,G__49984_52924,G__49984_52925__$1,n__4695__auto___52922,jobs,results,process,async){
return (function (){
var f__49545__auto__ = (function (){var switch__49226__auto__ = ((function (__52923,c__49544__auto___52927,G__49984_52924,G__49984_52925__$1,n__4695__auto___52922,jobs,results,process,async){
return (function (state_49998){
var state_val_49999 = (state_49998[(1)]);
if((state_val_49999 === (1))){
var state_49998__$1 = state_49998;
var statearr_50005_52929 = state_49998__$1;
(statearr_50005_52929[(2)] = null);

(statearr_50005_52929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49999 === (2))){
var state_49998__$1 = state_49998;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49998__$1,(4),jobs);
} else {
if((state_val_49999 === (3))){
var inst_49996 = (state_49998[(2)]);
var state_49998__$1 = state_49998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49998__$1,inst_49996);
} else {
if((state_val_49999 === (4))){
var inst_49988 = (state_49998[(2)]);
var inst_49989 = process(inst_49988);
var state_49998__$1 = state_49998;
if(cljs.core.truth_(inst_49989)){
var statearr_50007_52931 = state_49998__$1;
(statearr_50007_52931[(1)] = (5));

} else {
var statearr_50008_52932 = state_49998__$1;
(statearr_50008_52932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49999 === (5))){
var state_49998__$1 = state_49998;
var statearr_50009_52933 = state_49998__$1;
(statearr_50009_52933[(2)] = null);

(statearr_50009_52933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49999 === (6))){
var state_49998__$1 = state_49998;
var statearr_50011_52934 = state_49998__$1;
(statearr_50011_52934[(2)] = null);

(statearr_50011_52934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49999 === (7))){
var inst_49994 = (state_49998[(2)]);
var state_49998__$1 = state_49998;
var statearr_50012_52935 = state_49998__$1;
(statearr_50012_52935[(2)] = inst_49994);

(statearr_50012_52935[(1)] = (3));


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
});})(__52923,c__49544__auto___52927,G__49984_52924,G__49984_52925__$1,n__4695__auto___52922,jobs,results,process,async))
;
return ((function (__52923,switch__49226__auto__,c__49544__auto___52927,G__49984_52924,G__49984_52925__$1,n__4695__auto___52922,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____0 = (function (){
var statearr_50014 = [null,null,null,null,null,null,null];
(statearr_50014[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__);

(statearr_50014[(1)] = (1));

return statearr_50014;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____1 = (function (state_49998){
while(true){
var ret_value__49228__auto__ = (function (){try{while(true){
var result__49229__auto__ = switch__49226__auto__(state_49998);
if(cljs.core.keyword_identical_QMARK_(result__49229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49229__auto__;
}
break;
}
}catch (e50015){var ex__49230__auto__ = e50015;
var statearr_50016_52940 = state_49998;
(statearr_50016_52940[(2)] = ex__49230__auto__);


if(cljs.core.seq((state_49998[(4)]))){
var statearr_50017_52941 = state_49998;
(statearr_50017_52941[(1)] = cljs.core.first((state_49998[(4)])));

} else {
throw ex__49230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52942 = state_49998;
state_49998 = G__52942;
continue;
} else {
return ret_value__49228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__ = function(state_49998){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____1.call(this,state_49998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__;
})()
;})(__52923,switch__49226__auto__,c__49544__auto___52927,G__49984_52924,G__49984_52925__$1,n__4695__auto___52922,jobs,results,process,async))
})();
var state__49546__auto__ = (function (){var statearr_50018 = f__49545__auto__();
(statearr_50018[(6)] = c__49544__auto___52927);

return statearr_50018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49546__auto__);
});})(__52923,c__49544__auto___52927,G__49984_52924,G__49984_52925__$1,n__4695__auto___52922,jobs,results,process,async))
);


break;
case "async":
var c__49544__auto___52943 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52923,c__49544__auto___52943,G__49984_52924,G__49984_52925__$1,n__4695__auto___52922,jobs,results,process,async){
return (function (){
var f__49545__auto__ = (function (){var switch__49226__auto__ = ((function (__52923,c__49544__auto___52943,G__49984_52924,G__49984_52925__$1,n__4695__auto___52922,jobs,results,process,async){
return (function (state_50031){
var state_val_50032 = (state_50031[(1)]);
if((state_val_50032 === (1))){
var state_50031__$1 = state_50031;
var statearr_50034_52945 = state_50031__$1;
(statearr_50034_52945[(2)] = null);

(statearr_50034_52945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50032 === (2))){
var state_50031__$1 = state_50031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50031__$1,(4),jobs);
} else {
if((state_val_50032 === (3))){
var inst_50029 = (state_50031[(2)]);
var state_50031__$1 = state_50031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50031__$1,inst_50029);
} else {
if((state_val_50032 === (4))){
var inst_50021 = (state_50031[(2)]);
var inst_50022 = async(inst_50021);
var state_50031__$1 = state_50031;
if(cljs.core.truth_(inst_50022)){
var statearr_50036_52946 = state_50031__$1;
(statearr_50036_52946[(1)] = (5));

} else {
var statearr_50037_52947 = state_50031__$1;
(statearr_50037_52947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50032 === (5))){
var state_50031__$1 = state_50031;
var statearr_50038_52950 = state_50031__$1;
(statearr_50038_52950[(2)] = null);

(statearr_50038_52950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50032 === (6))){
var state_50031__$1 = state_50031;
var statearr_50039_52951 = state_50031__$1;
(statearr_50039_52951[(2)] = null);

(statearr_50039_52951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50032 === (7))){
var inst_50027 = (state_50031[(2)]);
var state_50031__$1 = state_50031;
var statearr_50041_52952 = state_50031__$1;
(statearr_50041_52952[(2)] = inst_50027);

(statearr_50041_52952[(1)] = (3));


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
});})(__52923,c__49544__auto___52943,G__49984_52924,G__49984_52925__$1,n__4695__auto___52922,jobs,results,process,async))
;
return ((function (__52923,switch__49226__auto__,c__49544__auto___52943,G__49984_52924,G__49984_52925__$1,n__4695__auto___52922,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____0 = (function (){
var statearr_50050 = [null,null,null,null,null,null,null];
(statearr_50050[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__);

(statearr_50050[(1)] = (1));

return statearr_50050;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____1 = (function (state_50031){
while(true){
var ret_value__49228__auto__ = (function (){try{while(true){
var result__49229__auto__ = switch__49226__auto__(state_50031);
if(cljs.core.keyword_identical_QMARK_(result__49229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49229__auto__;
}
break;
}
}catch (e50053){var ex__49230__auto__ = e50053;
var statearr_50054_52955 = state_50031;
(statearr_50054_52955[(2)] = ex__49230__auto__);


if(cljs.core.seq((state_50031[(4)]))){
var statearr_50055_52956 = state_50031;
(statearr_50055_52956[(1)] = cljs.core.first((state_50031[(4)])));

} else {
throw ex__49230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52957 = state_50031;
state_50031 = G__52957;
continue;
} else {
return ret_value__49228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__ = function(state_50031){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____1.call(this,state_50031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__;
})()
;})(__52923,switch__49226__auto__,c__49544__auto___52943,G__49984_52924,G__49984_52925__$1,n__4695__auto___52922,jobs,results,process,async))
})();
var state__49546__auto__ = (function (){var statearr_50056 = f__49545__auto__();
(statearr_50056[(6)] = c__49544__auto___52943);

return statearr_50056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49546__auto__);
});})(__52923,c__49544__auto___52943,G__49984_52924,G__49984_52925__$1,n__4695__auto___52922,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49984_52925__$1)].join('')));

}

var G__52959 = (__52923 + (1));
__52923 = G__52959;
continue;
} else {
}
break;
}

var c__49544__auto___52960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49545__auto__ = (function (){var switch__49226__auto__ = (function (state_50082){
var state_val_50084 = (state_50082[(1)]);
if((state_val_50084 === (7))){
var inst_50076 = (state_50082[(2)]);
var state_50082__$1 = state_50082;
var statearr_50085_52961 = state_50082__$1;
(statearr_50085_52961[(2)] = inst_50076);

(statearr_50085_52961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50084 === (1))){
var state_50082__$1 = state_50082;
var statearr_50086_52962 = state_50082__$1;
(statearr_50086_52962[(2)] = null);

(statearr_50086_52962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50084 === (4))){
var inst_50059 = (state_50082[(7)]);
var inst_50059__$1 = (state_50082[(2)]);
var inst_50060 = (inst_50059__$1 == null);
var state_50082__$1 = (function (){var statearr_50090 = state_50082;
(statearr_50090[(7)] = inst_50059__$1);

return statearr_50090;
})();
if(cljs.core.truth_(inst_50060)){
var statearr_50091_52965 = state_50082__$1;
(statearr_50091_52965[(1)] = (5));

} else {
var statearr_50092_52966 = state_50082__$1;
(statearr_50092_52966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50084 === (6))){
var inst_50064 = (state_50082[(8)]);
var inst_50059 = (state_50082[(7)]);
var inst_50064__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_50065 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50068 = [inst_50059,inst_50064__$1];
var inst_50069 = (new cljs.core.PersistentVector(null,2,(5),inst_50065,inst_50068,null));
var state_50082__$1 = (function (){var statearr_50094 = state_50082;
(statearr_50094[(8)] = inst_50064__$1);

return statearr_50094;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50082__$1,(8),jobs,inst_50069);
} else {
if((state_val_50084 === (3))){
var inst_50078 = (state_50082[(2)]);
var state_50082__$1 = state_50082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50082__$1,inst_50078);
} else {
if((state_val_50084 === (2))){
var state_50082__$1 = state_50082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50082__$1,(4),from);
} else {
if((state_val_50084 === (9))){
var inst_50073 = (state_50082[(2)]);
var state_50082__$1 = (function (){var statearr_50095 = state_50082;
(statearr_50095[(9)] = inst_50073);

return statearr_50095;
})();
var statearr_50096_52969 = state_50082__$1;
(statearr_50096_52969[(2)] = null);

(statearr_50096_52969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50084 === (5))){
var inst_50062 = cljs.core.async.close_BANG_(jobs);
var state_50082__$1 = state_50082;
var statearr_50098_52970 = state_50082__$1;
(statearr_50098_52970[(2)] = inst_50062);

(statearr_50098_52970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50084 === (8))){
var inst_50064 = (state_50082[(8)]);
var inst_50071 = (state_50082[(2)]);
var state_50082__$1 = (function (){var statearr_50102 = state_50082;
(statearr_50102[(10)] = inst_50071);

return statearr_50102;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50082__$1,(9),results,inst_50064);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____0 = (function (){
var statearr_50111 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50111[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__);

(statearr_50111[(1)] = (1));

return statearr_50111;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____1 = (function (state_50082){
while(true){
var ret_value__49228__auto__ = (function (){try{while(true){
var result__49229__auto__ = switch__49226__auto__(state_50082);
if(cljs.core.keyword_identical_QMARK_(result__49229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49229__auto__;
}
break;
}
}catch (e50114){var ex__49230__auto__ = e50114;
var statearr_50115_52971 = state_50082;
(statearr_50115_52971[(2)] = ex__49230__auto__);


if(cljs.core.seq((state_50082[(4)]))){
var statearr_50116_52972 = state_50082;
(statearr_50116_52972[(1)] = cljs.core.first((state_50082[(4)])));

} else {
throw ex__49230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52973 = state_50082;
state_50082 = G__52973;
continue;
} else {
return ret_value__49228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__ = function(state_50082){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____1.call(this,state_50082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__;
})()
})();
var state__49546__auto__ = (function (){var statearr_50118 = f__49545__auto__();
(statearr_50118[(6)] = c__49544__auto___52960);

return statearr_50118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49546__auto__);
}));


var c__49544__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49545__auto__ = (function (){var switch__49226__auto__ = (function (state_50162){
var state_val_50163 = (state_50162[(1)]);
if((state_val_50163 === (7))){
var inst_50156 = (state_50162[(2)]);
var state_50162__$1 = state_50162;
var statearr_50174_52974 = state_50162__$1;
(statearr_50174_52974[(2)] = inst_50156);

(statearr_50174_52974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50163 === (20))){
var state_50162__$1 = state_50162;
var statearr_50180_52975 = state_50162__$1;
(statearr_50180_52975[(2)] = null);

(statearr_50180_52975[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50163 === (1))){
var state_50162__$1 = state_50162;
var statearr_50181_52976 = state_50162__$1;
(statearr_50181_52976[(2)] = null);

(statearr_50181_52976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50163 === (4))){
var inst_50121 = (state_50162[(7)]);
var inst_50121__$1 = (state_50162[(2)]);
var inst_50122 = (inst_50121__$1 == null);
var state_50162__$1 = (function (){var statearr_50187 = state_50162;
(statearr_50187[(7)] = inst_50121__$1);

return statearr_50187;
})();
if(cljs.core.truth_(inst_50122)){
var statearr_50188_52978 = state_50162__$1;
(statearr_50188_52978[(1)] = (5));

} else {
var statearr_50189_52979 = state_50162__$1;
(statearr_50189_52979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50163 === (15))){
var inst_50134 = (state_50162[(8)]);
var state_50162__$1 = state_50162;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50162__$1,(18),to,inst_50134);
} else {
if((state_val_50163 === (21))){
var inst_50150 = (state_50162[(2)]);
var state_50162__$1 = state_50162;
var statearr_50190_52980 = state_50162__$1;
(statearr_50190_52980[(2)] = inst_50150);

(statearr_50190_52980[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50163 === (13))){
var inst_50152 = (state_50162[(2)]);
var state_50162__$1 = (function (){var statearr_50191 = state_50162;
(statearr_50191[(9)] = inst_50152);

return statearr_50191;
})();
var statearr_50192_52981 = state_50162__$1;
(statearr_50192_52981[(2)] = null);

(statearr_50192_52981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50163 === (6))){
var inst_50121 = (state_50162[(7)]);
var state_50162__$1 = state_50162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50162__$1,(11),inst_50121);
} else {
if((state_val_50163 === (17))){
var inst_50143 = (state_50162[(2)]);
var state_50162__$1 = state_50162;
if(cljs.core.truth_(inst_50143)){
var statearr_50198_52982 = state_50162__$1;
(statearr_50198_52982[(1)] = (19));

} else {
var statearr_50201_52983 = state_50162__$1;
(statearr_50201_52983[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50163 === (3))){
var inst_50158 = (state_50162[(2)]);
var state_50162__$1 = state_50162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50162__$1,inst_50158);
} else {
if((state_val_50163 === (12))){
var inst_50131 = (state_50162[(10)]);
var state_50162__$1 = state_50162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50162__$1,(14),inst_50131);
} else {
if((state_val_50163 === (2))){
var state_50162__$1 = state_50162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50162__$1,(4),results);
} else {
if((state_val_50163 === (19))){
var state_50162__$1 = state_50162;
var statearr_50203_52986 = state_50162__$1;
(statearr_50203_52986[(2)] = null);

(statearr_50203_52986[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50163 === (11))){
var inst_50131 = (state_50162[(2)]);
var state_50162__$1 = (function (){var statearr_50207 = state_50162;
(statearr_50207[(10)] = inst_50131);

return statearr_50207;
})();
var statearr_50208_52989 = state_50162__$1;
(statearr_50208_52989[(2)] = null);

(statearr_50208_52989[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50163 === (9))){
var state_50162__$1 = state_50162;
var statearr_50209_52990 = state_50162__$1;
(statearr_50209_52990[(2)] = null);

(statearr_50209_52990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50163 === (5))){
var state_50162__$1 = state_50162;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50210_52991 = state_50162__$1;
(statearr_50210_52991[(1)] = (8));

} else {
var statearr_50211_52992 = state_50162__$1;
(statearr_50211_52992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50163 === (14))){
var inst_50134 = (state_50162[(8)]);
var inst_50136 = (state_50162[(11)]);
var inst_50134__$1 = (state_50162[(2)]);
var inst_50135 = (inst_50134__$1 == null);
var inst_50136__$1 = cljs.core.not(inst_50135);
var state_50162__$1 = (function (){var statearr_50215 = state_50162;
(statearr_50215[(8)] = inst_50134__$1);

(statearr_50215[(11)] = inst_50136__$1);

return statearr_50215;
})();
if(inst_50136__$1){
var statearr_50216_52993 = state_50162__$1;
(statearr_50216_52993[(1)] = (15));

} else {
var statearr_50217_52994 = state_50162__$1;
(statearr_50217_52994[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50163 === (16))){
var inst_50136 = (state_50162[(11)]);
var state_50162__$1 = state_50162;
var statearr_50218_52995 = state_50162__$1;
(statearr_50218_52995[(2)] = inst_50136);

(statearr_50218_52995[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50163 === (10))){
var inst_50128 = (state_50162[(2)]);
var state_50162__$1 = state_50162;
var statearr_50219_52996 = state_50162__$1;
(statearr_50219_52996[(2)] = inst_50128);

(statearr_50219_52996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50163 === (18))){
var inst_50140 = (state_50162[(2)]);
var state_50162__$1 = state_50162;
var statearr_50220_52997 = state_50162__$1;
(statearr_50220_52997[(2)] = inst_50140);

(statearr_50220_52997[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50163 === (8))){
var inst_50125 = cljs.core.async.close_BANG_(to);
var state_50162__$1 = state_50162;
var statearr_50224_52998 = state_50162__$1;
(statearr_50224_52998[(2)] = inst_50125);

(statearr_50224_52998[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____0 = (function (){
var statearr_50225 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50225[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__);

(statearr_50225[(1)] = (1));

return statearr_50225;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____1 = (function (state_50162){
while(true){
var ret_value__49228__auto__ = (function (){try{while(true){
var result__49229__auto__ = switch__49226__auto__(state_50162);
if(cljs.core.keyword_identical_QMARK_(result__49229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49229__auto__;
}
break;
}
}catch (e50226){var ex__49230__auto__ = e50226;
var statearr_50227_52999 = state_50162;
(statearr_50227_52999[(2)] = ex__49230__auto__);


if(cljs.core.seq((state_50162[(4)]))){
var statearr_50228_53000 = state_50162;
(statearr_50228_53000[(1)] = cljs.core.first((state_50162[(4)])));

} else {
throw ex__49230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53001 = state_50162;
state_50162 = G__53001;
continue;
} else {
return ret_value__49228__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__ = function(state_50162){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____1.call(this,state_50162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49227__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49227__auto__;
})()
})();
var state__49546__auto__ = (function (){var statearr_50233 = f__49545__auto__();
(statearr_50233[(6)] = c__49544__auto__);

return statearr_50233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49546__auto__);
}));

return c__49544__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__50236 = arguments.length;
switch (G__50236) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__50247 = arguments.length;
switch (G__50247) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__50253 = arguments.length;
switch (G__50253) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__49544__auto___53011 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49545__auto__ = (function (){var switch__49226__auto__ = (function (state_50288){
var state_val_50289 = (state_50288[(1)]);
if((state_val_50289 === (7))){
var inst_50284 = (state_50288[(2)]);
var state_50288__$1 = state_50288;
var statearr_50293_53012 = state_50288__$1;
(statearr_50293_53012[(2)] = inst_50284);

(statearr_50293_53012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50289 === (1))){
var state_50288__$1 = state_50288;
var statearr_50294_53014 = state_50288__$1;
(statearr_50294_53014[(2)] = null);

(statearr_50294_53014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50289 === (4))){
var inst_50261 = (state_50288[(7)]);
var inst_50261__$1 = (state_50288[(2)]);
var inst_50266 = (inst_50261__$1 == null);
var state_50288__$1 = (function (){var statearr_50295 = state_50288;
(statearr_50295[(7)] = inst_50261__$1);

return statearr_50295;
})();
if(cljs.core.truth_(inst_50266)){
var statearr_50296_53016 = state_50288__$1;
(statearr_50296_53016[(1)] = (5));

} else {
var statearr_50300_53017 = state_50288__$1;
(statearr_50300_53017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50289 === (13))){
var state_50288__$1 = state_50288;
var statearr_50301_53018 = state_50288__$1;
(statearr_50301_53018[(2)] = null);

(statearr_50301_53018[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50289 === (6))){
var inst_50261 = (state_50288[(7)]);
var inst_50271 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50261) : p.call(null,inst_50261));
var state_50288__$1 = state_50288;
if(cljs.core.truth_(inst_50271)){
var statearr_50302_53019 = state_50288__$1;
(statearr_50302_53019[(1)] = (9));

} else {
var statearr_50303_53020 = state_50288__$1;
(statearr_50303_53020[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50289 === (3))){
var inst_50286 = (state_50288[(2)]);
var state_50288__$1 = state_50288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50288__$1,inst_50286);
} else {
if((state_val_50289 === (12))){
var state_50288__$1 = state_50288;
var statearr_50304_53021 = state_50288__$1;
(statearr_50304_53021[(2)] = null);

(statearr_50304_53021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50289 === (2))){
var state_50288__$1 = state_50288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50288__$1,(4),ch);
} else {
if((state_val_50289 === (11))){
var inst_50261 = (state_50288[(7)]);
var inst_50275 = (state_50288[(2)]);
var state_50288__$1 = state_50288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50288__$1,(8),inst_50275,inst_50261);
} else {
if((state_val_50289 === (9))){
var state_50288__$1 = state_50288;
var statearr_50308_53022 = state_50288__$1;
(statearr_50308_53022[(2)] = tc);

(statearr_50308_53022[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50289 === (5))){
var inst_50268 = cljs.core.async.close_BANG_(tc);
var inst_50269 = cljs.core.async.close_BANG_(fc);
var state_50288__$1 = (function (){var statearr_50309 = state_50288;
(statearr_50309[(8)] = inst_50268);

return statearr_50309;
})();
var statearr_50310_53023 = state_50288__$1;
(statearr_50310_53023[(2)] = inst_50269);

(statearr_50310_53023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50289 === (14))){
var inst_50282 = (state_50288[(2)]);
var state_50288__$1 = state_50288;
var statearr_50311_53026 = state_50288__$1;
(statearr_50311_53026[(2)] = inst_50282);

(statearr_50311_53026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50289 === (10))){
var state_50288__$1 = state_50288;
var statearr_50312_53027 = state_50288__$1;
(statearr_50312_53027[(2)] = fc);

(statearr_50312_53027[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50289 === (8))){
var inst_50277 = (state_50288[(2)]);
var state_50288__$1 = state_50288;
if(cljs.core.truth_(inst_50277)){
var statearr_50313_53028 = state_50288__$1;
(statearr_50313_53028[(1)] = (12));

} else {
var statearr_50314_53029 = state_50288__$1;
(statearr_50314_53029[(1)] = (13));

}

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
}
}
});
return (function() {
var cljs$core$async$state_machine__49227__auto__ = null;
var cljs$core$async$state_machine__49227__auto____0 = (function (){
var statearr_50315 = [null,null,null,null,null,null,null,null,null];
(statearr_50315[(0)] = cljs$core$async$state_machine__49227__auto__);

(statearr_50315[(1)] = (1));

return statearr_50315;
});
var cljs$core$async$state_machine__49227__auto____1 = (function (state_50288){
while(true){
var ret_value__49228__auto__ = (function (){try{while(true){
var result__49229__auto__ = switch__49226__auto__(state_50288);
if(cljs.core.keyword_identical_QMARK_(result__49229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49229__auto__;
}
break;
}
}catch (e50316){var ex__49230__auto__ = e50316;
var statearr_50317_53032 = state_50288;
(statearr_50317_53032[(2)] = ex__49230__auto__);


if(cljs.core.seq((state_50288[(4)]))){
var statearr_50323_53034 = state_50288;
(statearr_50323_53034[(1)] = cljs.core.first((state_50288[(4)])));

} else {
throw ex__49230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53036 = state_50288;
state_50288 = G__53036;
continue;
} else {
return ret_value__49228__auto__;
}
break;
}
});
cljs$core$async$state_machine__49227__auto__ = function(state_50288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49227__auto____1.call(this,state_50288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49227__auto____0;
cljs$core$async$state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49227__auto____1;
return cljs$core$async$state_machine__49227__auto__;
})()
})();
var state__49546__auto__ = (function (){var statearr_50324 = f__49545__auto__();
(statearr_50324[(6)] = c__49544__auto___53011);

return statearr_50324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49546__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__49544__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49545__auto__ = (function (){var switch__49226__auto__ = (function (state_50348){
var state_val_50349 = (state_50348[(1)]);
if((state_val_50349 === (7))){
var inst_50344 = (state_50348[(2)]);
var state_50348__$1 = state_50348;
var statearr_50354_53038 = state_50348__$1;
(statearr_50354_53038[(2)] = inst_50344);

(statearr_50354_53038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50349 === (1))){
var inst_50325 = init;
var inst_50326 = inst_50325;
var state_50348__$1 = (function (){var statearr_50355 = state_50348;
(statearr_50355[(7)] = inst_50326);

return statearr_50355;
})();
var statearr_50357_53041 = state_50348__$1;
(statearr_50357_53041[(2)] = null);

(statearr_50357_53041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50349 === (4))){
var inst_50329 = (state_50348[(8)]);
var inst_50329__$1 = (state_50348[(2)]);
var inst_50330 = (inst_50329__$1 == null);
var state_50348__$1 = (function (){var statearr_50359 = state_50348;
(statearr_50359[(8)] = inst_50329__$1);

return statearr_50359;
})();
if(cljs.core.truth_(inst_50330)){
var statearr_50360_53043 = state_50348__$1;
(statearr_50360_53043[(1)] = (5));

} else {
var statearr_50361_53044 = state_50348__$1;
(statearr_50361_53044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50349 === (6))){
var inst_50326 = (state_50348[(7)]);
var inst_50333 = (state_50348[(9)]);
var inst_50329 = (state_50348[(8)]);
var inst_50333__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_50326,inst_50329) : f.call(null,inst_50326,inst_50329));
var inst_50334 = cljs.core.reduced_QMARK_(inst_50333__$1);
var state_50348__$1 = (function (){var statearr_50364 = state_50348;
(statearr_50364[(9)] = inst_50333__$1);

return statearr_50364;
})();
if(inst_50334){
var statearr_50365_53045 = state_50348__$1;
(statearr_50365_53045[(1)] = (8));

} else {
var statearr_50366_53046 = state_50348__$1;
(statearr_50366_53046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50349 === (3))){
var inst_50346 = (state_50348[(2)]);
var state_50348__$1 = state_50348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50348__$1,inst_50346);
} else {
if((state_val_50349 === (2))){
var state_50348__$1 = state_50348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50348__$1,(4),ch);
} else {
if((state_val_50349 === (9))){
var inst_50333 = (state_50348[(9)]);
var inst_50326 = inst_50333;
var state_50348__$1 = (function (){var statearr_50367 = state_50348;
(statearr_50367[(7)] = inst_50326);

return statearr_50367;
})();
var statearr_50368_53047 = state_50348__$1;
(statearr_50368_53047[(2)] = null);

(statearr_50368_53047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50349 === (5))){
var inst_50326 = (state_50348[(7)]);
var state_50348__$1 = state_50348;
var statearr_50373_53048 = state_50348__$1;
(statearr_50373_53048[(2)] = inst_50326);

(statearr_50373_53048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50349 === (10))){
var inst_50342 = (state_50348[(2)]);
var state_50348__$1 = state_50348;
var statearr_50374_53050 = state_50348__$1;
(statearr_50374_53050[(2)] = inst_50342);

(statearr_50374_53050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50349 === (8))){
var inst_50333 = (state_50348[(9)]);
var inst_50338 = cljs.core.deref(inst_50333);
var state_50348__$1 = state_50348;
var statearr_50375_53053 = state_50348__$1;
(statearr_50375_53053[(2)] = inst_50338);

(statearr_50375_53053[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__49227__auto__ = null;
var cljs$core$async$reduce_$_state_machine__49227__auto____0 = (function (){
var statearr_50376 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50376[(0)] = cljs$core$async$reduce_$_state_machine__49227__auto__);

(statearr_50376[(1)] = (1));

return statearr_50376;
});
var cljs$core$async$reduce_$_state_machine__49227__auto____1 = (function (state_50348){
while(true){
var ret_value__49228__auto__ = (function (){try{while(true){
var result__49229__auto__ = switch__49226__auto__(state_50348);
if(cljs.core.keyword_identical_QMARK_(result__49229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49229__auto__;
}
break;
}
}catch (e50377){var ex__49230__auto__ = e50377;
var statearr_50378_53055 = state_50348;
(statearr_50378_53055[(2)] = ex__49230__auto__);


if(cljs.core.seq((state_50348[(4)]))){
var statearr_50384_53056 = state_50348;
(statearr_50384_53056[(1)] = cljs.core.first((state_50348[(4)])));

} else {
throw ex__49230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53057 = state_50348;
state_50348 = G__53057;
continue;
} else {
return ret_value__49228__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__49227__auto__ = function(state_50348){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__49227__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__49227__auto____1.call(this,state_50348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__49227__auto____0;
cljs$core$async$reduce_$_state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__49227__auto____1;
return cljs$core$async$reduce_$_state_machine__49227__auto__;
})()
})();
var state__49546__auto__ = (function (){var statearr_50385 = f__49545__auto__();
(statearr_50385[(6)] = c__49544__auto__);

return statearr_50385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49546__auto__);
}));

return c__49544__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__49544__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49545__auto__ = (function (){var switch__49226__auto__ = (function (state_50396){
var state_val_50397 = (state_50396[(1)]);
if((state_val_50397 === (1))){
var inst_50389 = cljs.core.async.reduce(f__$1,init,ch);
var state_50396__$1 = state_50396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50396__$1,(2),inst_50389);
} else {
if((state_val_50397 === (2))){
var inst_50392 = (state_50396[(2)]);
var inst_50393 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_50392) : f__$1.call(null,inst_50392));
var state_50396__$1 = state_50396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50396__$1,inst_50393);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__49227__auto__ = null;
var cljs$core$async$transduce_$_state_machine__49227__auto____0 = (function (){
var statearr_50400 = [null,null,null,null,null,null,null];
(statearr_50400[(0)] = cljs$core$async$transduce_$_state_machine__49227__auto__);

(statearr_50400[(1)] = (1));

return statearr_50400;
});
var cljs$core$async$transduce_$_state_machine__49227__auto____1 = (function (state_50396){
while(true){
var ret_value__49228__auto__ = (function (){try{while(true){
var result__49229__auto__ = switch__49226__auto__(state_50396);
if(cljs.core.keyword_identical_QMARK_(result__49229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49229__auto__;
}
break;
}
}catch (e50401){var ex__49230__auto__ = e50401;
var statearr_50403_53060 = state_50396;
(statearr_50403_53060[(2)] = ex__49230__auto__);


if(cljs.core.seq((state_50396[(4)]))){
var statearr_50407_53061 = state_50396;
(statearr_50407_53061[(1)] = cljs.core.first((state_50396[(4)])));

} else {
throw ex__49230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53063 = state_50396;
state_50396 = G__53063;
continue;
} else {
return ret_value__49228__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__49227__auto__ = function(state_50396){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__49227__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__49227__auto____1.call(this,state_50396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__49227__auto____0;
cljs$core$async$transduce_$_state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__49227__auto____1;
return cljs$core$async$transduce_$_state_machine__49227__auto__;
})()
})();
var state__49546__auto__ = (function (){var statearr_50411 = f__49545__auto__();
(statearr_50411[(6)] = c__49544__auto__);

return statearr_50411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49546__auto__);
}));

return c__49544__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__50415 = arguments.length;
switch (G__50415) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__49544__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49545__auto__ = (function (){var switch__49226__auto__ = (function (state_50444){
var state_val_50445 = (state_50444[(1)]);
if((state_val_50445 === (7))){
var inst_50425 = (state_50444[(2)]);
var state_50444__$1 = state_50444;
var statearr_50453_53066 = state_50444__$1;
(statearr_50453_53066[(2)] = inst_50425);

(statearr_50453_53066[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50445 === (1))){
var inst_50418 = cljs.core.seq(coll);
var inst_50419 = inst_50418;
var state_50444__$1 = (function (){var statearr_50454 = state_50444;
(statearr_50454[(7)] = inst_50419);

return statearr_50454;
})();
var statearr_50455_53067 = state_50444__$1;
(statearr_50455_53067[(2)] = null);

(statearr_50455_53067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50445 === (4))){
var inst_50419 = (state_50444[(7)]);
var inst_50423 = cljs.core.first(inst_50419);
var state_50444__$1 = state_50444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50444__$1,(7),ch,inst_50423);
} else {
if((state_val_50445 === (13))){
var inst_50437 = (state_50444[(2)]);
var state_50444__$1 = state_50444;
var statearr_50456_53072 = state_50444__$1;
(statearr_50456_53072[(2)] = inst_50437);

(statearr_50456_53072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50445 === (6))){
var inst_50428 = (state_50444[(2)]);
var state_50444__$1 = state_50444;
if(cljs.core.truth_(inst_50428)){
var statearr_50459_53073 = state_50444__$1;
(statearr_50459_53073[(1)] = (8));

} else {
var statearr_50460_53074 = state_50444__$1;
(statearr_50460_53074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50445 === (3))){
var inst_50441 = (state_50444[(2)]);
var state_50444__$1 = state_50444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50444__$1,inst_50441);
} else {
if((state_val_50445 === (12))){
var state_50444__$1 = state_50444;
var statearr_50461_53076 = state_50444__$1;
(statearr_50461_53076[(2)] = null);

(statearr_50461_53076[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50445 === (2))){
var inst_50419 = (state_50444[(7)]);
var state_50444__$1 = state_50444;
if(cljs.core.truth_(inst_50419)){
var statearr_50462_53079 = state_50444__$1;
(statearr_50462_53079[(1)] = (4));

} else {
var statearr_50463_53080 = state_50444__$1;
(statearr_50463_53080[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50445 === (11))){
var inst_50434 = cljs.core.async.close_BANG_(ch);
var state_50444__$1 = state_50444;
var statearr_50464_53081 = state_50444__$1;
(statearr_50464_53081[(2)] = inst_50434);

(statearr_50464_53081[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50445 === (9))){
var state_50444__$1 = state_50444;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50466_53082 = state_50444__$1;
(statearr_50466_53082[(1)] = (11));

} else {
var statearr_50468_53083 = state_50444__$1;
(statearr_50468_53083[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50445 === (5))){
var inst_50419 = (state_50444[(7)]);
var state_50444__$1 = state_50444;
var statearr_50469_53084 = state_50444__$1;
(statearr_50469_53084[(2)] = inst_50419);

(statearr_50469_53084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50445 === (10))){
var inst_50439 = (state_50444[(2)]);
var state_50444__$1 = state_50444;
var statearr_50470_53089 = state_50444__$1;
(statearr_50470_53089[(2)] = inst_50439);

(statearr_50470_53089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50445 === (8))){
var inst_50419 = (state_50444[(7)]);
var inst_50430 = cljs.core.next(inst_50419);
var inst_50419__$1 = inst_50430;
var state_50444__$1 = (function (){var statearr_50471 = state_50444;
(statearr_50471[(7)] = inst_50419__$1);

return statearr_50471;
})();
var statearr_50472_53090 = state_50444__$1;
(statearr_50472_53090[(2)] = null);

(statearr_50472_53090[(1)] = (2));


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
}
});
return (function() {
var cljs$core$async$state_machine__49227__auto__ = null;
var cljs$core$async$state_machine__49227__auto____0 = (function (){
var statearr_50477 = [null,null,null,null,null,null,null,null];
(statearr_50477[(0)] = cljs$core$async$state_machine__49227__auto__);

(statearr_50477[(1)] = (1));

return statearr_50477;
});
var cljs$core$async$state_machine__49227__auto____1 = (function (state_50444){
while(true){
var ret_value__49228__auto__ = (function (){try{while(true){
var result__49229__auto__ = switch__49226__auto__(state_50444);
if(cljs.core.keyword_identical_QMARK_(result__49229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49229__auto__;
}
break;
}
}catch (e50480){var ex__49230__auto__ = e50480;
var statearr_50481_53093 = state_50444;
(statearr_50481_53093[(2)] = ex__49230__auto__);


if(cljs.core.seq((state_50444[(4)]))){
var statearr_50482_53094 = state_50444;
(statearr_50482_53094[(1)] = cljs.core.first((state_50444[(4)])));

} else {
throw ex__49230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53095 = state_50444;
state_50444 = G__53095;
continue;
} else {
return ret_value__49228__auto__;
}
break;
}
});
cljs$core$async$state_machine__49227__auto__ = function(state_50444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49227__auto____1.call(this,state_50444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49227__auto____0;
cljs$core$async$state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49227__auto____1;
return cljs$core$async$state_machine__49227__auto__;
})()
})();
var state__49546__auto__ = (function (){var statearr_50483 = f__49545__auto__();
(statearr_50483[(6)] = c__49544__auto__);

return statearr_50483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49546__auto__);
}));

return c__49544__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__50487 = arguments.length;
switch (G__50487) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_53102 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_53102(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_53105 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_53105(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_53107 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_53107(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_53108 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_53108(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50503 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50503 = (function (ch,cs,meta50504){
this.ch = ch;
this.cs = cs;
this.meta50504 = meta50504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50505,meta50504__$1){
var self__ = this;
var _50505__$1 = this;
return (new cljs.core.async.t_cljs$core$async50503(self__.ch,self__.cs,meta50504__$1));
}));

(cljs.core.async.t_cljs$core$async50503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50505){
var self__ = this;
var _50505__$1 = this;
return self__.meta50504;
}));

(cljs.core.async.t_cljs$core$async50503.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50503.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async50503.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50503.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async50503.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async50503.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async50503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta50504","meta50504",1043125366,null)], null);
}));

(cljs.core.async.t_cljs$core$async50503.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50503");

(cljs.core.async.t_cljs$core$async50503.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async50503");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50503.
 */
cljs.core.async.__GT_t_cljs$core$async50503 = (function cljs$core$async$mult_$___GT_t_cljs$core$async50503(ch__$1,cs__$1,meta50504){
return (new cljs.core.async.t_cljs$core$async50503(ch__$1,cs__$1,meta50504));
});

}

return (new cljs.core.async.t_cljs$core$async50503(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__49544__auto___53117 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49545__auto__ = (function (){var switch__49226__auto__ = (function (state_50663){
var state_val_50666 = (state_50663[(1)]);
if((state_val_50666 === (7))){
var inst_50658 = (state_50663[(2)]);
var state_50663__$1 = state_50663;
var statearr_50667_53118 = state_50663__$1;
(statearr_50667_53118[(2)] = inst_50658);

(statearr_50667_53118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (20))){
var inst_50554 = (state_50663[(7)]);
var inst_50567 = cljs.core.first(inst_50554);
var inst_50572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50567,(0),null);
var inst_50573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50567,(1),null);
var state_50663__$1 = (function (){var statearr_50672 = state_50663;
(statearr_50672[(8)] = inst_50572);

return statearr_50672;
})();
if(cljs.core.truth_(inst_50573)){
var statearr_50673_53119 = state_50663__$1;
(statearr_50673_53119[(1)] = (22));

} else {
var statearr_50674_53120 = state_50663__$1;
(statearr_50674_53120[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (27))){
var inst_50607 = (state_50663[(9)]);
var inst_50612 = (state_50663[(10)]);
var inst_50605 = (state_50663[(11)]);
var inst_50519 = (state_50663[(12)]);
var inst_50612__$1 = cljs.core._nth(inst_50605,inst_50607);
var inst_50613 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50612__$1,inst_50519,done);
var state_50663__$1 = (function (){var statearr_50675 = state_50663;
(statearr_50675[(10)] = inst_50612__$1);

return statearr_50675;
})();
if(cljs.core.truth_(inst_50613)){
var statearr_50676_53124 = state_50663__$1;
(statearr_50676_53124[(1)] = (30));

} else {
var statearr_50677_53125 = state_50663__$1;
(statearr_50677_53125[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (1))){
var state_50663__$1 = state_50663;
var statearr_50678_53126 = state_50663__$1;
(statearr_50678_53126[(2)] = null);

(statearr_50678_53126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (24))){
var inst_50554 = (state_50663[(7)]);
var inst_50578 = (state_50663[(2)]);
var inst_50579 = cljs.core.next(inst_50554);
var inst_50531 = inst_50579;
var inst_50532 = null;
var inst_50533 = (0);
var inst_50534 = (0);
var state_50663__$1 = (function (){var statearr_50679 = state_50663;
(statearr_50679[(13)] = inst_50578);

(statearr_50679[(14)] = inst_50531);

(statearr_50679[(15)] = inst_50534);

(statearr_50679[(16)] = inst_50532);

(statearr_50679[(17)] = inst_50533);

return statearr_50679;
})();
var statearr_50680_53127 = state_50663__$1;
(statearr_50680_53127[(2)] = null);

(statearr_50680_53127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (39))){
var state_50663__$1 = state_50663;
var statearr_50687_53128 = state_50663__$1;
(statearr_50687_53128[(2)] = null);

(statearr_50687_53128[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (4))){
var inst_50519 = (state_50663[(12)]);
var inst_50519__$1 = (state_50663[(2)]);
var inst_50523 = (inst_50519__$1 == null);
var state_50663__$1 = (function (){var statearr_50688 = state_50663;
(statearr_50688[(12)] = inst_50519__$1);

return statearr_50688;
})();
if(cljs.core.truth_(inst_50523)){
var statearr_50689_53129 = state_50663__$1;
(statearr_50689_53129[(1)] = (5));

} else {
var statearr_50690_53130 = state_50663__$1;
(statearr_50690_53130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (15))){
var inst_50531 = (state_50663[(14)]);
var inst_50534 = (state_50663[(15)]);
var inst_50532 = (state_50663[(16)]);
var inst_50533 = (state_50663[(17)]);
var inst_50549 = (state_50663[(2)]);
var inst_50550 = (inst_50534 + (1));
var tmp50681 = inst_50531;
var tmp50682 = inst_50532;
var tmp50683 = inst_50533;
var inst_50531__$1 = tmp50681;
var inst_50532__$1 = tmp50682;
var inst_50533__$1 = tmp50683;
var inst_50534__$1 = inst_50550;
var state_50663__$1 = (function (){var statearr_50691 = state_50663;
(statearr_50691[(18)] = inst_50549);

(statearr_50691[(14)] = inst_50531__$1);

(statearr_50691[(15)] = inst_50534__$1);

(statearr_50691[(16)] = inst_50532__$1);

(statearr_50691[(17)] = inst_50533__$1);

return statearr_50691;
})();
var statearr_50692_53133 = state_50663__$1;
(statearr_50692_53133[(2)] = null);

(statearr_50692_53133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (21))){
var inst_50582 = (state_50663[(2)]);
var state_50663__$1 = state_50663;
var statearr_50696_53134 = state_50663__$1;
(statearr_50696_53134[(2)] = inst_50582);

(statearr_50696_53134[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (31))){
var inst_50612 = (state_50663[(10)]);
var inst_50616 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50612);
var state_50663__$1 = state_50663;
var statearr_50697_53136 = state_50663__$1;
(statearr_50697_53136[(2)] = inst_50616);

(statearr_50697_53136[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (32))){
var inst_50607 = (state_50663[(9)]);
var inst_50604 = (state_50663[(19)]);
var inst_50605 = (state_50663[(11)]);
var inst_50606 = (state_50663[(20)]);
var inst_50618 = (state_50663[(2)]);
var inst_50619 = (inst_50607 + (1));
var tmp50693 = inst_50604;
var tmp50694 = inst_50605;
var tmp50695 = inst_50606;
var inst_50604__$1 = tmp50693;
var inst_50605__$1 = tmp50694;
var inst_50606__$1 = tmp50695;
var inst_50607__$1 = inst_50619;
var state_50663__$1 = (function (){var statearr_50698 = state_50663;
(statearr_50698[(9)] = inst_50607__$1);

(statearr_50698[(19)] = inst_50604__$1);

(statearr_50698[(21)] = inst_50618);

(statearr_50698[(11)] = inst_50605__$1);

(statearr_50698[(20)] = inst_50606__$1);

return statearr_50698;
})();
var statearr_50699_53142 = state_50663__$1;
(statearr_50699_53142[(2)] = null);

(statearr_50699_53142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (40))){
var inst_50631 = (state_50663[(22)]);
var inst_50635 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50631);
var state_50663__$1 = state_50663;
var statearr_50703_53143 = state_50663__$1;
(statearr_50703_53143[(2)] = inst_50635);

(statearr_50703_53143[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (33))){
var inst_50622 = (state_50663[(23)]);
var inst_50624 = cljs.core.chunked_seq_QMARK_(inst_50622);
var state_50663__$1 = state_50663;
if(inst_50624){
var statearr_50704_53144 = state_50663__$1;
(statearr_50704_53144[(1)] = (36));

} else {
var statearr_50705_53145 = state_50663__$1;
(statearr_50705_53145[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (13))){
var inst_50543 = (state_50663[(24)]);
var inst_50546 = cljs.core.async.close_BANG_(inst_50543);
var state_50663__$1 = state_50663;
var statearr_50708_53146 = state_50663__$1;
(statearr_50708_53146[(2)] = inst_50546);

(statearr_50708_53146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (22))){
var inst_50572 = (state_50663[(8)]);
var inst_50575 = cljs.core.async.close_BANG_(inst_50572);
var state_50663__$1 = state_50663;
var statearr_50709_53147 = state_50663__$1;
(statearr_50709_53147[(2)] = inst_50575);

(statearr_50709_53147[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (36))){
var inst_50622 = (state_50663[(23)]);
var inst_50626 = cljs.core.chunk_first(inst_50622);
var inst_50627 = cljs.core.chunk_rest(inst_50622);
var inst_50628 = cljs.core.count(inst_50626);
var inst_50604 = inst_50627;
var inst_50605 = inst_50626;
var inst_50606 = inst_50628;
var inst_50607 = (0);
var state_50663__$1 = (function (){var statearr_50710 = state_50663;
(statearr_50710[(9)] = inst_50607);

(statearr_50710[(19)] = inst_50604);

(statearr_50710[(11)] = inst_50605);

(statearr_50710[(20)] = inst_50606);

return statearr_50710;
})();
var statearr_50711_53148 = state_50663__$1;
(statearr_50711_53148[(2)] = null);

(statearr_50711_53148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (41))){
var inst_50622 = (state_50663[(23)]);
var inst_50637 = (state_50663[(2)]);
var inst_50638 = cljs.core.next(inst_50622);
var inst_50604 = inst_50638;
var inst_50605 = null;
var inst_50606 = (0);
var inst_50607 = (0);
var state_50663__$1 = (function (){var statearr_50715 = state_50663;
(statearr_50715[(9)] = inst_50607);

(statearr_50715[(19)] = inst_50604);

(statearr_50715[(25)] = inst_50637);

(statearr_50715[(11)] = inst_50605);

(statearr_50715[(20)] = inst_50606);

return statearr_50715;
})();
var statearr_50716_53149 = state_50663__$1;
(statearr_50716_53149[(2)] = null);

(statearr_50716_53149[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (43))){
var state_50663__$1 = state_50663;
var statearr_50717_53150 = state_50663__$1;
(statearr_50717_53150[(2)] = null);

(statearr_50717_53150[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (29))){
var inst_50646 = (state_50663[(2)]);
var state_50663__$1 = state_50663;
var statearr_50718_53151 = state_50663__$1;
(statearr_50718_53151[(2)] = inst_50646);

(statearr_50718_53151[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (44))){
var inst_50655 = (state_50663[(2)]);
var state_50663__$1 = (function (){var statearr_50723 = state_50663;
(statearr_50723[(26)] = inst_50655);

return statearr_50723;
})();
var statearr_50724_53154 = state_50663__$1;
(statearr_50724_53154[(2)] = null);

(statearr_50724_53154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (6))){
var inst_50593 = (state_50663[(27)]);
var inst_50592 = cljs.core.deref(cs);
var inst_50593__$1 = cljs.core.keys(inst_50592);
var inst_50594 = cljs.core.count(inst_50593__$1);
var inst_50595 = cljs.core.reset_BANG_(dctr,inst_50594);
var inst_50603 = cljs.core.seq(inst_50593__$1);
var inst_50604 = inst_50603;
var inst_50605 = null;
var inst_50606 = (0);
var inst_50607 = (0);
var state_50663__$1 = (function (){var statearr_50728 = state_50663;
(statearr_50728[(9)] = inst_50607);

(statearr_50728[(19)] = inst_50604);

(statearr_50728[(11)] = inst_50605);

(statearr_50728[(27)] = inst_50593__$1);

(statearr_50728[(28)] = inst_50595);

(statearr_50728[(20)] = inst_50606);

return statearr_50728;
})();
var statearr_50729_53156 = state_50663__$1;
(statearr_50729_53156[(2)] = null);

(statearr_50729_53156[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (28))){
var inst_50604 = (state_50663[(19)]);
var inst_50622 = (state_50663[(23)]);
var inst_50622__$1 = cljs.core.seq(inst_50604);
var state_50663__$1 = (function (){var statearr_50733 = state_50663;
(statearr_50733[(23)] = inst_50622__$1);

return statearr_50733;
})();
if(inst_50622__$1){
var statearr_50734_53159 = state_50663__$1;
(statearr_50734_53159[(1)] = (33));

} else {
var statearr_50735_53160 = state_50663__$1;
(statearr_50735_53160[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (25))){
var inst_50607 = (state_50663[(9)]);
var inst_50606 = (state_50663[(20)]);
var inst_50609 = (inst_50607 < inst_50606);
var inst_50610 = inst_50609;
var state_50663__$1 = state_50663;
if(cljs.core.truth_(inst_50610)){
var statearr_50736_53162 = state_50663__$1;
(statearr_50736_53162[(1)] = (27));

} else {
var statearr_50737_53163 = state_50663__$1;
(statearr_50737_53163[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (34))){
var state_50663__$1 = state_50663;
var statearr_50742_53164 = state_50663__$1;
(statearr_50742_53164[(2)] = null);

(statearr_50742_53164[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (17))){
var state_50663__$1 = state_50663;
var statearr_50746_53165 = state_50663__$1;
(statearr_50746_53165[(2)] = null);

(statearr_50746_53165[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (3))){
var inst_50660 = (state_50663[(2)]);
var state_50663__$1 = state_50663;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50663__$1,inst_50660);
} else {
if((state_val_50666 === (12))){
var inst_50587 = (state_50663[(2)]);
var state_50663__$1 = state_50663;
var statearr_50747_53166 = state_50663__$1;
(statearr_50747_53166[(2)] = inst_50587);

(statearr_50747_53166[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (2))){
var state_50663__$1 = state_50663;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50663__$1,(4),ch);
} else {
if((state_val_50666 === (23))){
var state_50663__$1 = state_50663;
var statearr_50750_53167 = state_50663__$1;
(statearr_50750_53167[(2)] = null);

(statearr_50750_53167[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (35))){
var inst_50644 = (state_50663[(2)]);
var state_50663__$1 = state_50663;
var statearr_50751_53168 = state_50663__$1;
(statearr_50751_53168[(2)] = inst_50644);

(statearr_50751_53168[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (19))){
var inst_50554 = (state_50663[(7)]);
var inst_50559 = cljs.core.chunk_first(inst_50554);
var inst_50560 = cljs.core.chunk_rest(inst_50554);
var inst_50561 = cljs.core.count(inst_50559);
var inst_50531 = inst_50560;
var inst_50532 = inst_50559;
var inst_50533 = inst_50561;
var inst_50534 = (0);
var state_50663__$1 = (function (){var statearr_50753 = state_50663;
(statearr_50753[(14)] = inst_50531);

(statearr_50753[(15)] = inst_50534);

(statearr_50753[(16)] = inst_50532);

(statearr_50753[(17)] = inst_50533);

return statearr_50753;
})();
var statearr_50754_53169 = state_50663__$1;
(statearr_50754_53169[(2)] = null);

(statearr_50754_53169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (11))){
var inst_50531 = (state_50663[(14)]);
var inst_50554 = (state_50663[(7)]);
var inst_50554__$1 = cljs.core.seq(inst_50531);
var state_50663__$1 = (function (){var statearr_50755 = state_50663;
(statearr_50755[(7)] = inst_50554__$1);

return statearr_50755;
})();
if(inst_50554__$1){
var statearr_50756_53170 = state_50663__$1;
(statearr_50756_53170[(1)] = (16));

} else {
var statearr_50760_53171 = state_50663__$1;
(statearr_50760_53171[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (9))){
var inst_50589 = (state_50663[(2)]);
var state_50663__$1 = state_50663;
var statearr_50761_53172 = state_50663__$1;
(statearr_50761_53172[(2)] = inst_50589);

(statearr_50761_53172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (5))){
var inst_50529 = cljs.core.deref(cs);
var inst_50530 = cljs.core.seq(inst_50529);
var inst_50531 = inst_50530;
var inst_50532 = null;
var inst_50533 = (0);
var inst_50534 = (0);
var state_50663__$1 = (function (){var statearr_50762 = state_50663;
(statearr_50762[(14)] = inst_50531);

(statearr_50762[(15)] = inst_50534);

(statearr_50762[(16)] = inst_50532);

(statearr_50762[(17)] = inst_50533);

return statearr_50762;
})();
var statearr_50763_53175 = state_50663__$1;
(statearr_50763_53175[(2)] = null);

(statearr_50763_53175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (14))){
var state_50663__$1 = state_50663;
var statearr_50764_53176 = state_50663__$1;
(statearr_50764_53176[(2)] = null);

(statearr_50764_53176[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (45))){
var inst_50652 = (state_50663[(2)]);
var state_50663__$1 = state_50663;
var statearr_50765_53177 = state_50663__$1;
(statearr_50765_53177[(2)] = inst_50652);

(statearr_50765_53177[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (26))){
var inst_50593 = (state_50663[(27)]);
var inst_50648 = (state_50663[(2)]);
var inst_50649 = cljs.core.seq(inst_50593);
var state_50663__$1 = (function (){var statearr_50766 = state_50663;
(statearr_50766[(29)] = inst_50648);

return statearr_50766;
})();
if(inst_50649){
var statearr_50767_53178 = state_50663__$1;
(statearr_50767_53178[(1)] = (42));

} else {
var statearr_50768_53179 = state_50663__$1;
(statearr_50768_53179[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (16))){
var inst_50554 = (state_50663[(7)]);
var inst_50557 = cljs.core.chunked_seq_QMARK_(inst_50554);
var state_50663__$1 = state_50663;
if(inst_50557){
var statearr_50769_53183 = state_50663__$1;
(statearr_50769_53183[(1)] = (19));

} else {
var statearr_50770_53184 = state_50663__$1;
(statearr_50770_53184[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (38))){
var inst_50641 = (state_50663[(2)]);
var state_50663__$1 = state_50663;
var statearr_50771_53185 = state_50663__$1;
(statearr_50771_53185[(2)] = inst_50641);

(statearr_50771_53185[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (30))){
var state_50663__$1 = state_50663;
var statearr_50772_53186 = state_50663__$1;
(statearr_50772_53186[(2)] = null);

(statearr_50772_53186[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (10))){
var inst_50534 = (state_50663[(15)]);
var inst_50532 = (state_50663[(16)]);
var inst_50542 = cljs.core._nth(inst_50532,inst_50534);
var inst_50543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50542,(0),null);
var inst_50544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50542,(1),null);
var state_50663__$1 = (function (){var statearr_50775 = state_50663;
(statearr_50775[(24)] = inst_50543);

return statearr_50775;
})();
if(cljs.core.truth_(inst_50544)){
var statearr_50776_53187 = state_50663__$1;
(statearr_50776_53187[(1)] = (13));

} else {
var statearr_50777_53188 = state_50663__$1;
(statearr_50777_53188[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (18))){
var inst_50585 = (state_50663[(2)]);
var state_50663__$1 = state_50663;
var statearr_50778_53189 = state_50663__$1;
(statearr_50778_53189[(2)] = inst_50585);

(statearr_50778_53189[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (42))){
var state_50663__$1 = state_50663;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50663__$1,(45),dchan);
} else {
if((state_val_50666 === (37))){
var inst_50631 = (state_50663[(22)]);
var inst_50622 = (state_50663[(23)]);
var inst_50519 = (state_50663[(12)]);
var inst_50631__$1 = cljs.core.first(inst_50622);
var inst_50632 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50631__$1,inst_50519,done);
var state_50663__$1 = (function (){var statearr_50782 = state_50663;
(statearr_50782[(22)] = inst_50631__$1);

return statearr_50782;
})();
if(cljs.core.truth_(inst_50632)){
var statearr_50783_53193 = state_50663__$1;
(statearr_50783_53193[(1)] = (39));

} else {
var statearr_50784_53194 = state_50663__$1;
(statearr_50784_53194[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50666 === (8))){
var inst_50534 = (state_50663[(15)]);
var inst_50533 = (state_50663[(17)]);
var inst_50536 = (inst_50534 < inst_50533);
var inst_50537 = inst_50536;
var state_50663__$1 = state_50663;
if(cljs.core.truth_(inst_50537)){
var statearr_50785_53196 = state_50663__$1;
(statearr_50785_53196[(1)] = (10));

} else {
var statearr_50786_53197 = state_50663__$1;
(statearr_50786_53197[(1)] = (11));

}

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
var cljs$core$async$mult_$_state_machine__49227__auto__ = null;
var cljs$core$async$mult_$_state_machine__49227__auto____0 = (function (){
var statearr_50787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50787[(0)] = cljs$core$async$mult_$_state_machine__49227__auto__);

(statearr_50787[(1)] = (1));

return statearr_50787;
});
var cljs$core$async$mult_$_state_machine__49227__auto____1 = (function (state_50663){
while(true){
var ret_value__49228__auto__ = (function (){try{while(true){
var result__49229__auto__ = switch__49226__auto__(state_50663);
if(cljs.core.keyword_identical_QMARK_(result__49229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49229__auto__;
}
break;
}
}catch (e50788){var ex__49230__auto__ = e50788;
var statearr_50789_53198 = state_50663;
(statearr_50789_53198[(2)] = ex__49230__auto__);


if(cljs.core.seq((state_50663[(4)]))){
var statearr_50790_53200 = state_50663;
(statearr_50790_53200[(1)] = cljs.core.first((state_50663[(4)])));

} else {
throw ex__49230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53202 = state_50663;
state_50663 = G__53202;
continue;
} else {
return ret_value__49228__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__49227__auto__ = function(state_50663){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__49227__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__49227__auto____1.call(this,state_50663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__49227__auto____0;
cljs$core$async$mult_$_state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__49227__auto____1;
return cljs$core$async$mult_$_state_machine__49227__auto__;
})()
})();
var state__49546__auto__ = (function (){var statearr_50791 = f__49545__auto__();
(statearr_50791[(6)] = c__49544__auto___53117);

return statearr_50791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49546__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__50793 = arguments.length;
switch (G__50793) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_53210 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_53210(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_53214 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_53214(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_53216 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_53216(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_53221 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_53221(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_53225 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_53225(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___53227 = arguments.length;
var i__4819__auto___53228 = (0);
while(true){
if((i__4819__auto___53228 < len__4818__auto___53227)){
args__4824__auto__.push((arguments[i__4819__auto___53228]));

var G__53230 = (i__4819__auto___53228 + (1));
i__4819__auto___53228 = G__53230;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__50842){
var map__50843 = p__50842;
var map__50843__$1 = cljs.core.__destructure_map(map__50843);
var opts = map__50843__$1;
var statearr_50844_53233 = state;
(statearr_50844_53233[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_50852_53234 = state;
(statearr_50852_53234[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_50853_53235 = state;
(statearr_50853_53235[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq50826){
var G__50827 = cljs.core.first(seq50826);
var seq50826__$1 = cljs.core.next(seq50826);
var G__50828 = cljs.core.first(seq50826__$1);
var seq50826__$2 = cljs.core.next(seq50826__$1);
var G__50829 = cljs.core.first(seq50826__$2);
var seq50826__$3 = cljs.core.next(seq50826__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50827,G__50828,G__50829,seq50826__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50866 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50866 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta50867){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta50867 = meta50867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50868,meta50867__$1){
var self__ = this;
var _50868__$1 = this;
return (new cljs.core.async.t_cljs$core$async50866(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta50867__$1));
}));

(cljs.core.async.t_cljs$core$async50866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50868){
var self__ = this;
var _50868__$1 = this;
return self__.meta50867;
}));

(cljs.core.async.t_cljs$core$async50866.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50866.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async50866.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50866.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50866.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50866.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50866.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50866.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50866.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta50867","meta50867",-97021159,null)], null);
}));

(cljs.core.async.t_cljs$core$async50866.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50866");

(cljs.core.async.t_cljs$core$async50866.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async50866");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50866.
 */
cljs.core.async.__GT_t_cljs$core$async50866 = (function cljs$core$async$mix_$___GT_t_cljs$core$async50866(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50867){
return (new cljs.core.async.t_cljs$core$async50866(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50867));
});

}

return (new cljs.core.async.t_cljs$core$async50866(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49544__auto___53253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49545__auto__ = (function (){var switch__49226__auto__ = (function (state_50968){
var state_val_50969 = (state_50968[(1)]);
if((state_val_50969 === (7))){
var inst_50920 = (state_50968[(2)]);
var state_50968__$1 = state_50968;
if(cljs.core.truth_(inst_50920)){
var statearr_50976_53255 = state_50968__$1;
(statearr_50976_53255[(1)] = (8));

} else {
var statearr_50977_53257 = state_50968__$1;
(statearr_50977_53257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (20))){
var inst_50911 = (state_50968[(7)]);
var state_50968__$1 = state_50968;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50968__$1,(23),out,inst_50911);
} else {
if((state_val_50969 === (1))){
var inst_50892 = calc_state();
var inst_50893 = cljs.core.__destructure_map(inst_50892);
var inst_50894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50893,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50893,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50893,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_50898 = inst_50892;
var state_50968__$1 = (function (){var statearr_50979 = state_50968;
(statearr_50979[(8)] = inst_50898);

(statearr_50979[(9)] = inst_50894);

(statearr_50979[(10)] = inst_50897);

(statearr_50979[(11)] = inst_50896);

return statearr_50979;
})();
var statearr_50982_53258 = state_50968__$1;
(statearr_50982_53258[(2)] = null);

(statearr_50982_53258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (24))){
var inst_50901 = (state_50968[(12)]);
var inst_50898 = inst_50901;
var state_50968__$1 = (function (){var statearr_50985 = state_50968;
(statearr_50985[(8)] = inst_50898);

return statearr_50985;
})();
var statearr_50986_53259 = state_50968__$1;
(statearr_50986_53259[(2)] = null);

(statearr_50986_53259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (4))){
var inst_50913 = (state_50968[(13)]);
var inst_50911 = (state_50968[(7)]);
var inst_50910 = (state_50968[(2)]);
var inst_50911__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50910,(0),null);
var inst_50912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50910,(1),null);
var inst_50913__$1 = (inst_50911__$1 == null);
var state_50968__$1 = (function (){var statearr_50988 = state_50968;
(statearr_50988[(13)] = inst_50913__$1);

(statearr_50988[(7)] = inst_50911__$1);

(statearr_50988[(14)] = inst_50912);

return statearr_50988;
})();
if(cljs.core.truth_(inst_50913__$1)){
var statearr_50991_53266 = state_50968__$1;
(statearr_50991_53266[(1)] = (5));

} else {
var statearr_50992_53268 = state_50968__$1;
(statearr_50992_53268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (15))){
var inst_50937 = (state_50968[(15)]);
var inst_50902 = (state_50968[(16)]);
var inst_50937__$1 = cljs.core.empty_QMARK_(inst_50902);
var state_50968__$1 = (function (){var statearr_50997 = state_50968;
(statearr_50997[(15)] = inst_50937__$1);

return statearr_50997;
})();
if(inst_50937__$1){
var statearr_50999_53269 = state_50968__$1;
(statearr_50999_53269[(1)] = (17));

} else {
var statearr_51002_53270 = state_50968__$1;
(statearr_51002_53270[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (21))){
var inst_50901 = (state_50968[(12)]);
var inst_50898 = inst_50901;
var state_50968__$1 = (function (){var statearr_51007 = state_50968;
(statearr_51007[(8)] = inst_50898);

return statearr_51007;
})();
var statearr_51009_53271 = state_50968__$1;
(statearr_51009_53271[(2)] = null);

(statearr_51009_53271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (13))){
var inst_50929 = (state_50968[(2)]);
var inst_50930 = calc_state();
var inst_50898 = inst_50930;
var state_50968__$1 = (function (){var statearr_51011 = state_50968;
(statearr_51011[(8)] = inst_50898);

(statearr_51011[(17)] = inst_50929);

return statearr_51011;
})();
var statearr_51013_53275 = state_50968__$1;
(statearr_51013_53275[(2)] = null);

(statearr_51013_53275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (22))){
var inst_50957 = (state_50968[(2)]);
var state_50968__$1 = state_50968;
var statearr_51015_53276 = state_50968__$1;
(statearr_51015_53276[(2)] = inst_50957);

(statearr_51015_53276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (6))){
var inst_50912 = (state_50968[(14)]);
var inst_50918 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50912,change);
var state_50968__$1 = state_50968;
var statearr_51018_53277 = state_50968__$1;
(statearr_51018_53277[(2)] = inst_50918);

(statearr_51018_53277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (25))){
var state_50968__$1 = state_50968;
var statearr_51019_53279 = state_50968__$1;
(statearr_51019_53279[(2)] = null);

(statearr_51019_53279[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (17))){
var inst_50903 = (state_50968[(18)]);
var inst_50912 = (state_50968[(14)]);
var inst_50939 = (inst_50903.cljs$core$IFn$_invoke$arity$1 ? inst_50903.cljs$core$IFn$_invoke$arity$1(inst_50912) : inst_50903.call(null,inst_50912));
var inst_50940 = cljs.core.not(inst_50939);
var state_50968__$1 = state_50968;
var statearr_51022_53280 = state_50968__$1;
(statearr_51022_53280[(2)] = inst_50940);

(statearr_51022_53280[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (3))){
var inst_50961 = (state_50968[(2)]);
var state_50968__$1 = state_50968;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50968__$1,inst_50961);
} else {
if((state_val_50969 === (12))){
var state_50968__$1 = state_50968;
var statearr_51025_53282 = state_50968__$1;
(statearr_51025_53282[(2)] = null);

(statearr_51025_53282[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (2))){
var inst_50898 = (state_50968[(8)]);
var inst_50901 = (state_50968[(12)]);
var inst_50901__$1 = cljs.core.__destructure_map(inst_50898);
var inst_50902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50901__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50901__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50901__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_50968__$1 = (function (){var statearr_51028 = state_50968;
(statearr_51028[(16)] = inst_50902);

(statearr_51028[(18)] = inst_50903);

(statearr_51028[(12)] = inst_50901__$1);

return statearr_51028;
})();
return cljs.core.async.ioc_alts_BANG_(state_50968__$1,(4),inst_50904);
} else {
if((state_val_50969 === (23))){
var inst_50948 = (state_50968[(2)]);
var state_50968__$1 = state_50968;
if(cljs.core.truth_(inst_50948)){
var statearr_51030_53286 = state_50968__$1;
(statearr_51030_53286[(1)] = (24));

} else {
var statearr_51033_53287 = state_50968__$1;
(statearr_51033_53287[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (19))){
var inst_50943 = (state_50968[(2)]);
var state_50968__$1 = state_50968;
var statearr_51034_53288 = state_50968__$1;
(statearr_51034_53288[(2)] = inst_50943);

(statearr_51034_53288[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (11))){
var inst_50912 = (state_50968[(14)]);
var inst_50926 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_50912);
var state_50968__$1 = state_50968;
var statearr_51037_53289 = state_50968__$1;
(statearr_51037_53289[(2)] = inst_50926);

(statearr_51037_53289[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (9))){
var inst_50902 = (state_50968[(16)]);
var inst_50912 = (state_50968[(14)]);
var inst_50934 = (state_50968[(19)]);
var inst_50934__$1 = (inst_50902.cljs$core$IFn$_invoke$arity$1 ? inst_50902.cljs$core$IFn$_invoke$arity$1(inst_50912) : inst_50902.call(null,inst_50912));
var state_50968__$1 = (function (){var statearr_51040 = state_50968;
(statearr_51040[(19)] = inst_50934__$1);

return statearr_51040;
})();
if(cljs.core.truth_(inst_50934__$1)){
var statearr_51042_53290 = state_50968__$1;
(statearr_51042_53290[(1)] = (14));

} else {
var statearr_51044_53291 = state_50968__$1;
(statearr_51044_53291[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (5))){
var inst_50913 = (state_50968[(13)]);
var state_50968__$1 = state_50968;
var statearr_51045_53293 = state_50968__$1;
(statearr_51045_53293[(2)] = inst_50913);

(statearr_51045_53293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (14))){
var inst_50934 = (state_50968[(19)]);
var state_50968__$1 = state_50968;
var statearr_51047_53294 = state_50968__$1;
(statearr_51047_53294[(2)] = inst_50934);

(statearr_51047_53294[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (26))){
var inst_50953 = (state_50968[(2)]);
var state_50968__$1 = state_50968;
var statearr_51053_53295 = state_50968__$1;
(statearr_51053_53295[(2)] = inst_50953);

(statearr_51053_53295[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (16))){
var inst_50945 = (state_50968[(2)]);
var state_50968__$1 = state_50968;
if(cljs.core.truth_(inst_50945)){
var statearr_51058_53296 = state_50968__$1;
(statearr_51058_53296[(1)] = (20));

} else {
var statearr_51061_53297 = state_50968__$1;
(statearr_51061_53297[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (10))){
var inst_50959 = (state_50968[(2)]);
var state_50968__$1 = state_50968;
var statearr_51065_53298 = state_50968__$1;
(statearr_51065_53298[(2)] = inst_50959);

(statearr_51065_53298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (18))){
var inst_50937 = (state_50968[(15)]);
var state_50968__$1 = state_50968;
var statearr_51067_53301 = state_50968__$1;
(statearr_51067_53301[(2)] = inst_50937);

(statearr_51067_53301[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50969 === (8))){
var inst_50911 = (state_50968[(7)]);
var inst_50923 = (inst_50911 == null);
var state_50968__$1 = state_50968;
if(cljs.core.truth_(inst_50923)){
var statearr_51069_53303 = state_50968__$1;
(statearr_51069_53303[(1)] = (11));

} else {
var statearr_51070_53304 = state_50968__$1;
(statearr_51070_53304[(1)] = (12));

}

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
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__49227__auto__ = null;
var cljs$core$async$mix_$_state_machine__49227__auto____0 = (function (){
var statearr_51072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51072[(0)] = cljs$core$async$mix_$_state_machine__49227__auto__);

(statearr_51072[(1)] = (1));

return statearr_51072;
});
var cljs$core$async$mix_$_state_machine__49227__auto____1 = (function (state_50968){
while(true){
var ret_value__49228__auto__ = (function (){try{while(true){
var result__49229__auto__ = switch__49226__auto__(state_50968);
if(cljs.core.keyword_identical_QMARK_(result__49229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49229__auto__;
}
break;
}
}catch (e51074){var ex__49230__auto__ = e51074;
var statearr_51075_53305 = state_50968;
(statearr_51075_53305[(2)] = ex__49230__auto__);


if(cljs.core.seq((state_50968[(4)]))){
var statearr_51077_53306 = state_50968;
(statearr_51077_53306[(1)] = cljs.core.first((state_50968[(4)])));

} else {
throw ex__49230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53309 = state_50968;
state_50968 = G__53309;
continue;
} else {
return ret_value__49228__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__49227__auto__ = function(state_50968){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__49227__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__49227__auto____1.call(this,state_50968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__49227__auto____0;
cljs$core$async$mix_$_state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__49227__auto____1;
return cljs$core$async$mix_$_state_machine__49227__auto__;
})()
})();
var state__49546__auto__ = (function (){var statearr_51080 = f__49545__auto__();
(statearr_51080[(6)] = c__49544__auto___53253);

return statearr_51080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49546__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_53311 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_53311(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_53313 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_53313(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_53317 = (function() {
var G__53318 = null;
var G__53318__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__53318__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__53318 = function(p,v){
switch(arguments.length){
case 1:
return G__53318__1.call(this,p);
case 2:
return G__53318__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__53318.cljs$core$IFn$_invoke$arity$1 = G__53318__1;
G__53318.cljs$core$IFn$_invoke$arity$2 = G__53318__2;
return G__53318;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__51154 = arguments.length;
switch (G__51154) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53317(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53317(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__51173 = arguments.length;
switch (G__51173) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__51169_SHARP_){
if(cljs.core.truth_((p1__51169_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__51169_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__51169_SHARP_.call(null,topic)))){
return p1__51169_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51169_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51184 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51184 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51185){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51185 = meta51185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51186,meta51185__$1){
var self__ = this;
var _51186__$1 = this;
return (new cljs.core.async.t_cljs$core$async51184(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51185__$1));
}));

(cljs.core.async.t_cljs$core$async51184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51186){
var self__ = this;
var _51186__$1 = this;
return self__.meta51185;
}));

(cljs.core.async.t_cljs$core$async51184.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51184.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51184.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51184.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async51184.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async51184.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async51184.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async51184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51185","meta51185",1714090836,null)], null);
}));

(cljs.core.async.t_cljs$core$async51184.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51184");

(cljs.core.async.t_cljs$core$async51184.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async51184");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51184.
 */
cljs.core.async.__GT_t_cljs$core$async51184 = (function cljs$core$async$__GT_t_cljs$core$async51184(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51185){
return (new cljs.core.async.t_cljs$core$async51184(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51185));
});

}

return (new cljs.core.async.t_cljs$core$async51184(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49544__auto___53337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49545__auto__ = (function (){var switch__49226__auto__ = (function (state_51311){
var state_val_51312 = (state_51311[(1)]);
if((state_val_51312 === (7))){
var inst_51306 = (state_51311[(2)]);
var state_51311__$1 = state_51311;
var statearr_51318_53338 = state_51311__$1;
(statearr_51318_53338[(2)] = inst_51306);

(statearr_51318_53338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51312 === (20))){
var state_51311__$1 = state_51311;
var statearr_51320_53339 = state_51311__$1;
(statearr_51320_53339[(2)] = null);

(statearr_51320_53339[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51312 === (1))){
var state_51311__$1 = state_51311;
var statearr_51323_53341 = state_51311__$1;
(statearr_51323_53341[(2)] = null);

(statearr_51323_53341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51312 === (24))){
var inst_51285 = (state_51311[(7)]);
var inst_51298 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_51285);
var state_51311__$1 = state_51311;
var statearr_51326_53342 = state_51311__$1;
(statearr_51326_53342[(2)] = inst_51298);

(statearr_51326_53342[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51312 === (4))){
var inst_51213 = (state_51311[(8)]);
var inst_51213__$1 = (state_51311[(2)]);
var inst_51214 = (inst_51213__$1 == null);
var state_51311__$1 = (function (){var statearr_51328 = state_51311;
(statearr_51328[(8)] = inst_51213__$1);

return statearr_51328;
})();
if(cljs.core.truth_(inst_51214)){
var statearr_51333_53344 = state_51311__$1;
(statearr_51333_53344[(1)] = (5));

} else {
var statearr_51337_53345 = state_51311__$1;
(statearr_51337_53345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51312 === (15))){
var inst_51278 = (state_51311[(2)]);
var state_51311__$1 = state_51311;
var statearr_51341_53346 = state_51311__$1;
(statearr_51341_53346[(2)] = inst_51278);

(statearr_51341_53346[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51312 === (21))){
var inst_51303 = (state_51311[(2)]);
var state_51311__$1 = (function (){var statearr_51346 = state_51311;
(statearr_51346[(9)] = inst_51303);

return statearr_51346;
})();
var statearr_51349_53347 = state_51311__$1;
(statearr_51349_53347[(2)] = null);

(statearr_51349_53347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51312 === (13))){
var inst_51246 = (state_51311[(10)]);
var inst_51250 = cljs.core.chunked_seq_QMARK_(inst_51246);
var state_51311__$1 = state_51311;
if(inst_51250){
var statearr_51355_53348 = state_51311__$1;
(statearr_51355_53348[(1)] = (16));

} else {
var statearr_51356_53349 = state_51311__$1;
(statearr_51356_53349[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51312 === (22))){
var inst_51295 = (state_51311[(2)]);
var state_51311__$1 = state_51311;
if(cljs.core.truth_(inst_51295)){
var statearr_51359_53351 = state_51311__$1;
(statearr_51359_53351[(1)] = (23));

} else {
var statearr_51361_53352 = state_51311__$1;
(statearr_51361_53352[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51312 === (6))){
var inst_51287 = (state_51311[(11)]);
var inst_51285 = (state_51311[(7)]);
var inst_51213 = (state_51311[(8)]);
var inst_51285__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_51213) : topic_fn.call(null,inst_51213));
var inst_51286 = cljs.core.deref(mults);
var inst_51287__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51286,inst_51285__$1);
var state_51311__$1 = (function (){var statearr_51371 = state_51311;
(statearr_51371[(11)] = inst_51287__$1);

(statearr_51371[(7)] = inst_51285__$1);

return statearr_51371;
})();
if(cljs.core.truth_(inst_51287__$1)){
var statearr_51376_53353 = state_51311__$1;
(statearr_51376_53353[(1)] = (19));

} else {
var statearr_51377_53354 = state_51311__$1;
(statearr_51377_53354[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51312 === (25))){
var inst_51300 = (state_51311[(2)]);
var state_51311__$1 = state_51311;
var statearr_51380_53355 = state_51311__$1;
(statearr_51380_53355[(2)] = inst_51300);

(statearr_51380_53355[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51312 === (17))){
var inst_51246 = (state_51311[(10)]);
var inst_51266 = cljs.core.first(inst_51246);
var inst_51268 = cljs.core.async.muxch_STAR_(inst_51266);
var inst_51269 = cljs.core.async.close_BANG_(inst_51268);
var inst_51271 = cljs.core.next(inst_51246);
var inst_51228 = inst_51271;
var inst_51229 = null;
var inst_51230 = (0);
var inst_51231 = (0);
var state_51311__$1 = (function (){var statearr_51387 = state_51311;
(statearr_51387[(12)] = inst_51231);

(statearr_51387[(13)] = inst_51229);

(statearr_51387[(14)] = inst_51230);

(statearr_51387[(15)] = inst_51228);

(statearr_51387[(16)] = inst_51269);

return statearr_51387;
})();
var statearr_51389_53357 = state_51311__$1;
(statearr_51389_53357[(2)] = null);

(statearr_51389_53357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51312 === (3))){
var inst_51308 = (state_51311[(2)]);
var state_51311__$1 = state_51311;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51311__$1,inst_51308);
} else {
if((state_val_51312 === (12))){
var inst_51281 = (state_51311[(2)]);
var state_51311__$1 = state_51311;
var statearr_51391_53358 = state_51311__$1;
(statearr_51391_53358[(2)] = inst_51281);

(statearr_51391_53358[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51312 === (2))){
var state_51311__$1 = state_51311;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51311__$1,(4),ch);
} else {
if((state_val_51312 === (23))){
var state_51311__$1 = state_51311;
var statearr_51393_53360 = state_51311__$1;
(statearr_51393_53360[(2)] = null);

(statearr_51393_53360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51312 === (19))){
var inst_51287 = (state_51311[(11)]);
var inst_51213 = (state_51311[(8)]);
var inst_51293 = cljs.core.async.muxch_STAR_(inst_51287);
var state_51311__$1 = state_51311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51311__$1,(22),inst_51293,inst_51213);
} else {
if((state_val_51312 === (11))){
var inst_51228 = (state_51311[(15)]);
var inst_51246 = (state_51311[(10)]);
var inst_51246__$1 = cljs.core.seq(inst_51228);
var state_51311__$1 = (function (){var statearr_51400 = state_51311;
(statearr_51400[(10)] = inst_51246__$1);

return statearr_51400;
})();
if(inst_51246__$1){
var statearr_51402_53361 = state_51311__$1;
(statearr_51402_53361[(1)] = (13));

} else {
var statearr_51405_53362 = state_51311__$1;
(statearr_51405_53362[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51312 === (9))){
var inst_51283 = (state_51311[(2)]);
var state_51311__$1 = state_51311;
var statearr_51411_53364 = state_51311__$1;
(statearr_51411_53364[(2)] = inst_51283);

(statearr_51411_53364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51312 === (5))){
var inst_51224 = cljs.core.deref(mults);
var inst_51225 = cljs.core.vals(inst_51224);
var inst_51226 = cljs.core.seq(inst_51225);
var inst_51228 = inst_51226;
var inst_51229 = null;
var inst_51230 = (0);
var inst_51231 = (0);
var state_51311__$1 = (function (){var statearr_51413 = state_51311;
(statearr_51413[(12)] = inst_51231);

(statearr_51413[(13)] = inst_51229);

(statearr_51413[(14)] = inst_51230);

(statearr_51413[(15)] = inst_51228);

return statearr_51413;
})();
var statearr_51415_53368 = state_51311__$1;
(statearr_51415_53368[(2)] = null);

(statearr_51415_53368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51312 === (14))){
var state_51311__$1 = state_51311;
var statearr_51428_53369 = state_51311__$1;
(statearr_51428_53369[(2)] = null);

(statearr_51428_53369[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51312 === (16))){
var inst_51246 = (state_51311[(10)]);
var inst_51253 = cljs.core.chunk_first(inst_51246);
var inst_51258 = cljs.core.chunk_rest(inst_51246);
var inst_51259 = cljs.core.count(inst_51253);
var inst_51228 = inst_51258;
var inst_51229 = inst_51253;
var inst_51230 = inst_51259;
var inst_51231 = (0);
var state_51311__$1 = (function (){var statearr_51431 = state_51311;
(statearr_51431[(12)] = inst_51231);

(statearr_51431[(13)] = inst_51229);

(statearr_51431[(14)] = inst_51230);

(statearr_51431[(15)] = inst_51228);

return statearr_51431;
})();
var statearr_51435_53372 = state_51311__$1;
(statearr_51435_53372[(2)] = null);

(statearr_51435_53372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51312 === (10))){
var inst_51231 = (state_51311[(12)]);
var inst_51229 = (state_51311[(13)]);
var inst_51230 = (state_51311[(14)]);
var inst_51228 = (state_51311[(15)]);
var inst_51236 = cljs.core._nth(inst_51229,inst_51231);
var inst_51238 = cljs.core.async.muxch_STAR_(inst_51236);
var inst_51239 = cljs.core.async.close_BANG_(inst_51238);
var inst_51241 = (inst_51231 + (1));
var tmp51423 = inst_51229;
var tmp51424 = inst_51230;
var tmp51425 = inst_51228;
var inst_51228__$1 = tmp51425;
var inst_51229__$1 = tmp51423;
var inst_51230__$1 = tmp51424;
var inst_51231__$1 = inst_51241;
var state_51311__$1 = (function (){var statearr_51441 = state_51311;
(statearr_51441[(12)] = inst_51231__$1);

(statearr_51441[(13)] = inst_51229__$1);

(statearr_51441[(14)] = inst_51230__$1);

(statearr_51441[(15)] = inst_51228__$1);

(statearr_51441[(17)] = inst_51239);

return statearr_51441;
})();
var statearr_51447_53388 = state_51311__$1;
(statearr_51447_53388[(2)] = null);

(statearr_51447_53388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51312 === (18))){
var inst_51275 = (state_51311[(2)]);
var state_51311__$1 = state_51311;
var statearr_51451_53389 = state_51311__$1;
(statearr_51451_53389[(2)] = inst_51275);

(statearr_51451_53389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51312 === (8))){
var inst_51231 = (state_51311[(12)]);
var inst_51230 = (state_51311[(14)]);
var inst_51233 = (inst_51231 < inst_51230);
var inst_51234 = inst_51233;
var state_51311__$1 = state_51311;
if(cljs.core.truth_(inst_51234)){
var statearr_51455_53390 = state_51311__$1;
(statearr_51455_53390[(1)] = (10));

} else {
var statearr_51457_53391 = state_51311__$1;
(statearr_51457_53391[(1)] = (11));

}

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
}
});
return (function() {
var cljs$core$async$state_machine__49227__auto__ = null;
var cljs$core$async$state_machine__49227__auto____0 = (function (){
var statearr_51464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51464[(0)] = cljs$core$async$state_machine__49227__auto__);

(statearr_51464[(1)] = (1));

return statearr_51464;
});
var cljs$core$async$state_machine__49227__auto____1 = (function (state_51311){
while(true){
var ret_value__49228__auto__ = (function (){try{while(true){
var result__49229__auto__ = switch__49226__auto__(state_51311);
if(cljs.core.keyword_identical_QMARK_(result__49229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49229__auto__;
}
break;
}
}catch (e51466){var ex__49230__auto__ = e51466;
var statearr_51469_53392 = state_51311;
(statearr_51469_53392[(2)] = ex__49230__auto__);


if(cljs.core.seq((state_51311[(4)]))){
var statearr_51472_53393 = state_51311;
(statearr_51472_53393[(1)] = cljs.core.first((state_51311[(4)])));

} else {
throw ex__49230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53394 = state_51311;
state_51311 = G__53394;
continue;
} else {
return ret_value__49228__auto__;
}
break;
}
});
cljs$core$async$state_machine__49227__auto__ = function(state_51311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49227__auto____1.call(this,state_51311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49227__auto____0;
cljs$core$async$state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49227__auto____1;
return cljs$core$async$state_machine__49227__auto__;
})()
})();
var state__49546__auto__ = (function (){var statearr_51482 = f__49545__auto__();
(statearr_51482[(6)] = c__49544__auto___53337);

return statearr_51482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49546__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__51486 = arguments.length;
switch (G__51486) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__51499 = arguments.length;
switch (G__51499) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__51519 = arguments.length;
switch (G__51519) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__49544__auto___53413 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49545__auto__ = (function (){var switch__49226__auto__ = (function (state_51592){
var state_val_51594 = (state_51592[(1)]);
if((state_val_51594 === (7))){
var state_51592__$1 = state_51592;
var statearr_51599_53415 = state_51592__$1;
(statearr_51599_53415[(2)] = null);

(statearr_51599_53415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51594 === (1))){
var state_51592__$1 = state_51592;
var statearr_51600_53416 = state_51592__$1;
(statearr_51600_53416[(2)] = null);

(statearr_51600_53416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51594 === (4))){
var inst_51530 = (state_51592[(7)]);
var inst_51529 = (state_51592[(8)]);
var inst_51532 = (inst_51530 < inst_51529);
var state_51592__$1 = state_51592;
if(cljs.core.truth_(inst_51532)){
var statearr_51601_53417 = state_51592__$1;
(statearr_51601_53417[(1)] = (6));

} else {
var statearr_51604_53418 = state_51592__$1;
(statearr_51604_53418[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51594 === (15))){
var inst_51576 = (state_51592[(9)]);
var inst_51582 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_51576);
var state_51592__$1 = state_51592;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51592__$1,(17),out,inst_51582);
} else {
if((state_val_51594 === (13))){
var inst_51576 = (state_51592[(9)]);
var inst_51576__$1 = (state_51592[(2)]);
var inst_51577 = cljs.core.some(cljs.core.nil_QMARK_,inst_51576__$1);
var state_51592__$1 = (function (){var statearr_51609 = state_51592;
(statearr_51609[(9)] = inst_51576__$1);

return statearr_51609;
})();
if(cljs.core.truth_(inst_51577)){
var statearr_51610_53424 = state_51592__$1;
(statearr_51610_53424[(1)] = (14));

} else {
var statearr_51612_53425 = state_51592__$1;
(statearr_51612_53425[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51594 === (6))){
var state_51592__$1 = state_51592;
var statearr_51613_53426 = state_51592__$1;
(statearr_51613_53426[(2)] = null);

(statearr_51613_53426[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51594 === (17))){
var inst_51584 = (state_51592[(2)]);
var state_51592__$1 = (function (){var statearr_51623 = state_51592;
(statearr_51623[(10)] = inst_51584);

return statearr_51623;
})();
var statearr_51624_53428 = state_51592__$1;
(statearr_51624_53428[(2)] = null);

(statearr_51624_53428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51594 === (3))){
var inst_51590 = (state_51592[(2)]);
var state_51592__$1 = state_51592;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51592__$1,inst_51590);
} else {
if((state_val_51594 === (12))){
var _ = (function (){var statearr_51626 = state_51592;
(statearr_51626[(4)] = cljs.core.rest((state_51592[(4)])));

return statearr_51626;
})();
var state_51592__$1 = state_51592;
var ex51621 = (state_51592__$1[(2)]);
var statearr_51630_53429 = state_51592__$1;
(statearr_51630_53429[(5)] = ex51621);


if((ex51621 instanceof Object)){
var statearr_51633_53431 = state_51592__$1;
(statearr_51633_53431[(1)] = (11));

(statearr_51633_53431[(5)] = null);

} else {
throw ex51621;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51594 === (2))){
var inst_51528 = cljs.core.reset_BANG_(dctr,cnt);
var inst_51529 = cnt;
var inst_51530 = (0);
var state_51592__$1 = (function (){var statearr_51645 = state_51592;
(statearr_51645[(7)] = inst_51530);

(statearr_51645[(11)] = inst_51528);

(statearr_51645[(8)] = inst_51529);

return statearr_51645;
})();
var statearr_51649_53432 = state_51592__$1;
(statearr_51649_53432[(2)] = null);

(statearr_51649_53432[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51594 === (11))){
var inst_51550 = (state_51592[(2)]);
var inst_51553 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_51592__$1 = (function (){var statearr_51650 = state_51592;
(statearr_51650[(12)] = inst_51550);

return statearr_51650;
})();
var statearr_51651_53438 = state_51592__$1;
(statearr_51651_53438[(2)] = inst_51553);

(statearr_51651_53438[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51594 === (9))){
var inst_51530 = (state_51592[(7)]);
var _ = (function (){var statearr_51654 = state_51592;
(statearr_51654[(4)] = cljs.core.cons((12),(state_51592[(4)])));

return statearr_51654;
})();
var inst_51562 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_51530) : chs__$1.call(null,inst_51530));
var inst_51563 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_51530) : done.call(null,inst_51530));
var inst_51564 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51562,inst_51563);
var ___$1 = (function (){var statearr_51657 = state_51592;
(statearr_51657[(4)] = cljs.core.rest((state_51592[(4)])));

return statearr_51657;
})();
var state_51592__$1 = state_51592;
var statearr_51658_53442 = state_51592__$1;
(statearr_51658_53442[(2)] = inst_51564);

(statearr_51658_53442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51594 === (5))){
var inst_51574 = (state_51592[(2)]);
var state_51592__$1 = (function (){var statearr_51660 = state_51592;
(statearr_51660[(13)] = inst_51574);

return statearr_51660;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51592__$1,(13),dchan);
} else {
if((state_val_51594 === (14))){
var inst_51579 = cljs.core.async.close_BANG_(out);
var state_51592__$1 = state_51592;
var statearr_51663_53443 = state_51592__$1;
(statearr_51663_53443[(2)] = inst_51579);

(statearr_51663_53443[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51594 === (16))){
var inst_51588 = (state_51592[(2)]);
var state_51592__$1 = state_51592;
var statearr_51665_53444 = state_51592__$1;
(statearr_51665_53444[(2)] = inst_51588);

(statearr_51665_53444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51594 === (10))){
var inst_51530 = (state_51592[(7)]);
var inst_51567 = (state_51592[(2)]);
var inst_51568 = (inst_51530 + (1));
var inst_51530__$1 = inst_51568;
var state_51592__$1 = (function (){var statearr_51669 = state_51592;
(statearr_51669[(7)] = inst_51530__$1);

(statearr_51669[(14)] = inst_51567);

return statearr_51669;
})();
var statearr_51670_53450 = state_51592__$1;
(statearr_51670_53450[(2)] = null);

(statearr_51670_53450[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51594 === (8))){
var inst_51572 = (state_51592[(2)]);
var state_51592__$1 = state_51592;
var statearr_51678_53452 = state_51592__$1;
(statearr_51678_53452[(2)] = inst_51572);

(statearr_51678_53452[(1)] = (5));


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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49227__auto__ = null;
var cljs$core$async$state_machine__49227__auto____0 = (function (){
var statearr_51680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51680[(0)] = cljs$core$async$state_machine__49227__auto__);

(statearr_51680[(1)] = (1));

return statearr_51680;
});
var cljs$core$async$state_machine__49227__auto____1 = (function (state_51592){
while(true){
var ret_value__49228__auto__ = (function (){try{while(true){
var result__49229__auto__ = switch__49226__auto__(state_51592);
if(cljs.core.keyword_identical_QMARK_(result__49229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49229__auto__;
}
break;
}
}catch (e51684){var ex__49230__auto__ = e51684;
var statearr_51685_53454 = state_51592;
(statearr_51685_53454[(2)] = ex__49230__auto__);


if(cljs.core.seq((state_51592[(4)]))){
var statearr_51686_53455 = state_51592;
(statearr_51686_53455[(1)] = cljs.core.first((state_51592[(4)])));

} else {
throw ex__49230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53456 = state_51592;
state_51592 = G__53456;
continue;
} else {
return ret_value__49228__auto__;
}
break;
}
});
cljs$core$async$state_machine__49227__auto__ = function(state_51592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49227__auto____1.call(this,state_51592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49227__auto____0;
cljs$core$async$state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49227__auto____1;
return cljs$core$async$state_machine__49227__auto__;
})()
})();
var state__49546__auto__ = (function (){var statearr_51694 = f__49545__auto__();
(statearr_51694[(6)] = c__49544__auto___53413);

return statearr_51694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49546__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__51717 = arguments.length;
switch (G__51717) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49544__auto___53463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49545__auto__ = (function (){var switch__49226__auto__ = (function (state_51772){
var state_val_51773 = (state_51772[(1)]);
if((state_val_51773 === (7))){
var inst_51745 = (state_51772[(7)]);
var inst_51744 = (state_51772[(8)]);
var inst_51744__$1 = (state_51772[(2)]);
var inst_51745__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51744__$1,(0),null);
var inst_51746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51744__$1,(1),null);
var inst_51747 = (inst_51745__$1 == null);
var state_51772__$1 = (function (){var statearr_51783 = state_51772;
(statearr_51783[(7)] = inst_51745__$1);

(statearr_51783[(8)] = inst_51744__$1);

(statearr_51783[(9)] = inst_51746);

return statearr_51783;
})();
if(cljs.core.truth_(inst_51747)){
var statearr_51786_53464 = state_51772__$1;
(statearr_51786_53464[(1)] = (8));

} else {
var statearr_51788_53465 = state_51772__$1;
(statearr_51788_53465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51773 === (1))){
var inst_51730 = cljs.core.vec(chs);
var inst_51731 = inst_51730;
var state_51772__$1 = (function (){var statearr_51790 = state_51772;
(statearr_51790[(10)] = inst_51731);

return statearr_51790;
})();
var statearr_51791_53466 = state_51772__$1;
(statearr_51791_53466[(2)] = null);

(statearr_51791_53466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51773 === (4))){
var inst_51731 = (state_51772[(10)]);
var state_51772__$1 = state_51772;
return cljs.core.async.ioc_alts_BANG_(state_51772__$1,(7),inst_51731);
} else {
if((state_val_51773 === (6))){
var inst_51768 = (state_51772[(2)]);
var state_51772__$1 = state_51772;
var statearr_51792_53468 = state_51772__$1;
(statearr_51792_53468[(2)] = inst_51768);

(statearr_51792_53468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51773 === (3))){
var inst_51770 = (state_51772[(2)]);
var state_51772__$1 = state_51772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51772__$1,inst_51770);
} else {
if((state_val_51773 === (2))){
var inst_51731 = (state_51772[(10)]);
var inst_51737 = cljs.core.count(inst_51731);
var inst_51738 = (inst_51737 > (0));
var state_51772__$1 = state_51772;
if(cljs.core.truth_(inst_51738)){
var statearr_51796_53471 = state_51772__$1;
(statearr_51796_53471[(1)] = (4));

} else {
var statearr_51797_53472 = state_51772__$1;
(statearr_51797_53472[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51773 === (11))){
var inst_51731 = (state_51772[(10)]);
var inst_51761 = (state_51772[(2)]);
var tmp51793 = inst_51731;
var inst_51731__$1 = tmp51793;
var state_51772__$1 = (function (){var statearr_51798 = state_51772;
(statearr_51798[(11)] = inst_51761);

(statearr_51798[(10)] = inst_51731__$1);

return statearr_51798;
})();
var statearr_51799_53475 = state_51772__$1;
(statearr_51799_53475[(2)] = null);

(statearr_51799_53475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51773 === (9))){
var inst_51745 = (state_51772[(7)]);
var state_51772__$1 = state_51772;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51772__$1,(11),out,inst_51745);
} else {
if((state_val_51773 === (5))){
var inst_51766 = cljs.core.async.close_BANG_(out);
var state_51772__$1 = state_51772;
var statearr_51811_53477 = state_51772__$1;
(statearr_51811_53477[(2)] = inst_51766);

(statearr_51811_53477[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51773 === (10))){
var inst_51764 = (state_51772[(2)]);
var state_51772__$1 = state_51772;
var statearr_51812_53479 = state_51772__$1;
(statearr_51812_53479[(2)] = inst_51764);

(statearr_51812_53479[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51773 === (8))){
var inst_51745 = (state_51772[(7)]);
var inst_51744 = (state_51772[(8)]);
var inst_51731 = (state_51772[(10)]);
var inst_51746 = (state_51772[(9)]);
var inst_51752 = (function (){var cs = inst_51731;
var vec__51740 = inst_51744;
var v = inst_51745;
var c = inst_51746;
return (function (p1__51702_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__51702_SHARP_);
});
})();
var inst_51757 = cljs.core.filterv(inst_51752,inst_51731);
var inst_51731__$1 = inst_51757;
var state_51772__$1 = (function (){var statearr_51816 = state_51772;
(statearr_51816[(10)] = inst_51731__$1);

return statearr_51816;
})();
var statearr_51817_53483 = state_51772__$1;
(statearr_51817_53483[(2)] = null);

(statearr_51817_53483[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__49227__auto__ = null;
var cljs$core$async$state_machine__49227__auto____0 = (function (){
var statearr_51819 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51819[(0)] = cljs$core$async$state_machine__49227__auto__);

(statearr_51819[(1)] = (1));

return statearr_51819;
});
var cljs$core$async$state_machine__49227__auto____1 = (function (state_51772){
while(true){
var ret_value__49228__auto__ = (function (){try{while(true){
var result__49229__auto__ = switch__49226__auto__(state_51772);
if(cljs.core.keyword_identical_QMARK_(result__49229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49229__auto__;
}
break;
}
}catch (e51823){var ex__49230__auto__ = e51823;
var statearr_51824_53486 = state_51772;
(statearr_51824_53486[(2)] = ex__49230__auto__);


if(cljs.core.seq((state_51772[(4)]))){
var statearr_51825_53488 = state_51772;
(statearr_51825_53488[(1)] = cljs.core.first((state_51772[(4)])));

} else {
throw ex__49230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53489 = state_51772;
state_51772 = G__53489;
continue;
} else {
return ret_value__49228__auto__;
}
break;
}
});
cljs$core$async$state_machine__49227__auto__ = function(state_51772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49227__auto____1.call(this,state_51772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49227__auto____0;
cljs$core$async$state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49227__auto____1;
return cljs$core$async$state_machine__49227__auto__;
})()
})();
var state__49546__auto__ = (function (){var statearr_51833 = f__49545__auto__();
(statearr_51833[(6)] = c__49544__auto___53463);

return statearr_51833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49546__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__51843 = arguments.length;
switch (G__51843) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49544__auto___53492 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49545__auto__ = (function (){var switch__49226__auto__ = (function (state_51868){
var state_val_51873 = (state_51868[(1)]);
if((state_val_51873 === (7))){
var inst_51850 = (state_51868[(7)]);
var inst_51850__$1 = (state_51868[(2)]);
var inst_51851 = (inst_51850__$1 == null);
var inst_51852 = cljs.core.not(inst_51851);
var state_51868__$1 = (function (){var statearr_51895 = state_51868;
(statearr_51895[(7)] = inst_51850__$1);

return statearr_51895;
})();
if(inst_51852){
var statearr_51900_53495 = state_51868__$1;
(statearr_51900_53495[(1)] = (8));

} else {
var statearr_51901_53496 = state_51868__$1;
(statearr_51901_53496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51873 === (1))){
var inst_51844 = (0);
var state_51868__$1 = (function (){var statearr_51903 = state_51868;
(statearr_51903[(8)] = inst_51844);

return statearr_51903;
})();
var statearr_51904_53497 = state_51868__$1;
(statearr_51904_53497[(2)] = null);

(statearr_51904_53497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51873 === (4))){
var state_51868__$1 = state_51868;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51868__$1,(7),ch);
} else {
if((state_val_51873 === (6))){
var inst_51863 = (state_51868[(2)]);
var state_51868__$1 = state_51868;
var statearr_51909_53499 = state_51868__$1;
(statearr_51909_53499[(2)] = inst_51863);

(statearr_51909_53499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51873 === (3))){
var inst_51865 = (state_51868[(2)]);
var inst_51866 = cljs.core.async.close_BANG_(out);
var state_51868__$1 = (function (){var statearr_51910 = state_51868;
(statearr_51910[(9)] = inst_51865);

return statearr_51910;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51868__$1,inst_51866);
} else {
if((state_val_51873 === (2))){
var inst_51844 = (state_51868[(8)]);
var inst_51846 = (inst_51844 < n);
var state_51868__$1 = state_51868;
if(cljs.core.truth_(inst_51846)){
var statearr_51911_53504 = state_51868__$1;
(statearr_51911_53504[(1)] = (4));

} else {
var statearr_51912_53505 = state_51868__$1;
(statearr_51912_53505[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51873 === (11))){
var inst_51844 = (state_51868[(8)]);
var inst_51855 = (state_51868[(2)]);
var inst_51856 = (inst_51844 + (1));
var inst_51844__$1 = inst_51856;
var state_51868__$1 = (function (){var statearr_51913 = state_51868;
(statearr_51913[(10)] = inst_51855);

(statearr_51913[(8)] = inst_51844__$1);

return statearr_51913;
})();
var statearr_51915_53509 = state_51868__$1;
(statearr_51915_53509[(2)] = null);

(statearr_51915_53509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51873 === (9))){
var state_51868__$1 = state_51868;
var statearr_51919_53510 = state_51868__$1;
(statearr_51919_53510[(2)] = null);

(statearr_51919_53510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51873 === (5))){
var state_51868__$1 = state_51868;
var statearr_51921_53511 = state_51868__$1;
(statearr_51921_53511[(2)] = null);

(statearr_51921_53511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51873 === (10))){
var inst_51860 = (state_51868[(2)]);
var state_51868__$1 = state_51868;
var statearr_51922_53512 = state_51868__$1;
(statearr_51922_53512[(2)] = inst_51860);

(statearr_51922_53512[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51873 === (8))){
var inst_51850 = (state_51868[(7)]);
var state_51868__$1 = state_51868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51868__$1,(11),out,inst_51850);
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
});
return (function() {
var cljs$core$async$state_machine__49227__auto__ = null;
var cljs$core$async$state_machine__49227__auto____0 = (function (){
var statearr_51923 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51923[(0)] = cljs$core$async$state_machine__49227__auto__);

(statearr_51923[(1)] = (1));

return statearr_51923;
});
var cljs$core$async$state_machine__49227__auto____1 = (function (state_51868){
while(true){
var ret_value__49228__auto__ = (function (){try{while(true){
var result__49229__auto__ = switch__49226__auto__(state_51868);
if(cljs.core.keyword_identical_QMARK_(result__49229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49229__auto__;
}
break;
}
}catch (e51924){var ex__49230__auto__ = e51924;
var statearr_51927_53514 = state_51868;
(statearr_51927_53514[(2)] = ex__49230__auto__);


if(cljs.core.seq((state_51868[(4)]))){
var statearr_51928_53520 = state_51868;
(statearr_51928_53520[(1)] = cljs.core.first((state_51868[(4)])));

} else {
throw ex__49230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53521 = state_51868;
state_51868 = G__53521;
continue;
} else {
return ret_value__49228__auto__;
}
break;
}
});
cljs$core$async$state_machine__49227__auto__ = function(state_51868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49227__auto____1.call(this,state_51868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49227__auto____0;
cljs$core$async$state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49227__auto____1;
return cljs$core$async$state_machine__49227__auto__;
})()
})();
var state__49546__auto__ = (function (){var statearr_51932 = f__49545__auto__();
(statearr_51932[(6)] = c__49544__auto___53492);

return statearr_51932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49546__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51940 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51940 = (function (f,ch,meta51941){
this.f = f;
this.ch = ch;
this.meta51941 = meta51941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51942,meta51941__$1){
var self__ = this;
var _51942__$1 = this;
return (new cljs.core.async.t_cljs$core$async51940(self__.f,self__.ch,meta51941__$1));
}));

(cljs.core.async.t_cljs$core$async51940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51942){
var self__ = this;
var _51942__$1 = this;
return self__.meta51941;
}));

(cljs.core.async.t_cljs$core$async51940.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51940.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51940.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51940.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51940.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51952 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51952 = (function (f,ch,meta51941,_,fn1,meta51953){
this.f = f;
this.ch = ch;
this.meta51941 = meta51941;
this._ = _;
this.fn1 = fn1;
this.meta51953 = meta51953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51954,meta51953__$1){
var self__ = this;
var _51954__$1 = this;
return (new cljs.core.async.t_cljs$core$async51952(self__.f,self__.ch,self__.meta51941,self__._,self__.fn1,meta51953__$1));
}));

(cljs.core.async.t_cljs$core$async51952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51954){
var self__ = this;
var _51954__$1 = this;
return self__.meta51953;
}));

(cljs.core.async.t_cljs$core$async51952.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51952.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async51952.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51952.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__51937_SHARP_){
var G__51965 = (((p1__51937_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__51937_SHARP_) : self__.f.call(null,p1__51937_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__51965) : f1.call(null,G__51965));
});
}));

(cljs.core.async.t_cljs$core$async51952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51941","meta51941",-1991478978,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async51940","cljs.core.async/t_cljs$core$async51940",1453876778,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta51953","meta51953",-2142829140,null)], null);
}));

(cljs.core.async.t_cljs$core$async51952.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51952.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51952");

(cljs.core.async.t_cljs$core$async51952.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async51952");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51952.
 */
cljs.core.async.__GT_t_cljs$core$async51952 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51952(f__$1,ch__$1,meta51941__$1,___$2,fn1__$1,meta51953){
return (new cljs.core.async.t_cljs$core$async51952(f__$1,ch__$1,meta51941__$1,___$2,fn1__$1,meta51953));
});

}

return (new cljs.core.async.t_cljs$core$async51952(self__.f,self__.ch,self__.meta51941,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__51982 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__51982) : self__.f.call(null,G__51982));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async51940.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51940.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async51940.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51941","meta51941",-1991478978,null)], null);
}));

(cljs.core.async.t_cljs$core$async51940.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51940.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51940");

(cljs.core.async.t_cljs$core$async51940.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async51940");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51940.
 */
cljs.core.async.__GT_t_cljs$core$async51940 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51940(f__$1,ch__$1,meta51941){
return (new cljs.core.async.t_cljs$core$async51940(f__$1,ch__$1,meta51941));
});

}

return (new cljs.core.async.t_cljs$core$async51940(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51995 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51995 = (function (f,ch,meta51996){
this.f = f;
this.ch = ch;
this.meta51996 = meta51996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51997,meta51996__$1){
var self__ = this;
var _51997__$1 = this;
return (new cljs.core.async.t_cljs$core$async51995(self__.f,self__.ch,meta51996__$1));
}));

(cljs.core.async.t_cljs$core$async51995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51997){
var self__ = this;
var _51997__$1 = this;
return self__.meta51996;
}));

(cljs.core.async.t_cljs$core$async51995.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51995.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51995.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51995.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51995.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51995.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async51995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51996","meta51996",139384492,null)], null);
}));

(cljs.core.async.t_cljs$core$async51995.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51995");

(cljs.core.async.t_cljs$core$async51995.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async51995");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51995.
 */
cljs.core.async.__GT_t_cljs$core$async51995 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async51995(f__$1,ch__$1,meta51996){
return (new cljs.core.async.t_cljs$core$async51995(f__$1,ch__$1,meta51996));
});

}

return (new cljs.core.async.t_cljs$core$async51995(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52014 = (function (p,ch,meta52015){
this.p = p;
this.ch = ch;
this.meta52015 = meta52015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52016,meta52015__$1){
var self__ = this;
var _52016__$1 = this;
return (new cljs.core.async.t_cljs$core$async52014(self__.p,self__.ch,meta52015__$1));
}));

(cljs.core.async.t_cljs$core$async52014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52016){
var self__ = this;
var _52016__$1 = this;
return self__.meta52015;
}));

(cljs.core.async.t_cljs$core$async52014.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52014.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52014.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52014.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52014.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async52014.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52014.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async52014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52015","meta52015",-960869209,null)], null);
}));

(cljs.core.async.t_cljs$core$async52014.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52014");

(cljs.core.async.t_cljs$core$async52014.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async52014");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52014.
 */
cljs.core.async.__GT_t_cljs$core$async52014 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async52014(p__$1,ch__$1,meta52015){
return (new cljs.core.async.t_cljs$core$async52014(p__$1,ch__$1,meta52015));
});

}

return (new cljs.core.async.t_cljs$core$async52014(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__52038 = arguments.length;
switch (G__52038) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49544__auto___53551 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49545__auto__ = (function (){var switch__49226__auto__ = (function (state_52069){
var state_val_52070 = (state_52069[(1)]);
if((state_val_52070 === (7))){
var inst_52065 = (state_52069[(2)]);
var state_52069__$1 = state_52069;
var statearr_52074_53553 = state_52069__$1;
(statearr_52074_53553[(2)] = inst_52065);

(statearr_52074_53553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52070 === (1))){
var state_52069__$1 = state_52069;
var statearr_52075_53555 = state_52069__$1;
(statearr_52075_53555[(2)] = null);

(statearr_52075_53555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52070 === (4))){
var inst_52049 = (state_52069[(7)]);
var inst_52049__$1 = (state_52069[(2)]);
var inst_52050 = (inst_52049__$1 == null);
var state_52069__$1 = (function (){var statearr_52077 = state_52069;
(statearr_52077[(7)] = inst_52049__$1);

return statearr_52077;
})();
if(cljs.core.truth_(inst_52050)){
var statearr_52078_53557 = state_52069__$1;
(statearr_52078_53557[(1)] = (5));

} else {
var statearr_52079_53558 = state_52069__$1;
(statearr_52079_53558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52070 === (6))){
var inst_52049 = (state_52069[(7)]);
var inst_52055 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_52049) : p.call(null,inst_52049));
var state_52069__$1 = state_52069;
if(cljs.core.truth_(inst_52055)){
var statearr_52082_53559 = state_52069__$1;
(statearr_52082_53559[(1)] = (8));

} else {
var statearr_52083_53560 = state_52069__$1;
(statearr_52083_53560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52070 === (3))){
var inst_52067 = (state_52069[(2)]);
var state_52069__$1 = state_52069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52069__$1,inst_52067);
} else {
if((state_val_52070 === (2))){
var state_52069__$1 = state_52069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52069__$1,(4),ch);
} else {
if((state_val_52070 === (11))){
var inst_52058 = (state_52069[(2)]);
var state_52069__$1 = state_52069;
var statearr_52090_53561 = state_52069__$1;
(statearr_52090_53561[(2)] = inst_52058);

(statearr_52090_53561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52070 === (9))){
var state_52069__$1 = state_52069;
var statearr_52092_53563 = state_52069__$1;
(statearr_52092_53563[(2)] = null);

(statearr_52092_53563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52070 === (5))){
var inst_52053 = cljs.core.async.close_BANG_(out);
var state_52069__$1 = state_52069;
var statearr_52094_53564 = state_52069__$1;
(statearr_52094_53564[(2)] = inst_52053);

(statearr_52094_53564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52070 === (10))){
var inst_52062 = (state_52069[(2)]);
var state_52069__$1 = (function (){var statearr_52097 = state_52069;
(statearr_52097[(8)] = inst_52062);

return statearr_52097;
})();
var statearr_52098_53567 = state_52069__$1;
(statearr_52098_53567[(2)] = null);

(statearr_52098_53567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52070 === (8))){
var inst_52049 = (state_52069[(7)]);
var state_52069__$1 = state_52069;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52069__$1,(11),out,inst_52049);
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
});
return (function() {
var cljs$core$async$state_machine__49227__auto__ = null;
var cljs$core$async$state_machine__49227__auto____0 = (function (){
var statearr_52102 = [null,null,null,null,null,null,null,null,null];
(statearr_52102[(0)] = cljs$core$async$state_machine__49227__auto__);

(statearr_52102[(1)] = (1));

return statearr_52102;
});
var cljs$core$async$state_machine__49227__auto____1 = (function (state_52069){
while(true){
var ret_value__49228__auto__ = (function (){try{while(true){
var result__49229__auto__ = switch__49226__auto__(state_52069);
if(cljs.core.keyword_identical_QMARK_(result__49229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49229__auto__;
}
break;
}
}catch (e52106){var ex__49230__auto__ = e52106;
var statearr_52109_53571 = state_52069;
(statearr_52109_53571[(2)] = ex__49230__auto__);


if(cljs.core.seq((state_52069[(4)]))){
var statearr_52110_53572 = state_52069;
(statearr_52110_53572[(1)] = cljs.core.first((state_52069[(4)])));

} else {
throw ex__49230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53574 = state_52069;
state_52069 = G__53574;
continue;
} else {
return ret_value__49228__auto__;
}
break;
}
});
cljs$core$async$state_machine__49227__auto__ = function(state_52069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49227__auto____1.call(this,state_52069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49227__auto____0;
cljs$core$async$state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49227__auto____1;
return cljs$core$async$state_machine__49227__auto__;
})()
})();
var state__49546__auto__ = (function (){var statearr_52112 = f__49545__auto__();
(statearr_52112[(6)] = c__49544__auto___53551);

return statearr_52112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49546__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__52114 = arguments.length;
switch (G__52114) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__49544__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49545__auto__ = (function (){var switch__49226__auto__ = (function (state_52217){
var state_val_52220 = (state_52217[(1)]);
if((state_val_52220 === (7))){
var inst_52212 = (state_52217[(2)]);
var state_52217__$1 = state_52217;
var statearr_52231_53581 = state_52217__$1;
(statearr_52231_53581[(2)] = inst_52212);

(statearr_52231_53581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52220 === (20))){
var inst_52168 = (state_52217[(7)]);
var inst_52190 = (state_52217[(2)]);
var inst_52193 = cljs.core.next(inst_52168);
var inst_52145 = inst_52193;
var inst_52146 = null;
var inst_52147 = (0);
var inst_52148 = (0);
var state_52217__$1 = (function (){var statearr_52239 = state_52217;
(statearr_52239[(8)] = inst_52147);

(statearr_52239[(9)] = inst_52145);

(statearr_52239[(10)] = inst_52146);

(statearr_52239[(11)] = inst_52190);

(statearr_52239[(12)] = inst_52148);

return statearr_52239;
})();
var statearr_52242_53584 = state_52217__$1;
(statearr_52242_53584[(2)] = null);

(statearr_52242_53584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52220 === (1))){
var state_52217__$1 = state_52217;
var statearr_52248_53585 = state_52217__$1;
(statearr_52248_53585[(2)] = null);

(statearr_52248_53585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52220 === (4))){
var inst_52127 = (state_52217[(13)]);
var inst_52127__$1 = (state_52217[(2)]);
var inst_52131 = (inst_52127__$1 == null);
var state_52217__$1 = (function (){var statearr_52250 = state_52217;
(statearr_52250[(13)] = inst_52127__$1);

return statearr_52250;
})();
if(cljs.core.truth_(inst_52131)){
var statearr_52252_53586 = state_52217__$1;
(statearr_52252_53586[(1)] = (5));

} else {
var statearr_52255_53587 = state_52217__$1;
(statearr_52255_53587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52220 === (15))){
var state_52217__$1 = state_52217;
var statearr_52260_53588 = state_52217__$1;
(statearr_52260_53588[(2)] = null);

(statearr_52260_53588[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52220 === (21))){
var state_52217__$1 = state_52217;
var statearr_52262_53589 = state_52217__$1;
(statearr_52262_53589[(2)] = null);

(statearr_52262_53589[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52220 === (13))){
var inst_52147 = (state_52217[(8)]);
var inst_52145 = (state_52217[(9)]);
var inst_52146 = (state_52217[(10)]);
var inst_52148 = (state_52217[(12)]);
var inst_52160 = (state_52217[(2)]);
var inst_52163 = (inst_52148 + (1));
var tmp52257 = inst_52147;
var tmp52258 = inst_52145;
var tmp52259 = inst_52146;
var inst_52145__$1 = tmp52258;
var inst_52146__$1 = tmp52259;
var inst_52147__$1 = tmp52257;
var inst_52148__$1 = inst_52163;
var state_52217__$1 = (function (){var statearr_52267 = state_52217;
(statearr_52267[(8)] = inst_52147__$1);

(statearr_52267[(9)] = inst_52145__$1);

(statearr_52267[(10)] = inst_52146__$1);

(statearr_52267[(14)] = inst_52160);

(statearr_52267[(12)] = inst_52148__$1);

return statearr_52267;
})();
var statearr_52269_53595 = state_52217__$1;
(statearr_52269_53595[(2)] = null);

(statearr_52269_53595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52220 === (22))){
var state_52217__$1 = state_52217;
var statearr_52273_53596 = state_52217__$1;
(statearr_52273_53596[(2)] = null);

(statearr_52273_53596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52220 === (6))){
var inst_52127 = (state_52217[(13)]);
var inst_52143 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52127) : f.call(null,inst_52127));
var inst_52144 = cljs.core.seq(inst_52143);
var inst_52145 = inst_52144;
var inst_52146 = null;
var inst_52147 = (0);
var inst_52148 = (0);
var state_52217__$1 = (function (){var statearr_52278 = state_52217;
(statearr_52278[(8)] = inst_52147);

(statearr_52278[(9)] = inst_52145);

(statearr_52278[(10)] = inst_52146);

(statearr_52278[(12)] = inst_52148);

return statearr_52278;
})();
var statearr_52280_53598 = state_52217__$1;
(statearr_52280_53598[(2)] = null);

(statearr_52280_53598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52220 === (17))){
var inst_52168 = (state_52217[(7)]);
var inst_52181 = cljs.core.chunk_first(inst_52168);
var inst_52183 = cljs.core.chunk_rest(inst_52168);
var inst_52184 = cljs.core.count(inst_52181);
var inst_52145 = inst_52183;
var inst_52146 = inst_52181;
var inst_52147 = inst_52184;
var inst_52148 = (0);
var state_52217__$1 = (function (){var statearr_52291 = state_52217;
(statearr_52291[(8)] = inst_52147);

(statearr_52291[(9)] = inst_52145);

(statearr_52291[(10)] = inst_52146);

(statearr_52291[(12)] = inst_52148);

return statearr_52291;
})();
var statearr_52292_53601 = state_52217__$1;
(statearr_52292_53601[(2)] = null);

(statearr_52292_53601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52220 === (3))){
var inst_52214 = (state_52217[(2)]);
var state_52217__$1 = state_52217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52217__$1,inst_52214);
} else {
if((state_val_52220 === (12))){
var inst_52202 = (state_52217[(2)]);
var state_52217__$1 = state_52217;
var statearr_52294_53602 = state_52217__$1;
(statearr_52294_53602[(2)] = inst_52202);

(statearr_52294_53602[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52220 === (2))){
var state_52217__$1 = state_52217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52217__$1,(4),in$);
} else {
if((state_val_52220 === (23))){
var inst_52210 = (state_52217[(2)]);
var state_52217__$1 = state_52217;
var statearr_52305_53606 = state_52217__$1;
(statearr_52305_53606[(2)] = inst_52210);

(statearr_52305_53606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52220 === (19))){
var inst_52197 = (state_52217[(2)]);
var state_52217__$1 = state_52217;
var statearr_52306_53607 = state_52217__$1;
(statearr_52306_53607[(2)] = inst_52197);

(statearr_52306_53607[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52220 === (11))){
var inst_52145 = (state_52217[(9)]);
var inst_52168 = (state_52217[(7)]);
var inst_52168__$1 = cljs.core.seq(inst_52145);
var state_52217__$1 = (function (){var statearr_52310 = state_52217;
(statearr_52310[(7)] = inst_52168__$1);

return statearr_52310;
})();
if(inst_52168__$1){
var statearr_52312_53608 = state_52217__$1;
(statearr_52312_53608[(1)] = (14));

} else {
var statearr_52314_53609 = state_52217__$1;
(statearr_52314_53609[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52220 === (9))){
var inst_52204 = (state_52217[(2)]);
var inst_52205 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_52217__$1 = (function (){var statearr_52321 = state_52217;
(statearr_52321[(15)] = inst_52204);

return statearr_52321;
})();
if(cljs.core.truth_(inst_52205)){
var statearr_52322_53611 = state_52217__$1;
(statearr_52322_53611[(1)] = (21));

} else {
var statearr_52323_53612 = state_52217__$1;
(statearr_52323_53612[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52220 === (5))){
var inst_52135 = cljs.core.async.close_BANG_(out);
var state_52217__$1 = state_52217;
var statearr_52327_53613 = state_52217__$1;
(statearr_52327_53613[(2)] = inst_52135);

(statearr_52327_53613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52220 === (14))){
var inst_52168 = (state_52217[(7)]);
var inst_52174 = cljs.core.chunked_seq_QMARK_(inst_52168);
var state_52217__$1 = state_52217;
if(inst_52174){
var statearr_52332_53614 = state_52217__$1;
(statearr_52332_53614[(1)] = (17));

} else {
var statearr_52333_53616 = state_52217__$1;
(statearr_52333_53616[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52220 === (16))){
var inst_52200 = (state_52217[(2)]);
var state_52217__$1 = state_52217;
var statearr_52339_53617 = state_52217__$1;
(statearr_52339_53617[(2)] = inst_52200);

(statearr_52339_53617[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52220 === (10))){
var inst_52146 = (state_52217[(10)]);
var inst_52148 = (state_52217[(12)]);
var inst_52156 = cljs.core._nth(inst_52146,inst_52148);
var state_52217__$1 = state_52217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52217__$1,(13),out,inst_52156);
} else {
if((state_val_52220 === (18))){
var inst_52168 = (state_52217[(7)]);
var inst_52187 = cljs.core.first(inst_52168);
var state_52217__$1 = state_52217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52217__$1,(20),out,inst_52187);
} else {
if((state_val_52220 === (8))){
var inst_52147 = (state_52217[(8)]);
var inst_52148 = (state_52217[(12)]);
var inst_52150 = (inst_52148 < inst_52147);
var inst_52151 = inst_52150;
var state_52217__$1 = state_52217;
if(cljs.core.truth_(inst_52151)){
var statearr_52345_53619 = state_52217__$1;
(statearr_52345_53619[(1)] = (10));

} else {
var statearr_52347_53620 = state_52217__$1;
(statearr_52347_53620[(1)] = (11));

}

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
var cljs$core$async$mapcat_STAR__$_state_machine__49227__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__49227__auto____0 = (function (){
var statearr_52352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52352[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__49227__auto__);

(statearr_52352[(1)] = (1));

return statearr_52352;
});
var cljs$core$async$mapcat_STAR__$_state_machine__49227__auto____1 = (function (state_52217){
while(true){
var ret_value__49228__auto__ = (function (){try{while(true){
var result__49229__auto__ = switch__49226__auto__(state_52217);
if(cljs.core.keyword_identical_QMARK_(result__49229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49229__auto__;
}
break;
}
}catch (e52359){var ex__49230__auto__ = e52359;
var statearr_52360_53631 = state_52217;
(statearr_52360_53631[(2)] = ex__49230__auto__);


if(cljs.core.seq((state_52217[(4)]))){
var statearr_52364_53632 = state_52217;
(statearr_52364_53632[(1)] = cljs.core.first((state_52217[(4)])));

} else {
throw ex__49230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53633 = state_52217;
state_52217 = G__53633;
continue;
} else {
return ret_value__49228__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__49227__auto__ = function(state_52217){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__49227__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__49227__auto____1.call(this,state_52217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__49227__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__49227__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__49227__auto__;
})()
})();
var state__49546__auto__ = (function (){var statearr_52371 = f__49545__auto__();
(statearr_52371[(6)] = c__49544__auto__);

return statearr_52371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49546__auto__);
}));

return c__49544__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__52380 = arguments.length;
switch (G__52380) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__52404 = arguments.length;
switch (G__52404) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__52428 = arguments.length;
switch (G__52428) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49544__auto___53644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49545__auto__ = (function (){var switch__49226__auto__ = (function (state_52460){
var state_val_52461 = (state_52460[(1)]);
if((state_val_52461 === (7))){
var inst_52455 = (state_52460[(2)]);
var state_52460__$1 = state_52460;
var statearr_52465_53645 = state_52460__$1;
(statearr_52465_53645[(2)] = inst_52455);

(statearr_52465_53645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52461 === (1))){
var inst_52436 = null;
var state_52460__$1 = (function (){var statearr_52469 = state_52460;
(statearr_52469[(7)] = inst_52436);

return statearr_52469;
})();
var statearr_52470_53646 = state_52460__$1;
(statearr_52470_53646[(2)] = null);

(statearr_52470_53646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52461 === (4))){
var inst_52440 = (state_52460[(8)]);
var inst_52440__$1 = (state_52460[(2)]);
var inst_52441 = (inst_52440__$1 == null);
var inst_52442 = cljs.core.not(inst_52441);
var state_52460__$1 = (function (){var statearr_52473 = state_52460;
(statearr_52473[(8)] = inst_52440__$1);

return statearr_52473;
})();
if(inst_52442){
var statearr_52476_53652 = state_52460__$1;
(statearr_52476_53652[(1)] = (5));

} else {
var statearr_52477_53653 = state_52460__$1;
(statearr_52477_53653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52461 === (6))){
var state_52460__$1 = state_52460;
var statearr_52480_53654 = state_52460__$1;
(statearr_52480_53654[(2)] = null);

(statearr_52480_53654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52461 === (3))){
var inst_52457 = (state_52460[(2)]);
var inst_52458 = cljs.core.async.close_BANG_(out);
var state_52460__$1 = (function (){var statearr_52485 = state_52460;
(statearr_52485[(9)] = inst_52457);

return statearr_52485;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52460__$1,inst_52458);
} else {
if((state_val_52461 === (2))){
var state_52460__$1 = state_52460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52460__$1,(4),ch);
} else {
if((state_val_52461 === (11))){
var inst_52440 = (state_52460[(8)]);
var inst_52449 = (state_52460[(2)]);
var inst_52436 = inst_52440;
var state_52460__$1 = (function (){var statearr_52490 = state_52460;
(statearr_52490[(10)] = inst_52449);

(statearr_52490[(7)] = inst_52436);

return statearr_52490;
})();
var statearr_52496_53658 = state_52460__$1;
(statearr_52496_53658[(2)] = null);

(statearr_52496_53658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52461 === (9))){
var inst_52440 = (state_52460[(8)]);
var state_52460__$1 = state_52460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52460__$1,(11),out,inst_52440);
} else {
if((state_val_52461 === (5))){
var inst_52440 = (state_52460[(8)]);
var inst_52436 = (state_52460[(7)]);
var inst_52444 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52440,inst_52436);
var state_52460__$1 = state_52460;
if(inst_52444){
var statearr_52507_53659 = state_52460__$1;
(statearr_52507_53659[(1)] = (8));

} else {
var statearr_52510_53660 = state_52460__$1;
(statearr_52510_53660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52461 === (10))){
var inst_52452 = (state_52460[(2)]);
var state_52460__$1 = state_52460;
var statearr_52513_53662 = state_52460__$1;
(statearr_52513_53662[(2)] = inst_52452);

(statearr_52513_53662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52461 === (8))){
var inst_52436 = (state_52460[(7)]);
var tmp52504 = inst_52436;
var inst_52436__$1 = tmp52504;
var state_52460__$1 = (function (){var statearr_52516 = state_52460;
(statearr_52516[(7)] = inst_52436__$1);

return statearr_52516;
})();
var statearr_52520_53667 = state_52460__$1;
(statearr_52520_53667[(2)] = null);

(statearr_52520_53667[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__49227__auto__ = null;
var cljs$core$async$state_machine__49227__auto____0 = (function (){
var statearr_52531 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52531[(0)] = cljs$core$async$state_machine__49227__auto__);

(statearr_52531[(1)] = (1));

return statearr_52531;
});
var cljs$core$async$state_machine__49227__auto____1 = (function (state_52460){
while(true){
var ret_value__49228__auto__ = (function (){try{while(true){
var result__49229__auto__ = switch__49226__auto__(state_52460);
if(cljs.core.keyword_identical_QMARK_(result__49229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49229__auto__;
}
break;
}
}catch (e52534){var ex__49230__auto__ = e52534;
var statearr_52535_53669 = state_52460;
(statearr_52535_53669[(2)] = ex__49230__auto__);


if(cljs.core.seq((state_52460[(4)]))){
var statearr_52536_53670 = state_52460;
(statearr_52536_53670[(1)] = cljs.core.first((state_52460[(4)])));

} else {
throw ex__49230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53672 = state_52460;
state_52460 = G__53672;
continue;
} else {
return ret_value__49228__auto__;
}
break;
}
});
cljs$core$async$state_machine__49227__auto__ = function(state_52460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49227__auto____1.call(this,state_52460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49227__auto____0;
cljs$core$async$state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49227__auto____1;
return cljs$core$async$state_machine__49227__auto__;
})()
})();
var state__49546__auto__ = (function (){var statearr_52540 = f__49545__auto__();
(statearr_52540[(6)] = c__49544__auto___53644);

return statearr_52540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49546__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__52550 = arguments.length;
switch (G__52550) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49544__auto___53676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49545__auto__ = (function (){var switch__49226__auto__ = (function (state_52598){
var state_val_52599 = (state_52598[(1)]);
if((state_val_52599 === (7))){
var inst_52594 = (state_52598[(2)]);
var state_52598__$1 = state_52598;
var statearr_52605_53677 = state_52598__$1;
(statearr_52605_53677[(2)] = inst_52594);

(statearr_52605_53677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52599 === (1))){
var inst_52557 = (new Array(n));
var inst_52558 = inst_52557;
var inst_52559 = (0);
var state_52598__$1 = (function (){var statearr_52606 = state_52598;
(statearr_52606[(7)] = inst_52558);

(statearr_52606[(8)] = inst_52559);

return statearr_52606;
})();
var statearr_52608_53679 = state_52598__$1;
(statearr_52608_53679[(2)] = null);

(statearr_52608_53679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52599 === (4))){
var inst_52562 = (state_52598[(9)]);
var inst_52562__$1 = (state_52598[(2)]);
var inst_52563 = (inst_52562__$1 == null);
var inst_52564 = cljs.core.not(inst_52563);
var state_52598__$1 = (function (){var statearr_52611 = state_52598;
(statearr_52611[(9)] = inst_52562__$1);

return statearr_52611;
})();
if(inst_52564){
var statearr_52613_53680 = state_52598__$1;
(statearr_52613_53680[(1)] = (5));

} else {
var statearr_52615_53681 = state_52598__$1;
(statearr_52615_53681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52599 === (15))){
var inst_52588 = (state_52598[(2)]);
var state_52598__$1 = state_52598;
var statearr_52616_53682 = state_52598__$1;
(statearr_52616_53682[(2)] = inst_52588);

(statearr_52616_53682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52599 === (13))){
var state_52598__$1 = state_52598;
var statearr_52618_53684 = state_52598__$1;
(statearr_52618_53684[(2)] = null);

(statearr_52618_53684[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52599 === (6))){
var inst_52559 = (state_52598[(8)]);
var inst_52584 = (inst_52559 > (0));
var state_52598__$1 = state_52598;
if(cljs.core.truth_(inst_52584)){
var statearr_52619_53685 = state_52598__$1;
(statearr_52619_53685[(1)] = (12));

} else {
var statearr_52620_53686 = state_52598__$1;
(statearr_52620_53686[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52599 === (3))){
var inst_52596 = (state_52598[(2)]);
var state_52598__$1 = state_52598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52598__$1,inst_52596);
} else {
if((state_val_52599 === (12))){
var inst_52558 = (state_52598[(7)]);
var inst_52586 = cljs.core.vec(inst_52558);
var state_52598__$1 = state_52598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52598__$1,(15),out,inst_52586);
} else {
if((state_val_52599 === (2))){
var state_52598__$1 = state_52598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52598__$1,(4),ch);
} else {
if((state_val_52599 === (11))){
var inst_52576 = (state_52598[(2)]);
var inst_52579 = (new Array(n));
var inst_52558 = inst_52579;
var inst_52559 = (0);
var state_52598__$1 = (function (){var statearr_52626 = state_52598;
(statearr_52626[(10)] = inst_52576);

(statearr_52626[(7)] = inst_52558);

(statearr_52626[(8)] = inst_52559);

return statearr_52626;
})();
var statearr_52629_53688 = state_52598__$1;
(statearr_52629_53688[(2)] = null);

(statearr_52629_53688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52599 === (9))){
var inst_52558 = (state_52598[(7)]);
var inst_52574 = cljs.core.vec(inst_52558);
var state_52598__$1 = state_52598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52598__$1,(11),out,inst_52574);
} else {
if((state_val_52599 === (5))){
var inst_52558 = (state_52598[(7)]);
var inst_52568 = (state_52598[(11)]);
var inst_52559 = (state_52598[(8)]);
var inst_52562 = (state_52598[(9)]);
var inst_52566 = (inst_52558[inst_52559] = inst_52562);
var inst_52568__$1 = (inst_52559 + (1));
var inst_52570 = (inst_52568__$1 < n);
var state_52598__$1 = (function (){var statearr_52633 = state_52598;
(statearr_52633[(11)] = inst_52568__$1);

(statearr_52633[(12)] = inst_52566);

return statearr_52633;
})();
if(cljs.core.truth_(inst_52570)){
var statearr_52634_53689 = state_52598__$1;
(statearr_52634_53689[(1)] = (8));

} else {
var statearr_52635_53690 = state_52598__$1;
(statearr_52635_53690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52599 === (14))){
var inst_52591 = (state_52598[(2)]);
var inst_52592 = cljs.core.async.close_BANG_(out);
var state_52598__$1 = (function (){var statearr_52641 = state_52598;
(statearr_52641[(13)] = inst_52591);

return statearr_52641;
})();
var statearr_52642_53693 = state_52598__$1;
(statearr_52642_53693[(2)] = inst_52592);

(statearr_52642_53693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52599 === (10))){
var inst_52582 = (state_52598[(2)]);
var state_52598__$1 = state_52598;
var statearr_52643_53695 = state_52598__$1;
(statearr_52643_53695[(2)] = inst_52582);

(statearr_52643_53695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52599 === (8))){
var inst_52558 = (state_52598[(7)]);
var inst_52568 = (state_52598[(11)]);
var tmp52638 = inst_52558;
var inst_52558__$1 = tmp52638;
var inst_52559 = inst_52568;
var state_52598__$1 = (function (){var statearr_52645 = state_52598;
(statearr_52645[(7)] = inst_52558__$1);

(statearr_52645[(8)] = inst_52559);

return statearr_52645;
})();
var statearr_52648_53697 = state_52598__$1;
(statearr_52648_53697[(2)] = null);

(statearr_52648_53697[(1)] = (2));


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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49227__auto__ = null;
var cljs$core$async$state_machine__49227__auto____0 = (function (){
var statearr_52652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52652[(0)] = cljs$core$async$state_machine__49227__auto__);

(statearr_52652[(1)] = (1));

return statearr_52652;
});
var cljs$core$async$state_machine__49227__auto____1 = (function (state_52598){
while(true){
var ret_value__49228__auto__ = (function (){try{while(true){
var result__49229__auto__ = switch__49226__auto__(state_52598);
if(cljs.core.keyword_identical_QMARK_(result__49229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49229__auto__;
}
break;
}
}catch (e52655){var ex__49230__auto__ = e52655;
var statearr_52656_53698 = state_52598;
(statearr_52656_53698[(2)] = ex__49230__auto__);


if(cljs.core.seq((state_52598[(4)]))){
var statearr_52659_53700 = state_52598;
(statearr_52659_53700[(1)] = cljs.core.first((state_52598[(4)])));

} else {
throw ex__49230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53702 = state_52598;
state_52598 = G__53702;
continue;
} else {
return ret_value__49228__auto__;
}
break;
}
});
cljs$core$async$state_machine__49227__auto__ = function(state_52598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49227__auto____1.call(this,state_52598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49227__auto____0;
cljs$core$async$state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49227__auto____1;
return cljs$core$async$state_machine__49227__auto__;
})()
})();
var state__49546__auto__ = (function (){var statearr_52661 = f__49545__auto__();
(statearr_52661[(6)] = c__49544__auto___53676);

return statearr_52661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49546__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__52668 = arguments.length;
switch (G__52668) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49544__auto___53705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49545__auto__ = (function (){var switch__49226__auto__ = (function (state_52723){
var state_val_52724 = (state_52723[(1)]);
if((state_val_52724 === (7))){
var inst_52718 = (state_52723[(2)]);
var state_52723__$1 = state_52723;
var statearr_52729_53707 = state_52723__$1;
(statearr_52729_53707[(2)] = inst_52718);

(statearr_52729_53707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52724 === (1))){
var inst_52673 = [];
var inst_52674 = inst_52673;
var inst_52675 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_52723__$1 = (function (){var statearr_52730 = state_52723;
(statearr_52730[(7)] = inst_52675);

(statearr_52730[(8)] = inst_52674);

return statearr_52730;
})();
var statearr_52732_53708 = state_52723__$1;
(statearr_52732_53708[(2)] = null);

(statearr_52732_53708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52724 === (4))){
var inst_52679 = (state_52723[(9)]);
var inst_52679__$1 = (state_52723[(2)]);
var inst_52680 = (inst_52679__$1 == null);
var inst_52681 = cljs.core.not(inst_52680);
var state_52723__$1 = (function (){var statearr_52733 = state_52723;
(statearr_52733[(9)] = inst_52679__$1);

return statearr_52733;
})();
if(inst_52681){
var statearr_52736_53709 = state_52723__$1;
(statearr_52736_53709[(1)] = (5));

} else {
var statearr_52737_53710 = state_52723__$1;
(statearr_52737_53710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52724 === (15))){
var inst_52674 = (state_52723[(8)]);
var inst_52710 = cljs.core.vec(inst_52674);
var state_52723__$1 = state_52723;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52723__$1,(18),out,inst_52710);
} else {
if((state_val_52724 === (13))){
var inst_52705 = (state_52723[(2)]);
var state_52723__$1 = state_52723;
var statearr_52740_53712 = state_52723__$1;
(statearr_52740_53712[(2)] = inst_52705);

(statearr_52740_53712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52724 === (6))){
var inst_52674 = (state_52723[(8)]);
var inst_52707 = inst_52674.length;
var inst_52708 = (inst_52707 > (0));
var state_52723__$1 = state_52723;
if(cljs.core.truth_(inst_52708)){
var statearr_52742_53713 = state_52723__$1;
(statearr_52742_53713[(1)] = (15));

} else {
var statearr_52743_53714 = state_52723__$1;
(statearr_52743_53714[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52724 === (17))){
var inst_52715 = (state_52723[(2)]);
var inst_52716 = cljs.core.async.close_BANG_(out);
var state_52723__$1 = (function (){var statearr_52748 = state_52723;
(statearr_52748[(10)] = inst_52715);

return statearr_52748;
})();
var statearr_52749_53715 = state_52723__$1;
(statearr_52749_53715[(2)] = inst_52716);

(statearr_52749_53715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52724 === (3))){
var inst_52720 = (state_52723[(2)]);
var state_52723__$1 = state_52723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52723__$1,inst_52720);
} else {
if((state_val_52724 === (12))){
var inst_52674 = (state_52723[(8)]);
var inst_52698 = cljs.core.vec(inst_52674);
var state_52723__$1 = state_52723;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52723__$1,(14),out,inst_52698);
} else {
if((state_val_52724 === (2))){
var state_52723__$1 = state_52723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52723__$1,(4),ch);
} else {
if((state_val_52724 === (11))){
var inst_52683 = (state_52723[(11)]);
var inst_52674 = (state_52723[(8)]);
var inst_52679 = (state_52723[(9)]);
var inst_52693 = inst_52674.push(inst_52679);
var tmp52750 = inst_52674;
var inst_52674__$1 = tmp52750;
var inst_52675 = inst_52683;
var state_52723__$1 = (function (){var statearr_52756 = state_52723;
(statearr_52756[(7)] = inst_52675);

(statearr_52756[(12)] = inst_52693);

(statearr_52756[(8)] = inst_52674__$1);

return statearr_52756;
})();
var statearr_52757_53717 = state_52723__$1;
(statearr_52757_53717[(2)] = null);

(statearr_52757_53717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52724 === (9))){
var inst_52675 = (state_52723[(7)]);
var inst_52689 = cljs.core.keyword_identical_QMARK_(inst_52675,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_52723__$1 = state_52723;
var statearr_52759_53718 = state_52723__$1;
(statearr_52759_53718[(2)] = inst_52689);

(statearr_52759_53718[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52724 === (5))){
var inst_52684 = (state_52723[(13)]);
var inst_52675 = (state_52723[(7)]);
var inst_52683 = (state_52723[(11)]);
var inst_52679 = (state_52723[(9)]);
var inst_52683__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52679) : f.call(null,inst_52679));
var inst_52684__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52683__$1,inst_52675);
var state_52723__$1 = (function (){var statearr_52762 = state_52723;
(statearr_52762[(13)] = inst_52684__$1);

(statearr_52762[(11)] = inst_52683__$1);

return statearr_52762;
})();
if(inst_52684__$1){
var statearr_52763_53720 = state_52723__$1;
(statearr_52763_53720[(1)] = (8));

} else {
var statearr_52766_53721 = state_52723__$1;
(statearr_52766_53721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52724 === (14))){
var inst_52683 = (state_52723[(11)]);
var inst_52679 = (state_52723[(9)]);
var inst_52700 = (state_52723[(2)]);
var inst_52701 = [];
var inst_52702 = inst_52701.push(inst_52679);
var inst_52674 = inst_52701;
var inst_52675 = inst_52683;
var state_52723__$1 = (function (){var statearr_52767 = state_52723;
(statearr_52767[(14)] = inst_52702);

(statearr_52767[(7)] = inst_52675);

(statearr_52767[(15)] = inst_52700);

(statearr_52767[(8)] = inst_52674);

return statearr_52767;
})();
var statearr_52769_53725 = state_52723__$1;
(statearr_52769_53725[(2)] = null);

(statearr_52769_53725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52724 === (16))){
var state_52723__$1 = state_52723;
var statearr_52770_53726 = state_52723__$1;
(statearr_52770_53726[(2)] = null);

(statearr_52770_53726[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52724 === (10))){
var inst_52691 = (state_52723[(2)]);
var state_52723__$1 = state_52723;
if(cljs.core.truth_(inst_52691)){
var statearr_52773_53727 = state_52723__$1;
(statearr_52773_53727[(1)] = (11));

} else {
var statearr_52776_53728 = state_52723__$1;
(statearr_52776_53728[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52724 === (18))){
var inst_52712 = (state_52723[(2)]);
var state_52723__$1 = state_52723;
var statearr_52777_53729 = state_52723__$1;
(statearr_52777_53729[(2)] = inst_52712);

(statearr_52777_53729[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52724 === (8))){
var inst_52684 = (state_52723[(13)]);
var state_52723__$1 = state_52723;
var statearr_52778_53732 = state_52723__$1;
(statearr_52778_53732[(2)] = inst_52684);

(statearr_52778_53732[(1)] = (10));


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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49227__auto__ = null;
var cljs$core$async$state_machine__49227__auto____0 = (function (){
var statearr_52782 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52782[(0)] = cljs$core$async$state_machine__49227__auto__);

(statearr_52782[(1)] = (1));

return statearr_52782;
});
var cljs$core$async$state_machine__49227__auto____1 = (function (state_52723){
while(true){
var ret_value__49228__auto__ = (function (){try{while(true){
var result__49229__auto__ = switch__49226__auto__(state_52723);
if(cljs.core.keyword_identical_QMARK_(result__49229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49229__auto__;
}
break;
}
}catch (e52785){var ex__49230__auto__ = e52785;
var statearr_52786_53734 = state_52723;
(statearr_52786_53734[(2)] = ex__49230__auto__);


if(cljs.core.seq((state_52723[(4)]))){
var statearr_52787_53737 = state_52723;
(statearr_52787_53737[(1)] = cljs.core.first((state_52723[(4)])));

} else {
throw ex__49230__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53738 = state_52723;
state_52723 = G__53738;
continue;
} else {
return ret_value__49228__auto__;
}
break;
}
});
cljs$core$async$state_machine__49227__auto__ = function(state_52723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49227__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49227__auto____1.call(this,state_52723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49227__auto____0;
cljs$core$async$state_machine__49227__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49227__auto____1;
return cljs$core$async$state_machine__49227__auto__;
})()
})();
var state__49546__auto__ = (function (){var statearr_52789 = f__49545__auto__();
(statearr_52789[(6)] = c__49544__auto___53705);

return statearr_52789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49546__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
