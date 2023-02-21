const comments = [
  {
    id: "comment1",
    text: "a first comment",
    likes: 1,
  },
  {
    id: "comment2",
    text: "a second comment",
    likes: 10,
  },
];

function getAllComments() {
  return comments;
}

function getCommentsByLies(minLikes) {
  return comments.filter((comment) => comment.likes >= minLikes);
}

function addComment(id, text) {
  const newComment = {
    id,
    text,
    likes: 0,
  };
  comments.push(newComment);
  return newComment;
}

module.exports = {
  getAllComments,
  getCommentsByLies,
  addComment,
};
