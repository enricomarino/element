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

function Element (el) {
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

Element.prototype.attr = function (name, val) {
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

Element.prototype.clone = function () {
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

Element.prototype.prepend = function (element) {
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

Element.prototype.append = function (element) {
  var el = this.el;
  el.appendChild(element);
  return this;
};

/**
 * into
 * Append this `el` to `element`
 *
 * @param {Element} element element
 * @return {Element} this for chaining 
 * @api public
 */

Element.prototype.into = function (element) {
  element.append(this.el);
  return this;
};

/**
 * before
 * Insert this `el` before `element`
 * 
 * @param {Element} element element
 * @return {Element} this for chaining
 * @api public
 */

Element.prototype.before = function (element) {
  element.parentNode.insertBefore(this.el, element);
  return this;
};

/**
 * after
 * Insert this `el` after `element`
 * 
 * @param {Element} element element
 * @return {Element} this for chaining
 * @api public
 */

Element.prototype.after = function (element) {
  var sibling = element.nextSibling;
  if (sibling) {
    element.parentNode.insertBefore(this.el, sibling);
  } else {
    element.parentNode.appendChild(this);
  }
  return this;
};

/**
 * next
 * Get the next sibling
 * 
 * @return {Element} next sibling
 * @api public
 */

Element.prototype.next = function () {
  return this.el.nextSibling;
};

/**
 * previous
 * Get the previous sibling
 * 
 * @return {Element} previous sibling
 * @api public
 */

Element.prototype.previous = function () {
  return this.el.previousSibling;
};

/**
 * parent
 * Get the parent node
 * 
 * @return {Element} parent
 * @api public
 */

Element.prototype.parent = function () {
  return this.el.parentNode;
};
