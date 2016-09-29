var assert = require('assert')
var weightSort = require('../weightSort')
var input = [
  { name: 'Alice',  weight: 62.5, height: 160 },
  { name: 'Bob',    weight: 77.0, height: 180 },
  { name: 'Charly', weight: 82.5, height: 180 },
  { name: 'Debby',  weight: 62.5, height: 165 },
  { name: 'Earl',   weight: 80.0, height: 185 }
]

describe('weightSort - standard, using objects', function() {
  it('sort, default ("weight" are numericals)', function() {
    var arr = weightSort(input)

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
    var arr = weightSort(input, 'height')

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
