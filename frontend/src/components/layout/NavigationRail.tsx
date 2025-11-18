import { NAV_ITEMS } from '@/config/navigation';
import './NavigationRail.css';

export const NavigationRail = (): JSX.Element => {
  return (
    <nav className="navigation-rail" aria-label="주요 내비게이션">
      <ul className="navigation-rail__list">
        {NAV_ITEMS.map((item, index) => (
          <li key={item.id}>
            <button
              aria-current={index === 0 ? 'page' : undefined}
              className="navigation-rail__item"
              type="button"
            >
              <span className="navigation-rail__label">{item.label}</span>
              <span className="navigation-rail__description">{item.description}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
