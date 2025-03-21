import { useState } from 'react'
import { ImageBuilder } from '@digico/ui'

import { OldInputCard } from '@simulation/components/molecules/OldInputCard'
import { InputResponseType } from '@simulation/components/InputResponseType'
import { possessions } from '@simulation/components/section/possession/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'
import { useNodeNavigator } from '@simulation/context/NodeNavigatorContext'

export default function PossessionSection(propsSection: PropsSectionType) {

    const inputName = "possessions";
    const [selectedPossessions, setSelectedPossessions] = useState<string[]>([]);
    const nodeNavigator = useNodeNavigator()

    return (
        <div className={"flex flex-col items-center gap-[3.6rem]"}>

            <h2>Chez moi, je possède</h2>

            <div className={"flex flex-wrap justify-center gap-x-[1.7rem] gap-y-[3.3rem] max-w-[110rem] w-full"}>
                {possessions.map((possession) => (
                    <OldInputCard
                       key={possession.id}
                       id={possession.id}
                       value={possession.value}
                       name={inputName}
                       onClick={() => {
                           setSelectedPossessions((prev) => {
                               return prev.includes(possession.id)
                                   ? prev.filter(id => id !== possession.id)
                                   : [...prev, possession.id];
                           });
                       }}
                       type={"checkbox"}
                    >

                        <div className={"basis-1/3 w-[35.1rem] h-[13.4rem] flex items-center gap-4"}>

                            <div className={"w-[13rem] h-[13.1rem] flex items-center justify-center"}>
                                <ImageBuilder src={possession.imagePath} className={"object-cover"} />
                            </div>

                            <p>{possession.label}</p>
                        </div>

                    </OldInputCard>
                ))}
            </div>

            <StepNavigation
                showSkip={true}
                onSkip={() => {

                    const data: InputResponseType = {
                        label: inputName,
                        response: selectedPossessions.toString()
                    }

                    propsSection.handleValue([data]);
                    nodeNavigator.goNext()
                }}
                showSubmit={false}
            />
        </div>
    );
}