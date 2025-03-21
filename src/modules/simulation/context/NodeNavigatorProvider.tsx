import React, { ReactNode, useRef, useState } from 'react'
import { NodeMap } from '@simulation/DAGmap/NodeMap'

import { NodeNavigatorContext, NodeNavigatorContextType } from './NodeNavigatorContext'

interface NodeNavigatorProviderType {
    nodeMap: NodeMap;
    startNodeId: string;
    children: ReactNode;
}

export default function NodeNavigatorProvider(props: NodeNavigatorProviderType) {
    const history = useRef<string[]>([props.startNodeId])
    const currentNodeId = useRef<string>(props.startNodeId)
    const [currentNode, setCurrentNode] = useState(props.nodeMap.nodes[props.startNodeId]);

    const getNextNodeId = (nodeId: string, conditions: any): string => {
        const children = props.nodeMap.paths[nodeId] || [];
        const conditionedPaths = children.filter(item => item.condition);
        const freePath = children.filter(item => !item.condition); //TODO faire un reeduce pour pas faire 2 claculs ?

        for (const conditionedPath of conditionedPaths) {
            if (conditionedPath.condition!(conditions)) {
                return conditionedPath.next;
            }
        }

        if (freePath.length > 1) throw new Error("Paths are too ambigous");
        return freePath.length ? freePath[0].next : "";
    }

    const getNode = (nodeId: string) => {
        return props.nodeMap.nodes[nodeId]
    }

    const goBack= () => {
        const prevHistory = history.current

        if (prevHistory.length > 1) {
            const newHistory = prevHistory.slice(0, -1)
            currentNodeId.current = newHistory[newHistory.length -1]
            history.current = newHistory

            setCurrentNode(getNode(currentNodeId.current))
        }
    }

    const goNext = (conditions: any) => {
        const nextNodeId = getNextNodeId(currentNodeId.current, conditions)
        if (!nextNodeId) return

        history.current = [...history.current, nextNodeId]
        currentNodeId.current = nextNodeId

        setCurrentNode(getNode(nextNodeId))
    }

    const contextValue: NodeNavigatorContextType = {
        currentNode,
        goBack,
        goNext
    }

    return(
        <NodeNavigatorContext.Provider value={contextValue}>
            {props.children}
        </NodeNavigatorContext.Provider>
    )
}