import React, { Component } from "react";
import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Form
} from "reactstrap";

export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: "",
            name: "",
            email: "",
            message: ""
        };
    }
    render() {
        return (
            <Container>
                <h2 className="title">Need Assistance?</h2>
                <p className="description">Please send us an email.</p>
                <Form
                    action="https://formspree.io/mjvbndra"
                    method="POST"
                    onSubmit={this.submitForm}
                >
                    <InputGroup
                        className={
                            "input-lg" + ("" ? " input-group-focus" : "")
                        }
                    >
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <i className="now-ui-icons users_circle-08"></i>
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="First Name..." type="text"></Input>
                    </InputGroup>
                    <InputGroup
                        className={
                            "input-lg" + ("" ? " input-group-focus" : "")
                        }
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
                </Form>
            </Container>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        console.log("submit was pressed");
        const form = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };
        const data = new FormData();
        data.append("name", form.name);
        data.append("email", form.email);
        data.append("message", form.message);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}
