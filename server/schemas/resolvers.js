const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id });

        return userData;
      }
      throw AuthenticationError;
    },
  },
  Mutation: {
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },

    createUser: async (parent, { username, password }) => {
      try {
        const user = await User.create({ username, password });
        const token = signToken(user);

        console.log("resolver token:", token, user);

        return { token, user };
      } catch (error) {
        return { error: error.message };
      }
    },
  },
};

module.exports = resolvers;
