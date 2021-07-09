import { Meal } from 'client';
import Heading from 'components/heading';
import MealItem from 'components/mealItem';

export interface MealsProps {
  meals: Meal[];
}

export default function Meals({ meals }: MealsProps) {
  return (
    <div className="relative box p-4 mb-4">
      <img
        src="/fries.png"
        className="absolute left-0 -top-72"
        style={{ width: `390px` }}
      />

      <img
        src="/burger.png"
        className="absolute right-0 -top-60"
        style={{ width: `600px` }}
      />
      <div className="flex justify-between">
        <Heading>Meals</Heading>

        <div className="flex text-2xl font-coustard">
          <div style={{ width: `100px` }}>Burger</div>
          <div style={{ width: `100px` }} className="ml-24">
            Combo
          </div>
        </div>
      </div>

      {meals.map((meal, index) => (
        <MealItem key={meal.id} meal={meal} orderNumber={index + 1} />
      ))}
    </div>
  );
}
