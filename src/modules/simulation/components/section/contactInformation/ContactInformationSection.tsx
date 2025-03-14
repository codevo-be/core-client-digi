import { Form } from '@digico/ui'
import countries from '@simulation/countries.json';

import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'
import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

export default function ContactInformationSection(propsSection: PropsSectionType) {

    const { setValue } = useFormContext();

    useEffect(() => {
        setValue("country", "BE")
    }, [setValue])

    return (
        <div className={"flex flex-col items-center"}>

            <h2>Vos informations de contact</h2>

            <Form.Group className={"w-[78.2rem] h-[46.4rem] px-[4.8rem] py-[5.1rem] bg-white border-2 border-[#9DBFD3] rounded-[1.4rem] text-[#023A65]"}>
                <Form.Row>
                    <Form.Field name={`company_name`} id="company_name" label="Email" placeholder="..." />
                    <Form.Field name={`vat_number`} id="vat_number" label="Téléphone" placeholder="..." />
                </Form.Row>
                <Form.Row>
                    <Form.Field name={`firstname`} id="firstname" label="Code postal" placeholder="..." />
                    <Form.Select name={"country"} label={"Pays"} options={countries}/>
                </Form.Row>

                <p className={"text-[1.2rem] text-[#90B1C9]"}>En cliquant sur voir mon offre j’accepte d’être recontacté(e)
                    et que les données saisies soient exploitées dans le cadre de la relation commerciale
                    qui pourrait découler de ce contact et conformément à nos conditions générales et vie privée.</p>
                <p className={"text-[1.2rem] text-[#90B1C9]"}>Par la suite, si vous souhaitez modifier ou supprimer
                    vos données, ou simplement savoir quelles données sont stockées dans notre base de données,
                    vous pouvez envoyer un email à l'adresse suivante :</p>

            </Form.Group>

            <StepNavigation
                showSkip={false}
                showBack={true} onBack={propsSection.onBack}
                showSubmit={true} onSubmit={() => {
                    propsSection.onSubmit("test", "test", "test");
                }}
            />
        </div>
    );
}