export const Province = async () => {
  const response = await fetch(
    `http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`
  );
  const provinces = await response.json();
  return provinces;
};

export const City = async (id) => {
  const response = await fetch(
    `http://www.emsifa.com/api-wilayah-indonesia/api/regencies/${id}.json`
  );
  const city = await response.json();
  return city;
};

export const District = async (id) => {
  const response = await fetch(
    `http://www.emsifa.com/api-wilayah-indonesia/api/districts/${id}.json`
  );
  const district = await response.json();
  return district;
};

export const Village = async (id) => {
  const response = await fetch(
    `http://www.emsifa.com/api-wilayah-indonesia/api/villages/${id}.json`
  );
  const village = await response.json();
  return village;
};
