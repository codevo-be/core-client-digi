import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'

export default function ContactInformationSection(propsSection: PropsSectionType) {
    return (
        <div>

            <input placeholder={"Name"} />
            <input placeholder={"Téléphone"}/>
            <input placeholder={"Code postal"}/>
            <input placeholder={"Pays"}/>

            <StepNavigation
                showSkip={false}
                showBack={true} onBack={propsSection.onBack}
                showSubmit={true} onSubmit={() => {
                    console.log("Submit called")
                }}
            />
        </div>
    );
}