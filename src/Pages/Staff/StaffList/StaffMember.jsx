import styled from "styled-components";
import PropTypes from "prop-types";

import Accolades from "./Accolades/Accolades";

const StaffMember = ({ member }) => {
    const { name, image, yearStarted, accolades } = member;

    return (
        <StaffMemberStyled>
            <img src={image} alt={name} />
            <h3>{name}</h3>

            <div className="bottom">
                <p>
                    <b>Year Started:</b> {yearStarted}
                </p>

                <Accolades accolades={accolades} />
            </div>
        </StaffMemberStyled>
    );
};

export default StaffMember;

// prop-types
StaffMember.propTypes = {
    member: PropTypes.object.isRequired,
};

const StaffMemberStyled = styled.div`
    background-color: #eeeeee;

    img {
        width: 100%;
        display: block;
    }

    .bottom {
        padding: 20px;
    }

    h3 {
        color: white;
        background-color: #014444;
        padding: 5px 10px;
        margin: 0px;
    }
`;
