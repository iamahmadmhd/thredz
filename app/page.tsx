'use client';

import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

Amplify.configure(outputs);

export default function App() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-center py-2'>thredz</main>
    );
}
