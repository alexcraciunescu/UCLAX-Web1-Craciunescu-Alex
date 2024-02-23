import styled from "styled-components";
import PropTypes from "prop-types";

import TabItem from "./TabItem";

const TabList = ({ tabs, curTab, curTabUpdate }) => {
    return (
        <TabListStyled>
            {tabs.map((tab) => {
                return (
                    <TabItem
                        key={tab.id}
                        tab={tab}
                        curTab={curTab}
                        curTabUpdate={curTabUpdate}
                    />
                );
            })}
        </TabListStyled>
    );
};

export default TabList;

// prop-types
TabList.propTypes = {
    tabs: PropTypes.array.isRequired,
};

const TabListStyled = styled.div``;
