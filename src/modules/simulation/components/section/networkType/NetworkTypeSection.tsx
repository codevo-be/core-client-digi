import { ImageBuilder } from '@digico/ui'

import { InputCard } from '@simulation/components/InputCard'
import { InputResponseType } from '@simulation/components/InputResponseType'
import { networkTypes } from '@simulation/components/section/networkType/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'

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
                        value={type.value}
                        name={inputName}
                        onClick={() => {
                            const data: InputResponseType = {
                                label: inputName,
                                response: type.value
                            }

                            props.handleValue([data], true);
                        }}
                    >

                        <div className={"w-[35.1rem] h-[13.4rem] flex items-center gap-[1.7rem]"}>
                            <div>
                                <ImageBuilder src={type.imagePath} />
                            </div>

                            <p>{type.label}</p>
                        </div>

                    </InputCard>
                ))}
            </div>

            <StepNavigation showSkip={false} showBack={true} onBack={props.onBack} showSubmit={false}/>
        </div>
    )
}