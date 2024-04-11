import { createSlice, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import { State } from "../Utils/commonProps";

const initialState: State = {
  movieLoading: false,
  movieDetailsLoading: false,
  randomMovies: [],
  searchQuery: "",
  movie: {},
};

const slice = createSlice({
  name: "MovieApp",
  initialState,
  reducers: {
    setMovieLoading: (state, action) => {
      state.movieLoading = action.payload;
    },
    setMovieDetailsLoading: (state, action) => {
      state.movieDetailsLoading = action.payload;
    },
    setRandomMovies: (state, action) => {
      state.randomMovies = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
  },
});

const persistConfig = {
  key: "ReactTS",
  version: 1,
  storage,
};

const { reducer, actions } = slice;
const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export { actions };
export const persistor = persistStore(store);
export default store;
