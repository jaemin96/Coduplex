# Button 컴포넌트 코드 리뷰

## 📊 리뷰 요약
- **날짜**: 2026-02-02
- **리뷰어**: Claude
- **심각도**: Medium
- **수정 필요**: 4개 권장사항

---

## ⚠️ 개선 권장사항

### 1. 인라인 스타일 제거
```tsx
❌ style={{ backgroundColor }}
✅ SCSS 변수 or CSS 커스텀 프로퍼티 사용
```

### 2. 클래스명 조합 개선
```tsx
❌ ["button", mode].filter(Boolean).join(" ")
✅ cn(styles.button, styles[mode], className)
```
→ `classnames` or `clsx` 라이브러리 사용

### 3. 타입 확장성
```tsx
✅ as const + 상수 분리로 타입 안정성 강화
```

### 4. 접근성 보강
```tsx
✅ loading, aria-busy, aria-disabled 추가 고려
```

---

## ✅ 잘된 점
- ✨ `ButtonHTMLAttributes` 제대로 상속
- 📦 Props 스프레드로 유연한 확장
- 🎯 TypeScript 타입 정의 명확
- 🔒 기본값 설정 적절

---

## 🔧 Quick Fix

```tsx
import cn from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
}

export const Button = ({
  primary = false,
  size = 'medium',
  loading = false,
  disabled,
  className,
  ...props
}: ButtonProps) => {
  const mode = primary ? styles['button--primary'] : styles['button--secondary'];

  return (
    <button
      className={cn(
        styles.button,
        styles[`button--${size}`],
        mode,
        className
      )}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    />
  );
};
```

---

## 📚 참고
- [Radix UI Button](https://www.radix-ui.com/primitives/docs/components/button)
- [classnames](https://github.com/JedWatson/classnames)
