export type TGoods = {
  id: number,
  title: string,
  photo: string
  quantity: number,
  vendorCode: string | number,
  description: string,
}
export interface ICurrentCategory{
  id: number,
  name: string,
  icon: string,
  slug: string,
  items: TGoods[]
}
export interface IScannedBarcode{
  [key: string]: any
}