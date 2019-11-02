import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  UncontrolledCarousel,
} from "reactstrap";

// core components

const items = [
  {header: " ",
    caption: "Construction of LPG Refilling Plants"},
  {header: " ",
    caption: "Environmental, Drilling and Pipeline Engineering"},
  {header:  " ",
    caption: "Facilities installation and maintenance"},
  {header:  " ",
    caption: "Procurement of OCTG"}
];

// [
//   {
//     src: require("website/assets/img/chimons_propane_dispenser.jpg"),
//   },
//   {
//     src: require("website/assets/img/chimons_burner.jpg"),
//   },
//   {
//     src: require("website/assets/img/chimons_onSite_2.png"),
//   }
// ];

function CarouselSection() {
  return (
    <>
      <div className="section1" id="carousel">
        <Container>
          <Row className="justify-content-center">
            <Col className="caro-alignment">
              <UncontrolledCarousel
                items={items}
              >
              </UncontrolledCarousel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;
