import './StatCard.css';

type StatCardProps = {
  title: string;
  value: string;
  helper?: string;
  trend?: string;
  tone?: 'positive' | 'negative' | 'neutral';
};

export const StatCard = ({
  title,
  value,
  helper,
  trend,
  tone = 'neutral',
}: StatCardProps): JSX.Element => {
  return (
    <article className={`stat-card stat-card--${tone}`}>
      <header className="stat-card__header">
        <p className="stat-card__title">{title}</p>
        {trend ? <span className="stat-card__trend">{trend}</span> : null}
      </header>
      <p className="stat-card__value">{value}</p>
      {helper ? <p className="stat-card__helper">{helper}</p> : null}
    </article>
  );
};
