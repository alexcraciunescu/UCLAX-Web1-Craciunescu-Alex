import styled from "styled-components";

import Inset from "@/Common/PagesLayout/Inset.jsx";

import StaffList from "./StaffList/StaffList";

const Staff = () => {
    return (
        <StaffStyled>
            <Inset>
                <h1>Staff</h1>
                <StaffList />
            </Inset>
        </StaffStyled>
    );
};

export default Staff;

const StaffStyled = styled.div``;
