import { useState } from 'react'
import { useNodeNavigator } from '@simulation/context/NodeNavigatorContext'

import CardTitle from '@simulation/components/atoms/Text/CardTitle'
import SectionTitle from '@simulation/components/atoms/Text/SectionTitle'
import InputCard from '@simulation/components/molecules/InputCard'
import { interests } from '@simulation/config'
import PropsSectionType from '@simulation/components/section/PropsSectionType'

type InterestSectionType = PropsSectionType

export default function InterestSection(props: InterestSectionType) {

    const inputName = "interests"
    const nodeNavigator = useNodeNavigator()

    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

    return (
        <div className={"flex flex-col gap-16 items-center"}>
            <SectionTitle content={"Je suis intéressé par"} />

            {interests.map((_) => (
                <InputCard
                    key={_.id}
                    id={_.id}
                    value={_.value}
                    name={inputName}
                    onClick={() => {
                        setSelectedInterests((prev) => {
                                return prev.includes(_.id) ? prev.filter((id) => id !== _.id) : [...prev, _.id]
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

                    <div className={"flex items-center gap-[3.6rem] w-[62.3rem] h-[9.7rem]"}>
                        <div className={"w-[8.2rem] h-[8.2rem] max-w-[8.2rem] max-h-[8.2rem] bg-[#5A95B9] rounded-full"}>

                        </div>


                        <CardTitle>{_.label}</CardTitle>
                    </div>

                </InputCard>
            ))}
        </div>
    )
}