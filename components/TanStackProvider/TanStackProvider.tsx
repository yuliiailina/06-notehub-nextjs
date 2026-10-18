"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { ReactNode } from "react"

interface TanStackProviderProps {
  children: ReactNode;
}

const queryClient =  new QueryClient();

export default function TanStackProvider({
    children,
}: TanStackProviderProps) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}