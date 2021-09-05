import React, { Component } from 'react'

 class HornedBeast extends Component {

    constructor(props) {
        super(props);
    }
    render() {

        
        return (
            <>
                <h2> Title: {this.props.title}</h2>
                          
                <img src={`${this.props.imageRsc}`} alt={this.props.imgName +'  image'} title={this.props.imageTitle}/>
                
                <p> Description: {this.props.description}</p>

            </>
        )
    }
}

export default HornedBeast
