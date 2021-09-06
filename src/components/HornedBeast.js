import React, { Component } from 'react'

 class HornedBeast extends Component {

        constructor(props){
        super(props);
        this.state={
    
          stateVote: 0,
    
        }
    
      }
    
      voting = () => {
        this.setState({stateVote: this.state.stateVote + 1
        })
    
      }
    render() {
        
        
        return (
            <>
                <h2> Title: {this.props.title}</h2>
                          
                <img src={`${this.props.imageRsc}`} alt={this.props.imgName +'  image'} onClick={this.voting} title={this.props.imageTitle}/>
                
                <p> Description: {this.props.description}</p>
                <p>Votes:{this.state.stateVote} <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMTyFFzeIHq2b23Uotp6p-NgtdM5j5_zoUKw&usqp=CAU"></img></p>

                {/* <button onClick = {this.voting}> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsMli9qswhAuRZWqB1nENchOg3BASkqBDp9A&usqp=CAU'></img></button> */}

            </>
        )
    }
}

export default HornedBeast
