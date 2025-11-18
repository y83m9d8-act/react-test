import { StatCard } from '@/components/common/StatCard';
import { useSystemTime } from '@/hooks/useSystemTime';
import './HomePage.css';

const metrics = [
  {
    id: 'latency',
    title: 'p95 응답 지연',
    value: '128 ms',
    helper: '전일 대비 4ms 빠름',
    trend: '-3.1%',
    tone: 'positive',
  },
  {
    id: 'release',
    title: '금주 배포',
    value: '12 회',
    helper: '릴리즈 안정도 99.1%',
    trend: '+1.5%',
    tone: 'positive',
  },
  {
    id: 'errors',
    title: '오류 비율',
    value: '0.21%',
    helper: '오류 버짓 여유 83%',
    trend: '+0.04%',
    tone: 'negative',
  },
];

export const HomePage = (): JSX.Element => {
  const systemTime = useSystemTime();

  return (
    <div className="home-page">
      <section className="home-page__meta">
        <div>
          <p className="home-page__meta-label">실시간 모니터링</p>
          <p className="home-page__meta-value">{systemTime}</p>
        </div>
        <button className="home-page__cta" type="button">
          워크플로 만들기
        </button>
      </section>

      <section className="home-page__grid" aria-label="핵심 지표">
        {metrics.map((metric) => (
          <StatCard key={metric.id} {...metric} />
        ))}
      </section>

      <section className="home-page__panel">
        <header>
          <p className="home-page__panel-eyebrow">가이드라인</p>
          <h2>Google 스타일 React 구조</h2>
          <p>
            `src` 아래의 영역을 명확히 분리하고, 프레젠테이션 · 상태 훅 · 라우트 ·
            설정 파일을 독립시켜 팀 규모가 커져도 혼선을 줄일 수 있게 구성했습니다.
          </p>
        </header>
        <ul className="home-page__list">
          <li>
            <span>@/components</span>
            재사용 UI 단위
          </li>
          <li>
            <span>@/pages</span>
            화면 단위, 데이터와 상태 관리
          </li>
          <li>
            <span>@/routes</span>
            라우팅 엔트리 포인트
          </li>
          <li>
            <span>@/hooks</span>
            비즈니스 로직 훅
          </li>
          <li>
            <span>@/config</span>
            상수 · 토큰 · 환경 정의
          </li>
        </ul>
      </section>
    </div>
  );
};
