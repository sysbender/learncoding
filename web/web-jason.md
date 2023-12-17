- web design
- html
- css
- responsive design

# first

- static - stored on server as they are
- dynamic

## vscode

- prettier
- image preview
- color highlight
- auto rename tag
- live server

settings

- default formatter
- auto save - onFocusChange
- format on save - true
- tab size = 2

theme
One Monokai

# html basic

- opening tag
- closing tag
-

## structure

- header
- nav
- article
- aside

## content

text

- strong - instead of b
- em (emphasize)- i

- ol (ordered list)
- li (list)
- ul (unordered list)

image

- attribute : src, alt , width, height
  c

html entity

- `&copy;`

# css basic

css - cascading styles sheets

properties

- selector
- declaration block
  - declaration/style
    - property: value

* inline
* internal
* external

## text property

- font-size
- font-family
- font-style
- font-weight
- text-transform
- text-align
- line-height

- list-style
- text-decoration

## combine selector

- list of select
- decendant selector
-

## color

RGBA notation - rgba(1,2,3, 0.5) ; rgb(0, 255, 0)
hexadecimal notition - #00ff00 , #0f0

grey #000 #444 #b7b7b7 #fff

## pseudo class

- first-child , last-child, nth-child()

## pseudo class for link

- link - (only select a with href)
- visited
- hover
- active

## priority of select

1. declarations marked !important
2. inline style
3. id
4. class
5. element
6. universal selector

## inheritance

not all properties are inherited , ex boder
most of the text related properties are inherited

- font-family/size/weight/style
- color
- line-height
- letter-spacing
- text-aline/transform/shadow
- list-style

## universal selector

- will select all the element - which can add border property that not working with inheritance

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

## box model

- content
- padding
- border
- margin
- visible/fill area = content + padding+border (get filled with bg color/image)

* margin collapse

```css
/*global reset*/
* {
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 20px;
}
li:last-child {
  margin-bottom: 0;
}
```

## dimension

- normal should only specify width/height in css not in html (it will add sth like img[Attributes Style])
- width/height: auto; will reset the ratio that are from element attribute
- width/height: %percent ; of the container

## center the contain on the page

create a container for all content in body
add margin-left and margin-right auto;
margin: 0 auto;

## types of box

- inline box
  - display: inline
  - no line breaks
  - occupy only needed space
  - height and weight not apply
  - padding and marin are applied only horizontally (left and right)
- block level box/element - occupy 100% parent
  - display: block;
- display: inline-block (ex. img )
  - like inline from the outside
    - no line break
    - occupy only content space
  - like block-level on the inside
    - box-model apply as showed (padding and margin)

## positioning mode

- normal flow vs
  - default
  - position: relative ;
- absolute positioning
  - position : absolute
  - top/bottom/left/right - offset to the element from its first relatively positioned container

## pseudo element

- first letter of paragraph - ::first-letter
- first line of paragraph - ::first-line

- adjscece : '+'
- after - ::after
- before - ::before

# layout - float, flexbox, grid

float - old way
flexbox - 1 dimensional row without using float, for component layout
grid - 2 dimensional layout

## float

element height is 0 - collasping
floated element not occupy any space?

flow compare:

- position: relative - normal flow
- position: absolute - out of flow
  - no impact on surrounding element, may overlap
- float : left/right - out of flow
  - text and inline element will wrap around the floated element
  - the container will not ajust its height to the element

### clear float

- not good practice
  add a extra element and set `{clear : left/right//both}`

- clear fix hack
  - add a clearfix to the container (which the height collaps)
  ```css
  .clearfix::after {
    clear: both;
    content: "";
    display: block;
  }
  ```

## flexbox

is a set of related css properties for building 1-dimensional layouts

- space in container can be divided by child elements
- align items
- vertical centering, equal-height columns

* flex container - display: flex;
* flex items
* main aixs, cross axis

### flex container properties

- gap - space between items
- justify-content - align items alone main axis , horizontally by default
- align-items - align items cross axis , vertically by default
- flex-direction - main axis
- flex-wrap - wrap into new line
- align-content - only applies when there are multiple lines (flex-wrap: wrap)

### flex items

- align-self - overwrite align-items
- flex-grow :0
- flex-shrink: 1
- flex-basis: auto - define an item width (instead of the width property)
- flex - recommand shortcut for flex-grow/shrink/basis
- order - first is -1, last is 1

## grid

a set of css properties for building 2-dimensional layouts

terms

- disply : grid
- grid container, grid items
- column axis, row axis
- grid lines , grid cells
- gutters/gaps
- row grid track , column grid track

properties for grid container

- establish the grid row/column tracks
  - (any unit,
    - fr for share unused space
    - auto for take nesseary space
    - ex: repeat(4, 1fr)
  - grid-template-rows: sizes
  - grid-template-columns: sizes
- create empty space between tracks
  - row-gap ,
  - column-gap,
  - gap
- align items rows/columns

  - justify-items : stretch
  - align-items : stretch

- align entire grid inside grid container
  - only applies if container is larger than the grid
  - justify-content: start
  - align-content: start

properties for grid items

- place a grid item to a specific cell
  - grid-column: start_line/ end_line | span number
  - grid-row: start_line/end_line | span number
- overwrite justify/align items
  - justify-self: stretch
  - align-self: stretch

```css
.el--2 {
  grid-column: 1;
  grid-column: 2/4;
  grid-column: 2 / span 2;
  grid-column: 2 / -1;
}
```

# web design frame work - design rule , principle

## typograph

## colors

## images/illustrations

## icons

## shadows

## border-radius

## whitespace

## visual Hierachy

## user experience

## components/layouts

#

```

```
