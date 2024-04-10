import { Dispatch } from "redux";
import { actions } from "../Store";
import axios from "axios";
import { removeHashFromKeys } from "../Utils/Utils";

export async function getRandomMovies(dispatch: Dispatch) {
  const response = await axios.get(
    "https://search.imdbot.workers.dev/?q=Niram"
  );

  const data = response?.data;
  const { description, ok } = data;
  if (ok && description.length > 0) {
    const newArray = description.map((obj: { [key: string]: any }) =>
      removeHashFromKeys(obj)
    );
    dispatch(actions.setRandomMovies(newArray));
  }
}
