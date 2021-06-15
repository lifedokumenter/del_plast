import './App.less';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import Chat from './components/Chat';
import Navbar from './components/Navbar';
import ProgressBars from './components/ProgressBars';
import RawMaterialDetails from './components/RawMaterialDetails';
import RawMaterialsSelector from './components/RawMaterialSelector';
import appData from './data/appData.json';

import { RawMaterial } from './interfaces/RawMaterial'; 

function App() {
  
  const [selectedMaterial, setSeletedMaterial] = React.useState<RawMaterial | undefined>();
  const [selectedSubMaterial, setSeletedSubMaterial] = React.useState<RawMaterial | undefined>();
  
  const onMaterialSelect = (material: RawMaterial | undefined) => {
    setSeletedMaterial(material);
  }

  const onSubMaterialSelect = (material: RawMaterial | undefined) => {
    setSeletedSubMaterial(material);
  }

  return (
    <div className="App">
      <Navbar />
      <Grid columns={2} stackable>
        <Grid.Row>
          <Grid.Column floated='left' width={12}>
            <div className="App-materials">
              <RawMaterialsSelector 
                materials={appData?.materials} 
                selected={selectedMaterial} 
                onSelect={onMaterialSelect} 
                onSubSelect={onSubMaterialSelect}
                header={appData?.pageTitle}
                subHeader1={appData?.chooseMaterialHeader}
                subHeader2={appData?.chooseTypeHeader}  
              />
              {
                !!selectedMaterial && 
                <>
                  <RawMaterialDetails 
                    id={selectedMaterial.id}
                    title={selectedMaterial.title}
                    description={selectedMaterial.description}
                    imageUrl={selectedMaterial.imageUrl}
                    selectedHeader={appData?.emailText.writeEmail}
                    feedback={appData?.emailText.thanksForMessage}
                  />
                  <ProgressBars 
                    co2={selectedMaterial?.metadata?.co2Score} 
                    bio={selectedMaterial?.metadata?.bioScore} 
                    economy={selectedMaterial?.metadata?.economyScore}
                    co2Label={appData?.medatadataHeaders?.co2} 
                    bioLabel={appData?.medatadataHeaders?.bio} 
                    economyLabel={appData?.medatadataHeaders?.economy}
                  />
                </>
              }
            </div>        
          </Grid.Column>
          <Grid.Column floated='right' width={4}>
            <Chat messages={selectedSubMaterial?.chatAnswers || []}></Chat>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
