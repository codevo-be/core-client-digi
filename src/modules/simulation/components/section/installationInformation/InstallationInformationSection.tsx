import { Box } from '@digico/ui'

import { StepNavigation } from '@simulation/components/StepNavigation'

type Props = {
    handleValue: (label: string, response: string) => void;
    onBack: () => void;
    onSkip: () => void;
}

export default function InstallationInformationSection({ handleValue, onBack, onSkip }: Props) {
    return(
        <div>
            <h2>Consommation de votre maison</h2>
            <Box>
                <input/>
                <input/>
            </Box>

            <StepNavigation showSkip={true} onSkip={ () => {
                handleValue('anneeInstallation', 'something');
                handleValue('nbrPanneau', 'something');
                onSkip();
            }} showBack={ true } onBack={ onBack } showSubmit={false}/>
        </div>
    );
}