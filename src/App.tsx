import { Suspense } from 'react'
import AppRoutes from './AppRoutes'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
})
const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          {/* <Suspense fallback={<h1>Loading something...</h1>}> */}
          <AppRoutes />
          {/* </Suspense> */}
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
