import { FaRegSmileBeam, FaRegMeh, FaRegSadCry } from 'react-icons/fa';
import { ButtonWrapper, FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionKeys = Object.keys(options);
  return (
    <ButtonWrapper>
      {optionKeys.map(option => (
        <FeedbackBtn
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
          color={option}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}{' '}
          {(() => {
            switch (option) {
              case 'good':
                return <FaRegSmileBeam />;
              case 'neutral':
                return <FaRegMeh />;
              case 'bad':
                return <FaRegSadCry />;
              default:
                return null;
            }
          })()}
        </FeedbackBtn>
      ))}
    </ButtonWrapper>
  );
};
