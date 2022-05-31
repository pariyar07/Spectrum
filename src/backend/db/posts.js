import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it’ll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off.",
    image: "",
    username: "Tanay",
    accountName: "@tanaypratap",
    profileImage: "https://picsum.photos/60/60",
    createdAt: formatDate(),
    likes: {
      likeCount: 456,
      likedBy: [],
    },
    scale: {
      scaleCount: 129,
      scaledBy: []
    },
    comments: [
      {
        _id: uuid(),
        username: "Satyam",
        text: "I didn't think this way before",
        likes: []
      },
      {
        _id: uuid(),
        username: "Elon",
        text: "Awesome",
        likes: []
      },
      {
        _id: uuid(),
        username: "Ronaldo",
        text: "Cool!",
        likes: []
      },{
        _id: uuid(),
        username: "Varun",
        text: "Great...",
        likes: []
      },
    ],
  },{
    _id: uuid(),
    content: "Mr. Jamsetji Nusserwanji Tata has provided us with his inspiration, his ethics, values and selflessness which have provided dignity and livelihood to thousands of citizens. My best wishes go out to all the Tata group employees on the birth anniversary of our founder.",
    image: "/assets/ratantata.jpeg",
    username: "Ratan Tata",
    accountName: "@ratantata",
    profileImage: "https://picsum.photos/60/60",
    createdAt: formatDate(),
    likes: {
      likeCount: "321K",
      likedBy: [],
    },
    scale: {
      scaleCount: "125K",
      scaledBy: []
    },
    comments: [
      {
        _id: uuid(),
        username: "Tanay",
        text: "Interesting",
        likes: []
      },
      {
        _id: uuid(),
        username: "Elon",
        text: "Wow!",
        likes: []
      },
    ],
  },{
    _id: uuid(),
    content: "Are you ready for the 2nd of January? 😎",
    image: "",
    username: "NeoG",
    accountName: "@neogcamp",
    profileImage: "https://picsum.photos/60/60",
    createdAt: formatDate(),
    likes: {
      likeCount: 45,
      likedBy: [],
    },
    scale: {
      scaleCount: 16,
      scaledBy: []
    },
    comments: [
      {
        _id: uuid(),
        username: "Tanay",
        text: "Interesting",
        likes: []
      },
      {
        _id: uuid(),
        username: "Satyam",
        text: "Wow!",
        likes: []
      },
    ],
  },{
    _id: uuid(),
    content: "This is a really good documentary about a sad situation where people living on boats in San Francisco are being kicked out of their homes. Anchored Out: Evicted at Sea | The New Yorker Documentary https://youtu.be/TSoDkEk-eYE via @YouTube",
    image: "",
    username: "Joe Rogan",
    accountName: "@joerogan",
    profileImage: "https://picsum.photos/60/60",
    createdAt: formatDate(),
    likes: {
      likeCount: 45,
      likedBy: [],
    },
    scale: {
      scaleCount: 16,
      scaledBy: []
    },
    comments: [
      {
        _id: uuid(),
        username: "Satyam",
        text: "Interesting",
        likes: []
      },
      {
        _id: uuid(),
        username: "Elon",
        text: "Wow!",
        likes: []
      },
    ],
  },{
    _id: uuid(),
    content: "Ya know, it’s pretty damn great to be able to talk to people from all walks of life and many countries on Twitter! So much to be learned, even from the harshest critics. Basically … I’m just saying I love all you crazy people ♥️♥️",
    image: "",
    username: "Elon",
    accountName: "@elonmusk",
    profileImage: "https://picsum.photos/60/60",
    createdAt: formatDate(),
    likes: {
      likeCount: "569K",
      likedBy: [],
    },
    scale: {
      scaleCount: "434K",
      scaledBy: []
    },
    comments: [
      {
        _id: uuid(),
        username: "Tanay",
        text: "Interesting",
        likes: []
      },
      {
        _id: uuid(),
        username: "Elon",
        text: "Wow!",
        likes: []
      },
    ],
  },{
    _id: uuid(),
    content: "My 2nd Premier League Player Of The Month Award, the 6th in my career. I’m as happy to win today as I was in my early days, the hunger for victory and achievements never fades away. Thanks to everyone that made this possible. 🙏🏽💪🏽",
    image: "/assets/ronaldo.jpeg",
    username: "Ronaldo",
    accountName: "@cristiano",
    profileImage: "https://picsum.photos/60/60",
    createdAt: formatDate(),
    likes: {
      likeCount: "2M",
      likedBy: [],
    },
    scale: {
      scaleCount: "1M",
      scaledBy: []
    },
    comments: [
      {
        _id: uuid(),
        username: "Tanay",
        text: "Interesting",
        likes: []
      },
      {
        _id: uuid(),
        username: "Elon",
        text: "Wow!",
        likes: []
      },
    ],
  }
];
