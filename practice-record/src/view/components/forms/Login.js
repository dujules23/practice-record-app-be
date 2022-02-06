import React, { useState } from "react";
import * as yup from "yup";

const Schema = yup.object().shape({
  username: yup.string().required("User Name is Required"),
  password: yup.string().required("Not a Valid Password")
})

function LoginForm (props) {
  const [loginState, setloginState] = useState(
    {
      username: "",
      password: ""
    }
  );

  const [err, setErr] = useState(
    {
    username: "",
    password: ""
    }
  );
  

  const [isValid, setIsValid] = useState(true);
  
  
  // Function for form submission

  // Validation function

  const validate = (e) => {
    yup.reach(Schema, e.target.name)
      .validate(e.target.value)
      .then( valid => {
        setErr({
          ...err, [e.target.name]: ""
        })
        setIsValid(valid);
      })
      .catch( error => {
        setErr({
          ...err, [e.target.name]: error.errors[0]
        })
      })
  };

  const inputChange = (e) => {
    e.persist();
    validate(e);
    setloginState({...loginState, [e.target.name]: e.target.value})
  };


  return(
    <div>
      <form>
        <div>
          <label>
            Username:
          </label>
        </div>
        <div>
          <input
          type="text"
          placeholder="username"
          id="username"
          onChange={inputChange}
          />
          {err.username.length > 0 ? <p>{err.username}</p> : null}
        </div>
        <div>
          <label>
            Password:
          </label>
        </div>
        <div>
          <input
          type="password"
          placeholder="password"
          id="password"
          onChange={inputChange}
          />
          {err.password.length > 0 ? <p>{err.password}</p> : null}
        </div>
        <div>
          <button type="submit" disabled={!isValid}>Log In</button>
        </div>
      </form>
    </div>
  );

}

export default LoginForm;