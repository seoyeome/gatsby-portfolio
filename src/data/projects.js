// 프로젝트 데이터를 중앙에서 관리하는 파일
const projectsData = [
  {
    id: 1,
    title: '포트폴리오 웹사이트',
    date: '2025.05 ~ ing',
    client: 'Personal Project',
    description: 'Gatsby 프레임워크를 활용한 개인 포트폴리오 웹사이트입니다. 반응형 디자인을 적용했습니다.',
    imagePath: 'portfolio-screenshot.png',
    additionalImages: [
    ],
    tags: ['React', 'Gatsby', 'Styled Components'],
    demoLink: 'https://seoyoung-portfolio.netlify.app/',
    codeLink: 'https://github.com/seoyeome/gatsby-portfolio',
    category: 'web',
    features: [
      '프로젝트 상세 페이지 동적 구현',
      '반응형 디자인으로 인터랙티브한 사용자 경험 제공',
      'Gatsby를 활용한 빠른 페이지 로딩 속도'
    ],
    challengesAndSolutions: [
      {
        challenge: '여러 프로젝트 데이터를 기반으로 개별 상세 페이지를 동적으로 생성',
        solution: 'Gatsby의 createPages API 사용하여 프로젝트 데이터 배열을 순회하며 공통 template을 사용하여 프로젝트 각각의 상세 페이지 생성'
      },
      {
        challenge: '다양한 화면 크기에서 최적의 사용자 경험을 제공하는 반응형 디자인 구현',
        solution: 'Styled Components를 활용한 미디어 쿼리 적용으로 모바일, 태블릿, 데스크톱 등 다양한 디바이스에 최적화된 UI 구현'
      },
      {
        challenge: '이미지 로딩 속도와 최적화 문제',
        solution: 'Gatsby의 이미지 최적화 플러그인(gatsby-plugin-image, gatsby-plugin-sharp)을 활용하여 다양한 화면 크기에 맞는 최적화된 이미지 자동 생성 및 지연 로딩 구현'
      }
    ]
  },
  {
    id: 2,
    title: '면접 질문 생성기',
    date: '2025.05 ~ ing',
    client: 'Personal Project',
    description: 'Next.js, TailwindCSS, Spring Boot/Kotlin, PostgreSQL 을 사용한 사이드 프로젝트입니다. 면접 질문 생성 구현했습니다.',
    imagePath: 'interview-generator-dark.png',
    additionalImages: [
      'interview-generator-light.png',
      'interview-generator-questions.png'
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    codeLink: 'https://github.com/seoyeome/interview-questions-frontend',
    category: 'web',
    features: [
      '직무별 맞춤 면접 질문 생성',
      '사용자 경험 기반 질문 추천 시스템',
      '면접 준비 가이드 제공',
      '모바일 친화적 디자인'
    ],
    challengesAndSolutions: [
      {
        challenge: '사용자 입력에 따른 맞춤형 면접 질문 생성 알고리즘 개발',
        solution: '직무별, 경력 수준별 질문 데이터베이스 구축 및 사용자 입력에 따른 필터링 로직 구현'
      },
      {
        challenge: '프론트엔드와 백엔드 간의 효율적인 데이터 통신',
        solution: 'RESTful API 설계 및 효율적인 데이터 캐싱 전략 구현'
      }
    ]
  }
];

export default projectsData;
