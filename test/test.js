var assert = require('assert')
var weight_sort = require('../weight_sort')
var input = [
  { name: 'Alice',  weight: 62.5, height: 160 },
  { name: 'Bob',    weight: 77.0, height: 180 },
  { name: 'Charly', weight: 82.5, height: 180 },
  { name: 'Debby',  weight: 62.5, height: 165 },
  { name: 'Earl',   weight: 80.0, height: 185 }
]

describe('weight_sort - standard, using objects', function() {
  it('sort, default ("weight" are numericals)', function() {
    var arr = weight_sort(input)

    assert.deepEqual([
      { name: 'Alice',  weight: 62.5, height: 160 },
      { name: 'Debby',  weight: 62.5, height: 165 },
      { name: 'Bob',    weight: 77.0, height: 180 },
      { name: 'Earl',   weight: 80.0, height: 185 },
      { name: 'Charly', weight: 82.5, height: 180 }
    ], arr)

    return true
  })

  it('sort, key "height" (which are integers)', function() {
    var arr = weight_sort(input, 'height')

    assert.deepEqual([
      { name: 'Alice',  weight: 62.5, height: 160 },
      { name: 'Debby',  weight: 62.5, height: 165 },
      { name: 'Bob',    weight: 77.0, height: 180 },
      { name: 'Charly', weight: 82.5, height: 180 },
      { name: 'Earl',   weight: 80.0, height: 185 }
    ], arr)

    return true
  })
})
