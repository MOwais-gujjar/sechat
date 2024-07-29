import { ConvexError, v } from "convex/values";

import { mutation } from "./_generated/server";

export const createConversation = mutation({
  args: {
    participants: v.array(v.id("users")),

    isGroup: v.boolean(),

    GroupName: v.optional(v.string()),

    GroupImage: v.optional(v.id("_storage")),

    Admin: v.optional(v.id("users")),
  },

  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new ConvexError("unauthorized");
    }

    const existingConversation = await ctx.db

      .query("conversations")

      .filter((q) =>
        q.or(
          q.eq(q.field("participants"), args.participants),

          q.eq(q.field("participants"), args.participants.reverse())
        )
      )

      .first();

    if (existingConversation) {
      return existingConversation._id;
    }

    let GroupImage;

    if (args.GroupImage) {
      // Upload
    }

    const conversationsId = await ctx.db.insert("conversations", {
      participants: args.participants,

      isGroup: args.isGroup,

      GroupName: args.GroupName,

      GroupImage: args.GroupImage,

      Admin: args.Admin,
    });

    return conversationsId;
  },
});
