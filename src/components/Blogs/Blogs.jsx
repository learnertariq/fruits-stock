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
                  <ul>
                    <li>
                      JavaScript is a programming language running in any
                      browser with the power of browser engine. And NodeJs is a
                      JavaScript runtime engine.
                    </li>
                    <li>
                      JavaScript runs on the client side. But NodeJs is used to
                      create backend for the client.
                    </li>
                    <li>
                      JavaScript runs on most of the modern browser like Google
                      Chrome, Mozilla Firefox, Apple Safari, Opera, Dolphin
                      Browser etc. But Nodejs uses Google Chrome's V8 engine to
                      parse the JavaScript code to run outside of the browsers
                      and mostly on the servers.
                    </li>
                    <li>
                      Using JavaScript you can add HTML and CSS on the DOM. But
                      using Nodejs you can create API to play with from the
                      server.
                    </li>
                    <li>
                      Angular, React.js, Vue.js, Ember.js, Meteor, etc are
                      JavaScript frameworks/libraries. <br />
                      Express.js, Kao.js, Socket.io, Nest.js, etc are Node.js
                      frameworks.
                    </li>
                    <li>
                      JavaScript is mainly used to create frontend. But Node.js
                      is mainly used to create backend server.
                    </li>
                  </ul>
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
