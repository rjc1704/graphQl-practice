const { getAllPosts, getPostById, addPost } = require("./posts.model");
module.exports = {
  Query: {
    posts: () => {
      return getAllPosts();
    },
    post: (_, args) => {
      return getPostById(args.id);
    },
  },
  Mutation: {
    addPost: (_, args) => {
      const { id, title, description } = args;
      return addPost(id, title, description);
    },
  },
};
