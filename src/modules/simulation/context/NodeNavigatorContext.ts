'use client'

import { createContext, useContext } from 'react'

export interface NodeNavigatorContextType { //TODO changer les types
    currentNodeId: string;
    currentNode: any;
    goBack: () => any;
    goNext: () => any;
}

export const NodeNavigatorContext = createContext<NodeNavigatorContextType | undefined>(undefined);

export function useNodeNavigator() {
    const context = useContext(NodeNavigatorContext);
    if (!context) {
        throw new Error("useNodeNavigator doit être utilisé à l'intérieur de NodeNavigatorProvider");
    }
    return context;
}