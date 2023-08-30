
export interface SelectedTask {
    selectedTasks: Task[]
}

export interface Task {
    Id: string;
    Name: string;
    Budget: number;
    Quantity: number;
    Tasks: Task[]
}