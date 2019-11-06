import React, { Component } from "react";
import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";

export default class ContactForm extends Component {
    render() {
        return (
            <Container>
                <h2 className="title">Need Assistance?</h2>
                <p className="description">Please send us an email.</p>
                <InputGroup
                    className={"input-lg" + ("" ? " input-group-focus" : "")}
                >
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="First Name..." type="text"></Input>
                </InputGroup>
                <InputGroup
                    className={"input-lg" + ("" ? " input-group-focus" : "")}
                >
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email..." type="text"></Input>
                </InputGroup>
                <div className="textarea-container">
                    <Input
                        cols="80"
                        name="name"
                        placeholder="Type a message..."
                        rows="4"
                        type="textarea"
                    ></Input>
                </div>
                <div className="send-button">
                    <Button
                        block
                        className="btn-round"
                        color="info"
                        href="#pablo"
                        size="lg"
                    >
                        Send Message
                    </Button>
                </div>
            </Container>
        );
    }
}
