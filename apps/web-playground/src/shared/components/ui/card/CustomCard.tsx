'use client';

import * as React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@shared/components/ui/card';
import { Button } from '@shared/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { CustomCarousel, CarouselItem } from '@shared/components/ui/carousel';
import { TypographyH3, TypographyP } from '@shared/components/ui/typography';
import { Skeleton } from '@shared/components/ui';

interface ImageItem {
  id: string | number;
  src?: string | null;
  alt?: string;
}

interface CustomCardProps {
  images: ImageItem[];
  description: React.ReactNode;
  footerLabel?: string;
  title?: string;
  onEdit?: () => void;
  onDelete?: () => void;
  cardHeight?: string;
  route: string;
}

export const SkeletonCard = () => (
  <div className="flex flex-col gap-2 rounded-lg border p-4 shadow-sm w-full">
    <Skeleton className="h-48 w-full rounded-md" />
    <Skeleton className="h-5 w-3/4 mt-2" />
    <Skeleton className="h-4 w-1/2" />
    <Skeleton className="h-4 w-1/3" />
  </div>
);

export const CustomCard = ({
  images,
  description,
  footerLabel,
  title,
  onEdit,
  onDelete,
  cardHeight = 'h-[370px]',
  route,
}: CustomCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className={`w-full ${cardHeight} flex flex-col overflow-hidden rounded-2xl shadow-md`}>
      <CardHeader className="p-0 cursor-pointer">
        <div
          className="h-54 w-full bg-gray-700 flex items-center justify-center text-gray-300"
          onClick={() => {
            navigate(route);
          }}
        >
          <CustomCarousel orientation="vertical" loop>
            {images.map((img) => (
              <CarouselItem key={img.id} className="flex items-center justify-center bg-gray-800">
                {img.src ? (
                  <img src={img.src} alt={img.alt} className="w-full h-[216px] object-cover" />
                ) : (
                  <span>{img?.alt}</span>
                )}
              </CarouselItem>
            ))}
          </CustomCarousel>
        </div>
      </CardHeader>

      <CardContent className="p-4 flex-1 overflow-y-auto">
        {title && <TypographyH3 className="text-lg font-semibold text-gray-900 truncate">{title}</TypographyH3>}
        <TypographyP className="text-gray-800 text-sm [&:not(:first-child)]:mt-2">{description}</TypographyP>
      </CardContent>

      {footerLabel && (
        <CardFooter className="flex items-center justify-between px-4 py-3 border-t border-gray-200 bg-gray-50">
          <div className="flex gap-2">
            {onEdit && (
              <Button variant="outline" size="sm" onClick={onEdit}>
                수정
              </Button>
            )}
            {onDelete && (
              <Button variant="outline" size="sm" onClick={onDelete}>
                삭제
              </Button>
            )}
          </div>
          {footerLabel && <span className="text-xs text-muted-foreground">{footerLabel}</span>}
        </CardFooter>
      )}
    </Card>
  );
};
