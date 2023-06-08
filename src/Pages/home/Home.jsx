import React from 'react';
import Navbar from '../../Components/navbar/Navbar';
import Sidebar from '../../Components/sidebar/Sidebar';
import Widget from '../../Components/widget/Widget';
import "./home.scss";
import Feature from './../../Components/feature/Feature';
import Charts from './../../Components/Chart/Charts';
import Table  from './../../Components/table/Table';
const Home = ({logOut}) => {
  return (
    <div className='home'>
    
    <Sidebar/>
    <div className="homeContainer">
    
    <Navbar logOut={logOut}/>

    
 

    <div className='chart'>
    <iframe title="PowerBI project" width="1000" height="500" src="https://app.powerbi.com/reportEmbed?reportId=6465d48f-86c2-48c5-aad4-79cf21892e24&autoAuth=true&ctid=aadc0e0a-65ee-471a-99a1-9f86faecbaed" frameborder="0" allowFullScreen="false"></iframe></div>
    </div>
    </div>
  )
}

export default Home