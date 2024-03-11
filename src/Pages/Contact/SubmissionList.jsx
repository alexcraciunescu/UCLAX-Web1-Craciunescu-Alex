import styled from "styled-components";
import PropTypes from "prop-types";

// components
import Submission from "./Submission";

const SubmissionList = ({ submissions }) => {
    return (
        <SubmissionListStyled>
            {submissions.map((sub) => {
                return <Submission key={sub.id} sub={sub} />;
            })}
        </SubmissionListStyled>
    );
};

export default SubmissionList;

// prop-types
SubmissionList.propTypes = {
    submissions: PropTypes.array.isRequired,
};

const SubmissionListStyled = styled.div`
    margin: 20px 0px;
`;
