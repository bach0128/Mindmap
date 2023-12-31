export const postMap = async (data) => {
  const res = await fetch(`https://yqtzkj-8080.csb.app/listMap`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ data }),
  });
};

export const deleteMap = async (id) => {
  const res = await fetch(`https://yqtzkj-8080.csb.app/listMap/${id}`, {
    method: "DELETE",
  });
};

export const getAllMap = async () => {
  const res = await fetch(`https://yqtzkj-8080.csb.app/listMap`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};
