"use server";

import { auth } from "@clerk/nextjs/dist/types/server";

export async function updateUser(data) {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
        where: {
            clerkUserId:userId,
        },
    })
    if (!user) throw new Error("User not found");
}