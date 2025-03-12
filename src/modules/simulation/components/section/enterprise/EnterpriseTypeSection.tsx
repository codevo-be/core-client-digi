import { Grid } from '@digico/ui'

import { InputCard } from '@simulation/components/InputCard'
import { enterprises } from '@simulation/components/section/enterprise/index'
import { StepNavigation } from '@simulation/components/StepNavigation'

type Props = {
    handleValue: (label: string, response: string) => void;
    onBack: () => void;
    onValid: () => void;
}

export const EnterpriseTypeSection = ({ handleValue, onBack, onValid }: Props) => {
    
    return(
        <div>
            <p> { "Quel type d'entreprise êtes-vous ?" }</p>
            <Grid>
                <Grid.Col column={4}>
                    {enterprises.map((enterprise) => (
                        <InputCard
                            key={enterprise.id}
                            id={enterprise.id}
                            label={enterprise.label}
                            value={enterprise.value}
                            name={'enterpriseType'}
                            onClick={() => {
                                handleValue('enterpriseType', enterprise.value);
                                onValid();
                            }}
                        />
                    ))}
                </Grid.Col>
            </Grid>

            <StepNavigation showSkip={false} showBack={true} onBack={onBack} showSubmit={false}/>
        </div>
    )
}