import { Form } from '@digico/ui'

import { StepNavigation } from '@simulation/components/StepNavigation'

type Props = {
    handleValue: (label: string, response: string) => void;
    onBack: () => void;
    onSkip: () => void;
}

export default function InstallationInformationSection({ handleValue, onBack, onSkip }: Props) {

    return(
        <div className={"flex flex-col items-center gap-[6.7rem]"}>
            <h2>Consommation de votre maison</h2>

            <Form.Group className={"bg-white w-[46.6rem] h-[41.5rem] px-[8.1rem] flex justify-center border-1 border-[#8EACC5] rounded-2xl"}>
                <p>Année d'installation et nombre de panneaux</p>

                <Form.Field name={"installationDate"} prefix={"année"} placeholder={"..."}/>
                <Form.Field name={"nbrPannels"} suffix={"panneaux"} placeholder={"..."}/>
            </Form.Group>

            <StepNavigation showSkip={true} onSkip={ () => {
                handleValue('installationDate', 'something');
                handleValue('nbrPannels', 'something');
                onSkip();
            }} showBack={ true } onBack={ onBack } showSubmit={false}/>
        </div>
    );
}