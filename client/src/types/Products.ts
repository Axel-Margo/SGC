import { Genders, Categories, Filters } from '../tools/dictionnary'

type Gender_ids = Genders
type Category_ids = Categories
type Filter_ids = Filters

export type ProductSchema = {
    name: string;
    description: string;
    price: number;
    stock: Boolean;
    slug: string;
    gender_id: Gender_ids;
    category_id: Category_ids;
    filter_id: Filter_ids;
    picture: Array<string>;
}

export type PictureSchema = {
    id: number;
    link: string;
    product_id: number
}

export type CategorySchema = {
    id: number;
    name: string
}
export type ProductsData = {
    id: number,
    name: string,
    category_id: Array<CategorySchema>,
    price: number,
    gender_id: Gender_ids
    picture: Array<PictureSchema>
}

export type ProductInfo = {
    id: number
    name: string,
    category_id: Array<CategorySchema>,
    price: number,
    gender_id: Gender_ids
    picture: Array<PictureSchema>
    description: string
}