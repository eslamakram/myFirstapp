import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import BeastsData from '../data.json'

 class Main extends Component {

  
    render() {
      
        return (
            <>
              {
                    BeastsData.map( beast => {
                         return <HornedBeast 
                         handleOpen={this.props.handleOpen} 
                         handleClick={this.props.handleClick}
                         title={beast.title}
                         description={beast.description}
                          imageSrc={beast.image_url} imgName={beast.keyword}
                           imageTitle={beast.title } imageVoting={beast.voteBtn}

              />})
            } 
                
              
              
              

            </>
        )
    }
}

export default Main
