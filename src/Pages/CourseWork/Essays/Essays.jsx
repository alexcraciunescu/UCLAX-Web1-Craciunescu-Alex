import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>

            <SingleEssay
                question={`Q1: Explain the difference between HTML, CSS and JavaScript`}
            >
                <ul>
                    <li>
                        <b> HTML: </b> is one of the most used markup languages
                        that allows for the basic structure of a website. Most
                        websites use some form of HTML because it defines things
                        like headings, paragraphs, lists, links, images, forms,
                        and other elements. HTML is used to organize and present
                        content in a structured manner. (Structure)
                    </li>
                    <p> </p>
                    <li>
                        <b> CSS: </b> is used to enhance and define the visual
                        elements created by HTML. CSS is a style sheet language
                        used to control the presentation and layout, things like
                        colors, fonts, spacing and positioning. The role of CSS
                        is to enhance the aesthetics and layout of a webpage,
                        overall making the design more visually appealing.
                        (Decoration)
                    </li>
                    <p> </p>
                    <li>
                        <b> JavaScript: </b> is the most complex of these 3
                        languages and is used to make everything that was
                        created by HTML and CSS interactive and functional.
                        JavaScript can do things like handle user interactions
                        and perform various tasks. It determines what will
                        happen once the user clicks on a button. JavaScript adds
                        interactivity to web pages which makes them more dynamic
                        and responsive to user actions (DOM manipulation).
                        (Functionality){" "}
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`Q2: What is the difference between Git and Github?`}
            >
                <ul>
                    <p>
                        {" "}
                        <b> Git </b> is a version control system that allows
                        developers to track changes in their code.{" "}
                    </p>
                    <li>Used for version control </li>
                    <li>Installed locally on computer </li>
                    <li>Tracks changes made to a file </li>
                    <li>
                        Git commands include commit, push, pull, checkout,
                        revert{" "}
                    </li>
                    <p> </p>
                    <p>
                        <b> Github </b> is a web-based platform for Git
                        repositories.{" "}
                    </p>
                    <li>Used for hosting Git repositories </li>
                    <li>Cloud-based platform built around the Git tool </li>
                    <li>Provides a web-interface to view file changes </li>
                    <li>
                        Provides features around added security/protection and
                        encourages social interaction around code (however
                        interaction limitations are also available such as
                        minimizing commenting, etc.){" "}
                    </li>
                    <li>
                        {" "}
                        GitHub offers features such as bug tracking, task
                        management, and project management
                    </li>
                    <li>
                        {" "}
                        Allows developers to share code snippets, issues, and
                        documentation{" "}
                    </li>
                    <p> </p>
                    <p>
                        <b>
                            You can use Git without Github, but you cannot use
                            Github without Git.
                        </b>
                    </p>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`Q3: What is the difference between JQuery and React?`}
            >
                <ul>
                    <p>
                        <b>
                            JQuery and React are the two most popular JavaScript
                            libraries/frameworks used for web development.
                        </b>{" "}
                    </p>{" "}
                    <b>JQuery:</b> <p></p>
                    <li>
                        The purpose of jQuery is to make it much easier to use
                        JavaScript on your website{" "}
                    </li>
                    <li> One of the most popular JavaScript libraries </li>
                    <li>
                        {" "}
                        JQuery takes a lot of common tasks that require many
                        lines of JavaScript code to accomplish, and wraps them
                        into methods that you can call with a single line of
                        code{" "}
                    </li>
                    <li>
                        The jQuery library contains the following features:
                        HTML/DOM manipulation, CSS manipulation, HTML event
                        methods, effects and animations, AJAX, utilities
                    </li>
                    <p></p>
                    <b>React:</b> <p></p>
                    <li>
                        React is an open-source JavaScript library, crafted by
                        Facebook
                    </li>
                    <li>
                        It aims to simplify the intricate process of building
                        interactive user interfaces
                    </li>
                    <li>
                        It is a framework that employs Webpack to automatically
                        compile React, HTML (JSX), and ES6 code while handling
                        CSS file prefixes
                    </li>
                    <li>
                        The main concept of React.js is virtual DOM. It is a
                        tree based on JavaScript components created with React
                        that mimics a DOM tree. It does the least amount of DOM
                        manipulation possible to keep your React components up
                        to date.
                    </li>
                    <li>
                        Follows a unidirectional data flow for managing
                        application state
                    </li>
                    <li>
                        Supports server-side rendering for improved performance
                        and SEO
                    </li>
                    <li>
                        Large ecosystem with tools like React Router and Redux
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`Q4: What is the difference between a Front-End and Back-End Developer?`}
            >
                Answer 4 goes here
            </SingleEssay>
            <SingleEssay question={`Q5: Sample question...`}>
                Answer 5 goes here
            </SingleEssay>
            <SingleEssay question={`Q6: Sample question...`}>
                Answer 6 goes here
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
