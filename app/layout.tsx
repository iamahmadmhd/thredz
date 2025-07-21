import React from 'react';
import { AuthenticationProvider } from '@/providers/authentication-provider';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthenticationProvider>
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
        </AuthenticationProvider>
    );
}
