import React, { Component } from 'react'
import { Card, Col } from 'react-bootstrap'

 class HornedBeast extends Component {

  constructor(props){
    super(props);
    this.state={
      stateVote: 0,}}


      handleClick = () => {
        this.setState(
          {stateVote: this.state.stateVote + 1 ,
          })
    
      }

  getHandleOpen=()=>{
    let title = this.props.title;
    let imageSrc = this.props.imageSrc;
    let description = this.props.description;
    this.props.handleOpen(title, imageSrc, description )
  } 
    render() {
       
                return (

<Col style={{ marginLeft: '50px', marginTop:'50px'}}>
<Card className="text-center" style={{width: '250px', marginLeft: '50px'}}>
  <Card.Header>Title: {this.props.title}</Card.Header>
  <Card.Body>
  <Card.Img variant="top" src={`${this.props.imageSrc}`} alt={this.props.imgName +'  image'} 
                        onClick={this.getHandleOpen} title={this.props.imageTitle} width='100px' height='400px'/>
    <Card.Text>
    Description: {this.props.description}
    </Card.Text>
    {/* <Button variant="primary" onClick={this.getVotes }>Vote</Button> */}
  </Card.Body>
  <Card.Footer className="text-muted">
     <>
    <img src="https://www.vectorico.com/wp-content/uploads/2019/01/heart-icon-300x300.png" alt="" onClick={this.handleClick} className="heartImg"></img>
    <p>Votes:  {this.state.stateVote}</p>
    </>
                </Card.Footer>
</Card>

</Col>
               
        )
    }
}

export default HornedBeast
