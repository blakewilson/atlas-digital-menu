import React from 'react';
export interface PriceProps {
  children?: React.ReactNode;
}

export default function Price({ children }: PriceProps) {
  return (
    <span className="text-2xl text-secondary font-coustard font-bold">
      ${children}
    </span>
  );
}
