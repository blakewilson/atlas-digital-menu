import React from 'react';
export interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col p-8 justify-between h-screen">{children}</div>
  );
}
