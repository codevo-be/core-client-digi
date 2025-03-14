import { Button } from "@digico/ui";

interface StepNavigationProps {
    showSkip: boolean
    onSkip?: () => void;
    showBack: boolean;
    onBack?: () => void;
    showSubmit: boolean;
    onSubmit?: () => void;
}

export const StepNavigation = (props: StepNavigationProps) => {

    if (props.showBack && !props.onBack) throw new Error("Show back called with no reaction applied");
    if (props.showSkip && !props.onSkip) throw new Error("Show skip called with no reaction applied");
    if (props.showSubmit && !props.onSubmit) throw new Error("Show submit called with no reaction applied");

    return (
        <div className={"flex gap-12"}>
            { props.showBack && <Button type="button" onClick={props.onBack}>Back</Button>}

            { props.showSkip && <Button type="button" onClick={props.onSkip}>Skip</Button> }

            { props.showSubmit && <Button type="submit" onClick={props.onSubmit}>Envoyer</Button> /*TODO type submit ou button ?*/ }
        </div>
    );
}
