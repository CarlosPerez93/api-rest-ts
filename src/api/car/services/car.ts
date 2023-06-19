import { Car } from "../interface/car.interface";
import ItemModel from "../model/car";

const postCars = async (item: Car) => {
  const response = await ItemModel.create(item);
  return response;
};
const getCars = async () => {
  const response = await ItemModel.find({});
  return response;
};

const getCar = async (id: string) => {
  const response = await ItemModel.findOne({ _id: id });
  return response;
};
const deleteCar = async (id: string) => {
  const response = await ItemModel.findOneAndRemove({ _id: id });
  return response;
};

const putCar = async (id: string, data: Car) => {
  const response = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
};

export { postCars, getCars, getCar, putCar, deleteCar };
