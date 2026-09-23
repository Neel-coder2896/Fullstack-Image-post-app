
import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/posts");

      console.log(response.data);

      setPosts(response.data.posts);
    } catch (error) {
      console.log(error);
      setError("Failed to load posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="posts-page">
        <div className="loading-container">
          <div className="loader"></div>
          <p>Loading posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="posts-page">
        <div className="error-container">
          <h2>Something went wrong</h2>
          <p>{error}</p>
          <button onClick={fetchPosts}>Try Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="posts-page">
      <div className="posts-header">
        <div>
          <span className="brand-small">POSTLY</span>
          <h1>Discover Posts</h1>
          <p>Explore the latest images shared by the community.</p>
        </div>

        <div className="post-count">
          <strong>{posts.length}</strong>
          <span>Posts</span>
        </div>
      </div>

      {posts.length === 0 ? (
        <div className="empty-container">
          <div className="empty-icon">📷</div>
          <h2>No posts yet</h2>
          <p>Be the first person to share something.</p>
        </div>
      ) : (
        <div className="posts-grid">
          {posts.map((post) => (
            <article className="post-card" key={post._id}>
              <div className="post-image-container">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="post-image"
                />
              </div>

              <div className="post-content">
                <p>{post.caption}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default Posts;

