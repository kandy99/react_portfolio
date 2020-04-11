import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return (
      <div >
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
                alt="avatar"
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Sachin Dobal</h2>
            <h4 style={{ color: 'grey' }}>Web Developer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p style={{fontFamily:"Lucida Console"}}>A passionate learner and self-motivated techie seeking job opportunities in a challenging environment to test my coding and problem-solving skills. Can write highly optimized codes in java, javascript and have a good grasp of Data Structures and Algorithms.</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p style={{fontFamily:"Lucida Console"}}>A-42 | Divine city | Jainagar-3 | Rudrapur | Uttarakhand </p>
            <h5>Phone</h5>
            <p style={{fontFamily:"Lucida Console"}}>(+91) 7310917145</p>
            <h5>Email</h5>
            <p style={{fontFamily:"Lucida Console"}}>dobalsachin97@gmail.com</p>
            <h5>WorkEmail</h5>
            <p style={{fontFamily:"Lucida Console"}}>sachin@jstigers.com</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2 >Education</h2>

            <h5 style={{fontFamily:"Lucida Console"}}>Bachelorette in Electronics and Communication Engineering</h5>
            <Education
              startYear={2015}
              endYear={2019}
              schoolName="Govind Ballabh Pant Institute of Engineering and Technology"
              schoolDescription="(GBPIET is a State Government funded college located at the beautiful land of Uttarakhand)"
            />

            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2 style={{fontFamily:"Lucida Console"}}>Experience</h2>

            <Experience
              startYear={"2019"}
              endYear={"Present"}
              jobName="Web Developer"
              jobDescription=""
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills
              skill="javascript"
              progress={90}
            />
            <Skills
              skill="HTML/CSS"
              progress={60}
            />
            <Skills
              skill="React"
              progress={80}
            />
            <Skills
              skill="NodeJS"
              progress={50}
            />
              <Skills
              skill="MongoDB"
              progress={50}
            />
              <Skills
              skill="Express"
              progress={80}
            />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
