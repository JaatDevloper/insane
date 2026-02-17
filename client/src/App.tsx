import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import ProfileCard from "@/components/ProfileCard";
import NotFound from "@/pages/not-found";

function Home() {
  return (
    <div className="min-h-screen w-full bg-[#f8f5f2] flex items-center justify-center p-4">
      <ProfileCard />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
