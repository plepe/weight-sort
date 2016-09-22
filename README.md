Order an array of objects by the key 'weight' (or another key)

## Usage
# NodeJS
```js
var weight_sort = require('weight_sort')
```

# In-Browser
```html
<script src='node_module/weight_sort/weight_sort.js'>
```

## Example
```js
var orig_array = [
  { title: 'A', weight: 5 },
  { title: 'B', weight: 0 }
]
var sorted_array = weight_sort(orig_array)
console.log(sorted_array)
// [
//   { title: 'B', weight: 0 }
//   { title: 'A', weight: 5 },
// ]
```
