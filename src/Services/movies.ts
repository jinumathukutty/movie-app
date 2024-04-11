import { Dispatch } from "redux";
import { actions } from "../Store";
import axios from "axios";
import { removeHashFromKeys } from "../Utils/Utils";

export async function getRandomMovies(dispatch: Dispatch, searchString = "") {
  try {
    dispatch(actions.setMovieLoading(true));
    const url =
      searchString === ""
        ? "https://search.imdbot.workers.dev/?q=Niram"
        : `https://search.imdbot.workers.dev/?q=${searchString}`;
    const response = await axios.get(url);

    const data = response?.data;
    const { description, ok } = data;
    if (ok && description.length > 0) {
      const newArray = description.map((obj: { [key: string]: any }) =>
        removeHashFromKeys(obj)
      );
      dispatch(actions.setRandomMovies(newArray));
    } else {
      dispatch(actions.setRandomMovies([]));
    }
    dispatch(actions.setMovieLoading(false));
  } catch (error) {
    dispatch(actions.setRandomMovies([]));
    dispatch(actions.setMovieLoading(false));
  }
}

export async function getMovieDetails(dispatch: Dispatch, id: string) {
  try {
    dispatch(actions.setMovieDetailsLoading(true));
    const response = await axios.get(
      `https://search.imdbot.workers.dev/?tt=${id}`
    );

    const { data, status } = response;
    if (status === 200) {
      dispatch(actions.setMovie(data));
    } else {
      dispatch(actions.setMovie({}));
    }
    dispatch(actions.setMovieDetailsLoading(false));
  } catch (error) {
    dispatch(actions.setMovie({}));
    dispatch(actions.setMovieDetailsLoading(false));
  }
}
