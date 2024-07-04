import { RiCloseLine } from "@remixicon/react";

const Chatbox = () => {
  return (
    <aside className="bg-white w-[27%] rounded-lg p-5 flex flex-col justify-between">
        <div className="">

      <div className="flex justify-between items-center">
        <h2 className="text-lg">In-call messages</h2>
        <RiCloseLine />
      </div>
      <div className="bg-[#F0F3F4] rounded-lg text-xs p-4 my-4 text-center">
        <p>
        Unless they're pinned, messages can only be seen by people in the call when the message is sent. All messages are deleted when the call ends.
        </p>
      </div>
      </div>
        <div className="">
            <div className="flex items-center bg-[#F0F3F4] rounded-full px-4">
                <input type="text" className="bg-[#F0F3F4] rounded-full w-full px-2 py-2.5 text-sm outline-none text-black" placeholder="Send a message" />
                <i className="ri-send-plane-2-line text-[#ABAFB0] cursor-pointer ri-xl"></i>
            </div>
        </div>
    </aside>
  );
};

export default Chatbox;
