import {
  ERROR_MESSAGE,
  JOB_DETAIL,
  JOB_FETCH,
  LOADING,
  QUIZ_FETCH,
  SCORE_FETCH,
} from "./actionType";
import Swal from "sweetalert2";
const BASE_URL = "https://sipedlibe-production.up.railway.app";

export const RegisterAdmin = (data) => {
  const { username, email, password, phoneNumber, address } = data;

  return async (dispatch) => {
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
          // throw new Error("gagal post register");
        }
        // console.log(await res.json());
        return res.json();
      })
      .then((data) => {
        // console.log(data.msg);
        if (Array.isArray(data.msg)) {
          throw Error(data.msg);
        }
        dispatch(Swalert("success", "Berhasil Register"));
        return "success";
        // console.log(data);
      })
      .catch((err) => {
        // console.log(err["Error"]);
        // console.log("lontonf");
        dispatch(Swalert("error", err));
        return "error";
      })
      .finally(() =>
        dispatch({
          type: LOADING,
          payload: false,
        })
      );
  };
};
export const PostPoster = (data) => {
  const { urlPoster } = data;

  return async (dispatch) => {
    dispatch({ type: LOADING, payload: true });
    return fetch(BASE_URL + "/poster/postPoster", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({ urlPoster }),
    })
      .then((res) => {
        if (!res.ok) {
          // throw new Error("gagal post register");
        }
        // console.log(await res.json());
        return res.json();
      })
      .then((data) => {
        // console.log(data.msg);
        if (Array.isArray(data.msg)) {
          throw Error(data.msg);
        }
        dispatch(Swalert("success", "Poster Berhasil di tambahkan"));
        return "success";
        // console.log(data);
      })
      .catch((err) => {
        // console.log(err["Error"]);
        // console.log("lontonf");
        dispatch(Swalert("error", err));
        return "error";
      })
      .finally(() =>
        dispatch({
          type: LOADING,
          payload: false,
        })
      );
  };
};
export const PostScore = (data) => {
  const { name, score, quiz } = data;

  return async (dispatch) => {
    dispatch({ type: LOADING, payload: true });
    return fetch(BASE_URL + "/quiz/postScore", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({ name, score, quiz }),
    })
      .then((res) => {
        if (!res.ok) {
          // throw new Error("gagal post register");
        }
        // console.log(await res.json());
        return res.json();
      })
      .then((data) => {
        // console.log(data.msg);
        if (Array.isArray(data.msg)) {
          throw Error(data.msg);
        }
        dispatch(Swalert("success", "Quiz Berhasil di selesaikan"));
        return "success";
        // console.log(data);
      })
      .catch((err) => {
        // console.log(err["Error"]);
        // console.log("lontonf");
        dispatch(Swalert("error", err));
        return "error";
      })
      .finally(() =>
        dispatch({
          type: LOADING,
          payload: false,
        })
      );
  };
};
export const PostQuiz = (quiz, question) => {
  const { title } = quiz;

  console.log(question, quiz, "alohaa");
  return async (dispatch) => {
    dispatch({ type: LOADING, payload: true });
    return fetch(BASE_URL + "/quiz/postQuiz", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({
        title,
        question,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          // throw new Error("gagal post register");
        }
        // console.log(await res.json());
        return res.json();
      })
      .then((data) => {
        // console.log(data.msg);
        if (Array.isArray(data.msg)) {
          throw Error(data.msg);
        }
        dispatch(Swalert("success", "Quiz Berhasil di tambahkan"));
        return "success";
        // console.log(data);
      })
      .catch((err) => {
        // console.log(err["Error"]);
        // console.log("lontonf");
        dispatch(Swalert("error", err));
        return "error";
      })
      .finally(() =>
        dispatch({
          type: LOADING,
          payload: false,
        })
      );
  };
};

export const loginAdmin = (data) => {
  const { email, password } = data;
  return async (dispatch) => {
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
        // console.log("masuk 2");
        if (!res.ok) {
          throw new Error("Email or Password Invalid");
        }
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("username", data.username);
        dispatch(Swalert("success", "Berhasil Login"));
      })
      .catch((err) => {
        // console.log(err, "lo");
        dispatch(Swalert("error", err.message));
      })
      .finally(() =>
        dispatch({
          type: LOADING,
          payload: false,
        })
      );
  };
};

export const fetchJob = () => {
  return (dispatch) => {
    dispatch({ type: LOADING, payload: true });
    fetch(BASE_URL + "/poster/all", {
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
export const fetchQuiz = () => {
  return (dispatch) => {
    dispatch({ type: LOADING, payload: true });
    fetch(BASE_URL + "/quiz/1", {
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
        dispatch({
          type: QUIZ_FETCH,
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
export const fetchScore = () => {
  return (dispatch) => {
    dispatch({ type: LOADING, payload: true });
    fetch(BASE_URL + "/quiz/getScore", {
      method: "GET",
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
        dispatch({
          type: SCORE_FETCH,
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

export const Swalert = (icon, title) => {
  return (dispatch) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: icon,
      title: title,
    });
  };
};
