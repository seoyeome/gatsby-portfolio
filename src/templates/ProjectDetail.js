import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Layout from '../components/Layout';

const ProjectDetailSection = styled.section`
  padding: 6rem 0;
  background-color: var(--dark-bg);
`;

const ProjectContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: var(--text-secondary);
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
  }
  
  i {
    font-size: 0.9rem;
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: 3rem;
`;

const ProjectTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const ProjectMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  color: var(--text-secondary);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  i {
    color: var(--primary-color);
  }
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const ProjectTag = styled.span`
  background-color: rgba(147, 112, 219, 0.1);
  color: var(--primary-color);
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.9rem;
`;

const ProjectImage = styled.div`
  margin-bottom: 3rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  .gatsby-image-wrapper {
    width: 100%;
  }
`;

const AdditionalImagesSection = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
`;

const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
`;

const AdditionalImage = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  .gatsby-image-wrapper {
    width: 100%;
  }
`;

const ProjectContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectDescription = styled.div`
  width: 100%;
  
  h2 {
    margin-bottom: 1.5rem;
    color: var(--text-color);
  }
  
  p {
    margin-bottom: 1.5rem;
    color: var(--text-secondary);
    line-height: 1.8;
    width: 100%;
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    color: var(--text-secondary);
    
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const ChallengeTitle = styled.h4`
  color: var(--text-secondary);
  margin-bottom: 0.8rem;
`;

const ProjectSidebar = styled.div`
  background-color: var(--light-bg);
  border-radius: 10px;
  padding: 2rem;
  height: fit-content;
`;

const SidebarTitle = styled.h3`
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: var(--primary-color);
  }
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
  
  span:first-child {
    color: var(--text-secondary);
  }
  
  span:last-child {
    color: var(--text-color);
    font-weight: 500;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.primary ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.primary ? 'white' : 'var(--text-color)'};
  border: 2px solid ${props => props.primary ? 'var(--primary-color)' : 'var(--border-color)'};
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.primary ? 'var(--primary-dark)' : 'rgba(var(--primary-rgb), 0.1)'};
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

const DemoButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background-color: var(--bg-color);
  padding: 2rem;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const PopupTitle = styled.h3`
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

const PopupText = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const PopupButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-dark);
  }
`;

const ImageModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  padding-top: 50px;
  
  .gatsby-image-wrapper {
    max-width: 100%;
    max-height: 90vh;
    border-radius: 5px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 1100;
  
  &:hover {
    color: var(--primary-color);
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

const ProjectDetailTemplate = ({ data, pageContext }) => {
  const { project } = pageContext;
  const projectImage = getImage(data.projectImage);
  const additionalImages = data.additionalImages.edges.map(edge => ({
    image: getImage(edge.node.childImageSharp),
    modalImage: getImage(edge.node.childImageSharp.modalImage),
  }));
  
  // 모달 상태 관리
  const [selectedImage, setSelectedImage] = useState(null);
  const [showDemoPopup, setShowDemoPopup] = useState(false);
  
  // 이미지 클릭 핸들러
  const handleImageClick = (image) => {
    setSelectedImage(image.modalImage);
  };
  
  // 모달 닫기 핸들러
  const closeModal = () => {
    setSelectedImage(null);
  };
  
  // 데모 버튼 클릭 핸들러
  const handleDemoClick = () => {
    setShowDemoPopup(true);
  };
  
  // 팝업 닫기 핸들러
  const closePopup = () => {
    setShowDemoPopup(false);
  };

  return (
    <Layout>
      <ProjectDetailSection>
        <ProjectContainer>
          <BackLink to="/#projects">
            <i className="fas fa-arrow-left"></i> Back to Projects
          </BackLink>
          
          <ProjectHeader>
            <ProjectTitle>{project.title}</ProjectTitle>
            
            <ProjectMeta>
              <MetaItem>
                <i className="fas fa-calendar"></i>
                <span>{project.date}</span>
              </MetaItem>
              <MetaItem>
                <i className="fas fa-folder"></i>
                <span>{project.category.charAt(0).toUpperCase() + project.category.slice(1)} Development</span>
              </MetaItem>
            </ProjectMeta>
            
            <ProjectTags>
              {project.tags.map((tag, index) => (
                <ProjectTag key={index}>{tag}</ProjectTag>
              ))}
            </ProjectTags>
          </ProjectHeader>
          
          <ProjectImage>
            <GatsbyImage image={projectImage} alt={project.title} />
          </ProjectImage>

          <ProjectContent>
            <ProjectDescription>
              <h2>Project Overview</h2>
              <p>{project.description}</p>
              <p>
                {project.additionalImages && project.additionalImages.length > 0 && (
                    <AdditionalImagesSection>
                      <ImagesGrid>
                        {additionalImages.map((image, index) => (
                            <AdditionalImage key={index} onClick={() => handleImageClick(image)}>
                              <GatsbyImage image={image.image} alt={`Additional Image ${index + 1}`} />
                            </AdditionalImage>
                        ))}
                      </ImagesGrid>
                    </AdditionalImagesSection>
                )}
              </p>

              <h2>Challenges & Solutions</h2>
              {project.challengesAndSolutions ? (
                <div>
                  {project.challengesAndSolutions.map((item, index) => (
                    <div key={index} style={{ marginBottom: '2rem' }}>
                      <ChallengeTitle>Challenge {index + 1}: {item.challenge}</ChallengeTitle>
                      <p>
                        <strong>Solution:</strong> {item.solution}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>
                  {project.challenge}
                </p>
              )}
              
              {project.features && project.features.length > 0 && (
                <>
                  <h2>Key Features</h2>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}
            </ProjectDescription>
            
            <ProjectSidebar>
              <SidebarTitle>Project Details</SidebarTitle>
              <SidebarList>
                <SidebarItem>
                  <span>Client:</span>
                  <span>{project.client}</span>
                </SidebarItem>
                <SidebarItem>
                  <span>Date:</span>
                  <span>{project.date}</span>
                </SidebarItem>
                <SidebarItem>
                  <span>Category:</span>
                  <span>{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
                </SidebarItem>
                <SidebarItem>
                  <span>Technologies:</span>
                  <span>{project.tags.join(', ')}</span>
                </SidebarItem>
              </SidebarList>
              
              <ProjectLinks>
                {project.demoLink ? (
                  <ProjectLink href={project.demoLink} target="_blank" rel="noopener noreferrer" primary>
                    <i className="fas fa-external-link-alt"></i> View Live Demo
                  </ProjectLink>
                ) : (
                  <DemoButton onClick={handleDemoClick}>
                    <i className="fas fa-external-link-alt"></i> View Live Demo
                  </DemoButton>
                )}
                {project.codeLink && (
                  <ProjectLink href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> View Source Code
                  </ProjectLink>
                )}
              </ProjectLinks>
            </ProjectSidebar>
          </ProjectContent>
          
          {/* 이미지 모달 */}
          {selectedImage && (
            <ImageModal onClick={closeModal}>
              <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={closeModal}>&times;</CloseButton>
                <GatsbyImage image={selectedImage} alt="Enlarged view" />
              </ModalContent>
            </ImageModal>
          )}
          
          {/* 데모 불가능 팝업 */}
          {showDemoPopup && (
            <Popup onClick={closePopup}>
              <PopupContent onClick={(e) => e.stopPropagation()}>
                <PopupTitle>데모 사이트 이용 불가</PopupTitle>
                <PopupText>
                  현재 이 프로젝트의 데모 사이트는 이용할 수 없습니다. 
                  프로젝트의 자세한 정보는 소스 코드 링크를 통해 확인하실 수 있습니다.
                </PopupText>
                <PopupButton onClick={closePopup}>확인</PopupButton>
              </PopupContent>
            </Popup>
          )}
        </ProjectContainer>
      </ProjectDetailSection>
    </Layout>
  );
};

export const query = graphql`
  query($imagePath: String!, $additionalImages: [String!]) {
    projectImage: file(relativePath: { eq: $imagePath }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP, AVIF]
          quality: 85
          breakpoints: [576, 768, 992, 1200]
          backgroundColor: "transparent"
          transformOptions: {
            fit: COVER
          }
        )
      }
    }
    additionalImages: allFile(filter: { relativePath: { in: $additionalImages } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData(
              width: 1000
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
              quality: 85
              breakpoints: [576, 768, 992, 1000]
              backgroundColor: "transparent"
              transformOptions: {
                fit: CONTAIN
              }
            )
            modalImage: gatsbyImageData(
              width: 1920
              placeholder: NONE
              formats: [AUTO, WEBP, AVIF]
              quality: 100
              backgroundColor: "transparent"
              transformOptions: {
                fit: CONTAIN
              }
            )
          }
        }
      }
    }
  }
`;

export default ProjectDetailTemplate;
