'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

import { addToWaitlist } from '@/actions/waitlist/waitlisAction'

const WaitlistSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
})

export const WaitlistModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, setIsPending] = useState(false)

  const form = useForm<z.infer<typeof WaitlistSchema>>({
    resolver: zodResolver(WaitlistSchema),
    defaultValues: {
      email: '',
      name: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof WaitlistSchema>) => {
    setError('')
    setSuccess('')
    setIsPending(true)

    try {
      const response = await addToWaitlist({
        email: values.email,
        name: values.name,
      })

      if (response.error) {
        setError(response.error)
      } else {
        setSuccess(response.message)
        form.reset()
        setTimeout(() => {
          onClose()
          setSuccess('')
        }, 6000)
      }
    } catch (err) {
      console.error('Error submitting waitlist entry:', err)
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      )
    } finally {
      setIsPending(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join the Waitlist</DialogTitle>
          <DialogDescription>
            Be the first to know when we launch. We&apos;ll notify you when
            it&apos;s your turn to try LeetCode SRS.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="John Doe"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="john@example.com"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button type="submit" disabled={isPending} className="w-full ">
              Join Waitlist
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
