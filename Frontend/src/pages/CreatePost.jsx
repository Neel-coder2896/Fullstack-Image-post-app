import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

function CreatePost() {

      const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [caption, setCaption] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !caption.trim()) {
      alert("Please select an image and enter a caption");
      return;
    }

    const formData = new FormData();

    formData.append("image", image);
    formData.append("caption", caption);

    try {
      const response = await axios.post(
        "http://localhost:3000/create-post",
        formData
      );

      console.log(response.data);

      alert("Post created successfully!");

    //   setImage(null);
    //   setImagePreview(null);
    //   setCaption("");

     navigate("/posts");

    } catch (error) {
      console.log(error);
      alert("Failed to create post");
    }
  };

  return (
    <div className="app">
      <div className="upload-wrapper">

        <div className="header">
          <div className="logo">
            <span className="logo-icon">✦</span>
            <span>Postly</span>
          </div>

          <div className="header-text">
            <h1>Create a new post</h1>
            <p>Share your moment with the world.</p>
          </div>
        </div>

        <form className="post-form" onSubmit={handleSubmit}>

          <div className="form-section">
            <label className="section-label">
              Image
              <span>Required</span>
            </label>

            <label className="image-upload">

              {imagePreview ? (
                <div className="preview-container">
                  <img src={imagePreview} alt="Preview" />

                  <div className="image-overlay">
                    <div className="change-icon">↻</div>
                    <p>Click to change image</p>
                  </div>
                </div>
              ) : (
                <div className="upload-content">
                  <div className="upload-icon">↑</div>

                  <h3>Upload your image</h3>

                  <p>
                    Drag and drop your image here or
                    <span> browse</span>
                  </p>

                  <small>
                    PNG, JPG or WEBP · Max 10MB
                  </small>
                </div>
              )}

              <input
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={handleImageChange}
              />

            </label>
          </div>

          <div className="form-section">

            <div className="label-row">
              <label className="section-label">
                Caption
                <span>Required</span>
              </label>

              <span className="character-count">
                {caption.length} / 150
              </span>
            </div>

            <textarea
              placeholder="Write something about your image..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              maxLength={150}
            />

          </div>

          <button type="submit" className="submit-btn">
            <span>Publish post</span>
            <span className="arrow">→</span>
          </button>

        </form>

        <p className="privacy-text">
          🔒 Your image is securely stored and will only be used for your post.
        </p>

      </div>
    </div>
  );
}

export default CreatePost;