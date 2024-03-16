import styled from "styled-components";

import { breakpoints, useMediaQuery } from "@/common/useMediaQuery.jsx";

const ResponsiveDesign = () => {
    const { isMediumAndUp } = useMediaQuery();

    return (
        <ResponsiveDesignStyled>
            <h2>Responsive Design</h2>

            <div className="boxes">
                {isMediumAndUp && <div className="box box1">1</div>}
                <div className="box box2">2</div>
                <div className="box box3">3</div>
            </div>
        </ResponsiveDesignStyled>
    );
};

export default ResponsiveDesign;

const ResponsiveDesignStyled = styled.div`
    @media ${breakpoints.isMediumAndUp} {
        .boxes {
            display: flex;
            justify-content: center;
        }
    }

    .box {
        width: 100%;
        max-width: 200px;
        height: 200px;
        line-height: 200px;
        font-size: 50px;
        text-align: center;
        color: white;
        background-color: teal;
        margin: 10px;
    }
    .box2 {
        border-radius: 40px;
    }
    .box3 {
        border-radius: 100px;
    }

    @media ${breakpoints.isMediumAndUp} {
        .box {
            background-color: indigo;
        }
    }
    @media ${breakpoints.isLargeAndUp} {
        .box {
            background-color: green;
        }
    }
`;
