/**
 * element
 * Element component
 * 
 * @author Enrico Marino
 * @copyright 2013 Enrico Marino
 */

/**
 * Expose element
 */

module.exports = element;

/**
 * element
 */

function element (el) {
  if (!(this instanceof element)) {
    return new element(el);
  }
  if (el instanceof element) {
    return el;
  }
  this.el = el;
}

/**
 * element.create
 * Create an element.
 * 
 * @param {Element} el element
 * @return {element} element instance
 * @api public
 */

element.create = function (el) {
  return new element(el);
};

/**
 * element.use
 * Use a plugin.
 * 
 * @param {Function} fn plugin
 * @return {element} element constructor for chaining
 * @api public
 */

element.use = function (fn) {
  fn(this);
  return this;
};
