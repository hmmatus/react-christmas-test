import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
const AppWrapper = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

export default AppWrapper;
