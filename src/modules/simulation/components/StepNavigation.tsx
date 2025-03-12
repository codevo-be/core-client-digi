import { Button } from "@digico/ui";

interface StepNavigationProps {
    showSkip: boolean
    onSkip?: () => void;
    showBack: boolean;
    onBack?: () => void;
    showSubmit: boolean;
    onSubmit?: () => void;
}

export const StepNavigation = ({ showSkip, onSkip, showBack, onBack, showSubmit, onSubmit }: StepNavigationProps) => {

    if (showBack && !onBack) throw new Error("Show back called with no reaction applied");
    if (showSkip && !onSkip) throw new Error("Show skip called with no reaction applied");
    if (showSubmit && !onSubmit) throw new Error("Show submit called with no reaction applied");

    return (
        <div>
            { showBack && <Button type="button" onClick={onBack}>Back</Button>}

            { showSkip && (
                <Button type="button" onClick={onSkip}>Skip</Button>
            )}

            { showSubmit && (
                <Button type="submit">Submit</Button>
            )}
        </div>
    );
}
