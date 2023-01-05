export const getAllUsers = async (req, res) => {
  res.status(200).json({
    users: ["user1", "user2", "user3"],
  });
};
