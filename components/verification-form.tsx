'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import { Button } from './ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { redirect, useSearchParams } from 'next/navigation';
import { confirmSignUp } from 'aws-amplify/auth';

const FormSchema = z.object({
    code: z
        .string({
            required_error: 'Code is required',
        })
        .min(6, 'Code must be at least 6 characters long')
        .max(6, 'Code must be at most 6 characters long'),
    email: z.string().email(),
});

type VerificationFormProps = z.infer<typeof FormSchema>;

export default function VerificationForm() {
    const searchParams = useSearchParams();
    const form = useForm<VerificationFormProps>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: searchParams.get('email'),
            code: '',
        },
    });

    const onSubmit = async (data: VerificationFormProps) => {
        try {
            Amplify.configure(outputs);
            const { isSignUpComplete } = await confirmSignUp({
                username: data.email,
                confirmationCode: data.code,
            });
            if (isSignUpComplete) {
                redirect('/');
            }
        } catch (error) {
            console.log({ error });
        }
    };
    return (
        <Card className='w-full'>
            <CardHeader className='text-center'>
                <CardTitle className='text-xl'>Verify your email</CardTitle>
                <CardDescription>Enter the verification code sent to your email</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className='grid gap-6'>
                            <FormField
                                control={form.control}
                                name='email'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                type='email'
                                                disabled
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='code'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Code</FormLabel>
                                        <FormControl>
                                            <Input
                                                type='text'
                                                placeholder='123456'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type='submit'>Verify</Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
