export const addListener = (elm, type, func) => {
  if(typeof elm === 'string') {
    document.querySelector(elm).addEventListener(type, func, false);
    console.log("This should be an element.");
  }
  else if (elm === 'object') {
    elm.addEventListener(type, func, false);
  }
  else {

  }
};

export const addListeners = (elmArray, type, func) => {
  for (let i = 0; i < elmArray.length; i++) {
    elmArray[i].addEventListener(type, func, false);
  }
};

export const removeListener = (elm, type, func) => {
  if(typeof elm === 'string') {
    document.querySelector(elm).removeEventListener(type, func, false);
    console.log("This should be an element.");
  }
  else if (elm === 'object') {
    elm.removeEventListener(type, func, false);
  }
};

export const removeListeners = (elmArray, type, func) => {
  for (let i = 0; i < elmArray.length; i++) {
    elmArray[i].removeEventListener(type, func, false);
  }
};

export const normalizeString = (string) => {
  return string.replace(/_/g, ' ');
};

export const checkArraysForIntersection = (array1, array2) => {
  array1.filter(person => person.age > 18);
};
