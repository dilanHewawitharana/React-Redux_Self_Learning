import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/counterActions';
import { loggedIn } from './actions/isLoggedInAction';

function App() {
  const counter = useSelector(state => state.count);
  const isLogedIn = useSelector(state => state.loggedIn);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <h1>Our App</h1>
        <p>Counter : {counter}</p>
        <button className="ui yellow button" onClick={() => dispatch(increment())}>+</button>
        <button className="ui green button" onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        { !isLogedIn ? <button 
                        style={{marginTop: '15px'}} 
                        className="ui inverted blue button"
                        onClick={() => dispatch(loggedIn())}
                       >Login</button> : null}
      </div>
    </div>
  );
}

export default App;
