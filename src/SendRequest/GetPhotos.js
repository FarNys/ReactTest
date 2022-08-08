import React, { useEffect, useState } from "react";
import { baseUrl } from "../Data/api";
import axios from "axios";
import { token } from "../Data/api";
const GetPhotos = () => {
  const [photos, setphotos] = useState([]);
  const [input, setinput] = useState("");
  const [forming, setforming] = useState();
  useEffect(() => {
    fetch(`${baseUrl}/api/v1/photos`)
      .then((res) => res.json())
      .then((data) => setphotos(data.data))
      .catch((err) => console.log(err));

    return () => {};
  }, []);

  const inputHandler = (e) => {
    setinput(e.target.value);
  };
  const fileHandler = (e) => {
    console.log(e.target);
    setforming(e.target.files[0]);
    // const formData = new FormData(e.target.value);
    // console.log(formData);
  };
  //   console.log(input, forming);
  const sendImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", input);
    formData.append("file", forming);
    axios({
      method: "post",
      url: `${baseUrl}/api/v1/photos`,
      headers: {
        "x-auth-token": token,
      },
      data: formData,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {photos.length > 0 ? (
        photos.map((el, id) => (
          <div key={id}>
            <p>{el.title}</p>
            <img src={`${baseUrl}/uploads/${el.url}`} alt={el.title} />
          </div>
        ))
      ) : (
        <h3>Loading</h3>
      )}
      <div>
        <h2>Add New Image</h2>
        <form>
          <input type="text" placeholder="title" onChange={inputHandler} />
          <input type="file" placeholder="addFile" onChange={fileHandler} />
          <button onClick={sendImage}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default GetPhotos;
