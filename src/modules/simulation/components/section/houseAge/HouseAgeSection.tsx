import { InputCard } from '@simulation/components/InputCard'
import { ageTypes } from '@simulation/components/section/houseAge/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'

export default function HouseAgeSection(propsSection: PropsSectionType) {

    const questionName = "houseAge";

    return(
        <div>
            {ageTypes.map((type) => (
                <InputCard
                    key={type.id}
                    id={type.id}
                    label={type.label}
                    value={type.value}
                    name={questionName}
                    onClick={() => {
                        propsSection.handleValue(type.label, type.value);
                        propsSection.onValid();
                    }}
                />
            ))
            }
            <StepNavigation showSkip={false} showBack={true} onBack={propsSection.onBack} showSubmit={false} />
        </div>
    );
}