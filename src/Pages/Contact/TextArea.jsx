import styled from "styled-components";
import PropTypes from "prop-types";

const TextArea = ({ id, labelText, onChange, value }) => {
    return (
        <TextAreaStyled className="input-group">
            <label htmlFor={id}>{labelText}</label>
            <textarea id={id} name={id} value={value} onChange={onChange} />
        </TextAreaStyled>
    );
};

export default TextArea;

// prop-types
TextArea.propTypes = {
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

const TextAreaStyled = styled.div`
    textarea {
        height: 150px;
    }
`;
