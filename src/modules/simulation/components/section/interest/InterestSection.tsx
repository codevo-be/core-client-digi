import { useState } from 'react'

import { InputCard } from '@simulation/components/InputCard'
import { interests } from '@simulation/components/section/interest/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'

export default function InterestSection({ handleValue, onBack }: PropsSectionType) {

    const questionName = "interests"

    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

    return (
        <div className={"flex flex-col gap-[6.1rem] items-center"}>

            <h2 className={"text-[2.8rem] text-[#006EC2]"}>Je suis intéressé par</h2>

            <div className={"flex flex-col gap-[2.3rem]"}>
                {interests.map((interest) => {

                    const checked = selectedInterests.includes(interest.id);

                    return (
                        <InputCard
                            key={interest.id}
                            id={interest.id}
                            label={interest.label}
                            value={interest.value}
                            name={questionName}
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
                            logoPath={undefined}
                            logoStyle={""}
                            boxStyle={`h-[9rem] w-[62.3rem] border-[#8EACC5] ${checked ? "border-8" : ""}`}
                            textStyle={"text-[2.8rem] text-[#006EC2]"}
                        />
                    )
                })
                }
            </div>

            <StepNavigation showSkip={true} onSkip={ () => {
                handleValue("interests", selectedInterests.toString(), true);
            } }
                            showBack={true} onBack={ onBack }
                            showSubmit={false} />
        </div>
    )
};