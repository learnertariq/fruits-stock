import React from "react";
import "./Blogs.css";
import jsVsNodeJsImg from "../../assets/blogs/js-vs-nodejs.png";
import nodejsMongoImg from "../../assets/blogs/nodeMongo.png";
import sqlVsNosqlImg from "../../assets/blogs/sql-vs-nosql.png";
import jwtImg from "../../assets/blogs/jwt.png";

const Blogs = () => {
  return (
    <section className="container">
      <h1 className="text-center mt-2">Blogs</h1>
      <div className="qnaContainer">
        {/* Question */}
        <div className="question question-1 mt-4 mb-5 px-2 py-5 p-lg-5">
          <div className="row row-cols-1 row-cols-lg-2 g-5">
            <div className="col order-lg-2">
              <div className="blog-img-container text-center text-lg-start">
                <img className="blog-img" src={jsVsNodeJsImg} alt="" />
              </div>
            </div>
            <div className="col">
              <div className="qna mx-auto">
                <div className="q mb-3">
                  <h3>Difference between JavaScript and NodeJs</h3>
                </div>
                <div className="a">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugit quibusdam perspiciatis dolor fuga facere, nostrum
                  temporibus facilis deserunt odio modi omnis excepturi quia hic
                  ipsam sapiente ullam iusto obcaecati molestias molestiae harum
                  impedit asperiores repellat. Error, assumenda! Necessitatibus
                  assumenda omnis dolorum pariatur incidunt, voluptatibus
                  cupiditate. Aperiam ratione quo debitis eligendi. Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Fugit quibusdam
                  perspiciatis dolor fuga facere, nostrum temporibus facilis
                  deserunt odio modi omnis excepturi quia hic ipsam sapiente
                  ullam iusto obcaecati molestias molestiae harum impedit
                  asperiores repellat. Error, assumenda! Necessitatibus
                  assumenda omnis dolorum pariatur incidunt, voluptatibus
                  cupiditate. Aperiam ratione quo debitis eligendi.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Question */}
        <div className="question question-2 mt-4 mb-5 px-2 py-5 p-lg-5">
          <div className="row row-cols-1 row-cols-lg-2 g-5">
            <div className="col order-lg-2">
              <div className="blog-img-container text-center text-lg-start">
                <img className="blog-img" src={nodejsMongoImg} alt="" />
              </div>
            </div>
            <div className="col">
              <div className="qna mx-auto">
                <div className="q mb-3">
                  <h3>When to use Nodejs and when to use MongoDB</h3>
                </div>
                <div className="a">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugit quibusdam perspiciatis dolor fuga facere, nostrum
                  temporibus facilis deserunt odio modi omnis excepturi quia hic
                  ipsam sapiente ullam iusto obcaecati molestias molestiae harum
                  impedit asperiores repellat. Error, assumenda! Necessitatibus
                  assumenda omnis dolorum pariatur incidunt, voluptatibus
                  cupiditate. Aperiam ratione quo debitis eligendi. Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Fugit quibusdam
                  perspiciatis dolor fuga facere, nostrum temporibus facilis
                  deserunt odio modi omnis excepturi quia hic ipsam sapiente
                  ullam iusto obcaecati molestias molestiae harum impedit
                  asperiores repellat. Error, assumenda! Necessitatibus
                  assumenda omnis dolorum pariatur incidunt, voluptatibus
                  cupiditate. Aperiam ratione quo debitis eligendi.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Question */}
        <div className="question question-3 mt-4 mb-5 px-2 py-5 p-lg-5">
          <div className="row row-cols-1 row-cols-lg-2 g-5">
            <div className="col order-lg-2">
              <div className="blog-img-container text-center text-lg-start">
                <img className="blog-img" src={sqlVsNosqlImg} alt="" />
              </div>
            </div>
            <div className="col">
              <div className="qna mx-auto">
                <div className="q mb-3">
                  <h3>Difference between SQL and NOSQL databases</h3>
                </div>
                <div className="a">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugit quibusdam perspiciatis dolor fuga facere, nostrum
                  temporibus facilis deserunt odio modi omnis excepturi quia hic
                  ipsam sapiente ullam iusto obcaecati molestias molestiae harum
                  impedit asperiores repellat. Error, assumenda! Necessitatibus
                  assumenda omnis dolorum pariatur incidunt, voluptatibus
                  cupiditate. Aperiam ratione quo debitis eligendi. Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Fugit quibusdam
                  perspiciatis dolor fuga facere, nostrum temporibus facilis
                  deserunt odio modi omnis excepturi quia hic ipsam sapiente
                  ullam iusto obcaecati molestias molestiae harum impedit
                  asperiores repellat. Error, assumenda! Necessitatibus
                  assumenda omnis dolorum pariatur incidunt, voluptatibus
                  cupiditate. Aperiam ratione quo debitis eligendi.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Question */}
        <div className="question question-4 mt-4 mb-5 px-2 py-5 p-lg-5">
          <div className="row row-cols-1 row-cols-lg-2 g-5">
            <div className="col order-lg-2">
              <div className="blog-img-container text-center text-lg-start">
                <img className="blog-img" src={jwtImg} alt="" />
              </div>
            </div>
            <div className="col">
              <div className="qna mx-auto">
                <div className="q mb-3">
                  <h3>What's the puspose of JWT and how does it work</h3>
                </div>
                <div className="a">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugit quibusdam perspiciatis dolor fuga facere, nostrum
                  temporibus facilis deserunt odio modi omnis excepturi quia hic
                  ipsam sapiente ullam iusto obcaecati molestias molestiae harum
                  impedit asperiores repellat. Error, assumenda! Necessitatibus
                  assumenda omnis dolorum pariatur incidunt, voluptatibus
                  cupiditate. Aperiam ratione quo debitis eligendi. Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Fugit quibusdam
                  perspiciatis dolor fuga facere, nostrum temporibus facilis
                  deserunt odio modi omnis excepturi quia hic ipsam sapiente
                  ullam iusto obcaecati molestias molestiae harum impedit
                  asperiores repellat. Error, assumenda! Necessitatibus
                  assumenda omnis dolorum pariatur incidunt, voluptatibus
                  cupiditate. Aperiam ratione quo debitis eligendi.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
