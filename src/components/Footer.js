import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--darker-bg);
  padding: 2rem 0;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Copyright = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: var(--text-secondary);
  font-size: 1.5rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>
          © {currentYear} 포트폴리오. All rights reserved.
        </Copyright>
        <SocialLinks>
          <SocialLink href="https://github.com/seoyeome" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/seoyoung-kim-36126b301/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </SocialLink>
          {/*<SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">*/}
          {/*  <i className="fab fa-twitter"></i>*/}
          {/*</SocialLink>*/}
          <SocialLink href="mailto:seoyeomedev@gamil.com">
            <i className="fas fa-envelope"></i>
          </SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
