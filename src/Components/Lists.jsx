import { loremIpsum } from "lorem-ipsum";
import ListItem from "./ListItem";
const totalItems = 5000;

const Lists = () => {
  const items = Array(totalItems)
    .fill()
    .map((item, id) => {
      function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      return {
        id,
        image: `https://via.placeholder.com/${getRndInteger(70, 100)}`,
        title: loremIpsum({
          count: 1,
          units: "sentences",
          sentenceLowerBound: 4,
          sentenceUpperBound: 8,
        }),
        description: loremIpsum({
          count: 2,
          units: "sentences",
          sentenceLowerBound: 40,
          sentenceUpperBound: 80,
        }),
      };
    });

  return (
    <div>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Lists;
