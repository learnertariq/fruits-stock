import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./BlogPosts.css";

const data = [
  {
    img: "https://i.ibb.co/y50Lpsw/guava.webp",
    title: "Guavas are nutritious",
    desc: "Guavas are tropical trees originating in Central America. Their fruits are oval in shape with light green or yellow skin and contain edible seeds. What’s more, guava leaves are used as an herbal tea and the leaf extract as a supplement. Guava fruits are amazingly rich in antioxidants, vitamin C, potassium, and fiber.",
  },
  {
    img: "https://i.ibb.co/yPyV0cL/coconut.webp",
    title: "A healthy food",
    desc: "Coconut is the fruit of the coconut palm (Cocos nucifera), which is commonly used for its water, milk, oil, and tasty meat. Coconut trees are considered the most naturally widespread fruit tree on the planet and are native to Southeast Asia and the islands between the Indian and Pacific oceans (1Trusted Source).",
  },
  {
    img: "https://i.ibb.co/qmHyT77/grape.webp",
    title: "Grapes are good",
    desc: "In addition to protecting your immune system, research shows that grapefruit consumption is associated with higher intake of magnesium, potassium, dietary fiber, and improved diet quality ( 2 ). Fiber and antioxidant-rich fruits like grapefruit may help protect against heart disease and stroke ( 3 , 4 ).",
  },
];

const BlogPosts = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Most Popular Blog Posts</h2>
      <div className="all-posts row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {data.map((p, i) => (
          <div key={i} className="col">
            <Card className="h-100 border-0">
              <Card.Img
                className="d-none d-lg-block"
                variant="top"
                src={p.img}
              />
              <Card.Body className="">
                <Row>
                  <Col xs={3}>
                    <h6 className="text-center border-end border-3 border-warning">
                      <span className="fs-1 text-danger">6</span>
                      <br />
                      <span className="text-uppercase text-info">Apr</span>
                    </h6>
                  </Col>
                  <Col xs={9}>
                    <Card.Title className="mb-2">{p.title}</Card.Title>
                    <Card.Text className="opacity-75 mb-1">
                      {p.desc.slice(0, 100)}
                    </Card.Text>
                    <Button
                      variant="link"
                      className="link-btn text-decoration-none text-uppercase text-secondary fw-bold opacity-75 ps-0"
                    >
                      Read more
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;
