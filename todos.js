const h = require('mutant/h')
const hyperx = require('hyperx')
const hx = hyperx(h)

const map = require('mutant/map')

const Todo = require('./todo')

module.exports = function Todos (state) {
  return hx`
    <div style=${{ 'display': 'flex', 'flex-direction': 'column', 'width': '550px' }}>
      ${map(state, (todo) => {
        return Todo(todo)
      })}
    </div>
  `
}
