export type Phase = {
    name: string;
    durationinMinutes: number;
    nextPhaseDuration: number;
};
export const phaseParams: Phase[] = [
    {
        name: "work",
        durationinMinutes: 20,
        nextPhaseDuration: 5,
    },
    {
        name: "small break",
        durationinMinutes: 5,
        nextPhaseDuration: 20,
    },
    {
        name: "work",
        durationinMinutes: 20,
        nextPhaseDuration: 5,
    },
    {
        name: "small break",
        durationinMinutes: 5,
        nextPhaseDuration: 20,
    },
    {
        name: "work",
        durationinMinutes: 20,
        nextPhaseDuration: 5,
    },
    {
        name: "small break",
        durationinMinutes: 5,
        nextPhaseDuration: 20,
    },
    {
        name: "work",
        durationinMinutes: 20,
        nextPhaseDuration: 15,
    },
    {
        name: "big break",
        durationinMinutes: 15,
        nextPhaseDuration: 20,
    },
];
