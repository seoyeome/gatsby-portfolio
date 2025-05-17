import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
  background-color: var(--light-bg);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -100px;
    right: -100px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(147, 112, 219, 0.1), transparent 70%);
    z-index: 1;
  }
`;

const SkillsContainer = styled.div`
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

const SkillsIntro = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled.div`
  background-color: var(--dark-bg);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: var(--primary-color);
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const SkillIcon = styled.div`
  margin-right: 15px;
  color: var(--primary-color);
  font-size: 1.5rem;
`;

const SkillInfo = styled.div`
  flex: 1;
`;

const SkillName = styled.div`
  font-weight: 500;
  margin-bottom: 5px;
`;

const SkillLevel = styled.div`
  display: flex;
  align-items: center;
`;

const SkillDot = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: ${props => props.active ? 'var(--primary-color)' : 'rgba(255, 255, 255, 0.1)'};
`;

const SkillDescription = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-top: 5px;
  line-height: 1.5;
`;

const OtherSkills = styled.div`
  margin-top: 4rem;
`;

const OtherSkillsTitle = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const SkillTag = styled.div`
  background-color: var(--dark-bg);
  color: var(--text-color);
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  transition: var(--transition);
  border: 1px solid var(--primary-color);
  
  &:hover {
    background-color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SectionTitle>My Skills</SectionTitle>
        
        <SkillsIntro>
          다양한 프로젝트 경험을 통해 습득한 기술 스택입니다.<br/>
          지속적인 학습과 실무 경험을 통해 전문성을 키워나가고 있습니다.
        </SkillsIntro>
        
        <SkillsGrid>
          <SkillCategory>
            <CategoryTitle>Backend</CategoryTitle>
            <SkillsList>
              <SkillItem>
                <SkillIcon>
                  <i className="fab fa-java"></i>
                </SkillIcon>
                <SkillInfo>
                  <SkillName>Java</SkillName>
                  <SkillDescription>
                    대규모 서비스 개발 및 유지보수 경험<br/>
                    Java 동시성 API 활용 및 스레드 안전성 확보
                  </SkillDescription>
                </SkillInfo>
              </SkillItem>
              
              <SkillItem>
                <SkillIcon>
                  <i className="fas fa-leaf"></i>
                </SkillIcon>
                <SkillInfo>
                  <SkillName>Spring Boot</SkillName>
                  <SkillDescription>
                    RESTful API 설계 및 구현
                  </SkillDescription>
                </SkillInfo>
              </SkillItem>
              
              <SkillItem>
                <SkillIcon>
                  <i className="fas fa-database"></i>
                </SkillIcon>
                <SkillInfo>
                  <SkillName>MongoDB, MySQL</SkillName>
                  <SkillDescription>
                    데이터베이스 설계, 쿼리 최적화, 인덱싱 전략 수립
                  </SkillDescription>
                </SkillInfo>
              </SkillItem>
            </SkillsList>
          </SkillCategory>
          
          <SkillCategory>
            <CategoryTitle>Frontend</CategoryTitle>
            <SkillsList>
              <SkillItem>
                <SkillIcon>
                  <i className="fab fa-react"></i>
                </SkillIcon>
                <SkillInfo>
                  <SkillName>React</SkillName>
                  <SkillDescription>
                    컴포넌트 기반 UI 개발
                  </SkillDescription>
                </SkillInfo>
              </SkillItem>
              
              <SkillItem>
                <SkillIcon>
                  <i className="fab fa-js"></i>
                </SkillIcon>
                <SkillInfo>
                  <SkillName>JavaScript/TypeScript</SkillName>
                  <SkillDescription>
                    ES6+, 비동기 프로그래밍
                  </SkillDescription>
                </SkillInfo>
              </SkillItem>
              
              <SkillItem>
                <SkillIcon>
                  <i className="fab fa-css3-alt"></i>
                </SkillIcon>
                <SkillInfo>
                  <SkillName>TailwindCSS</SkillName>
                  <SkillDescription>
                    유틸리티 기반 CSS 프레임워크를 활용한 빠른 UI 개발, 반응형 디자인 구현
                  </SkillDescription>
                </SkillInfo>
              </SkillItem>
            </SkillsList>
          </SkillCategory>
          
          <SkillCategory>
            <CategoryTitle>DevOps & Tools</CategoryTitle>
            <SkillsList>
              <SkillItem>
                <SkillIcon>
                  <i className="fab fa-docker"></i>
                </SkillIcon>
                <SkillInfo>
                  <SkillName>Docker</SkillName>
                  <SkillDescription>
                    MongoDB Replica Set 구성 및 운영<br/>
                    컨테이너 기반 개발 환경 구축
                  </SkillDescription>
                </SkillInfo>
              </SkillItem>
              
              <SkillItem>
                <SkillIcon>
                  <i className="fab fa-git-alt"></i>
                </SkillIcon>
                <SkillInfo>
                  <SkillName>Git</SkillName>
                  <SkillDescription>
                    버전 관리, Git-flow 전략, CI/CD 파이프라인 구축
                  </SkillDescription>
                </SkillInfo>
              </SkillItem>
              
              <SkillItem>
                <SkillIcon>
                  <i className="fas fa-cloud"></i>
                </SkillIcon>
                <SkillInfo>
                  <SkillName>AWS</SkillName>
                  <SkillDescription>
                    EC2, IAM 클라우드 서비스 사용
                  </SkillDescription>
                </SkillInfo>
              </SkillItem>
            </SkillsList>
          </SkillCategory>
        </SkillsGrid>
        
        <OtherSkills>
          <OtherSkillsTitle>Other Skills</OtherSkillsTitle>
          <SkillTags>
            <SkillTag>JPA/Hibernate</SkillTag>
            <SkillTag>Redis</SkillTag>
            {/*<SkillTag>Kafka</SkillTag>*/}
            <SkillTag>JUnit</SkillTag>
            {/*<SkillTag>Mockito</SkillTag>*/}
            {/*<SkillTag>GraphQL</SkillTag>*/}
            <SkillTag>Node.js</SkillTag>
            <SkillTag>Express</SkillTag>
            {/*<SkillTag>Webpack</SkillTag>*/}
            {/*<SkillTag>Jenkins</SkillTag>*/}
            <SkillTag>Kubernetes</SkillTag>
            {/*<SkillTag>Styled Components</SkillTag>*/}
            <SkillTag>Bootstrap</SkillTag>
            <SkillTag>Jira</SkillTag>
            <SkillTag>Confluence</SkillTag>
          </SkillTags>
        </OtherSkills>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
