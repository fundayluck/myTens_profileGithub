import React from "react";
import Userinput from "./Userinput";

function Form({ values, setValues }) {
  const handleState = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  return (
    <form>
      <Userinput
        label="Image URL"
        onChange={(e) => handleState("imageUrl", e.target.value)}
      />
      <Userinput
        label="Name"
        onChange={(e) => handleState("name", e.target.value)}
      />
      <Userinput
        label="Username"
        onChange={(e) => handleState("username", e.target.value)}
      />
      <Userinput
        label="Description"
        onChange={(e) => handleState("description", e.target.value)}
      />
    </form>
  );
}

export default Form;
