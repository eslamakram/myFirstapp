import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import BreastsData from '../data.json'

 class Main extends Component {

  
    render() {
      
        return (
            <>
              {
                    BreastsData.map( element => {
                         return <HornedBeast title={element.title}  description={element.description}
              imageRsc={element.image_url} imgName={element.keyword} imageTitle={element.title } imageVoting={element.voteBtn}
              />})
            } 
                
              
              
              

            </>
        )
    }
}

export default Main
