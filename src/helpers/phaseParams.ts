export type Phase = {
    name: string;
    durationinMinutes: number;
    nextPhaseDuration: number;
};
const timeDurationConfig = {
    work: 10,
    break: 5,
    bigBreak: 15,
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
