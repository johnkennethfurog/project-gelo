import React from "react";
import Select, { StylesConfig } from "react-select";

import "./form.styles.scss";

import NuSkinLogo from "../assets/nu-skin-logo.png";
const selectStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "rgba(1, 40, 19, 0.52)",
    marginTop: 10,
    width: 200,
    border: 0,
    // This line disable the blue border
    boxShadow: "none",
  }),
  option: (styles) => ({
    ...styles,
    backgroundColor: "rgba(1, 40, 19, 0.52)",
    color: "white",
  }),
  dropdownIndicator: (styles) => ({ ...styles, color: "white" }),
  input: (styles) => ({ ...styles, textAlign: "center" }),
  placeholder: (styles) => ({ ...styles, color: "white" }),
  singleValue: (styles, { data }) => ({
    ...styles,
    color: "white",
    textAlign: "center",
    fontSize: 20,
  }),
  menuList: (styles) => ({
    ...styles,
    backgroundColor: "rgba(1, 40, 19, 0.52)",
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: "rgba(1, 40, 19, 0.52)",
  }),
};

type FormProps = {
  email: string;
};

const options = [
  { value: 1, label: "#1" },
  { value: 2, label: "#2" },
  { value: 3, label: "#3" },
];

const Form: React.FC<FormProps> = ({ email }) => {
  const FormHeader = () => {
    return (
      <div className="header">
        <img className="logo" src={NuSkinLogo}></img>
        <h1>Christmas Raffle!</h1>
      </div>
    );
  };

  const Content = () => {
    return (
      <div className="content">
        <span
          style={{ color: "#fff9d1", fontSize: 20 }}
        >{`Hello ${email}!`}</span>
        <span style={{ marginTop: 20, color: "#fff9d1" }}>
          Please select a number :
        </span>
        <Select
          placeholder="Select a number"
          options={options}
          styles={selectStyles}
        />
        <div className="button">Submit</div>
      </div>
    );
  };
  return (
    <div className="form">
      <FormHeader />
      <Content />
    </div>
  );
};

export default Form;
