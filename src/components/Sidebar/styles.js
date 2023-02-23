/* eslint-disable import/no-extraneous-dependencies */
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'content',
    padding: '10% 0',
  },
  image: {
    width: '70%',
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  genreImage: {
    filter: theme.palette.mode === 'dark' ? 'dark' : 'invert(1)',
  },
}));
