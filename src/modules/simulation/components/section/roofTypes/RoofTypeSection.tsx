import { InputCard } from '@simulation/components/InputCard'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { roofTypes } from '@simulation/components/section/roofTypes/index'
import { StepNavigation } from '@simulation/components/StepNavigation'

export default function RoofTypeSection(propsSection: PropsSectionType) {
    const questionName = "roofType";

    return (
        <div>

            {roofTypes.map((type) => (
                <InputCard
                    key={type.id}
                    id={type.id}
                    label={type.label}
                    value={type.value}
                    name={questionName}
                    onClick={() => {
                        propsSection.handleValue(questionName, type.value);
                        propsSection.onValid();
                    }}
                />
            ))}
            
            <StepNavigation
                showSkip={true} onSkip={propsSection.onValid}
                showBack={true} onBack={propsSection.onBack}
                showSubmit={false}
            />
        </div>
    );
}