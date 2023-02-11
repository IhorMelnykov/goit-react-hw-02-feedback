import PropTypes from "prop-types";
import { FeedbackDiv, FeedbackButtons } from "./FeedbackOptions.styled"
    
    export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const array = Object.keys(options);
  return (
    <>
    <FeedbackDiv >
      {array.map( name => {
        return (
          <FeedbackButtons key={name} type="button" name={name} onClick={onLeaveFeedback}>
            {name}
          </FeedbackButtons>
          );
      })}
      </FeedbackDiv>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};