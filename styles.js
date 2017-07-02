const containerColumn = {
  'display': 'flex',
  'flex-direction': 'column'
}

const containerColumnCentered = Object.assign({}, containerColumn, {
  'height': '100vh',
  'align-items': 'center',
  'background': '#f5f5f5',
  'font-family': 'Helvetica Neue, Helvetica, Arial, sans-serif'
})

const heading = {
  'margin': 0,
  'font-size': '100px',
  'font-weight': '100',
  'line-height': '1.4em',
  'color': 'rgba(175, 47, 47, 0.15)'
}

const todo = {
  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'space-between',
  'background': 'white',
  'padding': '15px',
  'font-weight': 100,
  'font-size': '24px',
  'border-bottom': 'solid rgb(237, 237, 237) 1px'
}

const addTodo = Object.assign({}, todo, {
  'width': '470px',
  'border': 'none',
  'padding': '15px 40px',
  'outline': 'none'
})

module.exports = {
  containerColumn,
  containerColumnCentered,
  heading,
  todo,
  addTodo
}
