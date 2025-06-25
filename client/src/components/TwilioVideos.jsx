import { useEffect, useRef } from "react";
import TwilioVideo from "twilio-video";

const TwilioVideos = ({ token, room }) => {
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();

  function appendNewParticipant(track, identity) {
    const chat = document.createElement("div");
    chat.setAttribute("id", identity);
    chat.appendChild(track.attach());
    remoteVideoRef.current.appendChild(chat);
  }

  useEffect(() => {
    TwilioVideo.connect(token, {
      video: true,
      audio: true,
      name: room,
    })
      .then((room) => {
        TwilioVideo.createLocalVideoTrack().then((track) => {
          localVideoRef.current.appendChild(track.attach());
        });
        function removeParticipant(participant) {
          const elem = document.getElementById(participant.identity);
          elem.parentNode.removeChild(elem);
        }
        function addParticipant(participant) {
          participant.tracks.forEach((publication) => {
            if (publication.isSubscribed) {
              const track = publication.track;
              appendNewParticipant(track, participant.identity);
            }
          });
          participant.on("trackSubscribed", (track) => {
            appendNewParticipant(track, participant.identity);
          });
        }
        room.participants.forEach(addParticipant);
        room.on("participantConnected", addParticipant);
        room.on("participantDisconnected", removeParticipant);
      })
      .catch((e) => {
        console.log("An error happened", e);
      });
    return () => {};
  }, [token, room]);

  return (
    <div>
      <h1>Your are in room: {room}</h1>
      <div ref={localVideoRef}></div>
      <div ref={remoteVideoRef}></div>
    </div>
  );
};

export default TwilioVideos;
