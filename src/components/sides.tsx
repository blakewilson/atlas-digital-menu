import { Side } from 'client';
import Heading from 'components/heading';
import SideItem from 'components/sideItem';

export interface SidesProps {
  sides: Side[];
}

export default function Sides({ sides }: SidesProps) {
  return (
    <div>
      <Heading>Sides &amp; Desserts</Heading>
      {sides.map((side) => (
        <SideItem key={side.id} side={side} />
      ))}
    </div>
  );
}
