import React from "react";

const QuestionCard = ({ question }) => {
  return (
    <div className="question question-1 mt-4 mb-5 px-2 py-5 p-lg-5">
      <div className="row row-cols-1 row-cols-lg-2 g-5">
        <div className="col order-lg-2">
          <div className="blog-img-container text-center text-lg-start">
            <img className="blog-img" src={question.img} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="qna mx-auto">
            <div className="q mb-3">
              <h3>{question.q}</h3>
            </div>
            <div className="a">
              <ul>
                {question.a.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
