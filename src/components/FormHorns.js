import React, { Component } from 'react'
import { Row, Form } from 'react-bootstrap'

class formHorns extends Component {
    render() {
        return (


            <Form style={{ width: '300px', marginLeft: '50px' }}>
                <Row className="align-items-center">
                    <label for="exampleFormControlSelect1"><h6>select the number of horns for your favourite beast</h6></label>
                    <Form.Select aria-label="Default select example" onChange={(e) => { this.props.handleSelectForm(e) }}>
                        <option value="1">One Horn</option>
                        <option value="2">Two Horns</option>
                        <option value="3">Three Horns</option>
                        <option value="100">One Hundred Horns</option>
                    </Form.Select>
                </Row>
            </Form>


        )
    }
}

export default formHorns
