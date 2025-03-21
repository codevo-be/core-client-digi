import React, { MutableRefObject } from 'react'
import { useNodeNavigator } from '@simulation/context/NodeNavigatorContext'

import { InputResponseType } from '@simulation/components/InputResponseType'

interface Props {
    data: MutableRefObject<any>;
    handleValue: (currentNodeId:string, values: InputResponseType[]) => void;
}

export default function SectionContainer(props: Props) {

    const nodeNavigator = useNodeNavigator()
    const currentNode = nodeNavigator.currentNode

    const handleValue = (values: InputResponseType[]) => {
        for (const value of values) {
            props.data.current = { ...props.data.current, [value.label]: value.response }
        }

        props.handleValue(nodeNavigator.currentNodeId, values);
    }

    return(
        <>
            {React.createElement(currentNode.component, {
                handleValue
            })}
        </>
    )
}