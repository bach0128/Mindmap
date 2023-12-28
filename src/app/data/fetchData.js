export const postMap = async (data) => {
  const res = await fetch(`https://yqtzkj-8080.csb.app/listMap`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
};
