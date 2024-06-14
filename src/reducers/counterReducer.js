// Define the counterReducer function which takes the current state and an action
const counterReducer = (state, action) => {
  // Switch statement to handle different action types
  switch (action.type) {
    // Increment the count in the state when the action type is 'INCREMENT'
    case 'INCREMENT':
      return { count: state.count + 1 };
    // Decrement the count in the state when the action type is 'DECREMENT'
    case 'DECREMENT':
      return { count: state.count - 1 };
    // If the action type is not recognized, return the current state
    default:
      return state;
  }
};

export default counterReducer; // Exporting the counterReducer function as the default export
