/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require('path');
// 프로젝트 데이터 가져오기
const projectsData = require('./src/data/projects');

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  // 프로젝트 상세 페이지 템플릿
  const projectDetailTemplate = path.resolve(`src/templates/ProjectDetail.js`);

  // 각 프로젝트에 대한 페이지 생성
  projectsData.forEach(project => {
    // 이미지 경로에서 /images/ 접두사 제거하여 상대 경로로 변환
    const imagePath = project.imagePath.replace(/^\/images\//, '');
    
    // 추가 이미지 경로도 같은 방식으로 변환
    const additionalImages = (project.additionalImages || []).map(
      imgPath => imgPath.replace(/^\/images\//, '')
    );
    
    createPage({
      path: `/project/${project.id}`,
      component: projectDetailTemplate,
      context: {
        project,
        imagePath: imagePath,
        additionalImages: additionalImages
      },
    });
  });
};
