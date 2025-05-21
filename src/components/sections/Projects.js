import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import projectsData from '../../data/projects';

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

const ProjectCard = styled(Link)`
  background-color: var(--light-bg);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  
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
  const [visibleCount, setVisibleCount] = useState(6);
  
  // GraphQL 쿼리로 이미지 가져오기
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {regex: "/.*\\.(png|jpg|jpeg)/"}}) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(
                width: 600
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  `);
  
  // 이미지 맵 생성 (상대 경로 -> 이미지 객체)
  const imagesMap = {};
  data.allFile.edges.forEach(edge => {
    imagesMap[edge.node.relativePath] = getImage(edge.node.childImageSharp);
  });
  
  // 프로젝트 데이터에 이미지 객체 추가
  const projects = projectsData.map(project => ({
    ...project,
    image: imagesMap[project.imagePath] || null
  }));
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  // 현재 보여지는 프로젝트 (visibleCount만큼만)
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  
  // 더 보여줄 프로젝트가 있는지 확인
  const hasMoreProjects = visibleCount < filteredProjects.length;
  
  // 더 보기 버튼 클릭 핸들러
  const handleViewMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };
  
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
            onClick={() => {
              setFilter('all');
              setVisibleCount(6); // 필터 변경 시 보이는 개수 초기화
            }}
          >
            All
          </FilterButton>
          <FilterButton 
            active={filter === 'web'} 
            onClick={() => {
              setFilter('web');
              setVisibleCount(6); // 필터 변경 시 보이는 개수 초기화
            }}
          >
            Web
          </FilterButton>
          <FilterButton 
            active={filter === 'mobile'} 
            onClick={() => {
              setFilter('mobile');
              setVisibleCount(6); // 필터 변경 시 보이는 개수 초기화
            }}
          >
            Mobile
          </FilterButton>
          <FilterButton 
            active={filter === 'data'} 
            onClick={() => {
              setFilter('data');
              setVisibleCount(6); // 필터 변경 시 보이는 개수 초기화
            }}
          >
            Data
          </FilterButton>
        </FilterContainer>
        
        <ProjectsGrid>
          {visibleProjects.map(project => (
            <ProjectCard key={project.id} to={`/project/${project.id}`}>
              <ProjectImage className="project-image">
                <GatsbyImage image={project.image} alt={project.title} />
                <div className="overlay">
                  <ProjectLink as="span">
                    View Details
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
                  <ProjectLink href={project.demoLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </ProjectLink>
                  <ProjectLink href={project.codeLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <i className="fab fa-github"></i> Source Code
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
        
        {hasMoreProjects && (
          <ViewMoreButton onClick={handleViewMore}>
            View More Projects
          </ViewMoreButton>
        )}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
