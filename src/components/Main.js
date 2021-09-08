import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import { Row } from 'react-bootstrap'

 class Main extends Component {

  
    render() {
      
        return (
            <>
            <Row>
              {
                    this.props.BeastsData.map( beast => {
                         return <HornedBeast 
                                                  title={beast.title}
                         description={beast.description}
                          imageSrc={beast.image_url} imgName={beast.keyword}
                           imageTitle={beast.title } imageVoting={beast.voteBtn}
                           handleOpen={this.props.handleOpen}

              />})
            } 
                
                </Row>
              
              

            </>
        )
    }
}

export default Main
