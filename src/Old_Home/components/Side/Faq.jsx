import React, { useState } from "react";
import { Link } from "react-router-dom";
const faqList = [
  {
    id: "1",
    question: "1. What is Mental Wealth Academy?",
    answer: [
      {
        text: (
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            ab cumque, aliquid voluptates incidunt ut quibusdam voluptatibus,
            sit quam impedit nihil laudantium neque dolorem esse, quo eius sint.
          </>
        ),
      },
      {
        text: (
          <>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex id
            aspernatur animi accusamus quae nihil incidunt obcaecati quia
            necessitatibus! Labore?
          </>
        ),
      },
    ],
  },
  {
    id: "2",
    question: "2. What Makes It Beneficial?",
    answer: [
      {
        text: (
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            ab cumque, aliquid voluptates incidunt ut quibusdam voluptatibus,
            sit quam impedit nihil laudantium neque dolorem esse, quo eius sint.
          </>
        ),
      },
      {
        text: (
          <>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex id
            aspernatur animi accusamus quae nihil incidunt obcaecati quia
            necessitatibus! Labore?
          </>
        ),
      },
    ],
  },
  {
    id: "3",
    question: "3. How Can I Be Apart Of This?",
    answer: [
      {
        text: (
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            ab cumque, aliquid voluptates incidunt ut quibusdam voluptatibus,
            sit quam impedit nihil laudantium neque dolorem esse, quo eius sint.
          </>
        ),
      },
      {
        text: (
          <>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex id
            aspernatur animi accusamus quae nihil incidunt obcaecati quia
            necessitatibus! Labore?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex id
            aspernatur animi accusamus quae nihil incidunt obcaecati quia
            necessitatibus! Labore?
          </>
        ),
      },
    ],
  },
];
export default function Faq() {
  const [tab, setTab] = useState(null);
  const setActive = (id) => {
    setTab(id);
    if (id === tab) setTab(null);
    else setTab(id);
  };
  return (
    <div className="introFaq">
      {faqList.map((item, index) => {
        return (
          <FaqItem
            {...item}
            key={index}
            isActive={tab === item.id}
            setActive={() => setActive(item.id)}
          />
        );
      })}
      <div className="introFaq__foot">
        <div className="introFaq__foot-links">
          <Link to="/whitepaper"> Whitepaper </Link>
          <a href="#"> Discord </a>
          <a href="#"> Contract </a>
        </div>
      </div>
    </div>
  );
}
const FaqItem = (props) => {
  return (
    <div
      className="introFaq__item"
      onClick={() => {
        props.setActive(!props.isActive);
      }}
    >
      <div
        className={"introFaq__item-head " + (props.isActive ? "active" : "")}
      >
        <h5>{props.question}</h5>
      </div>
      <div
        className={"introFaq__item-body " + (props.isActive ? "active" : "")}
      >
        {props.answer.map((item, index) => {
          return <p key={index}>{item.text}</p>;
        })}
      </div>
    </div>
  );
};
