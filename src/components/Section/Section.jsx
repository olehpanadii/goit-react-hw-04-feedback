import { InfoContainer } from './Section.styled';

export const SectionWrapper = ({ title, children }) => {
  return (
    <InfoContainer>
      <h1>{title}</h1>
      {children}
    </InfoContainer>
  );
};
