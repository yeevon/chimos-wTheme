import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DefaultNavbar from "website/components/Navbars/DefaultNavbar.js";
import DefaultFooter from "website/components/Footers/DefaultFooter.js";


function ServicePage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  document.title += " - Services";

  return (
    <>
      <DefaultNavbar />
      <div className="wrapper">
        <div className="section section-about-us">
          <Container>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
            <h3>OUR SERVICES</h3>
              <Row>
                <Col md="6">
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("website/assets/img/chimons_pipeline.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col className="service-list" md="5">
                  <div className="top-div">
                    <h3 >
                      &#8227;
                      Upstream and downstream LPG services
                    </h3>
                    <h3>
                      &#8227;
                      LPG Sales – Bulk and retail
                    </h3>
                    <h3>
                      &#8227;
                      Sales of LPG accessories
                    </h3>
                  </div>
                  <div className="bottom div">
                    <h3>
                      &#8227;
                      Cylinder sales of all sizes
                    </h3>
                    <h3>
                      &#8227;
                      LPG transportation and logistics
                    </h3>
                    <h3>
                      &#8227;
                      Reticulation
                    </h3>
                    <h3>
                      &#8227;
                      Storage
                    </h3>
                  </div>
                </Col>
              </Row>
              <Row className="top-margin">
                <Col className="col-centered" md="5">
                  <p>
                    At Chimons, we offer a wide range of top notch and 
                    tailor made services and solutions to meet your individual 
                    needs and that are of utmost benefits to our numerous 
                    customers and also create an enabling environment for our 
                    customers and clients to stay ahead and remain competitive 
                    in the industry.
                  </p>
                  <p>
                    Chimons Gas Limited is firmly committed to providing value 
                    to its various stakeholders while our dedication to ensuring 
                    that all industry standards are met as we strive to provide 
                    an unbeatable assurance of quality for our products and services.
                  </p>
                  <h6 style={{
                        fontFamily: "Bradley Hand ITC", 
                        fontWeight: "bold"
                      }}>
                    RETAIL MARKETING AND DISTRIBUTION OF LPG AND ITS ACCESSORIES.
                  </h6>
                  <p>
                    The energy demands of LPG consumers nationwide are on the increase, 
                    which is why at Chimons Gas Limited we are in business to mitigate 
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
              </Row>
            </div>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ServicePage;
