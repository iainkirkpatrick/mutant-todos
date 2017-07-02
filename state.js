const Struct = require('mutant/struct')
const marray = require('mutant/array')
const mvalue = require('mutant/value')

module.exports = Struct({
  todos: marray([
    Struct({
      text: mvalue('create a UI builder'),
      completed: mvalue(false)
    }),
    Struct({
      text: mvalue('create a sweet simple testing framework'),
      completed: mvalue(false)
    })
  ])
})
