import { InputCard } from '@simulation/components/InputCard'
import { networkTypes } from '@simulation/components/section/networkType/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'

export default function NetworkTypeSection({ handleValue, onBack, onValid }: PropsSectionType) {

    const questionName = "networkType"

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
                        name={questionName}
                        onClick={() => {
                            handleValue(questionName, type.value);
                            onValid();
                        }}
                        boxStyle={"w-[35.1rem] h-[13.4rem]"}
                        logoPath={type.logoPath}
                    />
                ))}
            </div>

            <StepNavigation showSkip={false} showBack={true} onBack={onBack} showSubmit={false}/>
        </div>
    )
}