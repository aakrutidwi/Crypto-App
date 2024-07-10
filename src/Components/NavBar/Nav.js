
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 20px;
  background-color: #000;
  color: #fff;
 background-color: rgba(0, 0, 0, 0.2);
 position: fixed;
 width: 100%; 
  backdrop-filter: blur(10px); 

`;

const Logo = styled.img`
  height: 20px; 
  width: auto;
   margin-left: 80px;
   
`;


const NavLinks = styled.div`
  display: flex;
  align-items:right;
  margin-left: 40px;
  

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 15px;
    font-size: 16px;
    
  } 

  .highlight {
    color: #8b5cf6;
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #D3D3D3;
  border-radius: 20px;
  padding: 5px;
  margin-right: 50px;
  width: 450px;
   margin-left: 30px;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #000000; 
margin-left: 10px;
`;


const SearchInput = styled.input`
   border: dimgrey;
 background-color: #D3D3D3;
  outline: none;
  padding: 10px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif; /* Apply Roboto font */
  border-radius: 17px;
  margin-right: 50px;
   padding: 10px;
  width: 350px;
`;

const SignInButton = styled.button`
  background-color: #fff;
  color: #181818;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #181818;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="logo">
      <Logo src="https://www.intract.io/logo/intract_text.svg" alt="Intract Logo" />
      </div>
      <NavLinks>
        <a href="#compass">Compass</a>
        <a href="#explore">Explore</a>
        <a href="#academy" className="highlight">Academy</a>
        <a href="#nfts">NFTs</a>
        <a href="#projects">For Projects</a>
      </NavLinks>
      <SearchBarContainer>
      <StyledFontAwesomeIcon icon={faSearch} />
        <SearchInput type="text" placeholder="Search for ecosystems, trending quests etc,." />
        </SearchBarContainer>
      <SignInButton>Sign In</SignInButton>
    </NavbarContainer>
  );
};

export default Navbar;
