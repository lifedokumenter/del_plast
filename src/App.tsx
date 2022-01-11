import './App.less';
import React from 'react';
import { Button, Loader, Modal } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [appData, setAppData] = React.useState<any | null>();
  const [showTurnTablet, setShowTurnTablet] = React.useState<boolean>(false);

  React.useEffect(()=> {
    fetch(`${process.env.REACT_APP_ROOT_DIR || './'}data/appData.json?nocache='${(new Date()).getTime()}`)
      .then(res=>res.json())
      .then( data => {
        setAppData(data);
      }
    );
  }, []);

  React.useEffect(() => {
    const listener = window.addEventListener('resize', e => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
      setShowTurnTablet(isTablet && window.innerWidth < window.innerHeight); // is in tablet portrait mode if true
    });
    return listener;
  },[])

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
      <Modal
        onClose={() => setShowTurnTablet(false)}
        onOpen={() => setShowTurnTablet(true)}
        open={showTurnTablet}
      >
        <Modal.Header>
        {appData?.tabletFeedback?.title}
        </Modal.Header>
        <Modal.Content>
          <p>{appData?.tabletFeedback?.message}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button positive onClick={() => setShowTurnTablet(false)}>
            {appData?.tabletFeedback?.btnText}
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  ); 
}

export default App;
