'use client';

import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { ModeToggle } from '@/components/mode-toggle';

Amplify.configure(outputs);

export default function App() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-center py-2'>
            <h1>thredz</h1>
            <ModeToggle />
        </main>
    );
}
