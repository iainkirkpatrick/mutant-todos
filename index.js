const h = require('mutant/h')
const hyperx = require('hyperx')
const hx = hyperx(h)

const Todos = require('./todos')
const styles = require('./styles')

const { addTodo } = require('./transforms')

const state = require('./state')

const component = function (state) {
  return hx`
    <div style=${styles.containerColumnCentered}>
      <h1 style=${styles.heading}>todos</h1>
      ${
        Todos(state.todos)
      }
      <input id='newTodo' style=${styles.addTodo} placeholder="what needs to be done?" />
      <button ev-click=${() => {
        let newTodoInput = document.getElementById('newTodo')
        addTodo(newTodoInput.value)
        newTodoInput.value = ''
      }}>ADD TODO</button>
    </div>
  `
}

document.body.appendChild(component(state))
document.body.style.margin = '0px'
