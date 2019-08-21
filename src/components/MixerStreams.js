import React, { useEffect, useState } from "react";
import mixCall from "../mixCall";

function MixerStream() {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    const assembleStreams = async () => {
      setChannels(await mixCall());
    };
    assembleStreams();
  }, []);
  return (
    <div className="pageBody">
      <h1>Top Mixer Streams</h1>
      <div className="row">
        {channels.map(channel => (
          <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
            <div className="card">
              <img
                className="card-img-top"
                src={
                  channel.thumbnail ? channel.thumbnail.url : channel.bannerUrl
                }
                alt=""
              />
              <div className="card-body">
                <h3 className="card-title">{channel.user.username}</h3>
                <h5 className="card-text"> {channel.gameName}</h5>
                <div className="card-text">
                  {channel.viewersCurrent} live viewers
                </div>
                <button className="mixerLink">
                  <a
                    href={"https://mixer.com/" + channel.user.username}
                    className="link"
                    target="_blank"
                  >
                    watch {channel.user.username}'s' stream
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

export default MixerStream;
