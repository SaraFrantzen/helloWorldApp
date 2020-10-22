const initialState = {
  mainPageGreeting: "EY YO from mainpage!",
  secondPageGreeting: {
    title: "Hello second page!",
    body: "I think this is redicilous, and i dont care about my spelling",
  },
};

const rootReducer = (state = initialState) => {
  return state;
};

export default rootReducer;
