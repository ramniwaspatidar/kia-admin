import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import logoImage from "../../assets/logo.png";
import CustomInput from "../../components/input/CustomInput";
import firebase from "../../firebase/firebase";
import Cookies from "js-cookie";

const Login = (props) => {
  const { setIsLogin } = props;

  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // MARK : VALIDATE FIELD
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (email === undefined || email === "") {
      newErrors.email = "Email is required";
      isValid = false;
    }
    if (password === undefined || password === "") {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const user = await firebase.auth().signInWithEmailAndPassword(email, password);
        if (user) {
          const currentUser = await firebase.auth().currentUser;
          const idTokenResult = await currentUser.getIdToken(true);

          Cookies.set("firebaseToken", idTokenResult);
          Cookies.set("email", firebase.auth().currentUser.email);
          setIsLogin(idTokenResult);
          navigate("/");
        }

        console.log(firebase.auth().currentUser.email);

        console.log("Logged in successfully");
      } catch (error) {
        console.error("Error logging in:", error.message);
      }
    } else {
    }
  };

  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <img src={logoImage} alt="Logo" />
        <div>Admin</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <CustomInput
          label={"Email"}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          // value={formData.email}
          placeholder={"Enter your email here"}
        />
        {errors.email && <div className="errorLabel">{errors.email}</div>}
      </div>
      <br />
      <div className={"inputContainer"}>
        <CustomInput
          label={"Password"}
          isSecure={true}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          // value={formData.password}
          placeholder={"Enter your password here"}
        />
        {errors.password && <div className="errorLabel">{errors.password}</div>}
      </div>
      <br />
      <div className={"buttonContainer"}>
        <input className={"inputButton"} type="button" onClick={handleSubmit} value={"Log in"} />
      </div>
    </div>
  );
};

export default Login;
