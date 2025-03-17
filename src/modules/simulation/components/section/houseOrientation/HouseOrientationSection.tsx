import { InputCard } from '@simulation/components/InputCard'
import { InputResponseType } from '@simulation/components/InputResponseType'
import { orientationTypes } from '@simulation/components/section/houseOrientation/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'

export default function HouseOrientationSection(props: PropsSectionType) {

    const inputName = "houseOrientation";

    return(
        <div>
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

            <StepNavigation showSkip={true} onSkip={props.onValid} showBack={true} onBack={props.onBack} showSubmit={false}/>
        </div>
    );
}