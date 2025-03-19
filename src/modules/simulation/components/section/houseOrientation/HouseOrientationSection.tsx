import { InputCard } from '@simulation/components/InputCard'
import { InputResponseType } from '@simulation/components/InputResponseType'
import { orientationTypes } from '@simulation/components/section/houseOrientation/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'

export default function HouseOrientationSection(props: PropsSectionType) {

    const inputName = "houseOrientation";

    return(
        <div className={"flex flex-col items-center"}>
            <div className={"flex flex-col"}>
                {orientationTypes.map((type) => (
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

                            props.handleValue([data], true);
                        }}/>
                ))}
            </div>

            <StepNavigation showSkip={true} onSkip={props.onValid} showBack={true} onBack={props.onBack} showSubmit={false}/>
        </div>
    );
}