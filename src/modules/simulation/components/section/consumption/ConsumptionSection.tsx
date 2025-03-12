import { Box } from '@digico/ui'

import { InputCard } from '@simulation/components/InputCard'
import { radio_types } from '@simulation/components/section/consumption/index'
import { StepNavigation } from '@simulation/components/StepNavigation'

type Props = {
    handleValue: (label: string, response: string) => void;
    onBack: ()=> void;
    onSkip: () => void;
}

export const ConsumptionSection = ({ handleValue, onBack, onSkip }: Props) => {
    return(
        <div>
            <h2>Consommation de votre maison</h2>

            {radio_types.map((type) => (
                <InputCard
                    key={type.id}
                    id={type.id}
                    label={type.label}
                    value={type.value}
                    name={'consumptionType'}
                    onClick={() => {
                        handleValue('consumptionType', type.value);
                        onSkip();
                    }}
                />
            ))
            }

            <Box>
                <p>Je paye</p>
                <input/>
            </Box>

            <Box>
                <p>Je connais ma consommation</p>
                <input/>
            </Box>

            <StepNavigation showSkip={true} onSkip={ onSkip } showBack={true} onBack={ onBack } showSubmit={false}/>
        </div>
    );
}