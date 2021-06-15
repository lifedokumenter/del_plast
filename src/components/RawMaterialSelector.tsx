import './RawMaterialSelector.less';
import React, {useState} from 'react';
import { Header, Menu } from 'semantic-ui-react';

import { RawMaterial } from '../interfaces/RawMaterial'; 

interface RawMaterialsProps { 
  materials: RawMaterial[],
  onSelect: (material: any)=>void,
  onSubSelect: (material: any)=>void,
  selected?: any | null,
  header?: string,
  subHeader1?: string,
  subHeader2?: string
}

interface MenuItem {
  key: string,
  active: boolean,
  name: string,
  onClick?: ()=>void
}

const RawMaterialsSelector = ({ materials, onSelect, selected, onSubSelect, header = 'Header', subHeader1 = 'Sub header', subHeader2  = 'Sub Header 2'}:RawMaterialsProps) => {

  const [selectedCategory, setSelectedCategory] = useState<RawMaterial>();

  const items:MenuItem[] = [];
  const subItems:MenuItem[] = [];
  
  const materialToMenuItem = (material: RawMaterial, category:boolean = false):MenuItem => {
    return {
      key: material.id, 
      active: material.id === selectedCategory?.id || material.id === selected?.id, 
      name: material.title,
      onClick: () => {
        if (category) {
          setSelectedCategory(material);
          onSelect(undefined);
        } else {
          onSelect(material);
          onSubSelect(material);
        }
      }
    }
  }

  materials.forEach((material: RawMaterial) => items.push(materialToMenuItem(material, true)));
  
  if(selectedCategory?.subMaterials?.length){
    selectedCategory.subMaterials.forEach((material:RawMaterial) => subItems.push(materialToMenuItem(material)));
  }

  return (
    <div className="raw-material-selector">
      <Header size='huge'>{header}</Header>
      <Menu className="raw-material-selector-main" items={items} tabular />
      <div className="raw-material-selector-sub">
        <>
          {
            !subItems.length &&
            <Header>{subHeader1}</Header>
          }
          {
            !!subItems?.length &&
            <>  
              <Header>{subHeader2}</Header>
              <Menu items={subItems} />
            </>
          }
        </>
      </div>
    </div>
  )
}

export default RawMaterialsSelector;