import Heading from 'components/heading';
import MealItem from 'components/mealItem';
import { client } from 'client';

export default function Meals() {
  const { useQuery } = client;
  const meals = useQuery().meals()?.nodes;

  return (
    <div className="box p-4 mb-4">
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
