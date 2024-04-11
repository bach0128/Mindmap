export const postMap = async (data) => {
  // headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
  const res = await fetch(`https://yqtzkj-8080.csb.app/listMap`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  });
  return res;
};

export const deleteMap = async (id) => {
  const res = await fetch(`https://yqtzkj-8080.csb.app/listMap/${id}`, {
    method: "DELETE",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return res;
};

export const getAllMap = async () => {
  const res = await fetch(`https://yqtzkj-8080.csb.app/listMap`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  const data = await res.json();
  return data;
};

export const getMap = async (id) => {
  const res = await fetch(`https://yqtzkj-8080.csb.app/listMap/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  const data = await res.json();
  return data;
};

export const deleteAllMap = async () => {
  const res = await fetch(`https://yqtzkj-8080.csb.app/listMap`, {
    method: "DELETE",
  });
};
