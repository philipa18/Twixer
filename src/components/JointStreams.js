import React, { useEffect, useState } from "react";
import mixCall from "../mixCall";
import twitchCall from "../twitchCall";

function Stream() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const assembleStreams = async () => {
      let results = [];
      let twitchResults = await twitchCall();
      let mixResults = await mixCall();
      // Would sort, but Twitch's 10th stream usually has more views than mixer's 1st
      for (let i = 0; i < 20; i++) {
        let newURL = twitchResults[i].thumbnail_url
          .replace("{width}", "405")
          .replace("{height}", "228");
        twitchResults[i].thumbnail_url = newURL;
        results[i * 2] = {
          userName: twitchResults[i].user_name,
          thumbpic: twitchResults[i].thumbnail_url,
          views: twitchResults[i].viewer_count,
          isTwitch: true
        };
        //console.log(mixResults[i]);
        results[i * 2 + 1] = {
          userName: mixResults[i].user.username,
          thumbpic: mixResults[i].thumbnail
            ? mixResults[i].thumbnail.url
            : mixResults[i].bannerUrl,
          views: mixResults[i].viewersCurrent,
          gameName: mixResults[i].type.name
        };
      }
      setChannels(results);
    };
    assembleStreams();
  }, []);
  return (
    <div className="pageBody">
      <h1>Top Streams</h1>
      <div className="row">
        {channels.map(channel => (
          <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
            <div className="card">
              <img className="card-img-top" src={channel.thumbpic} alt="" />
              <div className="card-body">
                <h3 className="card-title">{channel.userName}</h3>
                <h5 className="card-text"> {channel.gameName}</h5>
                <div className="card-text">{channel.views} live viewers</div>
                <button
                  className={channel.isTwitch ? "twitchLink" : "mixerLink"}
                >
                  <a
                    href={
                      (channel.isTwitch
                        ? "https://twitch.tv/"
                        : "https://mixer.com/") + channel.userName
                    }
                    className="link"
                    target="_blank"
                  >
                    watch {channel.userName}'s' stream
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

export default Stream;
