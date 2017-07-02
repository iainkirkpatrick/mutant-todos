const mvalue = require('mutant/value')
const Struct = require('mutant/struct')

const state = require('./state')

module.exports = {
  addTodo: (todoText) => {
    state.todos.push(Struct({
      text: mvalue(todoText),
      completed: false
    }))
  },
  removeTodo: (todo) => {
    let i = state.todos.indexOf(todo)
    state.todos.deleteAt(i)
  }
}

// module.exports = function (arr) {
//   return {
//     addTodo: (arr, todo) => {
//       arr.push(mvalue(todo))
//     },
//     removeTodo: (arr, todo) => {
//       let i = arr.indexOf(todo)
//       arr.splice(i, 1)
//     }
//   }
// }