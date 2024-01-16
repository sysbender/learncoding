## css fundamental

css rule

- selector
- declaration block
  - declaration
    - property
    - value

### text style

- color
- font-size
- font-family : sans-serif;
- text-transform : uppercase;
- font-style: italic;
- text-align: center; // in the parent
- line-height: 1.5;

### combine selectors

```css
h1,
h2,
h3 {
}

footer p {
}
```

descendant selector: space

### class and ID selector

### Pseudo class and hyperlinks

best to use on the situation that all child are the same element

- first-child, last-child,
- nth-child(even/odd)
- nth-child(n)

```css
article p:first-child {
  color: red;
}
```

if the first child element of article is not a <p>, then this will select nothing

```css
a {
  /* selected even an element without href */
}

a:link {
  /* only select a with href */
  text-decoration: none;
}

a:visited {
}

a:hover {
  text-decoration: underline dotted red;
}
a:active {
  background-color: orange;
}
```

link pseudo class should always defined the same order
LVHA - Link, visited, hover, active

in devtool, we can fake those pseudo class:

## css theory

### 1 - conflict between selector

-1. declarations marked !important 0. inline style

1. ID(#) - if multiple , last selector
2. class(.) , pseudo-class(:)
3. element selector (p, div, li ...)
4. universal selection (`*`)

### 2 - inheritance and Universal selector

- not all property will be inherited by child element,
- most of them are text related:
  - font-family, font-size, font-weight, font-style
  - color
  - line-height
  - letter-spacing
  - text-align, text-transform, text-shadow
  - list-style

we can put property in body , so every element will inherit those style rule
for those property that not being inherited, we can use universal selector, which will select every element
for example : border-top

### 3 - the CSS box model

- fill area -
  - content - text, image
  - border
  - padding
- margin

short hand

```css
 {
  padding-top: 50px;
  padding-bottom: 50px;

  /* same as */
  padding: 50px 0;
}
```

last item

```css
li {
  margin-bottom: 10px;
}
li:last-child {
  margin-bottom: 0;
}
```

reset css - default margin and padding

```css
* {
  margin: 0;
  padding: 0;
}
```

collapse margins: two adjacent margin not added up.
create space between items - use margin bottom

#### dimension - height, width

default box model behavior:

size = specified width + padding + border

#### image

width/height:

- 50% ; percentage of the parent container
- auto ; get from html dimension when specified

in css , if only specify one of width/height, the other one will adapt automatically
specify the size it in css (instead of html)

#### center the page

put all content into a container , and specify width to the container

```css
.container {
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  /*  same as  */
  margin: 0 auto;
}
```

### 4 - types of boxes

` displaly : block`

- inline :
  - occupy space as necessary
  - height and width do not apply
  - padding and margins are applied only horizontally
  - a (anchor), img, strong, em, button ...
- block level :

  - line break

- inline-block

  - looks line inline from the outside , no line-break
  - behaves like block-level from the inside , margin and padding apply

  notes:
  for inline element :

- margin and padding : will not create vertical space
- padding , the background will show that the padding is applied , but not add space
- margin - the devtool show that the margin is applied, but did't create space visually

### 5 - absolute positioning

- normal flow - position: relative
- absolute positioning - position: absolute
  - lose effect to the surrounding element
  - use top, bottom, left, right to offset to its relatively positioned container
  - by default , position relative to viewport

### pseudo element ::

- pseudo class - : one colon
- pseudo element - :: two colon

- first letter
- first line of paragraph

```css
h2::first-letter {
  font-size: 80px;
}
```

- adjacent sibling : '+'
- after : '::after'
- before : '::before'

```css
h1::after {
  content: "TOP";
}
```

### box-sizing: border-box

put it in universal selector

```css
* {
  box-sizing: border-box;
}
```
