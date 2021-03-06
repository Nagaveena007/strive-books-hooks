import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import scifi from "../data/scifi.json";

import Search from "./Search";

const MyNav = ({ search }) => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className=""
      style={{ height: "70px", fontSize: "large" }}
    >
      <Navbar.Brand href="/">Strive Library</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        {/*   <NavDropdown title="Select Book Category" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Sci-fi</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Romantic</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Horror</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Fantacy</NavDropdown.Item>

          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">History</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
      <Nav className="mr-sm-2">
        {/*    <Search searchBook={search} /> */}
        <IoCartOutline
          style={{ color: "white", height: "30px", width: "30px" }}
          className="mt-2 mr-3"
        />
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link href="#pricing">Browse</Nav.Link>
      </Nav>
      {/*  <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form> */}
    </Navbar>
  );
};
export default MyNav;
