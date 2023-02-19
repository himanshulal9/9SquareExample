import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  wrapper: {
    backgroundColor: '#08161b',
    maxWidth: '260px',
    margin: '10px auto',
    padding: '8px 8px',
    boxSizing: 'border-box',
  },
  month: {
    fontSize: '16px',
    color: '#839496',
    margin: '0px auto',
    padding: '5px',
    textAlign: 'center',
  },
  table: {
    backgroundColor: '#08161b',
    color: ' #839496',
    padding: '5px',
    margin: '0px auto',
  },
  tableHead: {
    color: '#839496',
  },
  today: {
    backgroundColor: '#839496',
    color: '#08161b',
  },
  highlighted: {
    color: '#839496',
    backgroundColor: '#08161b',
  },
});
