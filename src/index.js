const DOMNodeCollection = require("./DOMNodeCollection.js");

window.$l = (arg) => {
  let funcQueue = [];
  if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
   } else if (typeof arg === "string") {
     console.log("here");
    return getNodes(arg);
  } if (typeof arg === "function") {
    funcQueue.push(arg);
    document.addEventListener('DOMContentLoaded', (event)=>{
      for (let i = 0; i < funcQueue.length; i++) {
        funcQueue[i]();
      }
    });
  }
};

function getNodes(arg) {
  let element = document.querySelectorAll(arg);
  let elementArray = Array.from(element);
  return new DOMNodeCollection(elementArray);
}