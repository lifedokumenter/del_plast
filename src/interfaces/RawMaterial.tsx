export interface RawMaterialMetadata {
  co2Score: number,
  bioScore: number,
  economyScore: number
}

export interface RawMaterial {
  id: string,
  title: string,
  description: string,
  imageUrl?: string,
  subMaterials?: RawMaterial[],
  metadata?: RawMaterialMetadata,
  chatMessage?: string | undefined,
  chatAnswers?: any[] | undefined,
}
