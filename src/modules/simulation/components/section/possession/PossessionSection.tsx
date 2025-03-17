import { useState } from 'react'

import { InputCard } from '@simulation/components/InputCard'
import { InputResponseType } from '@simulation/components/InputResponseType'
import { possessions } from '@simulation/components/section/possession/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'

export default function PossessionSection(propsSection: PropsSectionType) {

    const inputName = "possessions";
    const [selectedPossessions, setSelectedPossessions] = useState<string[]>([]);

    return (
        <div className={"flex flex-col items-center gap-[3.6rem]"}>

            <h2>Chez moi, je possède</h2>

            <div className={"flex flex-wrap justify-center gap-x-[1.7rem] gap-y-[3.3rem] max-w-[110rem]"}>
                {possessions.map((possession) => (
                    <InputCard
                       key={possession.id}
                       id={possession.id}
                       label={possession.label}
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
                       boxStyle={"basis-1/3 w-[35.1rem] h-[13.4rem]"}
                       logoPath={possession.imagePath}
                    />
                ))}
            </div>

            <StepNavigation
                showSkip={true}
                onSkip={() => {

                    const data: InputResponseType = {
                        label: inputName,
                        response: selectedPossessions.toString()
                    }

                    propsSection.handleValue([data], true);
                }}
                showBack={true} onBack={propsSection.onBack}
                showSubmit={false}
            />
        </div>
    );
}