import SinglePost from "./SinglePost";

const CommentArea = ({ posts }) => {
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center pl-10 min-w-full">
      {posts?.map((post, ind) => (
        <SinglePost post={post} key={ind} />
      ))}
    </div>
  );
};

export default CommentArea;
