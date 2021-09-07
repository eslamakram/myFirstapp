import React, { Component } from 'react'
import { Modal , Button , Image
 } from 'react-bootstrap';

 class SelectedBeast  extends Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Image src={`${this.props.imageSrc}`} fluid />
        <p> {this.props.description} </p>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        )
    }
}

export default SelectedBeast 
