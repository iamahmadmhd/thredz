'use client';

import { Authenticator } from '@aws-amplify/ui-react';

export function AuthenticationProvider({ children }: { children: React.ReactNode }) {
    return <Authenticator.Provider>{children}</Authenticator.Provider>;
}
