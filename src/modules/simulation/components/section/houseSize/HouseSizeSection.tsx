import { Form } from '@digico/ui'

import { StepNavigation } from '@simulation/components/StepNavigation'

type Props = {
    handleValue: (label: string, response: string) => void;
    onBack: () => void;
    onValid: () => void;
}

export default function HouseSizeSection({ handleValue, onBack, onValid }: Props) {

    const questionName = ""; //TODO

    return(
        <div className={"flex flex-col items-center gap-[5.7rem]"}>

            <h2>Indiquez les dimensions totales de votre maison</h2>

            <div className={"flex gap-[2.9rem]"}>
                <Form.Group className={"bg-white p-[2.9rem] h-[44.2rem] w-[46.3rem] rounded-2xl"}>
                    <p>Je connais le nombre de m2 de ma maison</p>
                    <Form.Field suffix={"m2"} placeholder={"..."}/>
                </Form.Group>

                <Form.Group className={"bg-white p-[2.9rem] h-[44.2rem] w-[46.3rem] rounded-2xl"}>
                    <p>
                        Je connais les dimensions de ma maison
                    </p>
                    <Form.Field suffix={"m"} placeholder={"..."}/>
                    <Form.Field suffix={"m"} placeholder={"..."}/>
                </Form.Group>
            </div>

            <StepNavigation showSkip={true} onSkip={() => {
                handleValue('inputMetreCarré', 'something');
                handleValue('inputDimension', 'something');
                onValid();
            }} showBack={true} onBack={onBack} showSubmit={false}/>
        </div>
    );
}