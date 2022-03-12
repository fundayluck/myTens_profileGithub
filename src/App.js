import { useState } from "react";
import Card from "./components/Card";
import Desc from "./components/Desc";
import Form from "./components/Form";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";

function App() {
  const [state, setState] = useState({
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_960_720.png",
    name: "your name",
    username: "your username",
    description: "your description",
  });

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="bg-[#222222] w-[350px] h-auto p-[8px] rounded shadow-[2px_4px_8px_1px_rgba(6,6,6)]">
          <div className="flex justify-center pt-[10px] pr-[0px]">
            <img
              className="w-[200px] h-[200px] rounded-full"
              src={state.imageUrl}
              alt="avatar"
            />
          </div>
          <div>
            <Title text={state.name} />
            <Subtitle text={state.username} />
            <Desc text={state.description} />
            <div className="flex flex-row justify-around mt-[20px] mr-0 mb-[10px]">
              <Card title="Following" count={8} />
              <Card title="Followers" count={7} />
              <Card title="Stars" count={1} />
            </div>
          </div>
        </div>
        <div className="w-full place-self-center">
          <Form values={state} setValue={setState} />
        </div>
      </div>
    </div>
  );
}

export default App;
