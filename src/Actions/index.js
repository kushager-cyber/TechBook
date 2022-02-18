export const setTheData = (value) => {
  return {
    type: "SETUSERDATA",
    data: value,
  };
};
export const showData = (value) => {
  return {
    type: "SHOWUSERDATA",
    data: value,
  };
};
