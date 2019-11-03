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
  {
    key: 1,
    header: " ",
    caption: "Construction of LPG Refilling Plants"},
  {
    key: 2,
    header: " ",
    caption: "Environmental, Drilling and Pipeline Engineering"},
  {
    key: 3,
    header:  " ",
    caption: "Facilities installation and maintenance"},
  {
    key: 4  ,
    header:  " ",
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
  let section = 'section';
  console.log('browser name: ' + navigator.product)
  return (
    <>
      <div className={section} id="carousel">
        <Container>
          <Row className="justify-content-center">
            <Col>
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
