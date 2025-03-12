import { InputCard } from '@simulation/components/InputCard'
import { ageTypes } from '@simulation/components/section/houseAge/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'

export default function HouseAgeSection(propsSection: PropsSectionType) {

    const questionName = "houseAge";

    return(
        <div className={"flex flex-col items-center gap-[6.9rem]"}>

            <h2>Age de votre habitation</h2>

            <div className={"flex gap-[1.7rem]"}>
                {ageTypes.map((type) => (
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
                        boxStyle={"w-[35.1rem] h-[13.4rem]"}
                    />
                ))
                }
            </div>
            <StepNavigation showSkip={false} showBack={true} onBack={propsSection.onBack} showSubmit={false} />
        </div>
    );
}