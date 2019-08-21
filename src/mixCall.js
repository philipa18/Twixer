const getMix = async () => {
  const endpoint =
    "https://mixer.com/api/v1/channels?order=viewersCurrent:desc&limit=20";
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};

export { getMix as default };
