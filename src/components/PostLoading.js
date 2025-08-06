import React from "react";

function PostLoading(Component) {
  return function PostLoadingComponent({ isLoading, posts, ...props }) {
    if (!isLoading) return <Component posts={posts} {...props} />;
    return (
      <div className="post-loading">
        <h2>Loading...</h2>
      </div>
    );
  };
}

export default PostLoading;
