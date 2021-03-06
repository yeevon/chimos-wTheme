import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"sticky-top navbar-default" + navbarColor} color="info" expand="lg">
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
              href="#pablo"
              id="navbarDropdown"
              tag="a"
              onClick={e => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby="navbarDropdown">
              <DropdownItem href="/chimos-wTheme/index" tag="a">
                Home
              </DropdownItem>
              <DropdownItem href="/chimos-wTheme/services" tag="a">
                Services
              </DropdownItem>
              <DropdownItem href="/chimos-wTheme/contact-us" tag="a">
                Contact Us
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem header tag="a">
                Social Media
              </DropdownItem>
              <DropdownItem>
                <NavLink
                  href="https://twitter.com/chimonsgas?lang=en"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                Twitter
              </DropdownItem>
              <DropdownItem>
                <NavLink
                  href="http://www.facebook.com/Chimonsgas"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                Facebook
              </DropdownItem>
              <DropdownItem>
                <NavLink
                  href="https://chimonsblog.com/"
                  target="_blank"
                  id="blog-tooltip"
                >
                  <i className="fas fa-blog"></i>
                  <p className="d-lg-none d-xl-none">Blog</p>
                </NavLink>
                Chimons Blog
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <NavbarBrand
              href="/chimos-wTheme/index"
              id="navbar-brand"
            >
              <div style={{
                backgroundImage:
                  "url(" + require("website/assets/img/tiny_logo.png") + ")"
              }} />
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink to="/chimos-wTheme/services" tag={Link}>
                <i className="fas fa-fire fa-lg">  Services</i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/chimos-wTheme/contact-us">
                  Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://twitter.com/chimonsgas?lang=en"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="http://www.facebook.com/Chimonsgas"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://chimonsblog.com/"
                  target="_blank"
                  id="blog-tooltip"
                >
                  <i className="fas fa-blog fa-2x"></i>
                  <p className="d-lg-none d-xl-none">Blog</p>
                </NavLink>
                <UncontrolledTooltip target="#blog-tooltip">
                  Follow us on our Blog
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
