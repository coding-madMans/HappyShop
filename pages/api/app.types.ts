
import { Images, Tags } from "@prisma/client";

export default interface item {
  id: string,
  Name: string,
  Price: number,
  Quantity:  number,
  Images: Images[],
  Tags: Tags[]
}
