var assert = require('assert')
var weightSort = require('../weightSort')
var input = [
  { name: 'Alice',  weight: 62.5, height: 160 },
  { name: 'Bob',    weight: 77.0, height: 180 },
  { name: 'Charly', weight: 82.5, height: 180 },
  { name: 'Debby',  weight: 62.5, height: 165 },
  { name: 'Earl',   weight: 80.0, height: 185 }
]
var inputFun = [
  { name: 'Alice',  grade: function () { return 'B' } },
  { name: 'Bob',    grade: function () { return 'C' } },
  { name: 'Charly', grade: function () { return 'A' } }
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

  it('sort, key "name" (which is a string)', function() {
    var arr = weightSort(input, 'name')

    assert.deepEqual([
      { name: 'Alice',  weight: 62.5, height: 160 },
      { name: 'Bob',    weight: 77.0, height: 180 },
      { name: 'Charly', weight: 82.5, height: 180 },
      { name: 'Debby',  weight: 62.5, height: 165 },
      { name: 'Earl',   weight: 80.0, height: 185 }
    ], arr)

    return true
  })

  it('sort, key "height" via options object', function () {
    var arr = weightSort(input, {
      key: 'height'
    })

    assert.deepEqual([
      { name: 'Alice',  weight: 62.5, height: 160 },
      { name: 'Debby',  weight: 62.5, height: 165 },
      { name: 'Bob',    weight: 77.0, height: 180 },
      { name: 'Charly', weight: 82.5, height: 180 },
      { name: 'Earl',   weight: 80.0, height: 185 }
    ], arr)

    return true
  })

  it('sort, with empty options object', function () {
    var arr = weightSort(input, {
    })

    assert.deepEqual([
      { name: 'Alice',  weight: 62.5, height: 160 },
      { name: 'Debby',  weight: 62.5, height: 165 },
      { name: 'Bob',    weight: 77.0, height: 180 },
      { name: 'Earl',   weight: 80.0, height: 185 },
      { name: 'Charly', weight: 82.5, height: 180 }
    ], arr)

    return true
  })

  it('sort, with alternative compareFunction', function () {
    var arr = weightSort(input, {
      key: 'height',
      compareFunction: function (a, b) {
        // closest to 179
        return Math.abs(a - 179) < Math.abs(b - 179) ? -1 : 1
      }
    })

    assert.deepEqual([
      { name: 'Bob',    weight: 77.0, height: 180 },
      { name: 'Charly', weight: 82.5, height: 180 },
      { name: 'Earl',   weight: 80.0, height: 185 },
      { name: 'Debby',  weight: 62.5, height: 165 },
      { name: 'Alice',  weight: 62.5, height: 160 }
    ], arr)

    return true
  })

  it('sort, key "grade" (which is a function returning strings)', function() {
    var arr = weightSort(inputFun, 'grade')

    assert.deepEqual(arr, [ inputFun[2], inputFun[0], inputFun[1] ])

    return true
  })

  it('sort, key is a function, returning height', function() {
    var arr = weightSort(input, {
      key: function (ob) {
        console.log('here')
        return ob.height
      }
    })

    assert.deepEqual(arr, [
      { name: 'Alice',  weight: 62.5, height: 160 },
      { name: 'Debby',  weight: 62.5, height: 165 },
      { name: 'Bob',    weight: 77.0, height: 180 },
      { name: 'Charly', weight: 82.5, height: 180 },
      { name: 'Earl',   weight: 80.0, height: 185 }
    ])

    return true
  })
})
