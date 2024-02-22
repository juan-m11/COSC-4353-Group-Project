import React from "react"
import FormTextInput, { IInput } from "../components/FormComponent"
import { NavLink } from "react-router-dom"
import "../styles/Login.css"

export default function Login() {
  const forms: IInput[] = [
    {
      id: "username",
      name: "username",
      type: "text",
      label: "Username",
      required: true,
    },
    {
      id: "password",
      name: "passowrd",
      type: "password",
      label: "Password",
      required: true,
    },
  ]

  return (
    <div id="loginContainer">
      <h1>Login</h1>
      <form onSubmit={submition_handler}>
        {forms.map((forms) => (
          <FormTextInput key={forms.id} {...forms} />
        ))}
        <div id="buttons">
          <button id="login">Login</button>
        </div>
      </form>
      <div id="divider"></div>
      <NavLink to="/register">Register Here</NavLink>
    </div>
  )
}

function submition_handler(e: React.FormEvent<HTMLFormElement>) {
  const target = e.target as HTMLFormElement
  e.preventDefault()
  const data = new FormData(target)
  console.log(data)
}