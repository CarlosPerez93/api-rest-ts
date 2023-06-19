import ItemModel from "../../car/model/car";

const getOrders = async () => {
  const response = await ItemModel.find({});
  return response;
};

export { getOrders };
