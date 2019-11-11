const redux = require('redux');

const mangReducer = (state = ['Androi','IOS','NodeJS'], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.item];
    case 'REMOVE_ITEM':
      return state.filter((e,i)=>{
        return i!=action.index;
      })
    default:
      return state;
  }
}

const isAddingReducer = (state = false, action) => {
    switch (action.type) {
    case 'TOGGLE_IS_ADDING':
      return !state;
    default:
      return state;
  }
}

const reducer = redux.combineReducers({
  mang: mangReducer,
  isAdding: isAddingReducer
})

const store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// store.subscribe( ()=> {
//     console.log("Change", store.getState());
//     const str = store.getState();
//     document.getElementById("p-detail").innerHTML = JSON.stringify(str);
//   }
// );

module.exports = store;