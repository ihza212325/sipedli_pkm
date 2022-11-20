import {
  ERROR_MESSAGE,
  JOB_DETAIL,
  JOB_FETCH,
  LOADING_FALSE,
} from "./actionType";

export const fetchJob = () => {
  return (dispatch) => {
    console.log("ini dari action fetch");
    dispatch({
      type: "loading/true",
    });
    fetch("http://localhost:3000/jobs?_expand=company&_expand=user")
      .then((res) => {
        if (!res.ok) throw new Error("Fetch Error");
        return res.json();
      })
      .then((data) => {
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
      .finally(() =>
        dispatch({
          type: LOADING_FALSE,
        })
      );
  };
};

export const fetchJobDetail = (id) => {
  return (dispatch) => {
    console.log("ini dari action fetch");
    dispatch({
      type: "loading/true",
    });
    fetch(`http://localhost:3000/jobs/${id}?_expand=company&_expand=user`)
      .then((res) => {
        if (!res.ok) throw new Error("Fetch Error");
        return res.json();
      })
      .then((data) => {
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
      .finally(() =>
        dispatch({
          type: LOADING_FALSE,
        })
      );
  };
};

export const postLogin = (e) => {
  e.preventDefault();
  console.log("formLogin");
};
