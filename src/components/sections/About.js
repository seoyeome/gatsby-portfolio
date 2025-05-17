import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const AboutSection = styled.section`
  background-color: var(--dark-bg);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -100px;
    left: -100px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(147, 112, 219, 0.1), transparent 70%);
    z-index: 1;
  }
`;

const AboutContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  font-size: 2.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: var(--primary-color);
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutImage = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: visible;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border: 2px solid var(--primary-color);
    z-index: 1;
    border-radius: 15px;
  }
  
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    transition: var(--transition);
    margin: 10px;
    max-width: 400px;
    max-height: 400px;
  }
  
  &:hover .gatsby-image-wrapper {
    transform: scale(1.02);
  }
`;

const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const AboutTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  
  span {
    color: var(--primary-color);
  }
`;

const AboutDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.8;
`;

const AboutDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  i {
    color: var(--primary-color);
    font-size: 1.2rem;
  }
`;

const DetailText = styled.span`
  font-size: 1rem;
`;

const AboutButton = styled.a`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  text-align: center;
  max-width: 200px;
  
  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const HighlightText = styled.span`
  color: var(--primary-color);
  font-weight: 600;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <SectionTitle>About Me</SectionTitle>
        
        <AboutContent>
          <AboutImage>
            <StaticImage 
              src="../../images/Profile.JPG" 
              alt="Profile" 
              layout="constrained"
              width={400}
              height={400}
              objectFit="cover"
              objectPosition="center 30%"
              quality={95}
              formats={["auto", "webp", "avif"]}
              style={{ 
                borderRadius: "10px",
                margin: "0 auto",
                aspectRatio: "1 / 1"
              }}
            />
          </AboutImage>
          
          <AboutInfo>
            <AboutTitle>
              안녕하세요, <span>김서영</span>입니다
            </AboutTitle>
            
            <AboutDescription>
              안녕하세요! 사용자 중심의 소프트웨어를 개발하는 것을 즐기는 개발자입니다.<br />
              꾸준히 기술 인사이트를 얻어 서비스에 적용하려고 노력합니다.
            </AboutDescription>
            
            <AboutDescription>
              Java와 Spring Boot 생태계를 활용해 대용량 트래픽을 안정적으로 처리하는 서비스 개발 전문성을 보유하고 있습니다.<br/>
              <HighlightText>1일 최대 64만건</HighlightText>의 이메일 처리 시스템 개발에 참여하여 메시지 큐 최적화 및 대규모 트래픽을 안정성있게 제공하는 경험을 했습니다.<br/>
              <HighlightText>37,000명의 사용자</HighlightText>를 지원하는 문서 파일 분석 소프트웨어 개발 과정에서는 중복 처리 시스템을 개발하여 <HighlightText>20MB 파일 기준 분석 속도를 6초에서 0.03초로 개선</HighlightText>했습니다.<br/>
              확장성을 고려하는 설계를 지향합니다.<br/>
              팀 협업을 통해 더 나은 결과물을 만들어내는 과정을 즐깁니다.
            </AboutDescription>
            
            <AboutDetails>
              <DetailItem>
                <i className="fas fa-envelope"></i>
                <DetailText>seoyeomedev@gmail.com</DetailText>
              </DetailItem>
              <DetailItem>
                <i className="fa-brands fa-github"></i>
                <DetailText>seoyeome</DetailText>
              </DetailItem>
            </AboutDetails>
            
            {/*<AboutButton href="#" target="_blank">*/}
            {/*  이력서 다운로드*/}
            {/*</AboutButton>*/}
          </AboutInfo>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
