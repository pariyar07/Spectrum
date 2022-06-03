import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Admin",
    lastName: "Spectrum",
    username: "satyam",
    password: "satyam@spectrum123",
    email: "satyam@spectrum.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "“Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.” – Steve Jobs",
    profileImage: "assets/spectrum.png",
    backgroundImage: "https://picsum.photos/1000/300",
    profileLink: "https://github.com/pariyar07"
  },
];
