const initialState = {
  projects: [],
  loading: true,
  error: {},
};

const workReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_WORK":
      return {
        ...state,
        projects: payload,
        loading: false,
      };
    case "GET_ERROR":
      return {
        ...state,
        error: payload,
        loading: false,
        projects: null,
      };
    default:
      return state;
  }
};

export default workReducer;
