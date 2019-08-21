let API_KEY = "ni6i15ll8yjwapcvdlsbhl6rwkj8h8";

const option = {
  headers: {
    "Client-ID": API_KEY
  }
};

const getTwitch = async () => {
  const endpoint = "https://api.twitch.tv/helix/streams?first=20";
  try {
    const response = await fetch(endpoint, option);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export { getTwitch as default };
