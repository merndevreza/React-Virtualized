const ListItem = ({ item }) => {
  const { title, image, description } = item;
  return (
    <div className="bg-green-50 p-4 border-b-2 mb-5">
      <img src={image} alt="placeholder image" />
      <h3 className="text-xl py-3 font-medium text-red-500">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ListItem;
