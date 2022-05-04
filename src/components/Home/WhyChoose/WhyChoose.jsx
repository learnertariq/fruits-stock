import React from "react";
import imgMiddle from "../../../assets/why/fv_tagged_basket.png";
import img1 from "../../../assets/why/healthy_icon.png";
import img2 from "../../../assets/why/affordable_icon.png";
import img3 from "../../../assets/why/organic_icon.png";
import img4 from "../../../assets/why/delivery_icon.png";
import img5 from "../../../assets/why/icon-9.png";
import img6 from "../../../assets/why/icon-10.png";
import "./WhyChoose.css";

const data = [
  {
    title: "Fresh, Juicy and Nutritious",
    desc: "We provide farm fresh fruits and vegetables",
    img: img1,
  },
  {
    title: "Affordable Prices",
    desc: "Our product and services are accessible at unbeatable prices",
    img: img2,
  },
  {
    title: "Hygienic and Organic",
    desc: "We are certified food processers and packagers!",
    img: img3,
  },
  {
    title: "Prompt Delivery",
    desc: "We deliver promptly and safely nationwide",
    img: img4,
  },
  {
    title: "Special Offers Discounts",
    desc: "We reward loyal customers and offer discounts/coupons",
    img: img5,
  },
  {
    title: "Dried Fruits & Vegetables",
    desc: "We have dried products carefully dehydrated for long-term storage without loss of nutrients",
    img: img6,
  },
];

const WhyChoose = () => {
  return (
    <section className="container">
      <h2 className="text-center mb-4">Why Choose Fruits Stock</h2>
      <div className="why-container row align-items-center">
        <div className="section-1 col-12 col-md-5">
          <div className="row flex-column g-3 mx-0">
            {data.slice(0, 3).map((item, index) => (
              <div key={index} className="col">
                <div className="why-card d-flex gap-3 align-items-center">
                  <div className="why-card__img-container">
                    <img className="why-card__img" src={item.img} alt="" />
                  </div>
                  <div className="why-card__body">
                    <h3 className="why-card__heading fs-5">{item.title}</h3>
                    <p className="opacity-75">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section-2 col-12 col-md-2 order-3 order-md-2">
          <img className="middle-img" src={imgMiddle} alt="" />
        </div>
        <div className="section-3 col-12 col-md-5 order-2 order-md-3">
          <div className="row flex-column g-3 mx-0">
            {data.slice(3, 6).map((item, index) => (
              <div key={index} className="col">
                <div className="why-card d-flex gap-3 align-items-center">
                  <div className="why-card__img-container order-md-2">
                    <img className="why-card__img" src={item.img} alt="" />
                  </div>
                  <div className="why-card__body order-md-1 text-md-end">
                    <h3 className="why-card__heading fs-5">{item.title}</h3>
                    <p className="opacity-75">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
