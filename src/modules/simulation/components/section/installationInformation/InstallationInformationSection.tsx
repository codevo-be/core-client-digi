import { useFormContext } from 'react-hook-form'
import { Form } from '@digico/ui'

import { InputResponseType } from '@simulation/components/InputResponseType'
import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'

export default function InstallationInformationSection(props: PropsSectionType) {

    const inputInstallationDataName = "installationDate"
    const inputNbrPanelsName = "nbrPanels"

    const { getValues } = useFormContext()

    return(
        <div className={"flex flex-col items-center gap-[6.7rem]"}>
            <h2>Consommation de votre maison</h2>

            <Form.Group className={"bg-white w-[46.6rem] h-[41.5rem] px-[8.1rem] flex justify-center border-1 border-[#8EACC5] rounded-2xl"}>
                <p>Année d'installation et nombre de panneaux</p>

                <Form.Field name={inputInstallationDataName} prefix={"année"} placeholder={"..."}/>
                <Form.Field name={inputNbrPanelsName} suffix={"panneaux"} placeholder={"..."}/>
            </Form.Group>

            <StepNavigation showSkip={true} onSkip={ () => {
                const nbrPanelData: InputResponseType = {
                    label: inputInstallationDataName,
                    response: getValues(inputInstallationDataName)
                }

                const installationDateData: InputResponseType = {
                    label: inputInstallationDataName,
                    response: getValues(inputInstallationDataName)
                }

                props.handleValue([nbrPanelData, installationDateData], true)
            }} showBack={ true } onBack={ props.onBack } showSubmit={false}/>
        </div>
    );
}