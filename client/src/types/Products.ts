import { Genders, Categories, Filters } from '../tools/dictionnary'

type Gender_ids = Genders
type Category_ids = Categories
type Filter_ids = Filters

export type ProductSchema = {
    name: string;
    description: string;
    price: number;
    stock: Boolean;
    gender_id: Gender_ids;
    category_id: Category_ids;
    filter_id: Filter_ids;
    picture: Array<string>;
}