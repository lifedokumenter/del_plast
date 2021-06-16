import './RawMaterialSelector.less';
import React from 'react';
import { Menu } from 'semantic-ui-react';

import { RawMaterial } from '../interfaces/RawMaterial'; 

interface RawMaterialsProps { 
  materials: RawMaterial[],
  onSelect: (material: any)=>void,
  selected?: any | null,
  vertical?: boolean
}

interface MenuItem {
  key: string,
  active: boolean,
  name: string,
  content: string,
  onClick?: ()=>void
}

const RawMaterialsSelector = ({ materials, onSelect, selected, vertical}:RawMaterialsProps) => {

  const items:MenuItem[] = [];
  
  const materialToMenuItem = (material: RawMaterial):MenuItem => {
    return {
      key: material.id, 
      active: material.id === selected?.id, 
      name: material.title,
      content: material.title,
      onClick: () => {
        onSelect(material);
      }
    }
  }

  materials.forEach((material: RawMaterial) => items.push(materialToMenuItem(material)));

  return (
    <div className="raw-material-selector">
      <Menu items={items} vertical={vertical} tabular/>
    </div>
  )
}

export default RawMaterialsSelector;