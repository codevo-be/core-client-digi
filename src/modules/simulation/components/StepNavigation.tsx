import { Button } from "@digico/ui";

interface StepNavigationProps {
    showSkip: boolean
    onSkip?: () => void;
    showSubmit: boolean;
    onSubmit?: () => void;
}

export const StepNavigation = (props: StepNavigationProps) => {

    if (props.showSkip && !props.onSkip) throw new Error("Show skip called with no reaction applied");
    if (props.showSubmit && !props.onSubmit) throw new Error("Show submit called with no reaction applied");

    return (
        <div className={"flex gap-12"}>

            { props.showSkip && <Button type="button" onClick={props.onSkip}>Continuer</Button> }

            { props.showSubmit && <Button type="button" onClick={props.onSubmit}>Envoyer</Button> }
        </div>
    );
}
