import { PropsSectionType } from '@simulation/components/section/PropsSectionType'
import { StepNavigation } from '@simulation/components/StepNavigation'

export default function ContactInformationSection(propsSection: PropsSectionType) {
    return (
        <div>

            <input placeholder={"name"} />
            <input placeholder={"Téléphone"}/>
            <input placeholder={"Code postal"}/>
            <input placeholder={"pays"}/>

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