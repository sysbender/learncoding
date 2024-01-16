## layout

page layout
component layout

## float

3 situation

1. float the text around image
2. contain the floated image in a container
3. create columns

```css
.clsname {
  float: left;
}
```

the element won't affect other element

### collapse height and clear

collapse height - if all children are floated

clear and clearfix hack - need a block element to clear

```css
/* create a empty div to clear float. */
.clear {
  clear: left|right|both;
}

/* use pseudo element to clear */

.clearfix::after {
  clear: both;
  content: "";
  display: block;
}
```

#### clear fix

to make the container extends to the float element :

```css
.container {
  overflow: auto;
  display: flow-root;
}
```

## flex box

## grid
