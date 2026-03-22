## Convention - commit message

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

<br/>

## 💡 모노레포에 따른 커밋 컨벤션 구축

```tsx
 [ROOT OR <PACKAGE_NAME>] <tag>(<[optional scope]>): <description>

 [Optional Description]

 [Optional footer]

 Closes #<issue-number>
 Fixes #<issue-number>
 Refs #<issue-number>
```

> scope는 어떤 부분의 작업을 진행했는지 (ex. 인증, 거래, API 등)
>
> [ Optional footer ] <br/>
> closes : 특정 이슈 완료 <br/>
> fixes : 특정 이슈 수정작업 <br/>
> refs : 특정 이슈번호 참조

<br/>

### 최종 예시

```bash
 [package1] feat(auth): add feature - sign

 - add function Login, Logout and Signup

 - closes #1
```
