import React from "react";
import styled from "styled-components";

/* Images ---------------------------*/
import logoUrl from "./AC Logo Updated.png";

const SiteLogo = () => {
    return (
        <SiteLogoStyled className="SiteLogo">
            <img src={logoUrl} alt="AC Logo Updated" />
        </SiteLogoStyled>
    );
};

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #3d3b3a;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: auto;
    }
`;
