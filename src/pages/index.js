import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
// import "./../reset.css";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <meta property="description" content="Home" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />
  </div>
);

export default Home;
