import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Swal from "sweetalert2";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { getUser, getToken } from "../../services/authorize";

const Form = () => {
  const [dataForm, setdataForm] = useState({
    title: "",
    author: getUser(),
  });

  const { title, author } = dataForm;

  const [content, setContent] = useState("");

  const submitContent = (event) => {
    setContent(event);
  };

  const inputValue = (name) => (event) => {
    // console.log(name, "=", event.target.value);
    setdataForm({ ...dataForm, [name]: event.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    // console.table({ title, content, author });
    console.log("API URL = ", import.meta.env.VITE_API_TEST);
    axios
      .post(
        `${import.meta.env.VITE_API_TEST}/create`,
        {
          title,
          content,
          author,
        },
        {
          headers: {
            authorization: `Bearer ${getToken()}`,
          },
        }
      )
      .then((response) => {
        Swal.fire("SAVE!!", "Save the article successfully", "success");
        setdataForm({ ...dataForm, title: "" });
        setContent("");
      })
      .catch((err) => {
        Swal.fire("Warning!!", err.response.data.error, "error");
      });
  };
  return (
    <div className="container p-5">
      <Navbar />
      <h1>Write the article</h1>
      {/* {JSON.stringify(dataForm)} */}
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={inputValue("title")}
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <ReactQuill
            value={content}
            onChange={submitContent}
            theme="snow"
            className="pb-5 mb-3"
            placeholder="write content here"
            style={{ border: "1px solid #666" }}
          />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={inputValue("author")}
          />
        </div>
        <br />
        <input type="submit" value="Save" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Form;
