import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    username: v.string(),
    image: v.optional(v.string()),
    email: v.string(),
    password: v.string(),
  }).index("email", ["email"]),

  sessions: defineTable({
    userId: v.id("users"),
    expirationTime: v.number(),
    agent: v.optional(v.string()),
  }).index("userId", ["userId"]),
});
