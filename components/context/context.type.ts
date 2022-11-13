
import { Dispatch, SetStateAction } from "react";

import { Cart, User, Item, Images, Tags } from "@prisma/client";

import item from "../../pages/api/app.types";

export interface AppDataInterface {
  isLoggedin: boolean,
  user: {
    id: string,
    Name: string,
    Type: string
  } | null
  isAdmin: boolean,
  cart: string[],
  items: item[]
};

export type AppDataContext = [
  AppDataInterface,
  Dispatch<SetStateAction<AppDataInterface>>
];

export const defaultData :AppDataInterface =  {
  isLoggedin: true,
  user: null,
  isAdmin: false,
  cart: [],
  items: []
};
