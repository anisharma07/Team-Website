const paradoxBaseUrl = process.env.NEXT_PUBLIC_PARADOX_URL;
const uid = process.env.NEXT_PUBLIC_PARADOX_UID;

export const fetchEvents = async () => {
  console.log(paradoxBaseUrl);
  const response = await fetch(`${paradoxBaseUrl}/lead`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ uid: uid }),
  });
  const data = await response.json();
  console.log(data);
  return data;
};
