import Price from 'components/price';
import { Drink } from 'client';

export interface DrinkItemProps {
  drink: Drink;
}

export default function DrinkItem({ drink }: DrinkItemProps) {
  return (
    <div className="flex mb-2">
      <div className="w-full flex justify-between">
        <div>
          <h2 className="text-2xl">
            {drink.title} <span className="text-sm">{drink.calories} CAL</span>
          </h2>
          <div
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: drink.description }}
          />
        </div>
        <div className="flex">
          <div style={{ width: `100px` }}>
            <Price>{drink.smallPrice}</Price>
          </div>

          <div style={{ width: `100px` }} className="ml-24">
            <Price>{drink.largePrice}</Price>
          </div>
        </div>
      </div>
    </div>
  );
}
