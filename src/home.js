import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  // let navigate = useNavigate();
  // let [finduser, setFindUser] = useState("");
  // const [userArray, setUserArray] = useState(
  //   JSON.parse(localStorage.getItem("user"))
  // );
  // const [subUser, setSubUser] = useState(userArray);
  // const [sort, setSort] = useState(false);
  // let deleteArray = (value) => {
  //   let array = subUser.filter((val) => (value.id === val.id ? "" : val));
  //   setSubUser(array);
  // };
  // localStorage.setItem("user", JSON.stringify(subUser));

  // let editArray = (val, i) => {
  //   navigate(`/form?id=${val.id}`);
  // };
  // let sortUser = () => {
  //   setSort(!sort);
  //   if (sort === true) {
  //     let exchange = [...subUser];
  //     let sortUserArray = exchange.sort((a, b) => (a.name > b.name ? 1 : -1));
  //     setSubUser(sortUserArray);
  //   } else {
  //     let exchange = [...subUser];
  //     let reverseUserArray = exchange.sort((a, b) =>
  //       b.name < a.name ? -1 : 1
  //     );
  //     setSubUser(reverseUserArray);
  //   }
  // };
  // let filterUser = (e) => {
  //   let getFilterUser = subUser.filter((val) => {
  //     if (e.target.checked) {
  //       return (
  //         (finduser === val.id ? val : "") ||
  //         (finduser === val.name ? val : "") ||
  //         (finduser === val.batch ? val : "") ||
  //         (finduser === val.branch ? val : "")
  //       );
  //     }
  //   });
  //   console.log(getFilterUser);
  //   e.target.checked ? setSubUser(getFilterUser) : setSubUser(userArray);
  //   setFindUser("");
  // };
  //-------------------------- Task-2 -------------------------//
  const [getTask, setTask] = useState(JSON.parse(localStorage.getItem("task")));
  const [subTask, setSubTask] = useState(getTask);
  const [show, setShow] = useState(false);

  let refferUser = JSON.parse(localStorage.getItem("task"));
  let showComplete = () => {
    setShow(true);
    let result = subTask.filter((value) => {
      return value.isComplete === true;
    });
    setSubTask(result);
  };
  let remove = (data, i) => {
    setShow(true);
    let specificRemove = subTask.filter((val, index) => {
      return i === index ? (val.isComplete = !val.isComplete) : val;
    });
    setSubTask(specificRemove);
    let addUpdate = refferUser.map((value) => {
      return value.id === data.id ? data : value;
    });
    localStorage.setItem("task", JSON.stringify(addUpdate));
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Home</h1>
      <Link
        to={"/"}
        style={{
          textDecoration: "none",
          border: "1px solid gray",
          borderRadius: "5px",
          padding: "5px 10px",
        }}
      >
        form
      </Link>
      <br />
      {/* <input
        style={{ display: "inline-block", margin: "10px" }}
        onChange={(e) => setFindUser(e.target.value)}
        value={finduser}
      />
      <input type="checkbox" onChange={(e) => filterUser(e)} />
      <br />
      <button onClick={() => sortUser()}>Sort</button> */}
      {/* {subUser?.map((val, i) => {
        return (
          <div key={i} style={{ textAlign: "start" }}>
            <h2>
              id:<span className="fs-4 ps-3">{parseInt(val.id)}</span>
            </h2>
            <h2>
              Name:<span className="fs-4 ps-3">{val.name}</span>
            </h2>
            <h2>
              Batch:<span className="fs-4 ps-3">{val.batch}</span>
            </h2>
            <h2>
              Branch:<span className="fs-4 ps-3">{val.branch}</span>
            </h2>
            <div>
              <button
                style={{ margin: "10px" }}
                onClick={() => deleteArray(val)}
              >
                Delete
              </button>
              <button
                style={{ margin: "10px" }}
                onClick={() => editArray(val, i)}
              >
                Edit
              </button>
            </div>
          </div>
        );
      })} */}
      {/*-------------------------------- Task-2 -------------------------------*/}
      <div style={{ margin: "15px" }}>
        <button
          onClick={() => {
            return setShow(true), setSubTask(getTask);
          }}
        >
          All
        </button>
      </div>
      <div style={{ margin: "15px" }}>
        <button onClick={() => showComplete()}>Complete</button>
      </div>
      <div style={{ margin: "15px" }}>
        <button
          onClick={() => {
            return (
              localStorage.setItem("task", JSON.stringify([])), setSubTask([])
            );
          }}
        >
          Reset
        </button>
      </div>
      {show &&
        subTask.map((value, i) => {
          return (
            <div key={i}>
              <h5>id: {value.id}</h5>
              <h4>Name: {value.name}</h4>
              <h5>Description: {value.descripe}</h5>
              <input
                type="checkbox"
                checked={value.isComplete}
                onChange={() => remove(value, i)}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Home;
