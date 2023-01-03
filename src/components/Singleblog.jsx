import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import parse from "html-react-parser";

const Singleblog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState("");
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_TEST}/getblog/${id}`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((err) => alert(err));
  }, []);
  return (
    <div className="container p-5">
      <Navbar />
      {blog && (
        <div>
          <h1>{blog.title}</h1>
          <div>{parse(blog.content)}</div>
          <p className="text-muted">
            Author : {blog.author}, Publish :
            {new Date(blog.createdAt).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default Singleblog;
