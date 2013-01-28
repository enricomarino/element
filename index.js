/**
 * element
 * Element component
 * 
 * @author Enrico Marino
 * @copyright 2013 Enrico Marino
 */

/*
 * Expose `Element`
 */

module.expose = Element;

/*
 * Element
 */

function Element(el) {
  el = el || document.createElement('div');
  this.el = el;
}


/**
 * attr
 * Get attribute `name` 
 * or set attribute `name` to `val`.
 *
 * @param {String} name
 * @param {String} [val]
 * @return {String|Element} self
 * @api public
 */

Element.prototype.attr = function(name, val) {
  if (1 == arguments.length) {
    return this.el.getAttribute(name);
  } 
  this.el.setAttribute(name, val);
  return this;
};

/**
 * clone
 * Return a cloned `Element`.
 *
 * @return {Element}
 * @api public
 */

Element.prototype.clone = function() {
  var el = this.el.cloneNode(true);
  return new Element(el);
};

/**
 * prepend
 * Prepend `element`.
 *
 * @param {Element} el
 * @return {Element} this for chaining
 * @api public
 */

Element.prototype.prepend = function(element){
  var el = this.el;
  if (el.children.length) {
    el.insertBefore(element, el.firstChild);
  } else {
    el.appendChild(element);
  }
  return this;
};

/**
 * prepend
 * Prepend `element`.
 *
 * @param {Element} element
 * @return {Element} this for chaining
 * @api public
 */

Element.prototype.append = function(element){
  var el = this.el;
  el.appendChild(element);
  return this;
};

/**
 * Initialize a new `List` with 
 * the given array-ish of `els` 
 * and `selector` string.
 *
 * @param {Mixed} els
 * @param {String} selector
 * @api private
 */

function List(els, selector) {
  this.els = els || [];
  this.selector = selector;
}
