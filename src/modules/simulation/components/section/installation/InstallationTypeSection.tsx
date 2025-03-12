import { InputCard } from '@simulation/components/InputCard'
import { installations } from '@simulation/components/section/installation/index'
import { StepNavigation } from '@simulation/components/StepNavigation'

type Props = {
    handleValue: (label: string, response: string) => void;
    onValid: () => void;
}

export const InstallationTypeSection = ({ handleValue, onValid }: Props) => {

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
                            handleValue('installationType', installation.value);
                            onValid();
                        }}
                        logoPath={installation.logoPath}
                    />
                ))}
            </div>

            <StepNavigation showSkip={false} showBack={false} showSubmit={false}/>
        </div>
    )
}