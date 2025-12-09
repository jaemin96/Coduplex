'use client';

import type { ReactNode, ComponentType } from 'react';
import { Empty, EmptyDescription, EmptyHeader } from '@shared/components/ui';
import { MessageSquareText } from 'lucide-react';

type EmptyConfig = {
  emptyIcon?: ComponentType<{ size?: number; strokeWidth?: number }>;
  emptyLabel?: string;
  emptyDescription?: string;
  emptyHandler?: ReactNode;
  iconSize?: number;
  iconStroke?: number;
  emptyType?: 'info' | 'warning' | 'error';
};

interface CardListContainerProps {
  children?: ReactNode;
  emptyConfig?: EmptyConfig;
}

export const CardListContainer: React.FC<CardListContainerProps> = ({ children, emptyConfig }) => {
  const {
    emptyIcon: IconComponent = MessageSquareText,
    iconSize = 42,
    iconStroke = 1.5,
    emptyType = 'info',
  } = emptyConfig || {};

  const iconBgColorClass =
    emptyType === 'info'
      ? 'bg-blue-100 text-blue-600'
      : emptyType === 'warning'
      ? 'bg-yellow-100 text-yellow-600'
      : 'bg-red-100 text-red-600';

  return (
    <>
      {children ? (
        <div
          className="
            grid
            gap-6
            xs:grid-cols-1
            sm:grid-cols-2
            md:grid-cols-2
            mlg:grid-cols-2
            lg:grid-cols-3
            xxl:grid-cols-4
            2xl:grid-cols-5
            3xl:grid-cols-6
            4xl:grid-cols-7
            mt-4
          "
        >
          {children}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <Empty className="border border-dashed rounded-2xl bg-slate-50/60 text-center shadow-sm">
            <EmptyHeader className="flex flex-col items-center space-y-4">
              <div className={`p-2 rounded-full ${iconBgColorClass}`}>
                <IconComponent size={iconSize} strokeWidth={iconStroke} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">
                {emptyConfig?.emptyLabel ?? `등록된 항목이 없습니다`}
              </h3>
              {emptyConfig?.emptyDescription && (
                <EmptyDescription className="text-sm text-slate-500">{emptyConfig?.emptyDescription}</EmptyDescription>
              )}
            </EmptyHeader>

            <div>{emptyConfig?.emptyHandler}</div>
          </Empty>
        </div>
      )}
    </>
  );
};
