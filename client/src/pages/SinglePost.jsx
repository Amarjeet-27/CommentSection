import React, { useState } from "react";
import Input from "../Input/Input";
import axios from "axios";
import CommentArea from "./CommentArea";

const SinglePost = ({ post }) => {
  const [showReply, setShowReply] = useState(false);
  const [comment, setComment] = useState("");
  const [nested, setNested] = useState([]);

  const handleReply = async (req, res) => {
    try {
      const p = await axios.post("http://localhost:3001/create-post", {
        comment,
        parentId: post._id,
      });
      alert(p?.data?.message);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowComments = async (id) => {
    await axios
      .get(`http://localhost:3001/${id} `)
      .then((res) => {
        console.log(res?.data?.comments);
        setNested(res?.data?.comments);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = async (id) => {
    try {
      const p = await axios.delete(`http://localhost:3001/delete/${id}`);
      alert(p?.data?.message);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (id) => {
    try {
      const res = await axios.post(`http://localhost:3001/star/${id}`, {
        star: "gold",
      });
      alert(res?.data?.message);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const color = "text-gold";

  return (
    <>
      <div className="flex flex-col min-w-full items-start gap-4  bg-gray-800  rounded-xl p-8 flex-wrap max-w-[80%]   ">
        <div className=" text-xl text-white ">{post.comment}</div>
        <div className="flex flex-row justify-end items-center min-w-full gap-x-2">
          <div
            onClick={() => setShowReply(true)}
            className="font-bold py-2 px-4 rounded bg-blue-500  hover:cursor-pointer hover:bg-blue-600 text-white "
          >
            Reply
            {showReply && (
              <div className="w-[80%]">
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="m-2 text-xl  placeholder:text-black  text-black font-normal px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                />
                <div className="flex gap-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleReply}
                  >
                    Post
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setComment("")}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleShowComments(post._id)}
          >
            show comments
          </button>
          <button
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleDelete(post._id)}
          >
            delete
          </button>
          <i
            className={`fa-regular fa-star  text-[30px]  hover:cursor-pointer `}
            onClick={() => handleClick(post._id)}
          />
        </div>
      </div>
      {nested && (
        <div>
          <CommentArea posts={nested} />
        </div>
      )}
    </>
  );
};

export default SinglePost;
