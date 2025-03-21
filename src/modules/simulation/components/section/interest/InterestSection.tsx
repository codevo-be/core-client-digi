import { useState } from 'react'

import { InputCard } from '@simulation/components/InputCard'
import { interests } from '@simulation/components/section/interest/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'
import { InputResponseType } from '@simulation/components/InputResponseType'
import { ImageBuilder } from '@digico/ui'
import { useNodeNavigator } from '@simulation/context/NodeNavigatorContext'

export default function InterestSection({ handleValue}: PropsSectionType) {

    const inputName = "interests"
    const nodeNavigator = useNodeNavigator()

    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

    return (
        <div className={"flex flex-col gap-[6.1rem] items-center"}>

            <h2 className={"text-[2.8rem] text-[#006EC2]"}>Je suis intéressé par</h2>

            <div className={"flex flex-col gap-[2.3rem]"}>
                {interests.map((interest) => {

                    return (
                        <InputCard
                            key={interest.id}
                            id={interest.id}
                            value={interest.value}
                            name={inputName}
                            onClick={() => {
                                setSelectedInterests((prev) => {
                                        return prev.includes(interest.id) ? prev.filter((id) => id !== interest.id) : [...prev, interest.id]
                                    }
                                    /*
                                    TODO Si c'est vide, renvoie une erreur car le back ne le prend pas,
                                     est-ce que je vais en sorte de supprimer les anciennes valeurs
                                     car vide et je change la section dans simulation
                                    */
                                );
                            }}
                            type={'checkbox'}
                        >

                            <div className={"flex items-center gap-[3.6rem]"}>
                                <div className={"w-[10.4rem] h-[9.5rem] flex justify-center items-center"}>
                                    <ImageBuilder src={interest.imagePath} />
                                </div>

                                <p>{interest.label}</p>
                            </div>

                        </InputCard>
                    )
                })
                }
            </div>

            <StepNavigation showSkip={true} onSkip={ () => {
                const data: InputResponseType = {
                    label: inputName,
                    response: selectedInterests.toString()
                }

                handleValue([data]);
                nodeNavigator.goNext()
            } }
                            showSubmit={false}
            />
        </div>
    )
};