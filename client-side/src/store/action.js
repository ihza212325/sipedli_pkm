import { ERROR_MESSAGE, JOB_DETAIL, JOB_FETCH, LOADING } from "./actionType";
const BASE_URL = "http://localhost:3000";

export const fetchJob = () => {
  return (dispatch) => {
    dispatch({ type: LOADING, payload: true });
    fetch(BASE_URL + "/pub", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("fetch error");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        dispatch({
          type: JOB_FETCH,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({
          type: ERROR_MESSAGE,
          payload: err.message,
        })
      )
      .finally(() => dispatch({ type: LOADING, payload: false }));
  };
};

export const fetchDetailJob = (id) => {
  console.log("lontongggggg");
  return (dispatch) => {
    dispatch({ type: LOADING, payload: true });
    fetch(BASE_URL + "/pub/" + id, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // access_token: localStorage.getItem("access_token"),
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("fetch error");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        dispatch({
          type: JOB_DETAIL,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({
          type: ERROR_MESSAGE,
          payload: err.message,
        })
      )
      .finally(() => dispatch({ type: LOADING, payload: false }));
  };
};
