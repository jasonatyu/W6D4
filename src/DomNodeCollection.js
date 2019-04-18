class DOMNodeCollection {
  
  constructor (array) {
    this.array = array;
  }

  html(string) {
    if (string) {
      this.array.forEach( (el) => { 
        el.innerHTML = string;
      });
    } else {
      return this.array[0].innerHTML;
    }
  }

  empty() {
    this.array.forEach( (el) => {
      el.innerHTML = "";
    });
  }

  append(arg) {
    this.array.forEach((el) => {
      el.innerHTML += arg;
    });
  }

  attr(attribute, value) {
    for (let i = 0; i < this.array.length; i++) {
      if (!value) return this.array[i].getAttribute(attribute);
      if (value) return this.array[i].setAttribute(attribute,value);
    }
  }

  addClass(className) {
    this.array.forEach((el) => {
      el.className = className;
    });
  }

  removeClass(className) {
    this.array.forEach((el) => {
      el.removeAttribute(className);
    });
  }

  children() {
    let childrenArr = [];
    
    for (let i = 0; i < this.array.length; i++) {
      // console.log(this.array[i].children);
      let tempChild = this.array[i].children;
      childrenArr.push(...tempChild);
    }
    return new DOMNodeCollection(childrenArr);
  }

  parent() {
    let parentArr = [];
    for (let i = 0; i < this.array.length; i++) {
      parentArr.push(this.array[i].parentNode);
    }
    return new DOMNodeCollection(parentArr);
  }

  find(arg) {
    const result = [];
    this.array.forEach((el) => {
      result.push(el.querySelectorAll(arg));
    })
    return new DOMNodeCollection(result);
  }

  remove() {
    this.array.forEach((el) => {
      el.parentNode.removeChild(el);
    });
  }

  on(action,callback) {
    this.array.forEach((el) => {
      el.actionEvent = callback;
      el.addEventListener(action, el.actionEvent);
    })
  }

  off(action) {
    this.array.forEach((el) => {
      el.removeEventListener(action, el.actionEvent);
    })
  }

  

}

module.exports = DOMNodeCollection;

