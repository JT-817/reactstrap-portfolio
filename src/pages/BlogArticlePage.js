import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectPostById } from "../sampleData/blogData";
import BlogArticle from "../features/BlogArticle";

const BlogArticlePage = () => {
    const { postId } = useParams();
    const post = selectPostById(postId)
  return (
    <Container>
        <Row>
            <BlogArticle post={post}/>
        </Row>
    </Container>
  )
};

export default BlogArticlePage;
