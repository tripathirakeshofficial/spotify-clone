export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  //"BQB0unu7GlfwKrWexS18Sgd87_j_ktVx7896fi2dvU7zf1__dZIX_y3WAnvjd-rjgBaGvdPQ7Ahyyj7bXc8DVc1OPvFNQRlq4Jkd-GgUlqLbD-mjcUqmcoHEnQAQsHfEXu12zF4W96F3ar5QKOn5aA1jkZiJ2gXoCmGDbttuTRLX-HyE",
};

const reducer = (state, action) => {
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
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
