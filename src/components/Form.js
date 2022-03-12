import React from "react";
import Userinput from "./Userinput";

function Form({ value, setValue }) {
  return (
    <form>
      <Userinput label="Image URL" />
      <Userinput label="Name" />
      <Userinput label="Username" />
      <Userinput label="Description" />
    </form>
  );
}

export default Form;
