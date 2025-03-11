import { useState } from 'react'

import { InputCard } from '@simulation/components/InputCard'
import { interests } from '@simulation/components/section/interest/index'
import { StepNavigation } from '@simulation/components/StepNavigation'

type Props = {
    handleValue: (label: string, response: string) => void;
    onBack: () => void;
    onSkip: () => void;
};

export const InterestSection = ({ handleValue, onBack, onSkip }: Props) => {

    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

    return (
        <>
            {interests.map((interest) => {

                return (
                    <InputCard
                        key={interest.id}
                        id={interest.id}
                        label={interest.label}
                        value={interest.value}
                        name={"interests"}
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
                    />
                )
            })
            }

            <StepNavigation showSkip={true} onSkip={ () => {
                handleValue("interests", selectedInterests.toString());
                onSkip();
            } } showBack={true} onBack={ onBack } showSubmit={false} />
        </>
    )
};