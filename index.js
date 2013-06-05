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
    this.el = el;
  }

  /**
   * use
   * 
   * @param {Object} proto
   * @return {element} this for chaining
   * @api public
   */

  element.use = function (proto) {
    var key;
    for (key in proto) { 
      element.prototype[key] = proto[key];
    }    
    return this;
  };

  return element;
}
