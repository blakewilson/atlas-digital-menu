import { client } from 'client';
import DrinkItem from 'components/drinkItem';
import Heading from 'components/heading';

export default function Sides() {
  const { useQuery } = client;
  const drinks = useQuery().drinks()?.nodes;

  return (
    <div>
      <div className="flex justify-between">
        <Heading>Shakes &amp; Drinks</Heading>

        <div className="flex text-2xl font-coustard">
          <div style={{ width: `100px` }}>Small</div>
          <div style={{ width: `100px` }} className="ml-24">
            Large
          </div>
        </div>
      </div>

      {drinks.map((drink) => (
        <DrinkItem key={drink.id} drink={drink} />
      ))}
    </div>
  );
}
