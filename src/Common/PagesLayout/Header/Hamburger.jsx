import styled from "styled-components";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Hamburger = ({ toggle }) => {
    return (
        <HamburgerStyled onClick={toggle}>
            <FontAwesomeIcon icon={faBars} />
        </HamburgerStyled>
    );
};

export default Hamburger;

// prop-types
Hamburger.propTypes = {
    toggle: PropTypes.func.isRequired,
};

const HamburgerStyled = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;

    font-size: 30px;
    color: white;

    cursor: pointer;
`;
