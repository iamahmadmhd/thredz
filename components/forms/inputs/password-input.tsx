'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function PasswordInput({ ...props }: PasswordInputProps) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    return (
        <div className='relative'>
            <Input
                type={isPasswordVisible ? 'text' : 'password'}
                autoComplete='new-password'
                {...props}
            />
            <Button
                type='button'
                size='icon'
                variant='ghost'
                className='absolute right-0 top-1/2 -translate-y-1/2 shadow-none hover:shadow-none hover:drop-shadow-none hover:outline-none focus-visible:shadow-none focus-visible:outline-none focus:shadow-none focus:outline-none'
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
            >
                {isPasswordVisible ? <EyeOff /> : <Eye />}
            </Button>
        </div>
    );
}
