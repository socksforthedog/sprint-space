export interface Task {
  id: string
  title: string
  description: string
  status: 'TODO' | 'IN_PROGRESS' | 'DONE'
  assigneeId?: string
  sprintId?: string
  createdAt: Date
  updatedAt: Date
}

export interface Sprint {
  id: string
  name: string
  startDate: Date
  endDate: Date
  status: 'PLANNED' | 'ACTIVE' | 'COMPLETED'
  tasks: Task[]
}

export interface User {
  id: string
  name: string
  email: string
  role: 'ADMIN' | 'MEMBER'
} 