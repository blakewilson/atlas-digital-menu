import Heading from 'components/heading';
import SideItem from 'components/sideItem';
import { client } from 'client';

export default function Sides() {
  const { useQuery } = client;
  const sides = useQuery().sides()?.nodes;

  return (
    <div>
      <Heading>Sides &amp; Desserts</Heading>
      {sides.map((side) => (
        <SideItem key={side.id} side={side} />
      ))}
    </div>
  );
}
