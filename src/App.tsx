import './App.less';
import React from 'react';
import { Loader } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [appData, setAppData] = React.useState<any | null>();


  React.useEffect(()=> {
    fetch('/data/appData.json')
      .then(res=>res.json())
      .then( data => {
        setAppData(data);
      }
    );
  }, []);

  return (
    <div className="App">
      {
        !appData && 
        <Loader />
      }
      {
        appData && 
        <Router>
          <>
            <Navbar title={appData?.pageTitle}/>
            <Switch>
              <Route exact={true} path="/">
                <Landing appData={appData} /> 
              </Route>
              <Route path="/step/:stepNo">
                <Landing appData={appData} /> 
              </Route>
            </Switch>
          </>
        </Router>
      }
    </div>
  ); 
}

export default App;
