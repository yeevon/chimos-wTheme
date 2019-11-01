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
import DefaultsNavbar from "website/components/Navbars/DefaultNavbar";
import LandingPageHeader from "website/components/Headers/LandingPageHeader.js";
import DefaultFooter from "website/components/Footers/DefaultFooter.js";

function LandingPage() {
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
  return (
    <>
      <DefaultsNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row className="contact-row">
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who we are?</h2>
                <h5 className="description">
                  We are website Gas Limited, a wholly owned indigenous 
                  Oil and Gas company operating in both the upstream and 
                  downstream sectors of the Nigerian Oil and Gas Industry. 
                  Our penchant for exceeding customer expectations in our 
                  service delivery has enabled us build a reputation as a 
                  world-class organization, dedicated to promoting excellent 
                  service delivery to all our clients.
                </h5>
                <p>
                  As one of the major LPG Off-takers with NLNG, our 
                  business focus is the supply and distribution of 
                  petroleum products nationwide as we have distribution 
                  outlets as well as gas bottling plants in Nigeria 
                  while affiliated to dealers’ the world over with deep 
                  market penetration and LPG terminals.
                </p>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("website/assets/img/chimons_install_propane.jpg") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "We are in the process of constructing a 4000mt 
                      LPG terminal in Delta State that would cater for 
                      the market in that region and beyond." <br></br>
                      <br></br>
                    </p>
                  </div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("website/assets/img/chimons_tanks_2.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title"
                      style={{
                        marginTop: '185px',
                        marginBottom: '20px'
                      }}>Our Partners</h2>
                  <div
                    className="image-container"
                    style={{
                      height: '435px',
                      marginTop: '0px',
                      marginBottom: '5px',
                      backgroundImage:
                        "url(" + require("website/assets/img/chimons_partners.png") + ")",
                    }}
                  ></div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
