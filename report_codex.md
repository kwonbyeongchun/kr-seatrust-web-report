# SeaTrust Software Hub - 개발 완료 보고서 (Codex)

- **작성일**: 2025-11-15
- **대상 버전**: main 브랜치 기준 로컬 스냅샷
- **작성 범위**: 프론트엔드(React/Vite)·백엔드(Express/MSSQL)·RAG 지식베이스·배포 인프라 전반 점검

## 1. 프로젝트 개요
SeaTrust Software Hub는 KR 소프트웨어 포트폴리오를 한곳에서 소개·배포·지원하기 위한 풀스택 웹 애플리케이션이다. README에 정의된 것처럼 React 19 + TypeScript + Vite 프론트엔드와 Express 5 + MSSQL + MinIO 백엔드를 기본으로 하며, Office 365( MS Graph) 기반 메일 발송과 Qdrant + OpenAI를 활용한 RAG 지식 검색 기능을 포함한다.

## 2. 구현 범위 요약
### 2.1 프론트엔드
- `App.tsx` 라우팅에 따라 홈, 소프트웨어 상세/등록, 견적·문의, 내 피드백, 관리자, 지식베이스, 스타일 가이드, MSAL 인증 등 전 페이지가 HashRouter로 묶여 있다. Auth/Language/Data 컨텍스트가 전역 상태·다국어·세션을 담당한다.
- Home/SoftwareDetail: 제품 카드 그리드, 상세 탭(설명·FAQ·피드백·릴리즈 노트)과 다운로드 승인 검증, Markdown 기반 콘텐츠, 하드웨어 요구사항 카드, 릴리즈 히스토리가 구현되어 있다.
- AdminManagement: 사용자 검색·정렬·페이지네이션, 역할 승격/강등, work area 편집, 특정 사용자에 대한 다운로드 승인(software_approvals 테이블) 일괄 관리 UI를 제공한다.
- KnowledgeBase: 관리자만 접근하며 S3 업로드, MSSQL 메타데이터 열람, RAG 기반 AI 답변 테스트, 관련 피드백 모니터링 등 세 모듈(매뉴얼 / 피드백 / AI Answer Test)을 포함한다.
- MyFeedback: 로그인 사용자의 전체 스레드/참여 내역을 제품별, 작성/답글 기준, 검색어로 필터링하고 삭제까지 지원한다. Playwright e2e 테스트(`tests/e2e/my-feedback-history.spec.ts`)가 해당 화면 UX를 검증한다.
- 공통 컴포넌트는 Atomic Design 구조(components/atoms·molecules·organisms)로 분리되어 있으며 Hero, PageTitle, Toast, Markdown editor/preview, Combobox 등 재사용 블록이 정리되어 있다. `i18n/translations.ts`는 EN/KO/ZH 텍스트와 Hero 슬라이드까지 포함한다.

### 2.2 백엔드/API
- `server/src/routes/software.routes.ts`는 /api/software 조회 시 다국어 설명, 하드웨어 요구사항, FAQ, 릴리즈 노트(JSON), 최신 피드백/답글을 조인해 프론트에서 즉시 사용할 수 있는 스키마로 가공한다.
- Auth: `/api/auth/login|logout` (AuthContext에서 소비), `graph-auth.routes.ts` 일련의 엔드포인트로 Device Flow 인증·상태 조회·수동 리프레시를 제공한다.
- 콘텐츠 관리: `/api/upload` 계열은 아이콘/대표 이미지/패키지/비디오 업로드를 MinIO에 저장하고 `/storage/...` 프록시 경유 URL을 돌려준다. `/api/profile`, `/api/users`, `/api/approvals` 등은 관리자 UI가 필요로 하는 CRUD를 담당한다.
- 고객 소통: `/api/contact`와 `/api/quote`는 폼 데이터 검증 후 MSSQL에 적재를 시도하고, mailService를 통해 MS Graph 이메일을 발송한다.
- RAG: `/api/manuals` 계열 라우트가 지식 문서 CRUD, 업로드 시 PDF/DOC/DOCX 파싱 → 텍스트 청킹 → `embedding.service`로 임베딩 생성 → Qdrant 저장까지 수행한다.
- 스케줄러·서비스: `email-scheduler.service.ts`는 ENV(기본 60초)에 맞춰 메일박스를 읽어 피드백 답장을 처리하는 AI 파이프라인을 기동하고, `graph-token-scheduler.service.ts`는 매일 00:00 KST 토큰을 갱신한다. `mail.service.ts`는 MS Graph를 우선 사용하며, Graph 미구성 시 오류를 명확히 리턴하도록 설계되었다.

