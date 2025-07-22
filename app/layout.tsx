import React from 'react';
import { ThemeProvider } from '@/providers/theme-provider';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import './globals.css';

Amplify.configure(outputs);

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang='en'
            suppressHydrationWarning
        >
            <head />
            <body>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
