import React from "react";
import "./Blogs.css";
import jsVsNodeJsImg from "../../assets/blogs/js-vs-nodejs.png";
import nodejsMongoImg from "../../assets/blogs/nodeMongo.png";
import sqlVsNosqlImg from "../../assets/blogs/sql-vs-nosql.png";
import jwtImg from "../../assets/blogs/jwt.png";
import QuestionCard from "./QuestionCard";

const data = [
  {
    q: "Difference between JavaScript and NodeJs",
    img: jsVsNodeJsImg,
    a: [
      "JavaScript is a programming language running in any browser with the power of browser engine. And NodeJs is a JavaScript runtime engine.",
      "JavaScript runs on the client side. But NodeJs is used to create backend for the client.",
      "JavaScript runs on most of the modern browser like Google Chrome, Mozilla Firefox, Apple Safari, Opera, Dolphin Browser etc. But Nodejs uses Google Chrome's V8 engine to parse the JavaScript code to run outside of the browsers and mostly on the servers.",
      " Using JavaScript you can add HTML and CSS on the DOM. But using Nodejs you can create API to play with data from the server.",
      "Angular, React.js, Vue.js, Ember.js, Meteor, etc are JavaScript frameworks/libraries. Express.js, Kao.js, Socket.io, Nest.js, etc are Node.js frameworks.",
      "JavaScript is mainly used to create frontend. But Node.js is mainly used to create backend server.",
    ],
  },
  {
    q: "When to use Nodejs and when to use MongoDB",
    img: nodejsMongoImg,
    a: [
      "Node.js is a JavaScript runtime engine used on the server. And MongoDB is NOSQL database especially used with MERN stack development.",
      "Node.js is used to create the backend of our web page so than we can call api. MongoDB is used when we need to store data on the database persistently to access the data later",
      "to use MongoDB we need to create a server using frameworks or runtime engine like Node.js",
    ],
  },
  {
    q: "Difference between SQL and NOSQL databases",
    img: sqlVsNosqlImg,
    a: [
      "SQL (Structured Query Language) is RDBMS/Relational Database Management System. And NOSQL (Non Structured Query Language) is Non relational Database Management system.",
      "SQL exists around for over 40 years. But NOSQL is far newer compared to SQL",
      "SQL vertically scalable. But NOSQL is horizontally scalable",
      "You can rarely change data structure of SQL schema, because SQL has predefined of fixed of static schema. But You can change the schema of NOSQL databases, because it's schema is dynamic.",
      "If you want to store data like hierarchy, NOSQL is the best choice for this.",
      "But If you want to store your data in complex queries. It is better to use any of the SQL databases",
    ],
  },
  {
    q: "What's the puspose of JWT and how does it work",
    img: jwtImg,
    a: [
      "Node.js is a JavaScript runtime engine used on the server. And MongoDB is NOSQL database especially used with MERN stack development.",
    ],
  },
];

const Blogs = () => {
  return (
    <section className="container">
      <h1 className="text-center mt-2">Blogs</h1>
      <div className="qnaContainer">
        {data.map((question, index) => (
          <QuestionCard key={index} question={question} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
