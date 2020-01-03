const initState = {
  selectedKey: {},
  navigationTabs: []
}
const cacheMenu = (state = initState, action) => {
  switch (action.type) {
    case 'changeSelectedKey':
      return {
        ...state,
        ...{
          selectedKey: action.payload
        }
      }
    case 'changeNavigationTabs':
      return {
        ...state,
        ...{
          navigationTabs: action.payload
        }
      }
    default:
      return state;
  }
}
export default cacheMenu