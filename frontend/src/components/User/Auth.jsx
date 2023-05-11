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
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/297fda97406121.5ec44bd7125cd.gif",
      title: 'Problem 1',
      description: 'Organic farming nurtures the earth, sustains life, and cultivates health',
    },
    {
      img: "https://croplife.org/wp-content/uploads/2021/06/H_CropLife1_v2.gif",
      title: 'Problem 2',
      description: 'Organic farming is not a trend its a tradition of respecting and preserving the land',
    },
    {
      img: "https://2.bp.blogspot.com/-oYAk1Lv4FjU/Wdz7riVpq7I/AAAAAAAAaBc/vMZWZxCWcqIVmwVI7ckfhbNabp9seQlugCLcBGAs/w557-h313/NEEled-1.gif",
      title: 'Problem 3',
      description: 'The choice to support organic farming is a choice for a healthier future',
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
          <img className="slider-image" src={slide.img} alt={slide.title}/>
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
            <h2 className="fancy-heading">Benefits</h2>
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
