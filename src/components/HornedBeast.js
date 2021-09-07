import React, { Component } from 'react'

 class HornedBeast extends Component {

        constructor(props){
        super(props);
        this.state={
    
          stateVote: 0,
    
        }
    
      }
    
      handleClick = () => {
        this.setState({stateVote: this.state.stateVote + 1 })
    
      }
    render() {
       
                return (

                 <div className="container">    
                          <h2> Title: {this.props.title}</h2>
                          
                          <img  className={"beastImg"} src={`${this.props.imageRsc}`} alt={this.props.imgName +'  image'} onClick={this.handleClick} title={this.props.imageTitle}/>
                
                            <p> Description: {this.props.description}</p>
                              <p>Votes:{this.state.stateVote} <img src="https://www.vectorico.com/wp-content/uploads/2019/01/heart-icon-300x300.png" className="heartImg"></img></p>

                </div>
        )
    }
}

export default HornedBeast
