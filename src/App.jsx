import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import parse from "html-react-parser";
import { getUser, getToken } from "../services/authorize";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchData = () => {
    axios
      .get(`${import.meta.env.VITE_API_TEST}/getblogs`)
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const confirmDelete = (_id) => {
    Swal.fire({
      title: "Are you sure you want to delete this item?",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBlog(_id);
      }
    });
  };

  const deleteBlog = (_id) => {
    axios
      .delete(`${import.meta.env.VITE_API_TEST}/getblog/${_id}`, {
        headers: {
          authorization: `Bearer ${getToken()}`,
        },
      })
      .then((response) => {
        Swal.fire("Delete!", response.data.message, "success");
        fetchData();
      });
  };

  return (
    <div className="container p-5">
      <Navbar />
      {blogs.map((blog, index) => (
        <div
          className="row"
          key={index}
          style={{ borderBottom: `1px solid silver` }}
        >
          <div className="col pt-3 pb-2">
            <Link to={`/getblog/${blog._id}`} className="link">
              <h2>{blog.title}</h2>
            </Link>
            <div>{parse(blog.content.substring(0, 180))}</div>
            <p className="text-muted">
              Author : {blog.author}, Publish :
              {new Date(blog.createdAt).toLocaleString()},
              {/* แก้ไข้เมื่อ :
              {new Date(blog.updatedAt).toLocaleString()} */}
            </p>
            {getUser() && (
              <div>
                <Link
                  className="btn btn-outline-primary"
                  to={`/getblog/edit/${blog._id}`}
                >
                  Edit
                </Link>
                &nbsp;
                <button
                  className="btn btn-outline-danger"
                  onClick={() => confirmDelete(blog._id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
