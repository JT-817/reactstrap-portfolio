import { Row, Col } from "reactstrap";


const BlogArticle = ({ post }) => {
  const { image, title, author, article } = post;
  return (
    <Row>
      <Col className="text-center">
        <h1>{title}</h1>
        <h6>
          By:{author}
        </h6>
        <img className="article-img" src={image} alt={title} />
        <hr />
        <p>{article}</p>
      </Col>
    </Row>
  );
};

export default BlogArticle;
