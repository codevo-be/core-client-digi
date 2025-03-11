import { InputCard } from '@simulation/components/InputCard'
import { existingInstallations } from '@simulation/components/section/existingInstallation/index'
import { StepNavigation } from '@simulation/components/StepNavigation'

type Props = {
    handleValue: (label: string, response: string) => void;
    onValid: () => void;
    onBack: () => void;
}

export default function ExistingInstallationSection({ handleValue, onValid, onBack }: Props) {
    return(
        <div>
            <h2>Avez-vous déjà une installation photovoltaïque existante ?</h2>

            {existingInstallations.map((type) => (
               <InputCard
                   key={type.id}
                   id={type.id}
                   label={type.label}
                   value={type.value}
                   name={'existingInstallation'}
                   onClick={() => {
                       handleValue('existingInstallation', type.value);
                       onValid();
                   }}
               />
            ))}

            <StepNavigation showSkip={false} showBack={true} onBack={onBack} showSubmit={false}/>
        </div>
    );
}