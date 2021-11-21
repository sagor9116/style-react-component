
import Alert from '../alert/Alert';
import CartSuccess from '../cartSuccess/CartSuccess';
import { createUseStyles } from 'react-jss';
import './App.css';

const useStyles = createUseStyles({
  wrapper: {
    padding: 20
  }
})

function App() {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <Alert title = "Item not Added" type="error">
        <div>Your items are out of stock.</div>
      </Alert>
      <CartSuccess />
    </div>
  );
}

export default App;
