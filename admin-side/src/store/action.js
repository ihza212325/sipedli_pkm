// import { useNavigate } from "react-router-dom";

import {
  COMPANY_FETCH,
  ERROR_MESSAGE,
  JOB_DETAIL,
  JOB_FETCH,
  LOADING,
  LOADING_FALSE,
  LOADING_TRUE,
  LOGIN,
} from "./actionType";
const BASE_URL = "http://localhost:3000";

export const fetchJob = () => {
  return (dispatch) => {
    dispatch({ type: LOADING_TRUE });
    fetch(BASE_URL + "/jobs", {
      method: "GET",
      headers: {
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
      .finally(() => dispatch({ type: LOADING_FALSE }));
  };
};

export const fetchCompany = () => {
  return (dispatch) => {
    dispatch({ type: LOADING, payload: true });
    fetch(BASE_URL + "/company", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
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

export const loginAdmin = (data) => {
  const { email, password } = data;

  return (dispatch) => {
    dispatch({ type: LOADING, payload: true });
    return fetch(BASE_URL + "/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("gagal post login");
        }
        return res.json();
      })
      .then((data) => {
        // console.log("berhasil");
        // console.log(data);
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("username", data.username);
        dispatch({
          type: LOGIN,
          payload: true,
        });
        // navigate("/home");
      })
      .catch((err) => console.log(err))
      .finally(() =>
        dispatch({
          type: LOADING,
          payload: false,
        })
      );
  };
};

export const RegisterAdmin = (data) => {
  const { username, email, password, phoneNumber, address } = data;

  return (dispatch) => {
    dispatch({ type: LOADING, payload: true });
    return fetch(BASE_URL + "/users/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({ username, email, password, phoneNumber, address }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("gagal post register");
        }
        return res.json();
      })
      .then((data) => {
        // console.log("berhasil");
        // console.log(data);
        // dispatch({
        //   type: LOGIN,
        //   payload: true,
        // });
        // navigate("/home");
        console.log(data);
      })
      .catch((err) => console.log(err))
      .finally(() =>
        dispatch({
          type: LOADING,
          payload: false,
        })
      );
  };
};

export const AddJob = (formAdd, FormSkill) => {
  console.log(formAdd);
  console.log(FormSkill);
  return (dispatch) => {
    fetch(BASE_URL + "/jobs", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({ formAdd, FormSkill }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("post job error");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
};
