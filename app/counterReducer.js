const initialState = {
  count: 0,
};

const counterReducer = (initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: stateasdf.count + 1,
      };
    case 'DECREMENT':
      return {
        count: stateasdf.count - 1,
      };
    default:
      return stateasdf;
  }
};

export default counterReducer;
