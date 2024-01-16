/***
 *
 *  asynchronously observe changes in the intersection of a target element with an ancestor element
 *  or with a top-level document's viewport.
 *
 *
 *
 */

// create observer - callback, option
const observer = new IntersectionObserver(callback, options);

function callback(entries, observer) {
  //IntersectionObserverEntry object provides information about the intersection state of a target element.
  entries.forEach((entry) => {
    console.log("Is intersecting:", entry.isIntersecting);
    console.log("Intersection ratio:", entry.intersectionRatio);
  });
}

const options = {
  root: document.querySelector("#container"),
  rootMargin: "0px",
  threshold: 0.5, // could be an array
};

// start observer
const targetElement = document.querySelector(".target");
observer.observe(targetElement);

// stop observe or disconnect
observer.unobserve(targetElement);
observer.disconnect();
