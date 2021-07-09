import React from 'react';
export interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col p-8 justify-between h-screen">
      {children}
      <div
        className="absolute w-full left-0 bottom-0"
        style={{
          height: `100px`,
          backgroundImage: `url(/fries-bottom.png)`,
        }}
      />
    </div>
  );
}
