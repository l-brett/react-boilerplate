const setTitleType =  'CONFIG:SET_TITLE';

const setTitle = (title) => ({
  type: setTitleType,
  title
});


const ConfigDefaultState = {
  title: 'React Boilerplate!'
};
const config = (state = ConfigDefaultState, action) => {
  switch (action.type) {
    case setTitleType:
      return { title: action.title };
    default:
      return state;
  }
};

export {
  config,
  setTitle
}