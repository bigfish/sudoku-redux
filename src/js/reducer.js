
const reducer = (state, action) => {

    let newVal = action.val;

    if (!action.val) {
      newVal = 0;
    }

    newVal = parseInt(newVal);

    let newState = state;

    if (action.type === 'SET_VALUE') {
      newState = {
        data: state.data.setIn([action.row, action.col], newVal)
      };

    }

    return newState;

};

export default reducer;
