import { InputCard } from '@simulation/components/InputCard'
import { existingInstallations } from '@simulation/components/section/existingInstallation/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'

export default function ExistingInstallationSection(props: PropsSectionType) {

    const questionName = "existingInstallation";

    return(
        <div className={"flex flex-col items-center gap-[9rem]"}>
            <h2>Avez-vous déjà une installation photovoltaïque existante ?</h2>

            <div className={"flex gap-10"}>
                {existingInstallations.map((type) => (
                   <InputCard
                       key={type.id}
                       id={type.id}
                       label={type.label}
                       subLabel={type.subLabel}
                       value={type.value}
                       name={questionName}
                       onClick={() => {
                           props.handleValue(questionName, type.value, true);
                       }}
                       boxStyle={"w-[46.6rem] h-[12.8rem]"}
                       logoPath={type.logoPath}
                   />
                ))}
            </div>

            <StepNavigation showSkip={false} showBack={true} onBack={props.onBack} showSubmit={false}/>
        </div>
    );
}