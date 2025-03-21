import { useNodeNavigator } from '@simulation/context/NodeNavigatorContext'

import { OldInputCard } from '@simulation/components/molecules/OldInputCard'
import { InputResponseType } from '@simulation/components/InputResponseType'
import { ageTypes } from '@simulation/components/section/houseAge/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'

export default function HouseAgeSection(propsSection: PropsSectionType) {

    const inputName = "houseAge";
    const nodeNavigator = useNodeNavigator()

    return(
        <div className={"flex flex-col items-center gap-[6.9rem]"}>

            <h2>Age de votre habitation</h2>

            <div className={"flex gap-[1.7rem]"}>
                {ageTypes.map((type) => (
                    <OldInputCard
                        key={type.id}
                        id={type.id}
                        value={type.value}
                        name={inputName}
                        onClick={() => {
                            const data: InputResponseType = {
                                label: inputName,
                                response: type.value
                            }

                            propsSection.handleValue([data]);
                            nodeNavigator.goNext()
                        }}
                    >

                        <div className={"w-[35.1rem] h-[13.4rem] flex items-center gap-[1.5rem]"}>
                            <div className={"flex flex-col items-center justify-center relative"}>
                                <div className={"w-[8.3rem] h-[8.3rem] bg-[#C9E0EE] rounded-full"}></div>
                                <p className={"text-[2.4rem] text-nowrap absolute"}>{type.prefix}</p>
                            </div>

                            <p className={"grow"}>{type.label}</p>
                        </div>

                    </OldInputCard>
                ))
                }
            </div>
            <StepNavigation showSkip={false} showSubmit={false} />
        </div>
    );
}