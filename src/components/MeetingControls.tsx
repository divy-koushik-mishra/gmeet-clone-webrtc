import { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import { generateRandomString } from "../utils/utils";

const MeetingControls = () => {
  const [time, settime] = useState("10.10");
  const [meetingCode, setmeetingCode] = useState("1234");
  const [buttonStates, setButtonStates] = useState(
    new Array(5).fill(false) // Assuming you have 5 buttons
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      settime(date.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setmeetingCode(generateRandomString());
  }, []);

  const meetingControls = [
    "ri-mic-line",
    "ri-video-on-line",
    "ri-closed-captioning-line",
    "ri-chat-smile-3-line",
    "ri-share-forward-line",
  ];

  const sideButtons = [
    "ri-information-line",
    "ri-group-line",
    "ri-chat-4-line",
    "ri-shapes-line",
    "ri-git-repository-private-line",
  ];

  const handleButtonClick = (index: number) => {
    setButtonStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="text-white flex items-center justify-between px-6 py-2 pb-2 overflow-hidden">
      <div className="w-1/3">
        {time} | {meetingCode}
      </div>
      <div className="w-1/3">
        {meetingControls.map((icon, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`mx-2 py-1 px-3 rounded-full ${
              buttonStates[index] ? "bg-[#434649]" : "bg-red-500"
            }`}
          >
            <i className={`ri ri-lg font-light opacity-80 hover:opacity-100 ${icon}`} />
          </button>
        ))}
      </div>

      <div className="w-[30%] text-right">
        {sideButtons.map((icon, index) => (
          <button key={index} className="mx-4 rounded-full">
            <i className={`ri ri-xl opacity-80 hover:opacity-100 ${icon}`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default MeetingControls;
