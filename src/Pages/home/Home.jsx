

import React from 'react';
import Navbar from '../../Components/navbar/Navbar';
import Sidebar from '../../Components/sidebar/Sidebar';
import Widget from '../../Components/widget/Widget';
import "./home.scss";
import Feature from './../../Components/feature/Feature';
import Charts from './../../Components/Chart/Charts';
import Table  from './../../Components/table/Table';
const Home = () => {
  return (
    <div className='home'>
    
    <Sidebar/>
    <div className="homeContainer">
    
    <Navbar/>
    <div className='widgets'>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
    
    </div>
    
    <div className="charts">
    <Feature/>
    <Charts title="User Spending ( Last 6 Months)" aspect={2/1}/>
    </div>

    <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table/>
        </div>
    </div>
    </div>
  )
}

export default Home