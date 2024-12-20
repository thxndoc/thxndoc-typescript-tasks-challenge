import Task from "./interface"

const tasks: Task[] = [
    {
        id: 1,
        title: 'Complete TypeScript project',
        description: 'Finish the TypeScript project and submit it by the due date.',
        completed: true,
        urgency: 'high',
        dateCreated: new Date('2024-11-01'),
        deadlineDate: new Date('2024-11-15')
    },
    {
        id: 2,
        title: 'Start with portfolio piece',
        description: 'Start planning out your portfolio piece.',
        completed: false,
        urgency: 'medium',
        dateCreated: new Date('2024-11-20'),
        deadlineDate: new Date('2024-11-24')
    },
    {
        id: 3,
        title: 'Build portfolio piece',
        description: 'Build final portfolio project according to user stories and brief',
        completed: false,
        urgency: 'high',
        dateCreated: new Date('2024-11-20'),
        deadlineDate: new Date('2024-11-29')   
    }
]

// console.log(tasks)
const tasksContainer = document.querySelector('.tasks-container') as HTMLDivElement

const taskItems = tasks.map(task => {
    const status = task.completed ? 'Yes' : 'No'

    return `
        <h2>Title: ${task.title}</h2>
        <p>Description: ${task.description}</p>
        <p>Completed: ${status}</p>
        <p>Urgency: ${task.urgency}</p>
        <p>Created: ${task.dateCreated}</p>
        <p>Deadline: ${task.deadlineDate}</p>
    `
})

tasksContainer.innerHTML = taskItems.join('')