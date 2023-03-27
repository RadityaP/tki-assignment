export const addNewPlayer = async (params) => {
  const res = await fetch('http://localhost:4000/player', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  }).then((res) => res.json());

  return res;
};

export const getAllPlayer = async () => {
  const res = await fetch('http://localhost:4000/player', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

  return res;
};
