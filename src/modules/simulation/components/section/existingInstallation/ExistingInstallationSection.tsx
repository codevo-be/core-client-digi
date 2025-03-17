import { InputCard } from '@simulation/components/InputCard'
import { existingInstallations } from '@simulation/components/section/existingInstallation/index'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'
import { InputResponseType } from '@simulation/components/InputResponseType'

export default function ExistingInstallationSection(props: PropsSectionType) {

    const inputName = "existingInstallation";

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
                       name={inputName}
                       onClick={() => {
                           const data: InputResponseType = {
                               label: inputName,
                               response: type.value
                           }

                           props.handleValue([data], true);
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