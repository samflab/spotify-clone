export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //remove after finished developing...
  token: 'BQCuQxPwq6F67ifFDETrU5CPW6QV6GuAvYhmcyRe1SsxlIaFuQtoazYkxh7wSSFtrYbM6HxUdX6z-SrxpGTHn3qtPYl-egKW2bhMjNwFtv_5AGMRsj9DP3eHzl2ITGcQT4fedsv6IUZ-y3W-zngOfOWBE9wXM6IWDeM1-yUWojGmIFQ5',
};

const reducer = (state, action) => {
  console.log(action);

  // action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        }
    default:
        return state;
  }
};

export default reducer;
