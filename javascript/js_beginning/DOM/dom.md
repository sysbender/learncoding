* window
  * document
    * html
      * head
      * body


* tag
  * attribute
  * text node

## properties
```javascript
document.documentElement;
document.head;
document.body;
document.head.children;
document.body.children;
document.doctype;
document.URL;
document.characterSet;
document.contentType; // text/html
// attribute
document.forms[0].id; //
document.forms[0].method;  // get , post
document.forms[0].action; 

document.links[0].href;
document.links[0].id;
document.links[0].className;
document.links[0].classList; // DOMTokenList

document.images; // HTMLCollection is not arry , so Foreach is not supported
// convert to array
const images = Array.from(document.images);


```

## select one element
 
```javascript
document.getElementById('id1');

document.getElementById('id1').getAttribute('class');  // general
document.getElementById('id1').className ; // by property name only if supported

document.getElementById('id1').setAttribute('class');  // general
let elem =document.getElementById('id1');

//content
elem.innerHTML  // innerText, textContent
// style
elem.style.color // backgroundColor, 


```

 querySelector
 ```javascript
 document.querySelector('h1') // tag, id, class , attribute
 document.querySelector('input[type="text"]')  // attribute
 document.querySelector('li:nth-child(2)') //pseudo

 ```


 // querySelectorAll -> return NodeList , which support high order function
// getElementsByClassName -> return HTMLCollection

## traversing the DOM
* parent
  * firstElementChild
  * lastElementChild
  * children
    * parentElment
    * previousElementSibling
    * nextElementSibling


## DOM Node type
* Element 
* Attr
* Text
* CDATASection
* EntityReference
* Entity
* ProcessingInstruction
* Comment
* Document
* DocumentType
* DocumentFragment
* Notation

### DOM Node Relationships
even the white space is a text node

* parent
  * firstChild
  * lastChild
* childNodes
  * parentNode
  * previousSibling
  * nextSibling

## create element
```javascript

const div = document.createElement('div');
div.className = 'div-class'
div.setAttribute('title', 'my-element');

const text = document.createTextNode('Hello world');
div.appendChild(text);

document.body.appendChild(div);

```
## innerHtml vs createElement

* insertAdjacentElement(pos, elem)
* insertAdjacentText(pos, text)
* insertAdjacentHTML(pos, htmlString)

  
* parent.insertBefore(new, reference)


```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

## replace element
```javascript
oldElement.replaceWith(newElement)
oldElement.outerHTML(html)
```


## remove element

```javascript
oldElement.remove()
parentElement.removeChild(oldElement);
```

## css

```javascript
elem.className; // all classes as a string
elem.classList  // DOMTokenList
elem.classList.add('new-class') // add
elem.classList.remove('old-class') // 
elem.classList.toggle('class-name')  // toggle
elem.classList.replace('old', 'new')

elem.style.color ='red' // change style




```
