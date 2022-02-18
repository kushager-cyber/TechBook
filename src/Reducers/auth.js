const initialState = [{ userData: "" }];

const setUserData = (state = initialState, action) => {
  switch (action.type) {
    case "SETUSERDATA":
      return { ...initialState, userData: action.data };
    default:
      return state;
  }
};
export default setUserData;
