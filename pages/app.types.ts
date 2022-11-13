
import { Images, Tags } from "@prisma/client";

export interface item {
  id: string,
  Name: string,
  Price: number,
  Quantity:  number,
  Images: Images[],
  Tags: Tags[]
}
