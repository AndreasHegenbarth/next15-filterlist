export type TodoStatus = 'todo' | 'inprogress' | 'done';

export type TodosOverview = Record<TodoStatus, Record<number, { count: number; name: string }>>;