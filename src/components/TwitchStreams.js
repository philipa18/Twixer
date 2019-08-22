import React, { useEffect, useState } from "react";
import twitchCall from "../twitchCall";

function TwitchStream() {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    const assembleStreams = async () => {
      setChannels(await twitchCall());
    };
    assembleStreams();
  }, []);
  return (
    <div className="pageBody">
      <h1>Top Twitch Streams</h1>
      <div className="row">
        {channels.map(channel => (
          <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
            <div className="card">
              <img
                className="card-img-top"
                src={channel.thumbnail_url
                  .replace("{width}", "405")
                  .replace("{height}", "228")}
                alt=""
              />
              <div className="card-body">
                <h3 className="card-title">{channel.user_name}</h3>
                <h5 className="card-text"> {channel.title}</h5>
                <div className="card-text">
                  {channel.viewer_count} live viewers
                </div>
                <button className="twitchLink">
                  <a
                    href={"https://twitch.tv/" + channel.user_name}
                    className="link"
                    target="_blank"
                  >
                    watch {channel.user_name}'s stream
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TwitchStream;
