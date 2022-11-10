import { Col, Row } from "reactstrap";
import { selectAllPosts } from "../sampleData/blogData";
import BlogCard from "../features/BlogCard";

const BlogList = () => {
  const blogPost = selectAllPosts();
  return (
    <Row>
      {blogPost.map((post) => {
        return (
          <Col key={post.id}>
            <BlogCard post={post} />
          </Col>
        );
      })}
    </Row>
  );
};

export default BlogList;
