# Google Style React Base

Google TypeScript 스타일 가이드를 준수하도록 구성한 React + Vite 베이스 프로젝트입니다. ESLint/Prettier 규칙과 폴더 구조를 한 번에 정리해 팀 온보딩 시간을 줄이는 것이 목표입니다.

## 스택

- Vite + React 19 + TypeScript
- ESLint Flat config + `eslint-config-google` + React/Import 플러그인
- Prettier 3 (Google 스타일에 맞춘 2 spaces, single quote 등)
- 경로 별칭 `@/*`

## 스크립트

```bash
npm run dev       # 로컬 개발 서버
npm run build     # 타입 검사 + 프로덕션 번들
npm run lint      # Google 스타일 규칙 검사
npm run lint:fix  # 자동 수정
npm run format    # Prettier 포맷
```

## 디렉터리 가이드

- `src/app` : 전역 App 컴포넌트 및 AppShell
- `src/components` : 프리젠테이션 컴포넌트 (layout/common 등 하위로 세분화)
- `src/pages` : 페이지 단위의 컨테이너, 데이터/상태 결합
- `src/routes` : 라우팅 엔트리, Suspense 경계 등의 조합
- `src/hooks` : 비즈니스/상태 훅
- `src/config` : 상수, 내비게이션, 토큰 등 환경 정의
- `src/styles` : 전역 토큰/스타일 (필요 시 확장)

## 스타일 가이드 적용 방식

- ESLint: `eslint.config.js` 에서 `FlatCompat` 로 Google 스타일을 불러오고, TypeScript-aware rule + React 규칙을 결합했습니다.
- Prettier: `prettier.config.js` 로 2 spaces, single quote, max 100 columns 등 규칙을 명시했습니다.
- 예제 화면: `HomePage` 구성요소는 Material Design 영감을 받은 레이아웃과 카드 UI 예시를 제공합니다.

필요 시 `NAV_ITEMS`/`StatCard`/`HomePage` 등을 교체하며 프로젝트 요구에 맞게 확장할 수 있습니다.
