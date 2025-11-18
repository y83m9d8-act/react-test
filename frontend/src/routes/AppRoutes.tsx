import { Suspense } from 'react';

import { HomePage } from '@/pages/home/HomePage';

export const AppRoutes = (): JSX.Element => {
  return (
    <Suspense fallback={<p>초기 데이터를 불러오는 중...</p>}>
      <HomePage />
    </Suspense>
  );
};
