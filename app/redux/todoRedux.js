const types = {
    ADD_ITEM: 'ADD_ITEM',
    CHECK_ITEM: 'CHECK_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
  }
  
  export const actionCreators = {
    addItem: (item) => {
      return {
        type: types.ADD_ITEM,
        payload: item
      }
    },
    checkItem: (index) => {
      return {
        type: types.CHECK_ITEM,
        payload: index
      }
    },
    removeItem: (index) => {
      return {
        type: types.REMOVE_ITEM,
        payload: index
      }
    },
  }
  
  const initialState = {
    items: [
      {label: "Test 1", completed: false},
      {label: "Test 2", completed: true},
      {label: "Test 3", completed: true},
    ],
  }
  
  export const reducer = (state = initialState, action) => {
    const { type, payload } = action
    const { items } = state
  
    switch(type) {
      case types.ADD_ITEM: {
        return {
          ...state,
          items: [{label: payload, completed: false}, ...items],
        }
      }
      case types.CHECK_ITEM: {
        return {
          ...state,
          items: items.map((item, i) => {
            if (i === payload) {
              return item = {label: item.label, completed: !item.completed}
            } else {
              return item
            }
          }),
        }
      }
      case types.REMOVE_ITEM: {
        return {
          ...state,
          items: items.filter((item, i) => i !== payload),
        }
      }
      default: {
        return state
      }
    }
  }