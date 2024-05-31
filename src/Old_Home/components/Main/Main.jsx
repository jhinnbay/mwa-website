import React from "react";
import Marquee from "./Marquee";
import Form from "./Form";
import { textt } from "../../../Base/Svg";

export default function Main() {
  return (
    <div className="layoutMain">
      <div className="layoutMain__inner">
        <div className="layoutMain__head">
          <div className="layoutMain__logo">
            <img
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              alt="avatar"
            />
          </div>
        </div>
        <div className="layoutMain__text">
          <div className="layoutMain__text-inner">
            {textt}
            <img
              src={process.env.PUBLIC_URL + "/images/image-mob.png"}
              alt="mob"
            />
            <button type="button" className="button primary">
              You Ready To Read?
              <span>
                <img
                  src={process.env.PUBLIC_URL + "/images/button-arrow.svg"}
                  alt="icon"
                />
              </span>
            </button>
          </div>
        </div>
        <Marquee />
        <Form />
        <div className="layoutMain__uniq">
          <img src={process.env.PUBLIC_URL + "/images/image.png"} alt="..." />
          <button type="button" className="button primary">
            You Ready To Read?
            <span>
              <img
                src={process.env.PUBLIC_URL + "/images/button-arrow.svg"}
                alt="icon"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
// {
//   /* <div className="introMain__bg">
// INTERPLANETARY FILESTORAGE BLOCKCHAIN 0x031231132 INTERPLANETARY
// FILESTORAGE BLOCKCHAIN 0x031231132
// </div>
// }
// {
//   /* <div className="introMain__image">
// <img
//   src={process.env.PUBLIC_URL + "/images/image.png"}
//   alt="image"
// />
// <img
//   className="mob"
//   src={process.env.PUBLIC_URL + "/images/image-mob.png"}
//   alt="image"
// />
// <Link href="#" className="button primary">
//   <span>
//     <img src="/images/button-arrow.svg" alt="" />
//   </span>
//   You Ready To Read?
// </Link>
// </div> */
// }
