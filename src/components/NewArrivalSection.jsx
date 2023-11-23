import { Card } from "./Card";

export const NewArrivalsection = ({ items }) => {
  return (
    <div className="mt-20">
      <div className="flex-center">
        <div className="block bg-[url(./assets/lines.png)] bg-center font-extrabold text-4xl dark:text-white">
          NEW ARRIVALS
        </div>
      </div>
      <div className="justify-between mt-10 grid grid-cols-1 gap-y-24 gap-x-6 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)] ">
        {items.map((item) => (
          <Card key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};
