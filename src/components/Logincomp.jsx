import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import { authenticate, getUser } from "../../services/authorize";
import { useNavigate } from "react-router-dom";

const Logincomp = () => {
  let navigate = useNavigate();
  const [loginComp, setLogincomp] = useState({
    username: "",
    password: "",
  });

  const { username, password } = loginComp;
  const inputValue = (name) => (event) => {
    setLogincomp({ ...loginComp, [name]: event.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_API_TEST}/login`, {
        username,
        password,
      })
      .then((response) => {
        authenticate(response, () => navigate("/"));
      })
      .catch((err) => {
        Swal.fire("Warning!!", err.response.data.error, "error");
        console.log(err.response.data.error);
      });
  };

  useEffect(() => {
    getUser() && navigate("/");
  }, []);

  return (
    <div className="container p-5">
      <Navbar />
      <h1>Login | Admin</h1>
      {/* {JSON.stringify(dataForm)} */}
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={inputValue("username")}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={inputValue("password")}
          />
        </div>
        <br />
        <input type="submit" value="Log in" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Logincomp;
