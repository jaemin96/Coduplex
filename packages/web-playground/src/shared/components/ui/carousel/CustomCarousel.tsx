'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  //   CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@shared/components/ui/carousel';
import type { CarouselApi } from '@shared/components/ui/carousel/types/carousel.type';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';

interface CustomCarouselProps {
  children: React.ReactNode;
  showArrows?: boolean;
  loop?: boolean;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const CustomCarousel = ({
  children,
  showArrows = false,
  loop = true,
  orientation = 'horizontal',
  className,
}: CustomCarouselProps) => {
  const apiRef = React.useRef<CarouselApi | null>(null);

  React.useEffect(() => {
    if (!apiRef.current) return;

    const api = apiRef.current;
    api.reInit();
  }, [orientation, loop]);

  return (
    <>
      <Carousel
        setApi={(api) => (apiRef.current = api)}
        opts={{
          align: 'start',
          loop,
          axis: orientation === 'vertical' ? 'y' : 'x',
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        orientation={orientation}
        className={cn('w-full', className)}
      >
        <CarouselContent className={cn('h-57', orientation === 'vertical' ? 'flex-col' : 'flex-row')}>
          {children}
        </CarouselContent>
      </Carousel>

      {showArrows && (
        <>
          <CarouselPrevious
            className={cn(
              'absolute z-20 bg-black/40 text-white border-none hover:bg-black/60',
              orientation === 'horizontal'
                ? 'left-3 top-1/2 -translate-y-1/2'
                : 'top-3 left-1/2 -translate-x-1/2 rotate-90'
            )}
          />
          <CarouselNext
            className={cn(
              'absolute z-20 bg-black/40 text-white border-none hover:bg-black/60',
              orientation === 'horizontal'
                ? 'right-3 top-1/2 -translate-y-1/2'
                : 'bottom-3 left-1/2 -translate-x-1/2 rotate-90'
            )}
          />
        </>
      )}
    </>
  );
};
