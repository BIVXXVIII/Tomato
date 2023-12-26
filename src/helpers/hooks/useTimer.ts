import { useEffect, useState } from "react";
import { Phase } from "helpers/phaseParams";

type HookProps = {
    currentPhase: Phase;
    nextPhase: () => void;
    phaseReset: () => void;
};

const useTimer = (props: HookProps) => {
    const { currentPhase, nextPhase, phaseReset } = props;

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        const timer =
            isActive &&
            setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                    return;
                }
                if (minutes > 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                    return;
                }
                nextPhase();
                setMinutes(currentPhase.nextPhaseDuration);
                setSeconds(1);
            }, 1000);
        return () => {
            if (!timer) return;
            clearInterval(timer);
        };
    }, [seconds, minutes, isActive]);

    const timerStart = () => {
        // setIsStarted(true);
        // setIsActive(!isActive);
        // phaseReset();
        // setMinutes(currentPhase.durationinMinutes);
        // setSeconds(0);

        if (isStarted) {
            phaseReset();
            setSeconds(1);
            setMinutes(
                currentPhase.name === "work"
                    ? currentPhase.durationinMinutes
                    : currentPhase.nextPhaseDuration
            );
            return;
        }
        setIsStarted(true);
        setIsActive(true);
        setMinutes(currentPhase.durationinMinutes);
        setSeconds(0);
    };
    const timerPause = () => {
        setIsActive(!isActive);
    };

    const timerBreak = () => {
        setIsActive(false);
        setIsStarted(false);
        phaseReset();
        setSeconds(0);
        setMinutes(0);
    };

    return {
        minutes,
        seconds,
        isStarted,
        isActive,
        actions: {
            timerBreak,
            timerPause,
            timerStart,
        },
    };
};

export { useTimer };
