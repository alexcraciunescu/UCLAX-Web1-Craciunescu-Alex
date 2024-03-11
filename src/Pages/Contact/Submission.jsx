import styled from "styled-components";
import PropTypes from "prop-types";

const Submission = ({ sub }) => {
    const { name, email, message } = sub;

    return (
        <SubmissionStyled>
            {name} : {email} : {message}
        </SubmissionStyled>
    );
};

export default Submission;

// prop-types
Submission.propTypes = {
    sub: PropTypes.object.isRequired,
};

const SubmissionStyled = styled.div`
    outline: solid 1px #999;
    padding: 10px;
    margin: 10px 0px;
`;
