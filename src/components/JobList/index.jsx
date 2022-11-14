// Styled components
import { UlContainer, LiContainer } from "./jobList.styled";

// Components
import JobPost from "../JobPost";

LiContainer.defaultProps = {
  theme: {
    main: "blue"
  }
}

const JobList = (themeColor) => {

  const theme = {
    main: themeColor
  }

  return (
    <UlContainer>
      <LiContainer theme={theme}>
        <JobPost
          company={"TEst"}
          date={"adfasf"}
          link={"https:///fasdf"}
          status={"Pending"} 
        />
      </LiContainer>
      <LiContainer>
        <JobPost
          company={"TEst"}
          date={"adfasf"}
          link={"https:///fasdf"}
          status={"Pending"} 
        />
      </LiContainer>
      <LiContainer>
        <JobPost
          company={"TEst"}
          date={"adfasf"}
          link={"https:///fasdf"}
          status={"Pending"} 
        />
      </LiContainer>
    </UlContainer>
  );
};


export default JobList;