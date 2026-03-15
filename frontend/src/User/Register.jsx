import React, { useEffect, useState } from "react";
import "../UserStyles/Form.css";
import { Link, useNavigate } from "react-router-dom";
// import { Password } from "@mui/icons-material";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import {
  register,
  removeErrors,
  removeSuccess,
} from "../features/user/userSlice";

import profile from "../assets/product-min-01.jpg";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState({ profile });

  const { name, email, password } = user;

  const { success, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // const registerDataChange = (e) => {
  //   if (e.target.name === "avatar") {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       if (reader.readyState === 2) {
  //         setAvatarPreview(reader.result);
  //         setAvatar(reader.result);
  //       }
  //     };

  //     reader.readAsDataURL(e.target.files[0]);
  //   } else {
  //     setUser({ ...user, [e.target.name]: e.target.value });
  //   }
  // };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const file = e.target.files[0];
      setAvatar(file); // store file object
      setAvatarPreview(URL.createObjectURL(file)); // preview ke liye
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please Fill out all the required field", {
        position: "top-center",
        autoClose: 3000,
      });

      return;
    }

    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);

    // console.log(myForm.entries());

    // for (let pair of myForm.entries()) {
    //   console.log(pair);
    // }

    dispatch(register(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error, { position: "top-center", autoClose: 3000 });
      dispatch(removeErrors());
    }
  }, [dispatch, error]);

  useEffect(() => {
    if (success) {
      toast.success("Registration Successful", {
        position: "top-center",
        autoClose: 3000,
      });
      dispatch(removeSuccess());
      navigate("/login");
    }
  }, [dispatch, success]);

  return (
    <>
      <div className="form-container container">
        <div className="form-content">
          <form
            className="form"
            onSubmit={registerSubmit}
            encType="multipart/form-data"
          >
            <h2>Sign Up</h2>
            <div className="input-group">
              <input
                type="text"
                placeholder="Username"
                name="name"
                value={name}
                onChange={registerDataChange}
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={registerDataChange}
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={registerDataChange}
              />
            </div>

            <div className="input-group avatar-group">
              <input
                type="file"
                name="avatar"
                className="file-input"
                accept="image/"
                onChange={registerDataChange}
              />
              <img
                src={avatarPreview}
                alt="Avatar Preview"
                className="avatar"
              />
            </div>

            <button className="authBtn">
              {loading ? "Signing Up" : "Sign Up"}
            </button>
            <p className="form-links">
              Already have an account? <Link to="/login"> Sign in here </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