## 3. 시스템 아키텍처 & 인프라
- 패키지 구성(최상위 `package.json`)은 Vite 빌드, React 19, Express 5, AWS SDK(S3), React Router 7, Markdown 렌더링, Playwright 테스트를 명시한다.
- README와 `docs/DESIGN.md`는 Atomic Design, Tailwind 토큰, 브랜드 컬러/타이포그래피/spacing 기준을 정의한다. `docs/database.md`는 users, software, descriptions, hardware_requirements, FAQs, release, feedback, knowledge documents 테이블과 다국어/제약조건을 문서화했다.
- Docker: 프론트 Dockerfile은 Node 20-slim 빌드 → nginx 배포, 백엔드 Dockerfile은 Node 20-alpine + native build chain 설치 후 dist 실행. `docker-compose.yml`은 MinIO, Qdrant, backend, frontend 네 서비스를 동일 브리지 네트워크에 올리고, backend 컨테이너에 DB/S3/OpenAI/MS Graph/메일 환경변수를 전달한다.
- 배포: `DEPLOYMENT.md`는 스테이징 서버(115.68.232.61) 기준으로 /opt/app/compose 구조, GHCR 이미지 풀, docker-compose up, 헬스체크, 롤백, 로그 관리 절차를 단계별로 기술한다.

## 4. 데이터 및 외부 통합
- MSSQL: 다국어 컬럼 조합 UNIQUE, CASCADE 정책, release notes JSON, feedback/reply 히스토리 등 정규화가 완료됐다. server/scripts 디렉터리는 초기화·동기화 스크립트를 제공한다.
- 파일 스토리지: MinIO를 S3 호환으로 활용하며 업로드 시 메타데이터를 S3 태그에 저장, Public URL은 `/storage/...` 프록시를 통해 전달된다.
- RAG 파이프라인: `RAG_SYSTEM_GUIDE.md`에 Qdrant(text-embedding-3-small, gpt-4o-mini), 청크 2,000자/오버랩 200자, 5개 상위 결과, 문서 업로드/AI 답변 절차, 문제 해결 가이드, 향후 개선안까지 기록했다.
- MS Graph: `graph.service.ts`는 MSAL 퍼시스턴트 캐시(.msal-cache.json + .token-cache.json)를 사용해 서버 재시작 후에도 토큰을 복구하고, Device Flow 안내, 토큰 정보 노출, refresh API를 제공한다. Mail 전송/수신은 Graph 우선이며, 미구성 시 명시적 오류를 남긴다.

## 5. 배포·운영 체크포인트
1. **환경 변수**: README에 명시된 MSSQL/S3/Graph 필수값 외에 JWT_SECRET, CONTACT_EMAIL, OPENAI_API_KEY, QDRANT_URL/API_KEY가 `.env`에 채워져야 한다.
2. **도커 자원**: MinIO(9000/9001), Qdrant(6333/6334)와 backend(3000), frontend(8080->80) 포트 충돌 여부 확인. 스토리지 볼륨(minio-data, qdrant-storage, backend-uploads) 백업 정책 마련.
3. **MS Graph 인증**: `/api/auth/graph/device-flow` 호출 → `/msal-auth` 페이지 안내에 따라 초기에 인증하고 `.msal-cache.json`을 보호해야 한다.
4. **RAG 인덱스**: KnowledgeBase에서 소프트웨어를 선택해 문서를 업로드해야 AI Answer Test가 의미 있는 결과를 준다. 업로드 실패 시 RAG 가이드의 Qdrant/임베딩 체크리스트를 참고한다.
5. **CI/CD**: GHCR 태그(main-커밋, v*). `docker-compose pull && up -d`로 무중단 업데이트 가능.

