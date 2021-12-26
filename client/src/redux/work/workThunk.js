import axios from "axios";
import { getWork, getErrors } from "./workActions";

export const getProjects = () => (dispatch) => {
  axios
    .get("/api/work")
    .then((res) => {
      dispatch(getWork(res.data));
    })
    .catch((err) => {
      dispatch(getErrors("err.response.statusText", "err.response.status"));
    });
};
