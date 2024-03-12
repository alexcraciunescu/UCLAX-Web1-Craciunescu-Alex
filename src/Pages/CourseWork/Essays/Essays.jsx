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
                        <b>
                            {" "}
                            Git is a version control system that allows
                            developers to track changes in their code.
                        </b>{" "}
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
                        <b>
                            {" "}
                            Github is a web-based platform for Git repositories.
                        </b>{" "}
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
                    <p>
                        <b>JQuery:</b>
                    </p>
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
                    <p>
                        {" "}
                        <b>React:</b>{" "}
                    </p>
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
                <ul>
                    <p>
                        <b>Front-End Developer:</b>
                    </p>
                    <li>
                        {" "}
                        Creates a smooth and engaging website that stays
                        consistent across mobile and web apps (including
                        different browsers){" "}
                    </li>
                    <li>
                        Responsible for the client-side of web development and
                        the user’s experience when they click on a website
                    </li>
                    <li>
                        Translates website design into functional code by using
                        HTML, CSS and JavaScript{" "}
                    </li>
                    <li>
                        {" "}
                        They are focused on designing web pages, implementing
                        responsive layouts, optimizing performance, and ensuring
                        cross-browser compatibility
                    </li>
                    <li>
                        They conduct usability and quality testing to fix any
                        bugs and use design programs to lay out a prototype for
                        the website
                    </li>
                    <li>
                        Work alongside designers, back-end developers and
                        quality assurance analysts
                    </li>
                    <li>
                        Typically have a strong understanding of HTML, CSS,
                        JavaScript, Node.js, AJAX, Design frameworks, Libraries
                        (ex. AngularJS, jQuery, React), API’s
                    </li>
                    <p>
                        <p></p>
                        <b>Back-End Developer:</b>
                    </p>
                    <li>
                        Creates the structure that allows the website to
                        function as needed
                    </li>
                    <li>
                        Makes sure all the components work together behind the
                        scenes including handling architecture, back-end logic,
                        data storage and security
                    </li>
                    <li>
                        They deal with server-side logic, databases and server
                        configurations
                    </li>
                    <li>
                        Their tasks include designing and developing API’s,
                        managing databases, handling user authentication, and
                        ensuring server security and scalability
                    </li>
                    <li>
                        Troubleshoot issues and resolve them, while
                        communicating them to important stakeholders
                    </li>
                    <li>
                        Create and oversee testing schedules to optimize user
                        interface and experience, ensuring optimal display on
                        various browsers and devices
                    </li>
                    <li>
                        Typically work with languages such as Python, Ruby,
                        Java, PHP, SQL or JavaScript
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`Q5: In React, what are the different ways we can link to resources (e.g. Root Relative vs Document Relative)?`}
            >
                <ul>
                    <p>
                        <b>Root Relative:</b>
                    </p>
                    <p>
                        Root-relative hyperlinks are a subset of relative
                        hyperlinks in which all the links are assumed to start
                        from the root folder (domain name) of the site. Root
                        relative paths start with a forward slash (/) and are
                        resolved from the root of the domain. With root-relative
                        paths, the browser will look for the resources starting
                        from the root directory of the domain. Because they
                        refer to the root of the site rather than the current
                        location of the page they are placed in, they work
                        regardless of where the file is placed as long as they
                        remain under the right domain.
                    </p>
                    <p></p>
                    <p>
                        <b>Document Relative:</b>
                    </p>
                    <p>
                        Document relative paths are relative to the current
                        document's location. These paths do not start with a
                        forward slash. They are resolved based on the current
                        URL of the document. With document-relative paths, the
                        browser will look for resources relative to the current
                        URL or location of the HTML document.
                        <p></p>
                        <p>
                            Relative hyperlinks are addresses that are relative
                            to the current domain or location. They only contain
                            the name of the target page prefixed with any
                            necessary folder moves (for example, default.html).
                            The browser sees that this is a relative hyperlink
                            and adds the domain and folder location of the
                            current page to the beginning of the link to
                            complete it. If you use relative hyperlinks and you
                            want to navigate from a page stored in one folder to
                            a page stored in a different folder you add the
                            folder prefixes to the hyperlink. For instance, a
                            relative link from a page in Folder 1 to a page in
                            Folder 2 would be ../Folder 2/page.html, where the
                            ../ tells the browser you want to go out of the
                            current folder and into a new one. When you create
                            hyperlinks between pages in Expression Web 3, they
                            are always inserted as relative links so that the
                            application can easily update them if you choose to
                            move files around. However, if you move the files
                            around on your computer outside of the Expression
                            Web program, the hyperlinks break.
                        </p>
                    </p>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`Q6: What is the difference between jpg, gif, png and svg images?`}
            >
                <ul>
                    <p>
                        <b>jpg:</b>
                    </p>
                    <li>Stands for Joint Photographic Experts Group</li>
                    <li>Best used for photographs</li>
                    <li>Millions of colors</li>
                    <li>
                        There are two types of jpg compression–lossy and
                        lossless
                    </li>
                    <li>
                        In RAW format, photos are large and ungainly–loaded down
                        with lots of data
                    </li>
                    <li>
                        Jpg’s take all that information and compress it into
                        smaller file sizes without loss of image quality to the
                        naked eye
                    </li>
                    <p></p>
                    <p>
                        <b>gif:</b>
                    </p>
                    <li>Stands for Graphics Interchange Format</li>
                    <li>Best used for animations</li>
                    <li>
                        Often used for graphics with limited colors (e.g.,
                        logos, icons), and images with transparency
                    </li>
                    <li>
                        Like png files, gifs are inherently lossless but they
                        actually take up a lot more space than png images
                    </li>
                    <p></p>
                    <p>
                        <b>png:</b>
                    </p>
                    <li>Stands for Portable Network Graphics</li>
                    <li>Meant to be the best of both worlds (jpg, gif)</li>
                    <li>
                        Ideal for web graphics, logos, illustrations, and images
                        with transparency requirements
                    </li>
                    <li>
                        Png files are inherently lossless, which means if you
                        were to save the exact same file as a jpg and png, the
                        png file would be larger
                    </li>
                    <li>
                        You can re-save a png file over and over again without
                        any degradation of the image
                    </li>
                    <p></p>
                    <p>
                        <b>svg:</b>
                    </p>
                    <li>Stands for Scalable Vector Graphics</li>
                    <li>
                        Often used for graphics that need to scale without loss
                        of quality, such as logos, icons, illustrations, and
                        graphics with dynamic or interactive elements
                    </li>
                    <li>
                        Svg files are vector-based, meaning you can scale them
                        to any size without any loss in quality. No other file
                        type looks as sharp as an svg
                    </li>
                    <li>
                        They are actually code–a series of mathematical
                        equations that define shapes, colors, and size. This is
                        why they retain their high quality no matter how much
                        you scale them
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`Q7: Define the following Agile roles: Product Manager, Product Owner, Business Analyst, Scrum Master, UX Designer, Developer/Engineer, QA/SDET, and DevOps`}
            >
                <ul>
                    <p>
                        <b>Product Manager:</b>
                    </p>
                    <p>
                        Product Managers are responsible for the overall vision,
                        strategy, and roadmap of the product. They are tasked
                        with creating an effective business strategy, creating
                        requirements for the product's development and
                        negotiating with stakeholders. They work closely with
                        stakeholders, customers, and the development team to
                        define and prioritize features, manage the product
                        backlog, and ensure that the product aligns with
                        business goals and user needs.
                    </p>
                    <p></p>
                    <p>
                        <b>Product Owner:</b>
                    </p>
                    <p>
                        The Product Owner is a member of the development team
                        who represents the stakeholders and acts as a liaison
                        between the stakeholders and the development team. They
                        are responsible for translating product managers’
                        strategies to tasks for development, managing and
                        prioritizing the product backlog, and learning the
                        market and customers’ needs. The Product Owner makes
                        decisions about what features to build and in what order
                        and they staying accessible to development to answer
                        questions.
                    </p>
                    <p>
                        <b>Business Analyst:</b>
                    </p>
                    <p>
                        A Business Analyst is responsible for analyzing the
                        business needs of the organization and translating them
                        into requirements that can be understood by the
                        development team. They constantly analyze data, looking
                        for issues that might have downstream impacts. They
                        research technology advancements to modernize systems
                        and processes within the organization. They also will
                        gather and document requirements, facilitate
                        communication between stakeholders and the development
                        team, and ensure that the delivered product meets the
                        business objectives.
                    </p>
                    <p>
                        <b>Scrum Master:</b>
                    </p>
                    <p>
                        The Scrum Master is a servant-leader who facilitates the
                        Scrum process and ensures that the development team
                        adheres to Agile principles and practices. They keep the
                        team organized, on track and focused on what matters.
                        They serve as a bridge between product management and
                        development and clear any obstacles to protect the team
                        from distractions. They also help the team improve their
                        processes and collaboration by implementing Agile
                        methodologies and foster a culture of continuous
                        improvement.
                    </p>
                    <p>
                        <b>UX Designer:</b>
                    </p>
                    <p>
                        The UX Designer is responsible for designing the overall
                        user experience of the product, including the interface,
                        interaction flows, and usability. They conduct user
                        research, interviews and surveys, and then use this
                        information to create sitemaps, customer journey maps,
                        wireframes, and prototypes. They work closely with
                        stakeholders and developers to ensure that the product
                        meets the needs and expectations of its users, and they
                        make sure the user interface is intuitive and
                        user-friendly.
                    </p>
                    <p>
                        <b>Developer/Engineer:</b>
                    </p>
                    <p>
                        Developers or Engineers are responsible for developing,
                        coding, installing, and maintaining software systems.
                        They form a key part of the IT team and may be required
                        to modify existing software products or develop entirely
                        new resources. They write code, test software, and
                        collaborate with other team members to deliver
                        high-quality, working software.
                    </p>
                    <p>
                        <b>QA/SDET:</b>
                    </p>
                    <p>
                        QA (Quality Assurance) or SDET (Software Development
                        Engineer in Test) professionals are responsible for
                        ensuring the quality of the product by testing software,
                        identifying errors, and providing feedback to the
                        development team. They debug scripts and identify system
                        flaws as well as create test plans. They execute test
                        cases, automate tests where possible, and work to
                        continuously improve the testing process.
                    </p>
                    <p>
                        <b>DevOps:</b>
                    </p>
                    <p>
                        The primary role of a DevOps Engineer is to introduce
                        methodologies to balance needs throughout the software
                        development life cycle, processes, and tools, from
                        coding to development to maintenance and updates. They
                        are focused on automating the software delivery process
                        and increasing the speed and reliability of software
                        deployments. DevOps professionals are responsible for
                        building and maintaining the tools and infrastructure
                        that enable continuous integration, delivery, and
                        deployment. They also work to improve the reliability,
                        scalability, and security of the production environment.
                    </p>
                </ul>
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
