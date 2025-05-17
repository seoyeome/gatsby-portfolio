import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 70vh;
  padding: 2rem;
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const ErrorTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ErrorDescription = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: 2rem;
`;

const BackButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 4px;
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <NotFoundContainer>
        <ErrorCode>404</ErrorCode>
        <ErrorTitle>페이지를 찾을 수 없습니다</ErrorTitle>
        <ErrorDescription>
          찾으시는 페이지가 존재하지 않거나, 이동되었거나, 삭제되었을 수 있습니다.
        </ErrorDescription>
        <BackButton to="/">홈으로 돌아가기</BackButton>
      </NotFoundContainer>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>페이지를 찾을 수 없습니다</title>;
