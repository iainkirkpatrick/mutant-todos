const h = require('mutant/h')
const hyperx = require('hyperx')
const hx = hyperx(h)
const when = require('mutant/when')

const { removeTodo } = require('./transforms')

const styles = require('./styles')

module.exports = function Todo (state) {
  return hx`
    <div style=${styles.todo}>
      <div style=${{
        'display': 'flex',
        'align-items': 'center'
      }}>
        <input
          type="checkbox"
          style=${{ 'margin-right': '10px' }}
          ev-click=${() => { state.completed.set(!state.completed()) }}
        />
        <span
          style=${{
            'color': when(state.completed, '#d9d9d9', 'black'),
            'text-decoration': when(state.completed, 'line-through', 'none')
          }}
        >
          ${state.text}
        </span>
      </div>
      <button ev-click=${() => {
        removeTodo(state)
      }}>X</button>
    </div>
  `
}
