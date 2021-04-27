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

        <Grid col={12} colclassName="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              This is our group project about day planner.Click on the link and it will redirect you!!!
            </CardText>
            <CardActions border>
              <Button onClick={()=> window.open("https://github.com/Sudan20215/Fantastic-Four-Stocks", "_blank")} colored>GitHub</Button>
              <Button  onClick={()=> window.open("https://secret-escarpment-97413.herokuapp.com/", "_blank")} colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
            <CardText>
            This is my project about password generator.Click on the link and it will redirect you!!!
            </CardText>
            <CardActions border>
              <Button onClick={()=> window.open("https://github.com/Sudan20215/password_generator", "_blank")}colored>GitHub</Button>
              <Button onClick={()=> window.open("https://sudan20215.github.io/password_generator/", "_blank")}  colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={6} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
            <CardText>
            This is our group project about news.Click on the link and it will redirect you!!!
            </CardText>
            <CardActions border>
              <Button onClick={()=> window.open("https://github.com/Sudan20215/Project-1-", "_blank")} colored>GitHub</Button>
              <Button onClick={()=> window.open("https://sudan20215.github.io/Project-1-/", "_blank")} colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </Grid>


      )
    
    
   
    }

  }



  render() {
    return(
      <div className="projects">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Github Projects</Tab>
         
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
