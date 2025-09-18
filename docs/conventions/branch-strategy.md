## Convention - Branch strategy

| 브랜치      | Lint | Build | Test | 배포 |
| ----------- | ---- | ----- | ---- | ---- |
| `feature/*` | ✅   | ✅    | ✅   | ❌   |
| `hotfix/*`  | ✅   | ✅    | ✅   | ❌   |
| `dev`       | ✅   | ✅    | ✅   | ❌   |
| `main`      | ✅   | ✅    | ✅   | ✅   |

<br/>

### 💡 main

실제 배포되는 코드 (릴리즈) <br/>
main에 병합될 때만 배포 실행 (GitHub Actions 활용) > 현재 릴리즈 버전 반영 후 태그 생성 및 연동

<br/>

### 💡 dev

개발 중인 코드 모음 > PR 리뷰 후 main으로 merge > CI/CD에서 빌드 & 테스트 실행

<br/>

### 💡 feature/이름

새로운 기능 개발 시 생성 완료되면 dev로 PR 보내서 합치기

<br/>

### 💡 hotfix/이름 (필요할 경우)

릴리즈 배포 긴급 버그 수정 시 main 에서 따서 수정 후 바로 머지
