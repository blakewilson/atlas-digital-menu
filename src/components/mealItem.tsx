import { Meal } from 'client';
import Price from 'components/price';

export interface MealItemProps {
  meal: Meal;
  orderNumber: number;
}

export default function MealItem({ meal, orderNumber }: MealItemProps) {
  return (
    <div className="flex pb-2">
      <div className="text-2xl pr-4 text-secondary font-bold">
        {orderNumber}.
      </div>

      <div className="w-full flex justify-between">
        <div>
          <h2 className="text-2xl">
            <span className="font-bold">{meal.title}</span>{' '}
            <span className="text-sm">{meal.calories} CAL</span>
          </h2>
          <div
            className="text-xl"
            dangerouslySetInnerHTML={{ __html: meal.description }}
          />
        </div>
        <div className="flex">
          <div style={{ width: `100px` }}>
            <Price>{meal.cost}</Price>
          </div>

          <div style={{ width: `100px` }} className="ml-24">
            <Price>{meal.comboCost}</Price>
          </div>
        </div>
      </div>
    </div>
  );
}
