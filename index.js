/**
 * element
 * Element component
 * 
 * @author Enrico Marino
 * @copyright 2013 Enrico Marino
 */

/*
 * Expose `create_element`
 */

module.expose = create_element;

/*
 * create_element
 */

function create_element () {

  /*
   * element
   */

  function element (el) {
    if (!(this instanceof element)) {
      return new element(el);
    }
    this.el = 
    this.element = el;
  }

  /**
   * use
   * 
   * @param {Object} proto
   * @return {element} this for chaining
   * @api public
   */

  element.use = function (fn) {
    fn(this);
    return this;
  };

  return element;
}
