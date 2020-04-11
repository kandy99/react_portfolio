import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '300px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >1</CardTitle>
            <CardText>
             A simple calculator using reactjs
            </CardText>
            <CardActions border>
              <Button href="https://github.com/dobal19/SimpleCalculatorReactJS" colored target="_blank">GitHub</Button>
              <Button colored>CodePen</Button>
              <Button href="https://dobal19simplecalculatorreactjs.netlify.com/" colored target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '300px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >2</CardTitle>
            <CardText>
              A Simple TO-DO list
            </CardText>
            <CardActions border>
              <Button href="https://github.com/dobal19/to-do-list" colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button href="https://to-do-list-webpage.netlify.com/" colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>I dont have any projects in angular yet</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>I dont have any project in VueJS yet</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'green', height: '300px', background: 'url(https://pluspng.com/img-png/logo-mongodb-png-mongodb-logo-anything-but-the-simplest-of-web-applications-requires-a-database-to-store-and-serve-content-from-choosing-the-right-database-and-structuring-413.png) center / cover'}} >1</CardTitle>
          <CardText>
          This is an app made with an objective to get used to with MERN applications
          </CardText>
          <CardActions border>
            <Button href="https://github.com/dobal19/MERN_STACK_DEMO_APP" colored target="_blank">GitHub</Button>
            <Button colored>CodePen</Button>
            <Button href="https://merndemodobal19.herokuapp.com/"colored target="_blank">Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card></div>
      )
    }

  }



  render() {
    return(
      <div style={{ background:"url(https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg)",backgroundposition: "center",
      backgroundrepeat: "no-repeat",
      backgroundsize: "cover",
      height:"100%"}}>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} style={{backgroundColor:'#FF7F04'}}ripple>
          <Tab><strong>React</strong></Tab>
          <Tab><strong>Angular</strong></Tab>
          <Tab><strong>VueJS</strong></Tab>
          <Tab><strong>MongoDB</strong></Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
