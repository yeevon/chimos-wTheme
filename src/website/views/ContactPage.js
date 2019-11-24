import React from "react";

// reactstrap components
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

// core components
import DefaultNavbar from "website/components/Navbars/DefaultNavbar";
import DefaultFooter from "website/components/Footers/DefaultFooter.js";

function ContactPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  document.title += " - Contact Us";
  return (
    <>
      <DefaultNavbar />
      <div className="wrapper">
        <div className="section">
          <Row className="contact-row">
            <Col className="text-center ml-auto mr-auto contat-address" lg="6" md="8">
              <div className="section section-contact-us text-center">
                <Container>
                  <h2 className="title">Need Assistance?</h2>
                  <p className="description">Please send us an email.</p>
                  <InputGroup
                    className={
                      "input-lg" + (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="First Name..."
                      type="text"
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "input-lg" + (lastFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email..."
                      type="text"
                      onFocus={() => setLastFocus(true)}
                      onBlur={() => setLastFocus(false)}
                    ></Input>
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
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </div>
                </Container>
              </div>
            </Col>
            <Col className="ml-auto mr-auto contat-address right" md="8">
              <h4 className="contat-title">Home Office</h4>
              <div className="contact-section">
                <p> 
                  7th Floor, Fortune Towers, <br/>
                  27/29 Adeyemo Alakija Street <br/>
                  Victoria Island, <br/>
                  Lagos
                </p>
              </div>
              <h4 className="contat-title">Branch Office</h4>
              <div className="contact-section">
                <p> 
                  Old Ojo Road, <br/>
                  By Navy Town Junction, <br/>
                  Alakija, Lagos.
                </p>
              </div>
              <div className="container2">
                <h4 className="contact-phone">Or Call Us</h4>
                  <p> 
                    01-4539226 <br/>
                    08099933622 
                  </p>
              </div>
            </Col>
          </Row>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ContactPage;
