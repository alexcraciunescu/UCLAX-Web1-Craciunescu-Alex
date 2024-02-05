import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>

            <SingleEssay question={`Q1: Sample question...`}>
                Answer 1 goes here
            </SingleEssay>
            <SingleEssay question={`Q2: Sample question...`}>
                Answer 2 goes here
            </SingleEssay>
            <SingleEssay question={`Q3: Sample question...`}>
                Answer 3 goes here
            </SingleEssay>
            <SingleEssay question={`Q4: Sample question...`}>
                Answer 4 goes here
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
