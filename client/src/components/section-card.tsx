'use client';

import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type Props = {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function SectionCard(props: Props) {
  const { title, description, children, className } = props;

  return (
    <Card className={cn('backdrop-blur-sm bg-white/10 border-white/20', className)}>
      <CardHeader className="text-white">
        <CardTitle className="text-2xl">{title}</CardTitle>
        {description && (
          <CardDescription className="text-white/80 text-md">{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
