import React from "react";
// import { Link } from "react-router-dom";
import { useFormik } from "formik";
const initialValues = {
  name: "",
  pasword: "",
};
const onSubmit = (values) => {
  console.log("Form data", values);
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "please enter the email ";
  }
  if (!values.pasword) {
    errors.pasword = "please enter the pasword";
  }
  return errors;
};

export const Login = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <div className="container ml-20">
      <h2 className="mb-5 text-3xl text-blue-700">Login</h2>

      <br />

      <label className="block">Username//Email</label>

      <br />
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          className="px-56 py-3 rounded-full form-input outline-blue-400"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="enter your name"
          name="name"
        />
        <div className="text-red-500">
          <p>{formik.errors.name ? <div>{formik.errors.name}</div> : null}</p>
        </div>
        <br />
        <label className="block">Password</label>
        <br />
        <input
          type="password"
          className="px-56 py-3 rounded-full form-input outline-blue-400"
          placeholder="enter your name"
          name="pasword"
        />
        <div className="text-red-500">
          {formik.errors.name ? <div>{formik.errors.name}</div> : null} <br />
        </div>
        <br />
        <button
          type="submit"
          // value="Log in"
          className="px-4 py-1 mb-5 text-2xl font-bold text-white duration-300 bg-blue-600 rounded-md ml-7 hover:ease-in"
        />
        Log in
        <button />
      </form>

      <br />

      <p className="mb-5 text-1xl ml-96">
        If You Don't Have An Account{" "}
        <a className="text-blue-500" to="/login">
          Signup
        </a>
      </p>
    </div>
  );
};
export default Login;