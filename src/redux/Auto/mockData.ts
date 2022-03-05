import { IProduct } from "./types";
import WheelBearingImg from "../../assets/images/wheelBearing.jpg";
import LeverImg from "../../assets/images/lever.jpg";

export const products: IProduct[] = [
  {
    id: 1,
    name: "Ступичный подшипник",
    cost: 50,
    weight: 4.5,
    imageSrc: WheelBearingImg,
    description: "Производство Турция",
  },
  {
    id: 2,
    name: "рычаг передний верхний ",
    cost: 60,
    weight: 4.5,
    imageSrc: LeverImg,
    description: "Производство Китай",
  },
  {
    id: 3,
    name: "рычаг передний нижний",
    cost: 40,
    weight: 4.5,
    imageSrc: WheelBearingImg,
    description: "Производство Китай",
  },
  {
    id: 4,
    name: "датчик коленвала",
    cost: 80,
    weight: 4.5,
    imageSrc: LeverImg,
    description: "Производство Германия",
  },

  {
    id: 5,
    name: "рейка рулевая",
    cost: 150,
    weight: 4.5,
    imageSrc: WheelBearingImg,
    description: "Производство Германия",
  },
  {
    id: 6,
    name: "рулевая тяга",
    cost: 30,
    weight: 4.5,
    imageSrc: LeverImg,
    description: "Производство Китай",
  },
];
