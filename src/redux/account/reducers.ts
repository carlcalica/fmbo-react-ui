import actions from "./actions";

// Define action types
interface Action {
  type: string;
  payload?: any; // Adjust the payload type according to your needs
}

// Define reducer state type
interface State {
  // Define your state shape here
}

const initialState: State = {
  // Initial state values
};

// Reducer function
export default function methodReducers(
  state: State = initialState,
  action: Action
): State {
  switch (action.type) {
    case actions.CLEAN_UP:
      return initialState;
    case actions.SET_STATE:
      if (action.payload) {
        return { ...state, ...action.payload };
      }
      return state; // If no payload, return current state
    default:
      return state;
  }
}
