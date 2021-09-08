import './App.less';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import { RawMaterial } from './interfaces/RawMaterial';
import Chat from './components/Chat';
import ProgressBars from './components/ProgressBars';

function App() {

  const [appData, setAppData] = React.useState<any | null>();
  const [chatMessage, setChatMessage] =  React.useState<string | null>();
  const [chatAnswers, setChatAnswers] =  React.useState<any[] | null>([]);
  const [enableMaterialSelect, setEnableMaterialSelect] = React.useState<boolean>(false);
  const [selectedMaterial, setSeletedMaterial] = React.useState<RawMaterial | null>(null);
  const [selectedSubMaterial, setSeletedSubMaterial] = React.useState<RawMaterial | null>(null);

  React.useEffect(()=> {
    fetch('/data/appData.json')
      .then(res=>res.json())
      .then( data => {
        setAppData(data);
        setDefaultChatMessage(data);
      }
    );
  }, []);

  const setDefaultChatMessage = (data: any) => {
    setChatMessage(data?.chatMessage);
    setChatAnswers(data?.chatAnswers);
  }

  return (
    <div className="App">
      {
        appData &&
          <>
            <Navbar/>
            <Grid columns={2} stackable>
              <Grid.Row>
                <Grid.Column floated='left' width={12}>
                  <Landing
                    setDefaultChatMessage={setDefaultChatMessage} 
                    appData={appData} 
                    enableMaterialSelect={enableMaterialSelect}
                    setEnableMaterialSelect={setEnableMaterialSelect}
                    selectedMaterial={selectedMaterial}
                    setSeletedMaterial={setSeletedMaterial}
                    selectedSubMaterial={selectedSubMaterial}
                    setSeletedSubMaterial={setSeletedSubMaterial}
                  />
                  <ProgressBars
                    co2={selectedSubMaterial?.metadata?.co2Score} 
                    bio={selectedSubMaterial?.metadata?.bioScore} 
                    economy={selectedSubMaterial?.metadata?.economyScore}
                    co2Label={appData?.medatadataHeaders?.co2} 
                    bioLabel={appData?.medatadataHeaders?.bio} 
                    economyLabel={appData?.medatadataHeaders?.economy}
                  />
                </Grid.Column>

                <Grid.Column floated='right' width={4}>
                  <Chat message={chatMessage} answers={chatAnswers} onSubmitted={() => {setEnableMaterialSelect(true)}} ></Chat>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </>
        }
    </div>
  ); 
}

export default App;
