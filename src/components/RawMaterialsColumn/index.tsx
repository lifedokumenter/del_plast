import React from 'react';
import './index.less';
import { Card } from 'semantic-ui-react';

import { RawMaterial } from '../../interfaces/RawMaterial'; 

interface RawMaterialsColumnProps { 
  materials: RawMaterial[],
  onSelect: (material: any | null)=>void,
  selected?: any | null,
  vertical?: boolean
}

/* interface CardItem {
  key: string,
  active: boolean,
  name: string,
  content: string,
  onClick?: ()=>void
}
 */
const RawMaterialsColumn = ({ materials, onSelect, selected, vertical}:RawMaterialsColumnProps) => {

  //const [items, setItems] = React.useState<Array<CardItem> | null>()
  //const items:MenuItem[] = [];
  
/*   const materialToMenuItem = (material: RawMaterial):MenuItem => {
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
 */

  //materials.forEach((material: RawMaterial) => items.push(materialToMenuItem(material)));

  return (
    <div className="raw-material-column">
      {
        materials.map((material) => (
          <Card key={material.id} color={selected ? 'green' : 'grey'} onClick={() => onSelect(material)}>
            <Card.Content>
              <Card.Header content={material.title} />
              <Card.Description content={material.description} />
            </Card.Content>
          </Card>
        ))
      }
      {/* <Menu items={items} vertical={vertical} tabular/> */}
    </div>
  )
}

export default RawMaterialsColumn;