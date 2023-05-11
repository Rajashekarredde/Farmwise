import React, { useState } from "react";
import './NewsArticles.css'
import Img1 from "../../assests/images/image1.jpeg";
import Img2 from "../../assests/images/image2.jpeg";
import Img3 from "../../assests/images/image3.jpeg";
import Img4 from "../../assests/images/image4.jpeg";
import Img5 from "../../assests/images/image5.webp";

const NewsArticles = () => {

  const [modalData, setModalData] = useState({ isOpen: false, description: "" });
  const closeModal = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  const openModal = (description) => {
    setModalData({ isOpen: true, description });
  };

  const posts = [
    {
      type: "post",
      title: "Post Title 1",
      image: Img1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed velit dignissim sodales ut eu sem integer. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Eu non diam phasellus vestibulum lorem sed risus. Urna nunc id cursus metus aliquam. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Purus faucibus ornare suspendisse sed nisi. Etiam sit amet nisl purus in mollis. Ultrices gravida dictum fusce ut. Augue eget arcu dictum varius duis at consectetur.",
      image: Img1,
    },
    {
      type: "article",
      title: "Article Title 1",
      description: "Description of article 1",
      image: Img2,
    },
    {
      type: "blog",
      title: "Blog Title 1",
      description: "Description of blog 1",
      image: Img4,
    },
    {
      type: "post",
      title: "Post Title 2",
      description: "Description of post 2",
      image: Img2,
    },
    {
      type: "article",
      title: "Article Title 2",
      description: "Description of article 2",
      image: Img3,
    },
    {
      type: "blog",
      title: "Blog Title 2",
      description: "Description of blog 2",
      image: Img5,
    },
    {
      type: "post",
      title: "Post Title 3",
      description: "Description of post 3",
      image: Img3,
    },
    {
      type: "article",
      title: "Article Title 3",
      description: "Description of article 3",
      image: Img1,
    },
    {
      type: "blog",
      title: "Blog Title 3",
      description: "Description of blog 3",
      image: Img2,
    },
  ];

  const renderItem = (item, index) => {
    return (
      <div key={index} className="mb-10 md:mx-4">
        <img src={item.image} alt={item.title} className="mb-2" />
        <h2
          className="text-2xl font-bold mb-2 cursor-pointer"
          onClick={() => openModal(item.description)}
        >
          {item.title}
        </h2>
      </div>
    );
  };

  const renderPosts = () => {
    const postItems = posts.filter((post) => post.type === "post");
    return postItems.map(renderItem);
  };

  const renderArticles = () => {
    const articleItems = posts.filter((post) => post.type === "article");
    return articleItems.map(renderItem);
  };

  const renderBlogs = () => {
    const blogItems = posts.filter((post) => post.type === "blog");
    return blogItems.map(renderItem);
  };

  return (
    <div className="w-full h-full" style={{ background: "#ccffcc", marginTop:"8%" }}>

      <div className="flex flex-col md:flex-row md:justify-between mx-10">
        <div className="w-full md:w-2/5">{renderPosts()}</div>
        <div className="w-full md:w-2/5">{renderArticles()}</div>
        <div className="w-full md:w-2/5">{renderBlogs()}</div>
      </div>

      {modalData.isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-white w-3/4 md:w-1/3 p-6 rounded-lg text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-lg">{modalData.description}</p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsArticles;

