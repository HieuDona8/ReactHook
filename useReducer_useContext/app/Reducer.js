export const initState = {
  array: ['Android', 'IOS', 'NodeJS'],
  isAdding: false,
}

export const actionType = {
  ADD_ITEM : 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  TOGGLE_IS_ADDING: 'TOGGLE_IS_ADDING',
}

export const reducer = (state = initState, action)=>{
  switch (action.type) {
    case 'ADD_ITEM':      
      return {...state, array: [...state.array, action.item]};      
    case 'REMOVE_ITEM':
      return {...state, array: state.array.filter((e,i)=>{
        return i!=action.index;
      })}
    case 'TOGGLE_IS_ADDING':
      return {...state, isAdding: !state.isAdding };
    default:
      return state;
  }
}