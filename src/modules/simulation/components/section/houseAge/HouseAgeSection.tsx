import { InputCard } from '@simulation/components/InputCard'
import { ageTypes } from '@simulation/components/section/houseAge/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'
import { InputResponseType } from '@simulation/components/InputResponseType'

export default function HouseAgeSection(propsSection: PropsSectionType) {

    const inputName = "houseAge";

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
                        name={inputName}
                        onClick={() => {
                            const data: InputResponseType = {
                                label: inputName,
                                response: type.value
                            }

                            propsSection.handleValue([data], true);
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