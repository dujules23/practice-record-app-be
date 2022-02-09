import React, { useState } from "react";
import * as yup from "yup";
import content from '../static/index';

import { useForm } from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup"

const Schema = yup.object().shape({
  username: yup.string().required("User Name is Required"),
  password: yup.string().required("Not a Valid Password").min(5)
})

function LoginForm (props) {


  const { register, handleSubmit, errors } = useForm({})

  const onSubmit = (data) => console.log(data)
  // const [loginState, setloginState] = useState(
  //   {
  //     username: "",
  //     password: ""
  //   }
  // );

  // const [err, setErr] = useState(
  //   {
  //   username: "",
  //   password: ""
  //   }
  // );
  

  // const [isValid, setIsValid] = useState(true);
  
  
  // Function for form submission

  // Validation function

  // const validate = (e) => {
  //   yup.reach(Schema, e.target.name)
  //     .validate(e.target.value)
  //     .then( valid => {
  //       setErr({
  //         ...err, [e.target.name]: ""
  //       })
  //       setIsValid(valid);
  //     })
  //     .catch( error => {
  //       setErr({
  //         ...err, [e.target.name]: error.errors[0]
  //       })
  //     })
  // };

  // const inputChange = (e) => {
  //   e.persist();
  //   validate(e);
  //   setloginState({...loginState, [e.target.name]: e.target.value})
  // };


  return(
    <div>
      <form>
        {content.inputs.map((input, key) => {
          return(
          <div key={key}>
            <p>
              <label>{input.label}</label>
            </p>
            <p>
              <input 
              name={input.name} 
              className="input" 
              type={input.type}
              {...register(`${input.name}`)}
              />
            </p>
          </div>
          );
        })}
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );

}

export default LoginForm;