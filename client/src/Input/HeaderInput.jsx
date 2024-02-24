import React, { useState } from "react";

const HeaderInput = () => {
  const [createPost, setCreatePost] = useState("");
  return (
    <div className="relative w-full min-w-[200px] h-10">
      <div className="mb-8 gap-9 ">
        <div className=" text-2xl mb-8 mx-10 text-left">
          What's on your mind ?
        </div>
        <div className="flex flex-row gap-10 pl-10 pr-1 content-between items-center  w-[100%]">
          <input
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline  focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            placeholder="Create your post here"
            value={createPost}
            onChange={(e) => setCreatePost(e.target.value)}
            type="text"
          />

          <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderInput;
