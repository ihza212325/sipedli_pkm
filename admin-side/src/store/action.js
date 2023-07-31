// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import {
  COMPANY_FETCH,
  ERROR_MESSAGE,
  JOB_FETCH,
  LOADING,
  LOADING_FALSE,
  LOADING_TRUE,
  LOGIN,
} from "./actionType";
const BASE_URL = "http://localhost:3000";

export const fetchJob = () => {
  console.log("masuk ini");
  return (dispatch) => {
    dispatch({ type: LOADING_TRUE });
    fetch(BASE_URL + "/poster/all", {
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
        if (!res.ok) {
          throw new Error("Email or Password Invalid");
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
        dispatch(Swalert("success", "Berhasil Login"));

        // navigate("/home");
      })
      .catch((err) => {
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

export const AddJob = (formAdd, FormSkill) => {
  // console.log(formAdd);
  // console.log(FormSkill);
  return async (dispatch) => {
    dispatch({ type: LOADING_TRUE });
    return fetch(BASE_URL + "/jobs", {
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
          // throw new Error("post job error");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        if (Array.isArray(data.msg)) {
          throw Error(data.msg);
        }
        dispatch(Swalert("success", "Berhassil Add Job"));
        dispatch(fetchJob());
        return "success";
      })
      .catch((err) => {
        dispatch(Swalert("error", err));
        return "error";
      })
      .finally(() => dispatch({ type: LOADING_FALSE }));
  };
};

export const EditJobs = (formEdit, FormSkillEdit, id) => {
  // console.log("momo");
  return async (dispatch) => {
    dispatch({ type: LOADING_TRUE });
    return fetch(BASE_URL + "/jobs/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({ formEdit, FormSkillEdit }),
    })
      .then((res) => {
        if (!res.ok) {
          // throw new Error("fetch error");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        if (Array.isArray(data.msg)) {
          throw Error(data.msg);
        }
        dispatch(Swalert("success", "Berhassil Add Job"));
        dispatch(fetchJob());
        return "success";
      })
      .catch((err) => {
        // console.log("masuk sini");
        dispatch(Swalert("error", err));
        return "error";
      })
      .finally(() => dispatch({ type: LOADING_FALSE }));
  };
};
export const DeleteJob = (id) => {
  // console.log("momo");
  return async (dispatch) => {
    dispatch({ type: LOADING_TRUE });
    return fetch(BASE_URL + "/jobs/" + id, {
      method: "DELETE",
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
        // console.log("berhasil delete");

        dispatch(fetchJob());
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

export const AddCompany = (data) => {
  const { name, companyLogo, location, email, description } = data;

  return async (dispatch) => {
    dispatch({ type: LOADING, payload: true });
    return fetch(BASE_URL + "/company", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({ name, companyLogo, location, email, description }),
    })
      .then((res) => {
        if (!res.ok) {
          // throw new Error("gagal post register");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        if (Array.isArray(data.msg)) {
          throw Error(data.msg);
        }
        dispatch(Swalert("success", "Berhassil Add Company"));
        dispatch(fetchCompany());
        // dispatch(fetchJob());
        return "success";
      })
      .catch((err) => {
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
export const EditCompany = (data, id) => {
  const { name, companyLogo, location, email, description } = data;

  return (dispatch) => {
    dispatch({ type: LOADING, payload: true });
    return fetch(BASE_URL + "/company/" + id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({ name, companyLogo, location, email, description }),
    })
      .then((res) => {
        if (!res.ok) {
          // throw new Error("gagal post register");
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data.msg)) {
          throw Error(data.msg);
        }
        dispatch(Swalert("success", "Berhassil Edit Company"));
        dispatch(fetchCompany());
        // dispatch(fetchJob());
        return "success";
      })
      .catch((err) => {
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

export const DeleteCompany = (id) => {
  // console.log("momo");
  return async (dispatch) => {
    dispatch({ type: LOADING_TRUE });
    return fetch(BASE_URL + "/company/" + id, {
      method: "DELETE",
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
        // console.log("berhasil delete");
        // fetchJob();
        // console.log("<<<<<<<<<<<<");
        // dispatch({
        //   type: JOB_DETAIL,
        //   payload: data,
        // });
        dispatch(fetchCompany());
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
