import forestCenter1 from "./images/ForestCenter1.jpg";
import forestCenter2 from "./images/ForestCenter2.png";
import nestBack1 from "./images/NestBack1.png";
import nestBack2 from "./images/NestBack2.png";
import nestBack3 from "./images/NestBack3.png";

const SpotsSample = [
  {
    id: "1",
    name: "Nest Backside",
    averageRating: 4.2,
    imageLinks: [nestBack1, nestBack2, nestBack3],
    locationLink: "",
    ratingIds: ["1", "2", "3", "4"],
    tags: [
      "quiet",
      "outlets",
      "microwaves",
      "food-near",
      "open-now",
      "washrooms",
    ],
  },
  {
    id: "2",
    name: "Forestry Building",
    averageRating: 4.4,
    imageLinks: [forestCenter1, forestCenter2],
    locationLink: "",
    ratingIds: ["5", "6", "7"],
    tags: ["quiet", "food-near", "open-now", "washrooms"],
  },
];

export default SpotsSample;
