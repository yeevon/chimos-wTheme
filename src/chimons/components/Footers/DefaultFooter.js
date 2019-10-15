/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <div className="copyright" id="copyright">
            Copyrights © Chimons Gas Limited 2010. All rights Reserved.
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
