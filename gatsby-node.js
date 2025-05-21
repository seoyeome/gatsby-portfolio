/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require('path');
// 프로젝트 데이터 가져오기
const projectsData = require('./src/data/projects').default;

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions;


  // 프로젝트 상세 페이지 템플릿
  const projectDetailTemplate = path.resolve(`src/templates/ProjectDetail.js`);

  // 각 프로젝트에 대한 페이지 생성
  projectsData.forEach(project => {
    createPage({
      path: `/project/${project.id}`,
      component: projectDetailTemplate,
      context: {
        project,
        imagePath: project.imagePath,
        additionalImages: project.additionalImages || []
      },
    });
  });
};
