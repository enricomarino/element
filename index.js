/**
 * Element
 * Element component
 * 
 * @author Enrico Marino
 * @copyright 2013 Enrico Marino
 */

/**
 * Expose Element
 */

module.exports = Element;

/**
 * Element
 */

function Element (el) {
  if (el instanceof Element) {
    return el;
  }
  this.el = el;
}

/**
 * Element.create
 * Create an element.
 * 
 * @param {Element} el element
 * @return {Element} element instance
 * @api public
 */

Element.create = function (el) {
  return new element(el);
};

/**
 * Element.use
 * Use a plugin.
 * 
 * @param {Function} fn plugin
 * @return {Element} Element constructor for chaining
 * @api public
 */

Element.use = function (fn) {
  fn(this);
  return this;
};
