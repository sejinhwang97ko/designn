import './App.css';
import React, {useState, useEffect, useCallback, useMemo, Component,useRef} from 'react';
import Chart from './Chart';
import Layout from './maplayout';
import './layout.css';
import './chartlayout.css';
import Topbar from './topbar/Topbar';
import Sidebar from './sidebar/Sidebar';
import './featuredInfo.css';
import Bar from './Bar';
import RadarChart from './RadarChart';

const center = [37.549605, 126.988386]

function App() {
  return (
    <div className="App">
    <Topbar/>
    <div className="container">
         <Sidebar/>
         <div className='others'>
         <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle"><h2>Map</h2></span>
            <div className="featuredMapContainer">
            <Layout/>
            </div>
        </div>
        </div>
<div><br/><br/></div>
        <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle"></span>
            <div className="featuredMapContainer">
            <div style={{ position: "relative", width: "67vw", height: "500px", marginLeft: "5%", alignItems: "center", overflow: "scroll"}}><Chart/></div>            
            </div>
        </div>
        </div>
           <div><br/><br/></div>


           <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle"></span>
            <div className="featuredMapContainer">
            <div style={{ width: "50vw", height: "500px"}}><Bar/></div>  
            </div>
        </div>
        </div>
        <div><br/><br/></div>
         
       

        <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle"></span>
            <div className="featuredMapContainer">
            <div><RadarChart/></div>  
            <div style={{height:"500px"}}></div>
            </div>
        </div>
        </div>


        </div>
</div>      
   </div>
   
  )
  }


export default App;