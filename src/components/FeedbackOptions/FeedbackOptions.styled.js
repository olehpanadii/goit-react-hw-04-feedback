import styled from 'styled-components';

const getColor = ({ color }) => {
  switch (color) {
    case 'good':
      return '#228B22';
    case 'neutral':
      return '#FFFF00';
    case 'bad':
      return '#FF0000';
    default:
      return null;
  }
};
export const ButtonWrapper = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(6)};
  justify-content: center;
  align-items: center;
`;

export const FeedbackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
  padding: ${p => p.theme.spacing(5)};
  border: 2px solid ${getColor};
  border-radius: 6px;
`;
