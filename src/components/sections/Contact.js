import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  background-color: var(--light-bg);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
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

const ContactContainer = styled.div`
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

const ContactIntro = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const ContactDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.8;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(147, 112, 219, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color);
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const ContactText = styled.div`
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }
  
  p {
    color: var(--text-secondary);
    font-size: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--dark-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-color);
  font-size: 1.2rem;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: var(--dark-bg);
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-size: 1rem;
  color: var(--text-secondary);
`;

const FormInput = styled.input`
  padding: 0.8rem 1rem;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-color);
  font-size: 1rem;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(147, 112, 219, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.8rem 1rem;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-color);
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(147, 112, 219, 0.2);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  border: none;
  font-size: 1rem;
  margin-top: 1rem;
  
  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('메시지가 전송되었습니다!');
  };
  
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <SectionTitle>Contact Me</SectionTitle>
        
        <ContactIntro>
          프로젝트 협업이나 궁금한 점이 있으시면 언제든지 연락해 주세요.
          최대한 빠르게 답변 드리겠습니다.
        </ContactIntro>
        
        <ContactContent>
          <ContactInfo>
            <ContactTitle>연락처 정보</ContactTitle>
            <ContactDescription>
              아래 연락처로 문의하시거나 오른쪽 양식을 작성하여 메시지를 보내주세요.
              24시간 이내에 답변 드리겠습니다.
            </ContactDescription>
            
            <ContactDetails>
              <ContactItem>
                <IconBox>
                  <i className="fas fa-map-marker-alt"></i>
                </IconBox>
                <ContactText>
                  <h4>위치</h4>
                  <p>서울특별시, 대한민국</p>
                </ContactText>
              </ContactItem>
              
              <ContactItem>
                <IconBox>
                  <i className="fas fa-envelope"></i>
                </IconBox>
                <ContactText>
                  <h4>이메일</h4>
                  <p>example@email.com</p>
                </ContactText>
              </ContactItem>
              
              <ContactItem>
                <IconBox>
                  <i className="fas fa-phone"></i>
                </IconBox>
                <ContactText>
                  <h4>전화번호</h4>
                  <p>010-1234-5678</p>
                </ContactText>
              </ContactItem>
            </ContactDetails>
            
            <div>
              <h4>SNS 계정</h4>
              <SocialLinks>
                <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </SocialLink>
                <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </SocialLink>
                <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </SocialLink>
                <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </SocialLink>
              </SocialLinks>
            </div>
          </ContactInfo>
          
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="name">이름</FormLabel>
              <FormInput type="text" id="name" name="name" required />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="email">이메일</FormLabel>
              <FormInput type="email" id="email" name="email" required />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="subject">제목</FormLabel>
              <FormInput type="text" id="subject" name="subject" required />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="message">메시지</FormLabel>
              <FormTextarea id="message" name="message" required />
            </FormGroup>
            
            <SubmitButton type="submit">메시지 보내기</SubmitButton>
          </ContactForm>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
