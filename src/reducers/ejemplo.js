const ejemplo = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state];
    default:
      return state;
  }
  return state;
};

export default ejemplo;