## 6. 테스트 및 품질 상태
- 자동화: Playwright 설정(`playwright.config.ts`)과 단일 e2e 시나리오(`tests/e2e/my-feedback-history.spec.ts`)만 존재한다. 로그인/피드백 필터/검색/empty state를 검증하지만, 다른 핵심 플로우(다운로드 승인, 관리자 승인, 지식베이스 업로드, RAG 응답)는 미커버 상태다.
- 백엔드 레벨 테스트/린터/형상 검증은 구성되어 있지 않다. 로컬에서 npm run build/server:build 정도만 실행 가능하다.
- 권장 후속: 다국어 스냅샷 테스트, KnowledgeBase 업로드 통합 테스트, Approval API 단위 테스트, Graph 연동 모킹 등을 추가해 회귀 리스크를 줄여야 한다.

## 7. 미해결 항목 및 리스크
1. **문서 미반영 TODO**: `todo-list.md`에는 "Vector DB 설치"·"로그인 기능" 등이 미완료로 남아 있으나 실제 구현은 완료됐다. 리스트를 최신화하고, 아직 남은 항목(비밀번호 찾기, Contact Us용 RAG, 배포 자동화, 임의항로 경감계수 계산 서비스 등)을 명확히 구분해야 한다.
2. **계정 복구/비밀번호 재설정**: AuthContext·백엔드 모두 비밀번호 초기화/2FA가 없다. 운영 전 사용자 관리 정책을 확정할 필요가 있다.
3. **테스트 커버리지 부족**: 주요 비즈니스 로직이 수동 QA에 의존한다. 최소 Smoke 테스트 셋과 백엔드 유닛 테스트 도입이 필요하다.
4. **보안**: README에서 금지한 파일(server/.env, token cache 등)이 gitignore로 차단되어 있으나, 컨테이너 볼륨에 저장된 토큰 파일 접근 제어, OPENAI 키 보호를 위한 시크릿 매니지먼트가 필요하다.
5. **운영 모니터링**: Health check 외에 애플리케이션 레벨 로깅/알림이 없다. 이메일 스케줄러 실패나 RAG 에러를 모니터링할 대시보드/알림 설정을 고려한다.

## 8. 후속 권장 작업
1. 테스트 확대: 주요 사용자 여정 + 관리자 플로우에 대해 추가 Playwright/E2E 시나리오를 작성하고 GitHub Actions에 통합.
2. 백엔드 품질: Jest 혹은 Vitest 기반 API 단위 테스트, lint/format CI, MS Graph·Qdrant 통합에 대한 모킹 전략 마련.
3. 문서 정비: README/DEPLOYMENT 외에도 운영 Runbook(토큰 갱신 절차, MinIO 백업, RAG 인덱스 복원)을 추가하고, `todo-list.md`를 실제 상태로 업데이트.
4. 보안 강화를 위해 Role 기반 접근(예: KnowledgeBase API 보호, Approval 관리)과 감사 로그를 추가.
5. Contact/Quote 양식 정보 저장용 테이블을 실제 운영 DB에 생성하고, 수신 알림 이메일을 KR 공식 계정으로 전환.

---
본 보고서는 main 브랜치 스냅샷을 기준으로 기능 구현 상태와 남은 이슈를 정리한 문서이다. 향후 변경 사항이 있을 경우 `report_codex.md`를 최신화해 인수인계 자료로 활용하기 바란다.
