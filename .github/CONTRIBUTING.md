# Contributing Guidelines

감사합니다! 이 프로젝트에 기여하기 위해서는 아래의 가이드를 따라 주세요.

---

## 개발 환경

![Node.js](https://img.shields.io/badge/node-%5E22-green?logo=node.js&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-%5E10.5-orange?logo=pnpm&logoColor=white)

설치 및 빌드 플로우는 다음과 같습니다:

```bash
pnpm install
pnpm build
pnpm dev

# lint -> pnpm lint
# testing code는 구축 예정
```

위 과정을 거치면 로컬 환경에서 프로젝트를 실행하고 테스트할 수 있습니다.

## 브랜치 전략

작업은 반드시 다음 브랜치 규칙을 따릅니다:

- `feature/*` : 새로운 기능 개발
- `fix/*` : 버그 수정
- `hotfix/*` : 긴급 패치

> ⚠️ main 브랜치에는 직접 커밋하거나 머지하지 않습니다.

## 커밋 컨벤션

### 태그 정의

| **tag**    | **description**                              |
| ---------- | -------------------------------------------- |
| `feat`     | 새로운 기능 추가                             |
| `fix`      | 버그 수정                                    |
| `docs`     | 문서 수정 (코드 변경 없음)                   |
| `style`    | 코드 포맷팅, 세미콜론 누락 등 의미 없는 변경 |
| `refactor` | 리팩토링 (기능 변화 없음)                    |
| `test`     | 테스트 코드 관련                             |
| `chore`    | 빌드 설정, 패키지 매니저 등 기타 변경        |
| `ci`       | CI 설정 변경                                 |

커밋 메시지는 아래 형태를 따릅니다:

```php-template
[ROOT OR <PACKAGE_NAME>] <tag>(<[optional scope]>): <description>
```

예시:

```csharp
[ROOT] ci: add CI pipeline
[ui] fix(button): resolve onClick bug
```

## Pull Request 규칙

- 모든 Pull Request는 CI를 통과해야 합니다.
- 최소 한 명 이상의 리뷰 승인이 필요합니다.
- main 브랜치 릴리즈에는 직접 머지할 수 없으며, 반드시 리뷰와 CI 검증을 거쳐야 합니다.

## 문의

기여 과정에서 문제가 생기면 Issues를 생성하거나 Maintainer에게 연락 주세요.
