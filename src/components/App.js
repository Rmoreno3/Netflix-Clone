import React from 'react';
import NavBar from './NavBar';
import Cards from './Cards';
import Tv from '../images/tv.png';
import VideoTv from '../images/videoTv.m4v';
import Tv2 from '../images/tv_2.png';
import VideoTv2 from '../images/videoTv_2.m4v';

function App() {
  return (
    <div>
      <NavBar />
      <Cards Title="adasd" Description="adadasd" Tv={Tv} Video={VideoTv}/>
      <Cards Title="adasd" Description="adadasd" Tv={Tv2} Video={VideoTv2}/>
    </div>
  );
}

export default App;
