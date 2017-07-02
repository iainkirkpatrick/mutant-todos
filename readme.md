# mutant-todos

a minimal todos app with mutant

has evolved into a few simple ideas:
- write a 'component' as a function that takes state
- each component only takes the state it needs for rendering
- 'transforms' (i.e. action + reducer) are pre-loaded with the initial state, and each transform changes the state somehow (a transform may take arguments from a component)


questions:
- how to do routing?
  - mikey
    @iainkirkpatrick i don't think he has any routing module that plugs into `window.history` like `sheet-router`, but in general i'd say the solution is your current path is an observable and you have an observable which listen to that and dispatches to whatever page observable that route corresponds to, and then you plug that observable into the dom. (edited)