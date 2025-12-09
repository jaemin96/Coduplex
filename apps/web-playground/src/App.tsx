import { GRouter } from '@/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      {/* TODO: add UI OR connect provider */}
      <QueryClientProvider client={queryClient}>
        <GRouter />
      </QueryClientProvider>
    </>
  );
}

export default App;
