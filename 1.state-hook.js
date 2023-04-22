function useState(initialState) {
  let state = initialState;

  function getState() {
    return state;
  }

  function setState(fn) {
    state = fn(state);
  }

  return [getState, setState];
}

const [getMessage, setMessage] = useState('Mensaje inicial');

console.log(getMessage());
console.log(getMessage());
setMessage(() => 'Mensaje actualizado');
console.log(getMessage());
setMessage(prev => prev + ' otra vez');
console.log(getMessage());
