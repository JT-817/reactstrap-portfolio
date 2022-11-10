import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, CardBody, CardText, CardSubtitle } from "reactstrap";

const BlogCard = ({post}) => {
    const {id, title, image, author, summary} = post;
  return (
    <Link to={`${id}`}>
        <Card>
            <CardImg width='100%' src={image} alt={title} />
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>By: {author}</CardSubtitle>
                <CardText>
                    {summary}
                </CardText>
            </CardBody>

        </Card>
    </Link>
    )
}

export default BlogCard