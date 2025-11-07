import { createContext } from 'react';
import type { CarouselContextProps } from '../types/carousel.type';

export const CarouselContext = createContext<CarouselContextProps | null>(null);
