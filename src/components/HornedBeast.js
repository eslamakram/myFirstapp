import React, { Component } from 'react'
import App from '../App'



import { Card, Col, Button } from 'react-bootstrap'

 class HornedBeast extends Component {


  getHandleOpen=()=>{
    let title = this.props.title;
    let imageSrc = this.props.imageSrc;
    let description = this.props.description;
    this.props.handleOpen(title, imageSrc, description )
  }

  getVotes=()=>{
    let stateVote = this.props.stateVote;
    this.props.handleClick(stateVote)
    return stateVote;
  }
  

        
    render() {
       
                return (

<Col >
<Card className="text-center">
  <Card.Header>Title: {this.props.title}</Card.Header>
  <Card.Body>
  <Card.Img variant="top" src={`${this.props.imageSrc}`} alt={this.props.imgName +'  image'} 
                        onClick={this.getHandleOpen} title={this.props.imageTitle} width='100px' height='400px'/>
    <Card.Text>
    Description: {this.props.description}
    </Card.Text>
    <Button variant="primary" onClick={this.getVotes }>Vote</Button>
  </Card.Body>
  <Card.Footer className="text-muted">
    <p>Votes:  {this.getVotes} 
    <img src="https://www.vectorico.com/wp-content/uploads/2019/01/heart-icon-300x300.png" className="heartImg"></img></p>
                </Card.Footer>
</Card>

</Col>
                //  <div className="container">    
                //           <h2> Title: {this.props.title}</h2>
                          
                //           <img  className={"beastImg"} src={`${this.props.imageSrc}`} alt={this.props.imgName +'  image'} 
                //           onClick={this.props.handleClick} title={this.props.imageTitle}/>
                
                //             <p> Description: {this.props.description}</p>
                //               <p>Votes:{this.state.stateVote} 
                //               <img src="https://www.vectorico.com/wp-content/uploads/2019/01/heart-icon-300x300.png" className="heartImg"></img></p>

                // </div>
        )
    }
}

export default HornedBeast
