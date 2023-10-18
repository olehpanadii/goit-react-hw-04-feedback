import styled from 'styled-components';

export const InfoList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(5)};

  li {
    font-size: 24px;
  }
`;
