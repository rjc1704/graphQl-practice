const posts = [
  {
    id: "post1",
    title: "a first post",
    description: "first post description",
    comments: [
      {
        id: "comment1",
        text: "comment1 text",
        likes: 1,
      },
    ],
  },
  {
    id: "post2",
    title: "a second post",
    description: "second post description",
    comments: [],
  },
];

function getAllPosts() {
  return posts;
}

function getPostById(id) {
  return posts.find((post) => post.id === id);
}

function addPost(id, title, description) {
  const newPost = {
    id,
    title,
    description,
    comments: [],
  };
  posts.push(newPost);
  return newPost;
}

module.exports = {
  getAllPosts,
  getPostById,
  addPost,
};
