import { ButtonGroup, Button } from '@mui/material';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonGroup size="large" variant="outlined">
      {options.map(optionName => (
        <Button
          key={optionName}
          type="button"
          aria-label="text button group"
          name={optionName}
          onClick={evt => onLeaveFeedback(evt)}
        >
          {optionName}
        </Button>
      ))}
    </ButtonGroup>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
