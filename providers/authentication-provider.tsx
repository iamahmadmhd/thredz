'use client';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import outputs from '../amplify_outputs.json';

Amplify.configure(outputs);

export function AuthenticationProvider({ children }: { children: React.ReactNode }) {
    return <Authenticator.Provider>{children}</Authenticator.Provider>;
}
