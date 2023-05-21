import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
const Blog = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/Tw0GF2C/blog.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello User</h1>
                        <p className="mb-5">Know About Some important Question</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>




            <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <h1> <span className='font-bold '>question-1</span> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            <span className='font-bold'>Access Token</span> are pieces of data that carry just enough information to facilitate the process of determining a user's identity or authorizing a user to perform an action. All in all, tokens are artifacts that allow application systems to perform the authorization and authentication process. <br />
                            Access token and refresh token shouldn't be stored in the local/session storage, because they are not a place for any sensitive data. Hence I would store the access token in a httpOnly cookie and I need it for most of my requests to the Resource Server anyway. <br />
                            <span className='font-bold'>Refresh Token</span> As mentioned, for security purposes, access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to "refresh" the access token. That is, a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <h1> <span className='font-bold '>question-2</span>Compare SQL and NoSQL databases?</h1>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            <span className='font-bold'> SQL databases </span> is a domain-specific language used to query and manage data. It works by allowing users to query, insert, delete, and update records in relational databases. SQL also allows for complex logic to be applied through the use of transactions and embedded procedures such as stored functions or views <br />
                            <span className='font-bold'>NoSQL database</span>NoSQL stands for Not only SQL. It is a type of database that uses non-relational data structures, such as documents, graph databases, and key-value stores to store and retrieve data. NoSQL systems are designed to be more flexible than traditional relational databases and can scale up or down easily to accommodate changes in usage or load. This makes them ideal for use in applications  <br />
                            <span className='font-bold'>Comparison of SQL vs NoSQL</span>SQL databases are relational, and NoSQL databases are non-relational.
                            SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                            SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                            SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                            SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <h1> <span className='font-bold '>question-3</span>What is express js? Nest.is?</h1>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            <span className='font-bold'> Express.js </span> is a popular and lightweight web application framework for Node.js, a JavaScript runtime environment. It provides a set of features and tools that simplify the process of building web applications and APIs.

                            Express.js is known for its simplicity and minimalistic design philosophy, allowing developers to create web applications with ease. It provides a robust set of HTTP utility methods and middleware that enable handling of requests and responses, routing, and various other functionalities. <br />
                            <span className='font-bold'>  Nest.is </span> a progressive, TypeScript-based web application framework built on top of Node.js. It is designed to create efficient, scalable, and maintainable server-side applications by combining the best practices from frameworks like Angular and Express.js.

                            Nest.js follows the modular architecture pattern and emphasizes the use of decorators, dependency injection, and strong typing to provide a robust and structured development experience. It aims to make building server-side applications more organized and maintainable by providing a solid foundation and a set of powerful features.js  <br />
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <h1> <span className='font-bold '>question-4</span>What is MongoDB aggregate and how does it work</h1>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            <span className='font-bold'> In MongoDB ,</span> the aggregate method is a powerful operation used to process and transform data within a collection. It provides a flexible and expressive way to perform complex operations, such as grouping, filtering, sorting, joining, and computing aggregations on documents in a collection.

                            The aggregate method takes an array of pipeline stages as its argument. Each stage represents a specific operation to be performed on the documents. The pipeline stages are executed sequentially, with the output of one stage serving as the input for the next stage. This allows for data transformations and aggregations to be applied in a step-by-step manner. <br />

                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default Blog;