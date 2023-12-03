import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../pages/Extra.css";
import { useShoppingCartContx } from "../context/CartContext";

const Navi = () => {
  const { openCart, cartQuantity } = useShoppingCartContx();
  return (
    <header>
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">
            Let<span className="text-info">Fly</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/store">
                Store
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {cartQuantity > 0 && (
            <Button
              variant="outline-primary"
              className="rounded-circle"
              style={{ height: "3rem", width: "3rem", position: "relative" }}
              onClick={openCart}
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
               
              >
                <path
                  d="M2.08416 2.7512C2.22155 2.36044 2.6497 2.15503 3.04047 2.29242L3.34187 2.39838C3.95839 2.61511 4.48203 2.79919 4.89411 3.00139C5.33474 3.21759 5.71259 3.48393 5.99677 3.89979C6.27875 4.31243 6.39517 4.76515 6.4489 5.26153C6.47295 5.48373 6.48564 5.72967 6.49233 6H17.1305C18.8155 6 20.3323 6 20.7762 6.57708C21.2202 7.15417 21.0466 8.02369 20.6995 9.76275L20.1997 12.1875C19.8846 13.7164 19.727 14.4808 19.1753 14.9304C18.6236 15.38 17.8431 15.38 16.2821 15.38H10.9792C8.19028 15.38 6.79583 15.38 5.92943 14.4662C5.06302 13.5523 4.99979 12.5816 4.99979 9.64L4.99979 7.03832C4.99979 6.29837 4.99877 5.80316 4.95761 5.42295C4.91828 5.0596 4.84858 4.87818 4.75832 4.74609C4.67026 4.61723 4.53659 4.49680 4.23336 4.34802C3.91052 4.18961 3.47177 4.03406 2.80416 3.79934L2.54295 3.7075C2.15218 3.57012 1.94678 3.14197 2.08416 2.7512Z"
                  fill="#023cf7"
                />
                <path
                  d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                  fill="#023cf7"
                />
                <path
                  d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                  fill="#023cf7"
                />
              </svg>
              <div
                className="text-white bg-danger rounded-circle d-flex justify-content-center align-items-center"
                style={{
                  position: "absolute",
                  width: "1.5rem",
                  right: 0,
                  bottom: 0,
                  transform: "tranform(35%, 35%)",
                }}
              >
                {cartQuantity}
              </div>
            </Button>
          )}
        </Navbar>
      </Container>
    </header>
  );
};

export default Navi;
