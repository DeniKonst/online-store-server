import { IProduct } from "./types";

export const products: IProduct[] = [
  {
    id: 1,
    name: "Ступичный подшипник",
    cost: 50,
    weight: 4.5,
    imageSrc: `${process.env.REACT_APP_DEVELOPMENT_API_URL}/api/uploads/wheelBearing.jpg`,
    description: "Производство Турция",
  },
  {
    id: 2,
    name: "рычаг передний верхний ",
    cost: 60,
    weight: 4.5,
    imageSrc: `${process.env.REACT_APP_DEVELOPMENT_API_URL}/api/uploads/lever.jpg`,
    description: "Производство Китай",
  },
  {
    id: 3,
    name: "рычаг передний нижний",
    cost: 40,
    weight: 4.5,
    imageSrc: `${process.env.REACT_APP_DEVELOPMENT_API_URL}/api/uploads/wheelBearing.jpg`,
    description: "Производство Китай",
  },
  {
    id: 4,
    name: "датчик коленвала",
    cost: 80,
    weight: 4.5,
    imageSrc: `${process.env.REACT_APP_DEVELOPMENT_API_URL}/api/uploads/lever.jpg`,
    description: "Производство Германия",
  },

  {
    id: 5,
    name: "рейка рулевая",
    cost: 150,
    weight: 4.5,
    imageSrc: `${process.env.REACT_APP_DEVELOPMENT_API_URL}/api/uploads/wheelBearing.jpg`,
    description: "Производство Германия",
  },
  {
    id: 6,
    name: "рулевая тяга",
    cost: 30,
    weight: 4.5,
    imageSrc: `${process.env.REACT_APP_DEVELOPMENT_API_URL}/api/uploads/lever.jpg`,
    description: "Производство Китай",
  },
];
