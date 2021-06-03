import {BrowserRouter , Route, Switch} from 'react-router-dom';
import FirstPerson  from './components/FirstPerson';
import SecondPerson  from './components/SecondPerson';
import './App.css';
import PersonSwitcher from "./components/PersonSwitcher";

function App() {
  return (
      <BrowserRouter>
        <>
            <PersonSwitcher/>
        <Switch>
          <Route path="/" component={FirstPerson} exact />
          <Route path='/first-person' component={FirstPerson} exact />
          <Route path='/second-person' component={SecondPerson} exact />
        </Switch>
        </>
      </BrowserRouter>
  );
}

export default App;
