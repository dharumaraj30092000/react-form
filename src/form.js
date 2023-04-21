import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Form = () => {
  // const [getUser] = useSearchParams();
  // const [id, setId] = useState("");
  // const [name, setName] = useState("");
  // const [batch, setBatch] = useState("");
  // const [branch, setBranch] = useState("");
  // const [obj, setObject] = useState(
  //   JSON.parse(localStorage.getItem("user")) || []
  // );

  // useEffect(() => {
  //   if (parseInt(getUser.get("id")) !== undefined) {
  //     let checkUser = JSON.parse(localStorage.getItem("user"));
  //     let updateUser = checkUser.filter((value) => {
  //       return parseInt(value.id) === parseInt(getUser.get("id"));
  //     });
  //     updateUser.map((val) => {
  //       return (
  //         setId(val.id),
  //         setName(val.name),
  //         setBatch(val.batch),
  //         setBranch(val.branch)
  //       );
  //     });
  //   }
  // }, [getUser]);

  // let handleForm = (e) => {
  //   if (e.target.name === "id") {
  //     setId(parseInt(e.target.value));
  //   }
  //   if (e.target.name === "name") {
  //     setName(e.target.value);
  //   }
  //   if (e.target.name === "batch") {
  //     setBatch(e.target.value);
  //   }
  //   if (e.target.name === "branch") {
  //     setBranch(e.target.value);
  //   }
  // };

  // let formSubmit = (event) => {
  //   event.preventDefault();
  //   if (parseInt(getUser.get("id"))) {
  //     let newObj = {
  //       id: id,
  //       name: name,
  //       batch: batch,
  //       branch: branch,
  //     };
  //     let getUserData = JSON.parse(localStorage.getItem("user"));
  //     let updateUserArray = getUserData.map((value) => {
  //       return value.id === parseInt(getUser.get("id"))
  //         ?  newObj
  //         : value;
  //     });
  //     localStorage.setItem("user", JSON.stringify(updateUserArray));
  //   } else {
  //     let newObj = {
  //       id: id,
  //       name: name,
  //       batch: batch,
  //       branch: branch,
  //     };
  //     setObject([...obj, newObj]);
  //     localStorage.setItem("user", JSON.stringify([...obj, newObj]));
  //   }
  //   setId("");
  //   setName("");
  //   setBatch("");
  //   setBranch("");
  // };
  //----------------------- Task-2 ----------------------//
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [descripe, setDescripe] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [object, setObj] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );

  let formCollect = (event) => {
    if (event.target.name === "id") {
      setId(event.target.value);
    } else if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "descripe") {
      setDescripe(event.target.value);
    } else if (event.target.checked) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  };

  let formSubmit = (e) => {
    e.preventDefault();
    let createObj = {
      id: id,
      name: name,
      descripe: descripe,
      isComplete: isComplete,
    };
    setObj([...object, createObj]);
    localStorage.setItem("task", JSON.stringify([...object, createObj]));
    setId("");
    setName("");
    setDescripe("");
    setIsComplete(false);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="text-center">Form</h1>
      {/* <div>
        <form className="ps-5" style={{ width: "60%" }}>
          <div className="d-flex justify-content-center">
            <div className="ms-3 mb-3">
              <label>S.no</label>
              <input type="text" name="id" value={id} onChange={handleForm} />
            </div>
            <div className="ms-3 mb-3">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleForm}
              />
            </div>
            <div className="ms-3 mb-3">
              <label>Batch</label>
              <input
                type="text"
                name="batch"
                value={batch}
                onChange={handleForm}
              />
            </div>
            <div className="ms-3 mb-3">
              <label>Branch</label>
              <input
                type="text"
                name="branch"
                value={branch}
                onChange={handleForm}
              />
            </div>
          </div>
          <div className="text-center">
            <button
              className="ps-3 pe-3 pt-2 pb-2"
              onClick={(e) => formSubmit(e)}
            >
              Submit
            </button>
          </div>
        </form>
      </div> */}
      {/* ---------------------------- Task-2 ------------------------------- */}
      <div style={{ marginBottom: "15px" }}>
        <form>
          <div>
            <label>S.no</label>
            <br />
            <input type="text" value={id} name="id" onChange={formCollect} />
          </div>
          <div>
            <label>Name</label>
            <br />
            <input
              type="text"
              value={name}
              name="name"
              onChange={formCollect}
            />
          </div>
          <div>
            <label>Description</label>
            <br />
            <input
              type="text"
              value={descripe}
              name="descripe"
              onChange={formCollect}
            />
          </div>
          <div>
            <label>isComplete</label>
            <br />
            <input
              type="checkbox"
              checked={isComplete}
              onChange={formCollect}
            />
          </div>
          <div>
            <button onClick={(e) => formSubmit(e)}>Submit</button>
          </div>
        </form>
      </div>
      <Link
        to="/home"
        style={{
          textDecoration: "none",
          border: "1px solid gray",
          borderRadius: "5px",
          padding: "5px 10px",
        }}
      >
        Home
      </Link>
    </div>
  );
};

export default Form;
