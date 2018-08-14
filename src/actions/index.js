export const addInput = text => {
  return {
    type: 'ADD_INPUT',
    input: text
  }
}

export const addToDo = text => {
  return {
    type: 'ADD_TO_DO',
    input: text
  }
}

export const clearAll = text => {
  return {
    type: 'CLEAR_ALL'
  }
}