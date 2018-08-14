export default (state, action) => {
  switch (action.type) {
    case 'ADD_INPUT':
      return {...state, input: action.input};
    case 'ADD_TO_DO':
      if (action.input) {
        return {...state, list: [...state.list, action.input], input: ''};
      } else {
        return state;
      }
    case 'CLEAR_ALL':
      return {...state, list: [], input: ''}
    default:
      return state;
  }
}