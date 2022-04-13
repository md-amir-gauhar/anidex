import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
    active: true
  },
  {
    _id: uuid(),
    categoryName: "AMV",
    active: false
  },
  {
    _id: uuid(),
    categoryName: "Anime Trailer",
    active: false
  },
  {
    _id: uuid(),
    categoryName: "Anime Opening",
    active: false
  },
];
