import * as z from "zod";

export const ThreadVa1idation = z.object({
  thread: z.string().nonempty().min(3, { message: "mnimum 3 characters" }),
  accountId: z.string(),
});

export const CommentVa1idation = z.object({
  thread: z.string().nonempty().min(3, { message: "mnimum 3 characters" }),
});
