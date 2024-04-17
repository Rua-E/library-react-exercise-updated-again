import React from "react";
import Landing from '../components/Landing.jsx'
import Highlights from '../components/Highlights.jsx';
import Featured from '../components/Featured.jsx';
import Discounted from '../components/Discounted.jsx';
import Explore from '../components/Explore.jsx';

const Home = () => {
    return (
        <>
        <Landing></Landing>
          <Highlights></Highlights>
          <Featured></Featured>
          <Discounted></Discounted>
          <Explore></Explore>
        </>
    );
}

export default Home;