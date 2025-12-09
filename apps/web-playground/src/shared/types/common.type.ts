// use for extends or base set
export type BaseProps<T = HTMLElement> = React.HTMLAttributes<T>;

// common util type
export type PartiallyOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>; // 타입 중 특정 요소들만 옵셔널로 바꾸는 커스텀 유틸타입 (ex. PartiallyOptional<Types, "item1" | "item2">)
