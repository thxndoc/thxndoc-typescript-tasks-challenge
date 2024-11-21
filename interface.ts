import { UrgencyLevel } from "./types";

export default interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    urgency: UrgencyLevel;
    dateCreated: Date;
    deadlineDate: Date;
}
