import './App.less';
import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';
import Chat from './components/Chat';
import Navbar from './components/Navbar';
import ProgressBars from './components/ProgressBars';
import RawMaterialDetails from './components/RawMaterialDetails';
import RawMaterialsSelector from './components/RawMaterialSelector';

import { RawMaterial } from './interfaces/RawMaterial'; 

function App() {
  
  const [selectedMaterial, setSeletedMaterial] = React.useState<RawMaterial | undefined>();
  const [selectedSubMaterial, setSeletedSubMaterial] = React.useState<RawMaterial | undefined>();
  const [enableMaterialSelect, setEnableMaterialSelect] = React.useState<boolean>(false);
  const [appData, setAppData] = React.useState<any | undefined>();
  const [chatMessage, setChatMessage] =  React.useState<string>();
  const [chatAnswers, setChatAnswers] =  React.useState<any[] | undefined>([]);
  

  const onMaterialSelect = (material: RawMaterial | undefined) => {
    setSeletedSubMaterial(undefined);
    setSeletedMaterial(material);
    setEnableMaterialSelect(false);
    setDefaultChatMessage(appData);
  }

  const onSubMaterialSelect = (material: RawMaterial | undefined) => {
    setSeletedSubMaterial(material);
    setEnableMaterialSelect(false);
    setChatMessage(material?.chatMessage);
    setChatAnswers(material?.chatAnswers);
  }

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
          <Navbar title={appData?.pageTitle} />
          <Grid columns={2} stackable>
            <Grid.Row>
              <Grid.Column floated='left' width={12}>
                <div className="App-materials">
                  <RawMaterialsSelector 
                    materials={appData?.materials} 
                    selected={selectedMaterial} 
                    onSelect={onMaterialSelect}
                  />
                  {
                    !!selectedMaterial &&
                    <>
                      <RawMaterialsSelector 
                        materials={selectedMaterial?.subMaterials || []} 
                        selected={selectedSubMaterial} 
                        onSelect={onSubMaterialSelect} 
                        vertical={true}
                      />
                      {
                        !selectedSubMaterial &&
                        <Header className="App-materials-header-type" size='large'>{appData?.chooseTypeHeader}</Header>
                      }
                    </>
                  }
                  {
                    !!selectedSubMaterial &&
                    <ProgressBars 
                      co2={selectedSubMaterial?.metadata?.co2Score} 
                      bio={selectedSubMaterial?.metadata?.bioScore} 
                      economy={selectedSubMaterial?.metadata?.economyScore}
                      co2Label={appData?.medatadataHeaders?.co2} 
                      bioLabel={appData?.medatadataHeaders?.bio} 
                      economyLabel={appData?.medatadataHeaders?.economy}
                    />
                  }
                  {
                    !selectedMaterial &&
                    <>
                      <Header className="App-materials-header" size='large'>{appData?.chooseMaterialHeader}</Header>
                      <Image className="App-materials-frontpage-img" src={appData?.frontPageImage} />
                    </>
                  }
                  {
                    !!selectedSubMaterial && 
                    <RawMaterialDetails 
                      id={selectedSubMaterial.id}
                      title={selectedSubMaterial.title}
                      description={selectedSubMaterial.description}
                      imageUrl={selectedSubMaterial.imageUrl}
                      selectedHeader={appData?.emailText.writeEmail}
                      feedback={appData?.emailText.thanksForMessage}
                      enableSelect={enableMaterialSelect}
                    />
                  }
                </div>        
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
