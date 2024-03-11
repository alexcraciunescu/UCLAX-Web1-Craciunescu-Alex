import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

// components
import Inset from "@/Common/PagesLayout/Inset.jsx";
import SubmissionList from "./SubmissionList";
import Form from "./Form";

const Contact = () => {
    const [submissions, setSubmissions] = useState([]);

    const getSubmissions = async () => {
        const { data } = await axios.get("http://localhost:4059/submissions");
        setSubmissions(data);
    };

    useEffect(() => {
        getSubmissions();
    }, []);

    return (
        <ContactStyled>
            <Inset>
                <h1>Contact</h1>
                <Form getSubmissions={getSubmissions} />
                <SubmissionList submissions={submissions} />
            </Inset>
        </ContactStyled>
    );
};

export default Contact;

const ContactStyled = styled.div``;
