import styled from "styled-components";
import PropTypes from "prop-types";

const AccoladeItem = ({ accolade }) => {
    return <AccoladeItemStyled>{accolade}</AccoladeItemStyled>;
};

export default AccoladeItem;

// prop-types
AccoladeItem.propTypes = {
    accolade: PropTypes.string.isRequired,
};

const AccoladeItemStyled = styled.li``;
