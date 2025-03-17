import { InputCard } from '@simulation/components/InputCard'
import { networkTypes } from '@simulation/components/section/networkType/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'
import { InputResponseType } from '@simulation/components/InputResponseType'

export default function NetworkTypeSection(props: PropsSectionType) {

    const inputName = "networkType"

    return(
        <div className={"flex flex-col items-center gap-[6.9rem]"}>

            <h2>Votre réseau électrique</h2>

            <div className={"flex gap-[1.7rem]"}>
                {networkTypes.map((type) => (
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
                        }}
                        boxStyle={"w-[35.1rem] h-[13.4rem]"}
                        logoPath={type.logoPath}
                    />
                ))}
            </div>

            <StepNavigation showSkip={false} showBack={true} onBack={props.onBack} showSubmit={false}/>
        </div>
    )
}