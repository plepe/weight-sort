var assert = require('assert')
var weight_sort = require('../weight_sort')

describe('weight_sort - standard, using objects', function() {
  it('sort', function() {
    var arr = weight_sort([
      { title: 'A', weight: 0 },
      { title: 'B', weight: 5 },
      { title: 'C', weight: -2 }
    ])
    assert([
      { title: 'C', weight: -2 },
      { title: 'A', weight: 0 },
      { title: 'B', weight: 5 }
    ], arr)


    return true
  })
})
