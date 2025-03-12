import { useState } from 'react'

import { InputCard } from '@simulation/components/InputCard'
import { possessions } from '@simulation/components/section/possession/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'

export default function PossessionSection(propsSection: PropsSectionType) {

    const questionName = "possessions";
    const [selectedPossessions, setSelectedPossessions] = useState<string[]>([]);

    return (
        <div>

            {possessions.map((possession) => (
                <InputCard
                   key={possession.id}
                   id={possession.id}
                   label={possession.label}
                   value={possession.value}
                   name={questionName}
                   onClick={() => {
                       setSelectedPossessions((prev) => {
                           return prev.includes(possession.id)
                               ? prev.filter(id => id !== possession.id)
                               : [...prev, possession.id];
                       });
                   }}
                   type={"checkbox"}
                />
            ))}

            <StepNavigation
                showSkip={true}
                onSkip={() => {
                    propsSection.handleValue(questionName, selectedPossessions.toString());
                    propsSection.onValid();
                }}
                showBack={true} onBack={propsSection.onBack}
                showSubmit={false}
            />
        </div>
    );
}