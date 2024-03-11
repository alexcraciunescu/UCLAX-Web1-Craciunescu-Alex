import styled from "styled-components";

// Scripts
// import "./scripts/index.js";

// React Components
import ReactComponent from "./ReactComponent";

const Fundamentals = () => {
    return (
        <FundamentalsStyled>
            <h2>JavaScript Fundamentals</h2>

            <ReactComponent title="The Big Lebowski" showDisc={true} />
            <ReactComponent title="The Princess Bride" showDisc={false} />
            <ReactComponent title="As Good as It Gets" />
        </FundamentalsStyled>
    );
};

export default Fundamentals;

const FundamentalsStyled = styled.div``;
