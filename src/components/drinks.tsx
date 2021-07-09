import { Drink } from 'client';
import DrinkItem from 'components/drinkItem';
import Heading from 'components/heading';

export interface DrinksProps {
  drinks: Drink[];
}

export default function Drinks({ drinks }: DrinksProps) {
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
