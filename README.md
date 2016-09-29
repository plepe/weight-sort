Order an array of objects by the key 'weight' (or another key)

# Usage
## NodeJS
```js
var weightSort = require('weight-sort')
```

## In-Browser
```html
<script src='node_module/weight-sort/weight_sort.js'>
```

## PHP
```php
include "path/to/weight_sort.php";
```

# SYNOPSIS
arr = weightSort(input, [key])

Sort the input array by the key 'weight' or the key specified as second
parameter. Returns the sorted array, the original array will not be changed.

If there are several entries with the same weight, the original order will
remain.

# Example
```js
var origArray = [
  { name: 'Alice',  weight: 62.5, height: 160 },
  { name: 'Bob',    weight: 77.0, height: 180 },
  { name: 'Charly', weight: 82.5, height: 180 },
  { name: 'Debby',  weight: 62.5, height: 165 },
  { name: 'Earl',   weight: 80.0, height: 185 }
]
var sortedArray = weightSort(origArray, 'height')
console.log(sortedArray)
// [
//    { name: 'Alice',  weight: 62.5, height: 160 },
//    { name: 'Debby',  weight: 62.5, height: 165 },
//    { name: 'Bob',    weight: 77.0, height: 180 },
//    { name: 'Charly', weight: 82.5, height: 180 },
//    { name: 'Earl',   weight: 80.0, height: 185 }
// ]
```
