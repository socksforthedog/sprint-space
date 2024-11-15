import React from 'react' // Required for JSX
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/common/Layout'
import { SprintsPage } from './pages/SprintsPage'
import { TasksPage } from './pages/TasksPage'

// Initialize the React Query client for managing server state and caching
// This provides features like caching, retrying failed requests, and managing data staleness
const queryClient = new QueryClient()

// Define the application's routing structure
// createBrowserRouter uses the HTML5 history API for clean URLs
const router = createBrowserRouter([
  {
    path: '/', // Root path of the application
    element: <Layout />, // Main layout wrapper component
    children: [
      // Child routes will be rendered inside the Layout component
      {
        path: 'sprints',
        element: <SprintsPage />, // Page for managing sprints
      },
      {
        path: 'tasks',
        element: <TasksPage />, // Page for managing tasks
      }
    ]
  }
])

/**
 * Root component of the application
 * Provides routing and data management context to all child components
 * 
 * QueryClientProvider - Enables React Query features throughout the app
 * RouterProvider - Enables routing functionality using react-router
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App 