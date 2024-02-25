import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentArea from "./pages/CommentArea";
import HeaderInput from "./Input/HeaderInput";
// import Input from "./Input/Input.jsx";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [createPost, setCreatePost] = useState("");
  const getAllposts = async () => {
    await axios
      .get(`${process.env.REACT_BASE_URL}`)
      .then((res) => {
        console.log(res?.data?.posts);
        setPosts(res?.data?.posts);
      })
      .catch((error) => console.log(error?.message));
  };
  const handleCreatePost = async () => {
    try {
      const p = await axios.post(`${process.env.REACT_BASE_URL}create-post`, {
        comment: createPost,
      });
      setCreatePost("");
      alert(p?.data?.message);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllposts();
  }, []);

  return (
    <div className="flex flex-col   shadow-2xl focus:shadow-outline justify-center text-center bg-slate-400 items-center gap-3  mt-10   rounded-lg border-red-700  max-w-[80%] m-auto">
      <div className="text-6xl mb-7 w-[100%] mt-4 font-bold">
        <h1>AulaCube</h1>
      </div>
      <div className="w-[100%]">
        <div className="mb-8 gap-9 px-3 ">
          <div className=" text-3xl mb-6 mx-10 text-left">
            What's on your mind ?
          </div>
          <div className="flex flex-row gap-10 pl-10 pr-1 content-between items-center  w-[100%]">
            <input
              className=" placeholder-black w-full h-full bg-transparent text-blue-gray-700  font-[300]   transition-all outline  border-gray-500 focus:border-2   focus:border-blue-500  text-lg px-3 py-4 rounded-[7px] border-blue-gray-200"
              placeholder="Create your post here...."
              value={createPost}
              onChange={(e) => setCreatePost(e.target.value)}
              type="text"
            />

            <button
              onClick={handleCreatePost}
              className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded"
            >
              Post
            </button>
          </div>
        </div>
        <div className="flex justify-start items-start">
          <CommentArea posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default App;
