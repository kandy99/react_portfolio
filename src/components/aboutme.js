import React, { Component } from 'react';


class About extends Component {
  render() {
    return (
      <div style={{backgroundColor:"black", color:"pink", height:"100%"}}>    
         <div style={{ width: '75%', marginLeft: '500px', paddingTop: '1em', backgroundColor:"black", color:"pink"}}><h1>Sachin Dobal</h1></div>
        <img
          src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
          alt="avatar"
          style={{ height: '250px', marginLeft: '550px', paddingTop: '1em',backgroundColor:"black", color:"pink" }}
        />
        <h4 style={{ width: '75%', margin: 'auto', paddingTop: '1em', backgroundColor:"black", color:"pink", fontFamily:"Lucida Console"}}>A passionate learner and self-motivated techie seeking job opportunities in a challenging environment to test my coding and problem-solving skills. Can write highly optimized codes in java, javascript and have a good grasp of Data Structures and Algorithms</h4>
      </div>
    )
  }
}

export default About;
