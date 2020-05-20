export default function navigation(state, action) {
    switch (action.type) {
      case "SET_HEADER":
        const empty = () => {};
        return {
          ...state,
          centerElement: action.centerElement || "",
          leftElement: action.leftElement|| "",
          rightElement: action.rightElement || {},
          onLeftElementPress: action.onLeftElementPress || empty,
          onRightElementPress: action.onRightElementPress || empty
        };
      default:
        return state;
    }
  }