export type Phase = {
    name: string;
    durationinMinutes: number;
    nextPhaseDuration: number;
};
const timeDurationConfig = {
    work: 25,
    break: 5,
    bigBreak: 30,
};

export const phaseParams: Phase[] = [
    {
        name: "work",
        durationinMinutes: timeDurationConfig.work,
        nextPhaseDuration: timeDurationConfig.break,
    },
    {
        name: "small break",
        durationinMinutes: timeDurationConfig.break,
        nextPhaseDuration: timeDurationConfig.work,
    },
    {
        name: "work",
        durationinMinutes: timeDurationConfig.work,
        nextPhaseDuration: timeDurationConfig.break,
    },
    {
        name: "small break",
        durationinMinutes: timeDurationConfig.break,
        nextPhaseDuration: timeDurationConfig.work,
    },
    {
        name: "work",
        durationinMinutes: timeDurationConfig.work,
        nextPhaseDuration: timeDurationConfig.break,
    },
    {
        name: "small break",
        durationinMinutes: timeDurationConfig.break,
        nextPhaseDuration: timeDurationConfig.work,
    },
    {
        name: "work",
        durationinMinutes: timeDurationConfig.work,
        nextPhaseDuration: timeDurationConfig.bigBreak,
    },
    {
        name: "big break",
        durationinMinutes: timeDurationConfig.bigBreak,
        nextPhaseDuration: timeDurationConfig.work,
    },
];
