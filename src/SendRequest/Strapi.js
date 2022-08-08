import React, { useEffect, useState } from "react";
import axios from "axios";
import { strapiUrl } from "../Data/api";
const Strapi = () => {
  const [strapiData, setstrapiData] = useState([]);
  const [input, setinput] = useState();
  useEffect(() => {
    axios({
      method: "get",
      url: `${strapiUrl}/api/tests`,
    })
      .then((res) => {
        setstrapiData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const inputChanger = (e) => {
    setinput(e.target.value);
  };
  const createTestHandler = (e) => {
    e.preventDefault();
    const data = { title: input };
    console.log(data);
    // console.log(input);
    axios({
      method: "post",
      url: `${strapiUrl}/api/tests`,
      data,
    }).then((res) => console.log(res));
    //   .catch((err) => console.log(err));
    // fetch(`${strapiUrl}/api/tests`, {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
    axios
      .post(`${strapiUrl}/api/tests`, {
        data,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {strapiData.length > 0 ? (
        strapiData.map((el, index) => (
          <div key={index}>
            <div>{el.attributes.title}</div>
            <p>{el.attributes.createdAt}</p>
          </div>
        ))
      ) : (
        <p>No Data</p>
      )}
      <h3>Create Test</h3>
      <form>
        <input placeholder="title" onChange={inputChanger} />
        <button onClick={createTestHandler}>Create Test</button>
      </form>
    </div>
  );
};

export default Strapi;
