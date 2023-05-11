import React from 'react';
import Img1 from '../../assests/images/image1.jpeg';
import Img2 from '../../assests/images/image2.jpeg';
import Img3 from '../../assests/images/image3.jpeg';
import Img4 from '../../assests/images/image4.jpeg';
import Img5 from '../../assests/images/image5.webp';
import './slider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderData = [
  { img: Img1, title: '' },
  { img: Img2, title: '' },
  { img: Img3, title: ''},
  { img: Img4, title: '' },
  { img: Img5, title: ''},
];

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const problemsData = [
    {
      img: Img1,
      title: 'Problem 1',
      description: 'Description of the first problem related to non-organic farming.',
    },
    {
      img: Img2,
      title: 'Problem 2',
      description: 'Description of the second problem related to non-organic farming.',
    },
    {
      img: Img3,
      title: 'Problem 3',
      description: 'Description of the third problem related to non-organic farming.',
    },
  ];
  

const Auth = ({ children }) => {
    return (
        <div className="w-full h-full" style={{background:"#ccffcc"}}>
            <h1 className="text-logo">Farmwise</h1>

            <div className="flex w-full md:w-3/3 py-8 mx-auto">
                <div style={{ width:"840px", marginLeft:"8%" }} >

                <Slider {...sliderSettings}>
      {sliderData.map((slide, index) => (
        <div key={index} className="slider-image-container">
          <img className="slider-image" src={slide.img} alt={slide.title} />
          <div className="slider-image-overlay"></div>
          <h3>{slide.title}</h3>
        </div>
      ))}
    </Slider>
                </div>

                <div style={{width:"380px", marginLeft:"20px"}}>
                    {children}
                </div>
            </div>
            <h2 className="fancy-heading">Problems</h2>
            <div className="blocks-container">
  {problemsData.map((problem, index) => (
    <div key={index} className="block">
      <div className="card">
        <p className="description">{problem.description}</p>
      </div>
      <img src={problem.img} alt={problem.title} />
    </div>
  ))}
</div>


        </div>
    )
}

export default Auth