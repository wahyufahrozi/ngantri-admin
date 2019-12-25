import React, { Component } from "react";
import { login } from "./userFunction";

import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
// http://192.168.6.122:9000/admin/login
// const Swal = require("sweetalert2");
import Swal from "sweetalert2";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // onChange(e) {
  //   this.setState({
  //     [e.target.value]: e.target.value
  //   });
  // }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };
    login(user)
      .then(res => {
        if (res) {
          Swal.fire("Good job!", "Your login is successful!", "success");
          this.props.history.push("dasboard");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops..",
            text: "email or password wrong!"
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.onSubmit} className="form">
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Email"
                          autoComplete="username"
                          value={this.state.email}
                          onChange={this.onChange}
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          name="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          value={this.state.password}
                          onChange={this.onChange}
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button
                            color="primary"
                            type="submit"
                            className="px-4"
                          >
                            Login
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
