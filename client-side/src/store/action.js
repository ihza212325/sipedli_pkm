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
          type: "jobs/fetchsuccess",
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({
          type: "error",
          payload: err.message,
        })
      )
      .finally(() =>
        dispatch({
          type: "loading/false",
        })
      );
  };
};
