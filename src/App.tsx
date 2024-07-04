import Chatbox from "./components/Chatbox";
import MeetingControls from "./components/MeetingControls"
import VideoCanvas from "./components/VideoCanvas";

const App = () => {
  return (
    <div className="h-screen overflow-x-hidden ">
      <div className="flex p-4 space-x-4">
        <VideoCanvas />
        <Chatbox />
      </div>

      <MeetingControls />
    </div>
  );
};

export default App;
