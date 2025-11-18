export type NavigationItem = {
  id: string;
  label: string;
  description: string;
};

export const NAV_ITEMS: NavigationItem[] = [
  {
    id: 'overview',
    label: '개요',
    description: '서비스 현황 요약',
  },
  {
    id: 'insights',
    label: '인사이트',
    description: '지표 기반 추천',
  },
  {
    id: 'pipelines',
    label: '파이프라인',
    description: '릴리즈 파이프라인 제어',
  },
  {
    id: 'quality',
    label: '품질',
    description: '테스트 · 모니터링 상태',
  },
];
