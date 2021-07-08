export interface HeadingProps {
  children: React.ReactNode;
}

export default function Heading({ children }: HeadingProps) {
  return (
    <h2 className="text-2xl text-secondary font-bold font-coustard mb-4">
      <span className="border-b-2 border-secondary">{children}</span>
    </h2>
  );
}
