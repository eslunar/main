PlayScript - Element Queries
---
The `Element` API provides very powerful query tools to find vague to highly specified children, it uses the parent element as a scope to search for matching children.

###### Syntax:
```javascript
//get the first match
Element.query({ QueryObject })
//get all matches
Element.queryAll({ QueryObject })
```

###### Example:
```javascript
const div = new Element(`
<div>
<p class="bold">hello</p>
<div class="bold">hi</div>
<p id="text" style="color:blue">how <span>you</span></p>
</div>
`)

div.query({id:"text"})//gets an element with id text
div.queryAll({class:/bold/})//all elements with class bold
div.query({text:"hello"})//element with inner text "hello"
div.queryAll({parent:{css:{color:true},root:{tag:"div"}}})//all elements that are direct children of elements that are colored and whose root element is a "div"
```

Queries are infinitely nestable and use booleans for truthy matches, RegExp for specified matches and strings for direct matches. They return an element or an array of elements respectively.

---
### Methods
- `id` - type:match, check id attribute.
- `tag` - type:match, check tag name.
- `attr` - type:object, key value pairs of attributes to match.
- `css` - type:object, key value pairs of css to match.
- `text` - type:match, check text content match.
- `html` - type:match, check html content match
- `parent` - type:query, match direct parent.
- `ancestor` - type:query, match all acsending parents.
- `child` - type:query, match direct children.
- `descendant` - type:query, match all descending children.
- `root` - type:query, match the last ancestor that doesnt have a parent.
