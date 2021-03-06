import { useState } from "react";
import Card from "./components/Card";
import Desc from "./components/Desc";
// import Form from "./components/Form";
import Userinput from "./components/Userinput";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";

function App() {
  const URL = "https://api.github.com/users";
  const [state, setState] = useState({
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_960_720.png",
    name: "your name",
    username: "your username",
    description: "your description",
    following: 0,
    follower: 0,
  });

  const [searchText, setSearchText] = useState("");

  const handleAPI = () => {
    fetch(`${URL}/${searchText}`)
      .then((res) => res.json())
      .then((result) => {
        setState({
          imageUrl: result.avatar_url,
          name: result.name,
          username: result.login,
          description: result.bio,
          following: result.following,
          follower: result.followers,
          ...result,
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="">
        {/* <div className="grid grid-cols-1 gap-12 sm:grid-cols-2"> */}
        <div className="mb-[10px]">
          <Userinput
            placeholder="Search Github Username"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={handleAPI}
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-[5px]"
          >
            search
          </button>
        </div>
        {state.message ? (
          <h2 className="flex justify-center text-xl">{state.message}!</h2>
        ) : (
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
              <a href={state.html_url} target="_blank" rel="noreferrer">
                <Subtitle text={state.username} />
              </a>
              <Desc text={state.description} />
              <div className="flex flex-row justify-around mt-[20px] mr-0 mb-[10px]">
                <Card title="Following" count={state.following} />
                <Card title="Followers" count={state.follower} />
              </div>
            </div>
          </div>
        )}
        {/* <div className="w-full place-self-center">
          <Form values={state} setValues={setState} />
        </div> */}
      </div>
    </div>
  );
}

export default App;
