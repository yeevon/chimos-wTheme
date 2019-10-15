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
            <Row>
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
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("website/assets/img/chimons_pipeline.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("website/assets/img/chimons_tanks_2.jpg") + ")"
                    }}
                  ></div>
                  <h3>
                    OUR SERVICES
                  </h3>
                  <p>
                    At website, we offer a wide range of top notch and 
                    tailor made services and solutions to meet your individual 
                    needs and that are of utmost benefits to our numerous 
                    customers and also create an enabling environment for our 
                    customers and clients to stay ahead and remain competitive 
                    in the industry.
                  </p>
                  <p>
                    website Gas Limited is firmly committed to providing value 
                    to its various stakeholders while our dedication to ensuring 
                    that all industry standards are met as we strive to provide 
                    an unbeatable assurance of quality for our products and services.
                  </p>
                  <h5 style={{
                        fontFamily: "Bradley Hand ITC", 
                        fontWeight: "bold"
                      }}>
                    RETAIL MARKETING AND DISTRIBUTION OF LPG AND ITS ACCESSORIES.
                  </h5>
                  <p>
                    The energy demands of LPG consumers nationwide are on the increase, 
                    which is why at website Gas Limited we are in business to mitigate 
                    these demands by creating unique solutions to bridge the gap between 
                    costs and want and also demand and supply while also achieving 100% 
                    customer satisfaction. 
                  </p>
                  <p>
                    Our retail marketing and distribution unit is saddled with the 
                    responsibility of getting the company’s products to every household 
                    and every user irrespective of location, as well as quantity.
                  </p>
                  <p>
                    Our LPG business supplies propane and butane in both bulk and 
                    cylinders to domestic, commercial, agricultural and industrial 
                    customers for heating, cooking, transportation and industrial processes.
                  </p>
                  <p>
                    We are currently working on building and acquiring several retail 
                    gas services stations across Nigeria and also along the West African 
                    coastline. 
                  </p>
                </Col>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title"
                      style={{
                        marginTop: '40px',
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
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Want to work with us?</h2>
            <p className="description">Your project is very important to us.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
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
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
