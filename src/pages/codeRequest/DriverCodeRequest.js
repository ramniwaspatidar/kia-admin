import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import logoImage from "../../assets/logo.png";
import CustomInput from "../../components/input/CustomInput";
import firebase from "../../firebase/firebase";
import Cookies from "js-cookie";
import ApisEndpoint from "../../constants/ApisEndpoint";
import { APIsMethod, BASEURL } from "../../constants";
import { Apis } from "../../axios/Apis";
import { toast } from "react-toast";

const DriverCodeRequest = (props) => {
  const { setIsLogin } = props;

  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  // MARK : VALIDATE FIELD
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (name === undefined || name === "") {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (email === undefined || email === "") {
      newErrors.email = "Email is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const url = BASEURL + ApisEndpoint.codeRequest;

        const param = { email: email, name: name };
        const response = await Apis.request(url, APIsMethod.post, param);
        if (response.status === true) {
          toast.success("Driver code successfully generated! ");
        }
      } catch (error) {}
    } else {
    }
  };

  return (
    <div className={"code-request-container"}>
      <div className={"titleContainer"}>
        <img src={logoImage} alt="Logo" />
        <div>Admin</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <CustomInput
          label={"Name"}
          isSecure={true}
          onChange={(e) => {
            setName(e.target.value);
          }}
          // value={formData.name}
          placeholder={"Enter your name here"}
        />
        {errors.name && <div className="errorLabel">{errors.name}</div>}
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
      <div className={"buttonContainer"}>
        <input className={"inputButton"} type="button" onClick={handleSubmit} value={"Generate Driver Code"} />
      </div>
    </div>
  );
};

export default DriverCodeRequest;
