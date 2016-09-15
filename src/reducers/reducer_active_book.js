// All reducers take two arguments, state and action.
// State argument is not application state, only the state this reducer
// is responsible for.
// Called when action is called in app
export default function(state = null, action) {
	switch(action.type) {
		case 'BOOK_SELECTED':
			// ALWAYS return a fresh object, do not alter another object
			return action.payload;
	}
	return state;
}
