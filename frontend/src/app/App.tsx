import { AppShell } from '@/components/layout/AppShell';
import { AppRoutes } from '@/routes/AppRoutes';

const App = (): JSX.Element => {
  return (
    <AppShell>
      <AppRoutes />
    </AppShell>
  );
};

export default App;
