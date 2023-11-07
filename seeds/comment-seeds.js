const { Comment } = require('../models');

const commentData = [{
        comment_text: "Tech is the best!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "But why?",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "I am soooo lost",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;