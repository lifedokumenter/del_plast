import React from "react";
import './index.less';
import { Header } from 'semantic-ui-react';
import ProgressBars from '../../components/ProgressBars';
import RawMaterialDetails from '../../components/RawMaterialDetails';
import { RawMaterial } from '../../interfaces/RawMaterial'; 
import RawMaterialsColumn from "../../components/RawMaterialsColumn";

export interface LandingProps {
  setDefaultChatMessage: (data: any) => void;
  appData: any;
  setEnableMaterialSelect: (select: boolean) => void;
  enableMaterialSelect: boolean;
  selectedMaterial: RawMaterial | null;
  setSeletedMaterial: (material: RawMaterial | null) => void; 
  selectedSubMaterial: RawMaterial | null;
  setSeletedSubMaterial: (material: RawMaterial | null) => void; 
}

const Landing = ({
  setDefaultChatMessage, 
  appData, 
  enableMaterialSelect,
  setEnableMaterialSelect, 
  selectedMaterial,
  setSeletedMaterial,
  selectedSubMaterial,
  setSeletedSubMaterial
}: LandingProps) => {

  const onMaterialSelect = (material: RawMaterial | null) => {
    setSeletedSubMaterial(null);
    setSeletedMaterial(material);
    setEnableMaterialSelect(false);
    setDefaultChatMessage(appData);
  }

  /* const onSubMaterialSelect = (material: RawMaterial | null) => {
    setSeletedSubMaterial(material);
    setEnableMaterialSelect(false);
    if (material) {
      setChatMessage(material?.chatMessage || null);
      setChatAnswers(material?.chatAnswers || null);
    }
  } */

  return(
    <div className="landing">
      <Header size="large" className="landing__header">{appData?.chooseMaterialHeader}</Header>
      <div className="landing__content">
        { 
          appData?.materials.map( (material: RawMaterial) => 
            <RawMaterialsColumn
              key={material.id}
              materials={material.subMaterials || []} 
              selected={selectedMaterial} 
              onSelect={onMaterialSelect}
            />
          )
        }
      </div>
      {/*  {
        !!selectedMaterial &&
        <>
          <RawMaterialsSelector 
            materials={selectedMaterial?.subMaterials || []} 
            selected={selectedSubMaterial} 
            onSelect={onSubMaterialSelect} 
            vertical={true}
          />
        </>
      }
      {
        !selectedMaterial &&
        <>
          <Header className="App-materials-header" size='large'>{appData?.chooseMaterialHeader}</Header>
          <Image className="App-materials-frontpage-img" src={appData?.frontPageImage} />
        </>
      } */}
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
  )
}

export default Landing;