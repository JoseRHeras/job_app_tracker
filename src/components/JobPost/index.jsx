import { Container } from "./jobpost.styled";

const JobPost = ({company, link, date, status}) => {
    return (
        <Container>
            <p>Company: {company}</p>
            <p>Link: {link}</p>
            <p>Date: {date}</p>
            <p>Status: {status} </p>
          </Container>
    )
}

export default JobPost;