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
