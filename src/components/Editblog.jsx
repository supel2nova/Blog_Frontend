import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Swal from "sweetalert2";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getUser, getToken } from "../../services/authorize";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editblog = () => {
  let { id } = useParams();

  const [dataForm, setdataForm] = useState({
    title: "",
    author: "",
  });

  const { title, author } = dataForm;

  const [content, setContent] = useState("");

  const submitContent = (event) => {
    setContent(event);
  };

  const fetchUpdate = () => {
    axios
      .get(`${import.meta.env.VITE_API_TEST}/getblog/${id}`)
      .then((response) => {
        const { title, content, author } = response.data;
        setdataForm({ ...dataForm, title, author: getUser() });
        setContent(content);
      })
      .catch((err) => alert(err));
  };

  const updateForm = () => (
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
  );

  const inputValue = (name) => (event) => {
    // console.log(name, "=", event.target.value);
    setdataForm({ ...dataForm, [name]: event.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    // console.table({ title, content, author });
    // console.log("API URL = ", import.meta.env.VITE_API_TEST);
    axios
      .put(
        `${import.meta.env.VITE_API_TEST}/getblog/edit/${id}`,
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
        Swal.fire("Warning!!", "Edit the article successfully", "success");
        const { title, content, author } = response.data;
        setdataForm({ ...dataForm, title, content, author });
        setContent(content);
      })
      .catch((err) => {
        Swal.fire("Warning!!", err.response.data.error, "error");
      });
  };

  useEffect(() => {
    fetchUpdate();
  }, []);

  return (
    <div className="container p-5">
      <Navbar />
      <h1>Edit the article</h1>
      {updateForm()}
    </div>
  );
};

export default Editblog;
