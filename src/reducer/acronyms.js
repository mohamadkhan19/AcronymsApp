export default function acronyms(state, action) {
  switch (action.type) {
    case 'SET_ACRONYMS':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
