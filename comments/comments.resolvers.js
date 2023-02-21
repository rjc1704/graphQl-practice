const {
  getAllComments,
  getCommentsByLies,
  addComment,
} = require("./comments.model");

module.exports = {
  Query: {
    comments: () => {
      return getAllComments();
    },
    commentsByLikes: (_, args) => {
      return getCommentsByLies(args.minLikes);
    },
  },
  Mutation: {
    addComment: (_, args) => {
      const { id, text } = args;
      return addComment(id, text);
    },
  },
};
