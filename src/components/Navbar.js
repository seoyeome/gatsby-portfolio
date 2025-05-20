import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ scrolled }) => 
    scrolled ? 'rgba(18, 18, 18, 0.9)' : 'transparent'};
  backdrop-filter: ${({ scrolled }) => 
    scrolled ? 'blur(10px)' : 'none'};
  padding: 1rem 0;
  z-index: 1000;
  transition: var(--transition);
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-color);
  
  &:hover {
    color: var(--primary-color);
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--darker-bg);
    padding: 2rem;
    gap: 1.5rem;
    text-align: center;
  }
`;

const NavLink = styled(ScrollLink)`
  color: var(--text-color);
  font-weight: 500;
  cursor: pointer;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: var(--transition);
  }
  
  &:hover:after,
  &.active:after {
    width: 100%;
  }
  
  &:hover {
    color: var(--primary-color);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <NavbarContainer scrolled={scrolled}>
      <NavInner>
        <Logo to="/">Portfolio</Logo>
        
        <MobileMenuButton onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </MobileMenuButton>
        
        <NavLinks isOpen={isOpen}>
          <NavLink 
            to="home" 
            smooth={true} 
            duration={500} 
            spy={true} 
            activeClass="active"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="about" 
            smooth={true} 
            duration={500} 
            spy={true} 
            activeClass="active"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink 
            to="skills" 
            smooth={true} 
            duration={500} 
            spy={true} 
            activeClass="active"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </NavLink>
          <NavLink 
            to="projects" 
            smooth={true} 
            duration={500} 
            spy={true} 
            activeClass="active"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
          {/*<NavLink */}
          {/*  to="contact" */}
          {/*  smooth={true} */}
          {/*  duration={500} */}
          {/*  spy={true} */}
          {/*  activeClass="active"*/}
          {/*  onClick={() => setIsOpen(false)}*/}
          {/*>*/}
          {/*  Contact*/}
          {/*</NavLink>*/}
        </NavLinks>
      </NavInner>
    </NavbarContainer>
  );
};

export default Navbar;
