export class Item {
    id: number;
    name: string;
    description: string;
    priority: number;
    date: Date;
    isAppointment: boolean;
    isTask: boolean;

    constructor() {
        this.id = 0;
        this.name = '';
        this.description = '';
        this.priority = 0;
        this.date = new Date();
        this.isAppointment = false;
        this.isTask = false;
    }
}

export class Task extends Item {
    deadline: Date;
    isComplete: boolean;

    constructor() {
        super();
        this.deadline = new Date();
        this.date = this.deadline;
        this.isComplete = false;
        this.isTask = true;
    }
}

export class Appointment extends Item {
    start: Date;
    stop: Date;
    attendees: string[];

    constructor() {
        super();
        this.start = new Date();
        this.date = this.start;
        this.stop = new Date();
        this.attendees = [];
        this.isAppointment = true;
    }
}