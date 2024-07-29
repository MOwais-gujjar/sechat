import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
	users: defineTable({
		name: v.optional(v.string()),
		email: v.string(),
		image: v.string(),
		tokenIdentifier: v.string(),
		isOnline: v.boolean(),
	}).index("by_tokenIdentifier", ["tokenIdentifier"]),
    conversations: defineTable({
		participants: v.array(v.id("users")),
		isGroup: v.boolean(),
		GroupName: v.optional(v.string()),
		GroupImage: v.optional(v.string()),
		Admin: v.optional(v.id("users")),
	}),
});
