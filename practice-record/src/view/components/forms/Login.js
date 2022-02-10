import React, { useState } from "react";
import * as yup from "yup";
import content from '../static/index';

import { useForm } from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup"

const schema = yup.object().shape({
  username: yup.string().required("User Name is Required"),
  password: yup.string().required("Not a Valid Password").min(5)
});

function LoginForm (props) {


  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data)

  console.log(errors)

  return(
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              {...register(`${input.name}`, {required: true})}
              />
            </p>
          <p>{errors[input.name]?.message}</p>
          </div>
          
          );
          
        })}
       <button className="btn" type="submit">Submit</button> 
      </form>
    </div>
  );

}

export default LoginForm;