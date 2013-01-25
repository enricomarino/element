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
  this.el = el;
}


/**
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
