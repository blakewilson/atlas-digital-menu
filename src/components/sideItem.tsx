import Price from 'components/price';
import { Side } from 'client';

export interface SideItemProps {
  side: Side;
}

export default function SideItem({ side }: SideItemProps) {
  return (
    <div className="flex mb-2">
      <div className="w-full flex justify-between">
        <div>
          <h2 className="text-2xl">
            {side.title} <span className="text-sm">{side.calories} CAL</span>
          </h2>
          <div
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: side.description }}
          />
        </div>
        <div className="flex">
          <div>
            <Price>{side.cost}</Price>
          </div>
        </div>
      </div>
    </div>
  );
}
