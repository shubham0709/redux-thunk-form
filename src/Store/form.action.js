import axios from "axios";
import { REGISTER } from "./form.actionTypes";

export const addForm = (form) => (dispatch) => {
  axios
    .post(
      "https://github.com/masai-school/api-mocker/wiki/auth/register",
      {form}
    )
    .then((res) => {
      dispatch({ type: REGISTER, payload: res.data.token });
    });
};
