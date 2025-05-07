'use server'

import { db } from '@/lib/db'

type WaitlistEntry = {
  email: string
  name: string
}

export const addToWaitlist = async ({ email, name }: WaitlistEntry) => {
  try {
    const isExistingUser = await db.waitlist.findUnique({
      where: {
        email,
      },
    })

    if (isExistingUser) {
      return { message: 'You are already on the waitlist.' }
    }

    await db.waitlist.create({
      data: {
        email,
        name,
      },
    })

    return { message: 'You have been added to the waitlist.' }
  } catch (error) {
    console.error('Error adding to waitlist:', error)
    return { error: 'Failed to add to waitlist. Please try again later.' }
  }
}
