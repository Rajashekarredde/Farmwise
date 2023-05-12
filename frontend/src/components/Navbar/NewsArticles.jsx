import React, { useState } from "react";
import  './NewsArticles.css'; 
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
      title: "Revolutionizing Organic Farming",
      image: Img1,
      description: "Organic farming is transforming agriculture by focusing on sustainable practices and holistic systems. This method is beneficial for the environment and produces high-quality, chemical-free produce. Understand how this revolution is taking place and how you can be a part of it.",
      image: Img1,
    },
    {
      type: "article",
      title: "Benefits of Organic Farming",
      description: "Organic farming promotes biodiversity, conserves water, and enhances soil quality. Not only does it offer environmental advantages, but it also provides health benefits by producing chemical-free food. Explore the many benefits of organic farming in this insightful article.",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/18514e97406121.5ec44bd713adc.gif",
    },
    {
      type: "blog",
      title: "Composting in Organic Farming",
      description: "Composting is a key aspect of organic farming, converting organic waste into nutrient-rich soil. It plays a crucial role in maintaining soil fertility and health. Learn about the science of composting and its impact on organic farming",
      image: "https://framinghamsource.com/wp-content/uploads/2020/02/Compost-and-garden.gif",
    },
    {
      type: "post",
      title: "Organic vs. Traditional Farming",
      description: "This article compares organic and conventional farming methods, examining the benefits and drawbacks of each. While organic farming is more sustainable, conventional farming is often more productive. Delve into this comparison for a comprehensive understanding of both methods",
      image: "https://c8.alamy.com/comp/WP8K46/woodcut-illustration-of-a-farmer-looking-over-his-fields-of-crops-WP8K46.jpg",
    },
    {
      type: "article",
      title: "Organic Farming on Climate",
      description: "With its emphasis on sustainability and biodiversity, organic farming can significantly mitigate the impacts of climate change. Discover how organic farming practices can contribute to reducing carbon footprints and promoting a healthier planet",
      image: "https://www.transformingfoodsystems.com/img/Graphic3-A4.1b95e422ce4279b56830b68b50b6c6f8.gif",
    },
    {
      type: "blog",
      title: " Future of Food: Organic Farming",
      description: " As the global population grows, organic farming is emerging as a sustainable solution for future food production. It respects natural life cycles, promoting healthier soils and more resilient crops. Explore the future of food through the lens of organic farming",
      image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjY4ZDAxOGYzZDM1NmFlNGRhMTYxMDUzNzFhZDQzZmFlYTgxYWRhZSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/zm8RHjPCeneOZHO4Sl/giphy.gif",
    },
    {
      type: "post",
      title: " Starting Your Own Organic Farm",
      description: "Thinking of starting an organic farm? This guide provides a step-by-step approach to setting up your own organic farm, from choosing the right land to getting certification. Dive in to learn more about this rewarding venture",
      image: "https://farmvsfactory.org/assets/custom/images/bg_family-crop650h.gif",
    },
    {
      type: "article",
      title: "Essential Tool for Farming",
      description: " Contrary to common belief, organic farming does use pesticides - but organic ones. These pesticides are derived from natural sources and are less harmful to the environment and humans. Understand the role and types of organic pesticides in this article",
      image: "https://www.livestockphilippines.com/Portals/18/edm/lp21/21-01-21/images/lp21_edm_190121_animate_farm_01a.gif",
    },
    {
      type: "blog",
      title: "Challenges in Organic Farming",
      description: "While organic farming has many benefits, it is not without challenges. This article discusses common obstacles faced by organic farmers, such as pest control and marketing their produce, and provides potential solutions for overcoming these hurdles",
      image: "https://www.yesmagazine.org/wp-content/uploads/imports/2e96086496ed40c18b649a14b16bd5ab.gif",
    },
  ];

 const renderItem = (item, index) => {
  return (
    <div key={index} className="mb-10 md:mx-4">
      <div className="articleImage">
        <img src={item.image} alt={item.title} className="mb-2" />
      </div>
      <h2
        className="title text-2xl font-bold mb-2 cursor-pointer"
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

