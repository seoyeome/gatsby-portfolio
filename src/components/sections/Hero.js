import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--darker-bg);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top right, rgba(147, 112, 219, 0.2), transparent 50%);
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(to top, var(--darker-bg) 5%, transparent 20%);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 2;
`;

const HeroText = styled.div`
  max-width: 700px;
`;

const Greeting = styled.p`
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards;
  animation-delay: 0.2s;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards;
  animation-delay: 0.4s;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Role = styled.h2`
  font-size: 2.5rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards;
  animation-delay: 0.6s;
  
  span {
    color: var(--primary-color);
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  max-width: 600px;
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards;
  animation-delay: 0.8s;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards;
  animation-delay: 1s;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 250px;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  text-align: center;
  
  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const SecondaryButton = styled.a`
  display: inline-block;
  background-color: transparent;
  color: var(--text-color);
  padding: 0.75rem 2rem;
  border-radius: 4px;
  border: 2px solid var(--primary-color);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  text-align: center;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ScrollDown = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  opacity: 0;
  animation: fadeIn 1s ease forwards;
  animation-delay: 1.2s;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ScrollText = styled.span`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
`;

const ScrollIcon = styled.div`
  width: 30px;
  height: 50px;
  border: 2px solid var(--text-secondary);
  border-radius: 25px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 50%;
    width: 6px;
    height: 6px;
    background-color: var(--primary-color);
    border-radius: 50%;
    transform: translateX(-50%);
    animation: scrollDown 2s infinite;
  }
  
  @keyframes scrollDown {
    0% {
      top: 10px;
      opacity: 1;
    }
    100% {
      top: 30px;
      opacity: 0;
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <HeroText>
          <Greeting>안녕하세요</Greeting>
          <Name>김서영입니다</Name>
          <Role>
            I'm a <span>Software Engineer</span>
          </Role>
          <Description>
            누구나 편안하고 안정적인 경험을 할 수 있는 서비스를 만들기 위해 노력합니다.
            협업을 중시하며 팀의 유연한 개발을 돕고 함께 성장하는 것을 지향합니다.
          </Description>
          <ButtonGroup>
            <PrimaryButton 
              to="projects" 
              smooth={true} 
              duration={800}
            >
              프로젝트 보기
            </PrimaryButton>
            <SecondaryButton href="#" target="_blank">
              이력서 다운로드
            </SecondaryButton>
          </ButtonGroup>
        </HeroText>
      </HeroContent>
      
      <ScrollDown>
        <ScrollText>스크롤 내리기</ScrollText>
        <ScrollIcon />
      </ScrollDown>
    </HeroSection>
  );
};

export default Hero;
