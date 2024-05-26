import React from "react";
import Slider from "react-slick";
const marqueeList = [
  {
    id: "1",
    text: "Library + IPFS + Metadata + Shitcoin + Blockchain + Airdrop",
  },
  {
    id: "2",
    text: "Library + IPFS + Metadata + Shitcoin + Blockchain + Airdrop",
  },
  {
    id: "3",
    text: "Library + IPFS + Metadata + Shitcoin + Blockchain + Airdrop",
  },
  {
    id: "4",
    text: "Library + IPFS + Metadata + Shitcoin + Blockchain + Airdrop",
  },
  {
    id: "5",
    text: "Library + IPFS + Metadata + Shitcoin + Blockchain + Airdrop",
  },
];
export default function Marquee() {
  const settings = {
    dots: false,
    cssEase: "linear",
    slidesToShow: 1,
    variableWidth: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    draggable: false,
    focusOnSelect: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="introMain__slider">
      {marqueeList.map((item, index) => {
        return (
          <div className="introMain__slider-item" key={index}>
            <p>{item.text}</p>
          </div>
        );
      })}
    </Slider>
  );
}
