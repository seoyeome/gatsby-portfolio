import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ProjectsSection = styled.section`
  background-color: var(--dark-bg);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -100px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(147, 112, 219, 0.1), transparent 70%);
    z-index: 1;
  }
`;

const ProjectsContainer = styled.div`
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

const ProjectsIntro = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const FilterButton = styled.button`
  background-color: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-secondary)'};
  border: 1px solid ${props => props.active ? 'var(--primary-color)' : 'var(--text-secondary)'};
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background-color: var(--light-bg);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    
    .project-image img {
      transform: scale(1.05);
    }
  }
`;

const ProjectImage = styled.div`
  position: relative;
  overflow: hidden;
  
  .gatsby-image-wrapper {
    width: 100%;
    height: 220px;
  }
  
  img {
    transition: var(--transition);
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(147, 112, 219, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: var(--transition);
  }
  
  &:hover .overlay {
    opacity: 1;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex: 1;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ProjectTag = styled.span`
  background-color: rgba(147, 112, 219, 0.1);
  color: var(--primary-color);
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-color);
  font-size: 0.9rem;
  transition: var(--transition);
  
  i {
    color: var(--primary-color);
  }
  
  &:hover {
    color: var(--primary-color);
  }
`;

const ViewMoreButton = styled.button`
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  padding: 0.75rem 2rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  margin: 3rem auto 0;
  display: block;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  // GraphQL 쿼리로 이미지 가져오기
  const data = useStaticQuery(graphql`
    query {
      portfolioImage: file(relativePath: { eq: "portfolio-screenshot.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `);
  
  // 이미지 객체 가져오기
  const portfolioImage = getImage(data.portfolioImage);
  
  // Sample project data - in a real app, this would come from a data source
  const projects = [
    {
      id: 1,
      title: '포트폴리오 웹사이트',
      description: 'Gatsby와 React를 활용한 개인 포트폴리오 웹사이트입니다. 국제화 및 반응형 디자인을 적용했습니다.',
      image: portfolioImage,
      tags: ['React', 'Gatsby', 'Styled Components'],
      demoLink: '#',
      codeLink: '#',
      category: 'web'
    },
    {
      id: 2,
      title: '면접 질문 생성기',
      description: 'Next.js, TailwindCSS, Spring Boot/Kotlin, PostgreSQL 을 사용한 사이드 프로젝트입니다. 면접 질문 생성 구현했습니다.',
      image: portfolioImage,
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      demoLink: '#',
      codeLink: '#',
      category: 'web'
    },
    {
      id: 3,
      title: '날씨 앱',
      description: '위치 기반 날씨 정보를 제공하는 모바일 앱입니다. 현재 날씨와 5일 예보를 확인할 수 있습니다.',
      image: portfolioImage,
      tags: ['React Native', 'API Integration'],
      demoLink: '#',
      codeLink: '#',
      category: 'mobile'
    },
    {
      id: 4,
      title: '할 일 관리 앱',
      description: '할 일을 추가, 편집, 삭제할 수 있는 웹 애플리케이션입니다. 로컬 스토리지를 활용하여 데이터를 저장합니다.',
      image: portfolioImage,
      tags: ['JavaScript', 'HTML/CSS', 'LocalStorage'],
      demoLink: '#',
      codeLink: '#',
      category: 'web'
    },
    {
      id: 5,
      title: '데이터 시각화 대시보드',
      description: '다양한 데이터를 시각적으로 표현하는 대시보드입니다. 차트와 그래프를 활용하여 데이터를 분석할 수 있습니다.',
      image: portfolioImage,
      tags: ['React', 'D3.js', 'Chart.js'],
      demoLink: '#',
      codeLink: '#',
      category: 'data'
    },
    {
      id: 6,
      title: '소셜 미디어 앱',
      description: '사용자 간 소통이 가능한 소셜 미디어 플랫폼입니다. 게시물 작성, 댓글, 좋아요 기능을 구현했습니다.',
      image: portfolioImage,
      tags: ['React', 'Firebase', 'Authentication'],
      demoLink: '#',
      codeLink: '#',
      category: 'web'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionTitle>My Projects</SectionTitle>
        
        <ProjectsIntro>
          다양한 웹 개발 프로젝트를 통해 기술적 역량을 키워왔습니다.
          각 프로젝트는 실제 문제 해결과 사용자 경험 향상에 초점을 맞추고 있습니다.
        </ProjectsIntro>
        
        <FilterContainer>
          <FilterButton 
            active={filter === 'all'} 
            onClick={() => setFilter('all')}
          >
            All
          </FilterButton>
          <FilterButton 
            active={filter === 'web'} 
            onClick={() => setFilter('web')}
          >
            Web
          </FilterButton>
          <FilterButton 
            active={filter === 'mobile'} 
            onClick={() => setFilter('mobile')}
          >
            Mobile
          </FilterButton>
          <FilterButton 
            active={filter === 'data'} 
            onClick={() => setFilter('data')}
          >
            Data
          </FilterButton>
        </FilterContainer>
        
        <ProjectsGrid>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id}>
              <ProjectImage className="project-image">
                <GatsbyImage image={project.image} alt={project.title} />
                <div className="overlay">
                  <ProjectLink href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    View Demo
                  </ProjectLink>
                </div>
              </ProjectImage>
              
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <ProjectTags>
                  {project.tags.map((tag, index) => (
                    <ProjectTag key={index}>{tag}</ProjectTag>
                  ))}
                </ProjectTags>
                
                <ProjectLinks>
                  <ProjectLink href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </ProjectLink>
                  <ProjectLink href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> Source Code
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
        
        <ViewMoreButton>View More Projects</ViewMoreButton>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
