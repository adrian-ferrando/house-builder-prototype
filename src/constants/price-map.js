export const priceMap = {
  doorType: {
    "Type 1": 100,
    "Type 2": 150,
    "Type 3": 200,
    "Type 4": 250,
  },
  doorColor: {
    Standard: 50,
    Red: 60,
    Green: 55,
    Blue: 65,
    Yellow: 70,
  },
  windowType: {
    "Type 1": 80,
    "Type 2": 120,
    "Type 3": 160,
    "Type 4": 200,
  },
  windowColor: {
    Standard: 40,
    Red: 50,
    Green: 45,
    Blue: 55,
    Yellow: 60,
  },
  wallsType: {
    "Type 1": 70,
    "Type 2": 110,
    "Type 3": 150,
    "Type 4": 190,
  },
  wallsColor: {
    Standard: 30,
    Red: 40,
    Green: 35,
    Blue: 45,
    Yellow: 50,
  },
  roofType: {
    "Type 1": 130,
    "Type 2": 170,
    "Type 3": 210,
    "Type 4": 250,
  },
  roofColor: {
    Standard: 70,
    Red: 80,
    Green: 75,
    Blue: 85,
    Yellow: 90,
  },
};

export const getPrice = (type, color) => {
  if (priceMap[type] && priceMap[type][color] !== undefined) {
    return priceMap[type][color];
  }
  return null;
};
