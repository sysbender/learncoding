- EventTarget - abstract class
  - Node
    - Element - childNodes, parentNode, cloneNode(), textContent,
      - HTMLElement - children, parentElement, innerHTML, querySelector(), scrollIntoView()
        - HTMLButtonElement
        - HTMLDivElement
    - Text
    - Comment
    - Document - whole page

## select, create, insert, delete element

### select element

special element

- document.documentElement
- document.head
- document.body

result could be

- NodeList - not live
  - querySelector()
  - querySelectorAll()
- HTMLCollection - live, will update when element change
  - getElementById()
  - getElementsByTagName()
  - getElementsByClassName()

### create element

- insertAdjacentHTML
- createElement('div')

### insert element

- prepend()
- append()
- before()
- after()

### clone

- cloneNone(true ) // include children

### delete

- remove()
- parentElement.removeChild(childElement)

## css variable or custom property

```css
:root {
  --color-primary: #5ec576;
}
```

```javascript
document.documentElement.style.setProperty("--color-primary", "red");
```

- standard attribute - dot access
  - absolute path for src, href , link
- non-standard - getAttribute, setAttribute
  - relative path for src, href, link
- classList - add, remove, toggle, contains
- dataset.verNum - dot access data-ver-num

## scroll

current viewport

` document.documentElement.clientHeight/Width`
current scroll
` window.pageXOffset, pageYOffset`

element position
` elem.getBoundingClientRect()`

- top, right, left, bottom : relative to top left of viewport position
- height, width

scrollTo - two ways
window.scrollTo(absLeft, absTop)

```javascript
//section1.scrollIntoView({ behavior: 'smooth' });

const destCoord = section1.getBoundingClientRect();

window.scrollTo({
  left: window.pageXOffset + destCoord.left,
  top: window.pageYOffset + destCoord.top,
  behavior: "smooth",
});
```

## event

## addEventListener,

three parameter

1. event name
2. eventLister function
3. capture phase = false (if set true, then only capture event in capturing phase)

removeEventListener - need the listener's named function

### bubbling and capturing

capturing - target phase - bubbling phase

- in addEventListener, this === e.currentTarget
- e.target is where the event originally created

e.stopPropagation() - can stop the event from where is created

### event delegate

1. add event listener to common parent
2. determine what element originated the event
3.  the best way is use closest to filter and find the right target 


```javascript
    const clicked = e.target.closest('.operations__tab') 
    if (clicked){
      console.log('clicked tab = ', clicked )
    }
  })

```



## DOM Traversing

select all descendant

- querySelectorAll()/closest() - find descendant/parent
- direct
  - nodes :
    - childNodes/parentNode,
    - previousSibling/nextSibling
    -
  - element:
    - children/parentElement ,
    - firstElementChild/lastElementChild ,
    - previousElementSibling/nextElementSibling
    -

use spread operation to convert HTMLCollection to array
[... elem.children]

dom -10 finish 2023-12-14

## intersectionObserver

## slider
transform
overflow

```css
transform: translateX(100%);
```


## lifeCycle Dom Event
* DOMContentLoaded  - page download, script loaded
  * if script is at the end of page, no need wait to this event 
* 'load' - image and css is looaded
* 'beforeunload'  - before close


```javascript
window.addEventListener('beforeunload', function(e){
  e.preventDefault();
  console.log(e)
  e.returnValue = ''
})
```


## loading js in html


* regular  ``` <script src='script.js' /> ```      - when downloading script, paring html is suspended
* async  ``` <script async src='script.js' /> ```  - when downloading script when parsing html 
  * DOMContentLoaded can happen before script 
  * script order not garante
* defer  ``` <script defer src='script.js' /> ```   - defer the script execution
  * DOMContentLoaded only happen after script loaded and executed
  * script are executed in order

async and defer only for script in head
regular - can be used script in head or end if body


