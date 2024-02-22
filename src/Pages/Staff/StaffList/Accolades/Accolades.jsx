import styled from "styled-components";
import PropTypes from "prop-types";

import AccoladeItem from "./AccoladeItem";

const Accolades = ({ accolades }) => {
    return (
        <AccoladesStyled>
            {accolades.map((accolade, idx) => {
                return <AccoladeItem key={idx} accolade={accolade} />;
            })}
        </AccoladesStyled>
    );
};

export default Accolades;

// prop-types
Accolades.propTypes = {
    accolades: PropTypes.array.isRequired,
};

const AccoladesStyled = styled.ul`
    padding-left: 20px;
    list-style-type: disc;
`;
