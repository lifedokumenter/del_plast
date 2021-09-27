import './App.less';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Chat from './components/Chat';

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
        appData &&
          <>
            <Navbar title={appData.pageTitle}/>
            <Grid columns={2} stackable>
              <Grid.Row>
                <Grid.Column floated='left' width={12}>
                  <Landing appData={appData} />
                </Grid.Column>

                <Grid.Column floated='right' width={4}>
                  <Chat />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </>
        }
    </div>
  ); 
}

export default App;
