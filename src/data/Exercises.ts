export type Exercise = {
    name: string,
    position: number
    calories: number
    icon: string
}

/**
 * Per 30 mins
 */
export const Exercises: Exercise[] = [
    {
        name: "Walking",
        position: 75,
        calories: 150,
        icon: "./img/exercises/walking.png",
    },
    {
        name: "Skipping",
        position: 225,
        calories: 300,
        icon: "./img/exercises/skip-rope.png",
    },
    {
        name: "Running",
        position: 375,
        calories: 350,
        icon: "./img/exercises/run.png",
    }
] 