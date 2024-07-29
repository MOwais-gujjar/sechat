import { internalMutation } from "./_generated/server";

import { ConvexError, v } from "convex/values";

export const createUser = internalMutation({
  args: {
    tokenIdentifier: v.string(),
    name: v.string(),
    email: v.string(),
    image: v.string(),
    isOnline: v.boolean(),
  },

  handler: async (ctx, args) => {
    await ctx.db.insert("users", {
      email: args.email,
      name: args.name,
      image: args.image,
      tokenIdentifier: args.tokenIdentifier,
      isOnline: args.isOnline,
    });
  },
});

export const userUpdate = internalMutation({
  args: {
    tokenIdentifier: v.string(),
    image: v.string(),
  },

  async handler(ctx, args) {
    const user = await ctx.db
      .query("users")
      .withIndex("by_tokenIdentifier", (q) =>
        q.eq("tokenIdentifier", args.tokenIdentifier)
      )
      .unique();
    if (!user) {
      throw new ConvexError("No User With this token found!");
    }
    await ctx.db.patch(user._id, { image: args.image });
  },
});

export const setUserOnline = internalMutation({
  args: {
    tokenIdentifier: v.string(),
  },

  handler: async (ctx, args) => {
    const user = await ctx.db

      .query("users")

      .withIndex("by_tokenIdentifier", (q) =>
        q.eq("tokenIdentifier", args.tokenIdentifier)
      )

      .unique();

    if (!user) {
      throw new ConvexError("Session Not Found!");
    }

    await ctx.db.patch(user._id, { isOnline: true });
  },
});

export const setUserOffline = internalMutation({
  args: {
    tokenIdentifier: v.string(),
  },

  handler: async (ctx, args) => {
    const user = await ctx.db

      .query("users")

      .withIndex("by_tokenIdentifier", (q) =>
        q.eq("tokenIdentifier", args.tokenIdentifier)
      )

      .unique();

    if (!user) {
      throw new ConvexError("Session Not Found!");
    }

    await ctx.db.patch(user._id, { isOnline: false });
  },
});

export const getUser = internalMutation({
  args: {},

  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new ConvexError("Unauthorized");
    }

    const users = await ctx.db
      .query("users")

      .collect();

    return users;
  },
});

export const getMe = internalMutation({
  args: {},

  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new ConvexError("Unauthorized");
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_tokenIdentifier", (e) =>
        e.eq("tokenIdentifier", identity.tokenIdentifier)
      )

      .unique();

    if (!user) {
      throw new ConvexError("user not Found!");
    }

    return user;
  },
});
