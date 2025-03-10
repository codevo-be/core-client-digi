import { installations } from '@simulation/components/section/installation/index'

import { InputCard } from '@simulation/components/InputCard'
import { StepNavigation } from '@simulation/components/StepNavigation'

type Props = {
    onValid: () => void;
    onSubmit: () => void;
}

export const InstallationTypeSection = ({ onValid, onSubmit }: Props) => {


    return(
        <div>
            <h2> {"Type d'installation "} </h2>
            <div className={"flex"}>
                {installations.map((installation) => (
                    <InputCard
                        key={installation.id}
                        id={installation.id}
                        label={installation.label}
                        value={installation.value}
                        name="installationType"
                        onClick={() => {
                            localStorage.setItem("installationType", installation.value)
                            onValid();
                        }}
                    />
                ))}
            </div>

            <StepNavigation showSkip={false} showBack={false} showSubmit={true} onSubmit={onSubmit}/>
        </div>
    )
}