import { InputCard } from '@simulation/components/InputCard'
import { installations } from '@simulation/components/section/installation/index'
import { StepNavigation } from '@simulation/components/StepNavigation'
import { SimulationType } from '@simulation/types/update-simulation-type'

type Props = {
    parentData: any;
    handleValue: (data: SimulationType) => void;
    onValid: () => void;
}

export const InstallationTypeSection = ({ parentData, handleValue, onValid }: Props) => {


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
                            const data = {
                                    ...parentData,
                                    'label': "installationType",
                                    'response': installation.value
                                };
                            handleValue(data);
                            onValid();
                        }}
                    />
                ))}
            </div>

            <StepNavigation showSkip={false} showBack={false} showSubmit={false}/>
        </div>
    )
}