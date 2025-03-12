'use client'

import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from 'react'

const SimulationContext = createContext<{
    currentStep: number
    setCurrtentStep: Dispatch<SetStateAction<number>>
}>({
    currentStep: 1,
    setCurrtentStep: () => {}
})

export default function SimulationProvider({ children }: { children: React.ReactNode }) {
    const [currentStep, setCurrtentStep] = useState(1)

    // TODO : function next, prev, submit

    return <SimulationContext.Provider value={{ currentStep, setCurrtentStep }}>{children}</SimulationContext.Provider>
}

export const useSimulation = () => useContext(SimulationContext)
