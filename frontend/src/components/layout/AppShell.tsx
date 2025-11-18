import { ReactNode } from 'react';

import { NavigationRail } from './NavigationRail';
import './AppShell.css';

type AppShellProps = {
  children: ReactNode;
};

export const AppShell = ({ children }: AppShellProps): JSX.Element => {
  return (
    <div className="app-shell">
      <header className="app-shell__header">
        <p className="app-shell__eyebrow">Google Material · React</p>
        <h1 className="app-shell__title">Aurora Control Center</h1>
        <p className="app-shell__subtitle">
          React + Google 스타일 가이드를 따르는 베이스 구조
        </p>
      </header>
      <section className="app-shell__body">
        <NavigationRail />
        <main className="app-shell__content">{children}</main>
      </section>
    </div>
  );
};
