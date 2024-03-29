import React, { useState } from "react";
import styled from "styled-components";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  if (Auth.loggedIn()){
  return (
    <Nav>
      <Logo href="">
        
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
            <Link to="/shop">
              Shop
            </Link>
            <Link to="/addProduct">
              Add Product
            </Link>
            <Link to="/about">
              About
            </Link>
            <Link to="/contact">
              Contact
            </Link>
            <Link to="/orderHistory">
              Order History
            </Link>
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
      </Menu>
    </Nav>
  );
  }
  else{
    return (
        <Nav className="nav-bar-responsive">
          <Logo href="">
            
          </Logo>
          <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
          </Hamburger>
          <Menu isOpen={isOpen}>
            <Link to="/shop">
              Shop
            </Link>
            <Link to="/about">
              About
            </Link>
            <Link to="/contact">
              Contact
            </Link>
            <Link to="/signup">
              Signup
            </Link>
            <Link to="/login">
              Login
            </Link>
          </Menu>
        </Nav>
      );

  }

};

export default Navbar;

const NavLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #67bc98;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #7b7fda;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 1200px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 1200px) {
    display: flex;
  }
`;