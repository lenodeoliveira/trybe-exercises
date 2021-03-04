const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers"
    },
  };
  setTimeout(() => console.log(mars), 4000);
};
getPlanet();