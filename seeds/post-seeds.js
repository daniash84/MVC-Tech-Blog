const { Post } = require("../models");

const postData = [
  {
    title: "How Tech Helped Me",
    content:
      "Before I used my calendar I would lose all my dates and project time frames.",
    user_id: 1,
  },
  {
    title: "Online Calendars Can Be Hard",
    content: "Why can online calendars get messed up so easy?",
    user_id: 2,
  },
  {
    title: "I don't know",
    content: "WHAT AM I DOING?!",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;