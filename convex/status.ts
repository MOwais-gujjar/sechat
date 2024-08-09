// import { ConvexError, v } from 'convex/values';
import { ConvexError, v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const getUsers = query({
	args: {},
	handler: async (ctx, args) => {
		const identity = await ctx.auth.getUserIdentity();
		if (!identity) {
			throw new ConvexError("Unauthorized");
		}

		const users = await ctx.db.query("users").collect();
		return users.filter((user) => user.tokenIdentifier !== identity.tokenIdentifier);
	},
});

export const getMe = query({
	args: {},
	handler: async (ctx, args) => {
		const identity = await ctx.auth.getUserIdentity();
		if (!identity) {
			throw new ConvexError("Unauthorized");
		}

		const user = await ctx.db
			.query("users")
			.withIndex("by_tokenIdentifier", (q) => q.eq("tokenIdentifier", identity.tokenIdentifier))
			.unique();

		if (!user) {
			throw new ConvexError("User not found");
		}

		return user;
	},
});

export const update = mutation({
  args: {
    tokenIdentifier: v.string(),
    status: v.string(),
  },
  async handler(ctx, { tokenIdentifier, status }) {
    const user = await ctx.db
      .query('users')
      .withIndex('by_tokenIdentifier', q => q.eq('tokenIdentifier', tokenIdentifier))
      .unique();

    if (!user) {
      throw new ConvexError('User not found');
    }

    await ctx.db.patch(user._id, { status });

    return { success: true };
  },
});

