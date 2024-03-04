import { loremIpsum } from "lorem-ipsum";
import ListItem from "./ListItem";
import { AutoSizer, List } from "react-virtualized";

const Lists = () => {
  const rowCount = 500;
  const rowHeight = 150;

  const items = Array(rowCount)
    .fill()
    .map((item, id) => {
      return {
        id,
        image: `https://via.placeholder.com/60`,
        title: "Title",
        description: loremIpsum({
          count: 1,
          units: "sentences",
          sentenceLowerBound: 4,
          sentenceUpperBound: 8,
        }),
      };
    });
  const renderRow = ({ index, key, style }) => {
    return (
      <ListItem
        key={key}
        title={items[index].title}
        image={items[index].image}
        description={items[index].description}
        style={style}
      />
    );
  };

  return (
    <div className="h-screen">
      <AutoSizer>
        {({ width, height }) => (
          <List
            height={height}
            width={width}
            rowHeight={rowHeight}
            rowCount={rowCount}
            rowRenderer={renderRow}
            overscanColumnCount={5}
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default Lists;
