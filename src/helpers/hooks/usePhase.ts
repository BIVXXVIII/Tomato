import { useState } from "react";
import { phaseParams } from "../phaseParams";
export const usePhase = () => {
    const [phase, setPhase] = useState(0);
    const nextPhase = () => {
        if (phase === phaseParams.length - 1) {
            setPhase(0);
            return;
        }
        setPhase(phase + 1);
    };
    const phaseReset = () => {
        setPhase(0);
    };

    const currentPhase = phaseParams[phase];
    return { currentPhase, nextPhase, phaseReset };
};
