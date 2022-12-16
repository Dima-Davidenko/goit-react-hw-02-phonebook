import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total ? (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem sx={{ minHeight: '80px' }}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <EmojiEventsIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Good" secondary={good} />
          </ListItem>
          <ListItem sx={{ minHeight: '80px' }}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <SentimentNeutralIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Neutral" secondary={neutral} />
          </ListItem>
          <ListItem sx={{ minHeight: '80px' }}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <ThumbDownAltIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Bad" secondary={bad} />
          </ListItem>
          <ListItem sx={{ minHeight: '80px' }}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <SummarizeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Total" secondary={total} />
          </ListItem>
          <ListItem sx={{ minHeight: '80px' }}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <ThumbUpOffAltIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Positive feedback" secondary={`${positivePercentage}%`} />
          </ListItem>
        </List>
      ) : (
        <Alert severity="info" sx={{ textAlign: 'left' }}>
          <AlertTitle>No feedback given</AlertTitle>
          Be the first one and give your feedback
        </Alert>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
