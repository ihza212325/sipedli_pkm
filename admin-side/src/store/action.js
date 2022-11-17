import {
  COMPANY_FETCH,
  ERROR_MESSAGE,
  JOB_DETAIL,
  JOB_FETCH,
  LOADING,
  LOADING_FALSE,
  LOADING_TRUE,
} from "./actionType";

export const fetchJob = () => {
  return (dispatch) => {
    dispatch({ type: LOADING_TRUE });
    fetch("http://localhost:3000/jobs?_expand=company&_expand=user")
      .then((res) => {
        if (!res.ok) {
          throw new Error("fetch error");
        }
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
      .finally(() => dispatch({ type: LOADING_FALSE }));
  };
};

export const fetchCompany = () => {
  return (dispatch) => {
    dispatch({ type: LOADING, payload: true });
    fetch("http://localhost:3000/companies")
      .then((res) => {
        if (!res.ok) {
          throw new Error("fetch gagal");
        }
        return res.json();
      })
      .then((data) => {
        dispatch({
          type: COMPANY_FETCH,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: ERROR_MESSAGE,
          payload: err.message,
        });
      })
      .finally(() => {
        dispatch({
          type: LOADING,
          payload: false,
        });
      });
  };
};
