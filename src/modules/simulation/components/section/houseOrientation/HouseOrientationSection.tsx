import { InputCard } from '@simulation/components/InputCard'
import { InputResponseType } from '@simulation/components/InputResponseType'
import { orientationTypes } from '@simulation/components/section/houseOrientation/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'
import { useNodeNavigator } from '@simulation/context/NodeNavigatorContext'

export default function HouseOrientationSection(props: PropsSectionType) {

    const inputName = "houseOrientation";
    const nodeNavigator = useNodeNavigator()

    return(
        <div className={"flex flex-col items-center gap-[6.9rem]"}>

            <h2>L&apos;orientation de votre maison</h2>

            <div className={"flex flex-col"}>
                {orientationTypes.map((type) => (
                    <InputCard
                        key={type.id}
                        id={type.id}
                        value={type.value}
                        name={inputName}
                        onClick={() => {
                            const data: InputResponseType = {
                                label: inputName,
                                response: type.value
                            }

                            props.handleValue([data]);
                            nodeNavigator.goNext();
                        }}
                    >

                        <div className={"w-[15.9rem] h-[5.2rem] flex justify-center items-center"}>
                            <p>{type.label}</p>
                        </div>

                    </InputCard>
                ))}
            </div>

            <StepNavigation showSkip={true} onSkip={ nodeNavigator.goNext } showSubmit={false}/>
        </div>
    );
}