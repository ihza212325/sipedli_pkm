import { useEffect, useState } from "react";
import axios from "axios";
const ChatGpt = () => {
  const [messages, setMessages] = useState([]);
  const [saveMessage, setsaveMessage] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [saveResponseChat, setsaveResponseChat] = useState([]);

  const gptfunc = async (data) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer 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",
    };
    const datas = {
      inputs: "Q: " + data + " ?",
      parameters: {
        temperature: 1,
        min_length: 25,
        max_new_tokens: 50,
        return_full_text: true,
        do_sample: false,
        seed: 10,
        early_stopping: false,
        length_penalty: 0.0,
      },
      options: {
        use_cache: false,
        wait_for_model: false,
      },
    };
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/bigscience/bloom",
      datas,
      { headers }
    );
    console.log(response, "dsadsa");
    // setresponChat(response.data[0].generated_text);
    setsaveResponseChat([...saveResponseChat, response.data[0].generated_text]);
  };

  return (
    <>
      <div class="w-full h-screen bg-gray-50 flex flex-col" x-data="chat">
        <div class="bg-blue-1001 flex justify-center p-4">
          <span class="text-white text-bold text-5xl font-bold">
            Tanya Apa Aja
          </span>
        </div>

        <div class="w-full max-w-screen-lg flex-1 m-auto p-8 my-4 pb-20">
          <div class="flex flex-col">
            {saveMessage.map((e, index) => {
              return (
                <>
                  <div x-for="message in messages">
                    <div class="message rounded-lg py-2 px-6 mb-4">
                      <span x-text="message.body"></span>
                      <div x-if="message.beingTyped">
                        {saveMessage[index]}
                        <span class="w-2.5 bg-gray-600 h-4 inline-block -mb-0.5 align-baseline blink"></span>
                      </div>
                    </div>
                  </div>
                  {saveResponseChat[index] && (
                    <div x-if="showTyping">
                      <div class="message assistant rounded-lg py-2.5 px-6 mb-4 bg-blue-100 border-blue-100 self-start">
                        <div class="type-indicator">
                          {saveResponseChat && (
                            <>
                              {saveResponseChat[index].slice(
                                saveResponseChat[index].indexOf("?") + 1
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
        <div class="fixed inset-x-0 bottom-0 bg-blue-100">
          <form class="max-w-screen-lg m-auto w-full p-4 flex space-x-4 justify-center items-center">
            <input
              id="message"
              type="text"
              value={messages}
              onChange={(e) => {
                setMessages(e.target.value);
              }}
              autocomplete="off"
              class="border rounded-md p-2 flex-1 border-blue-300 focus:ring-0 ring-blue-800"
              placeholder="Your message..."
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                gptfunc(messages);
                setsaveMessage([...saveMessage, messages]);
                setMessages("");
              }}
              class="bg-blue-1001 text-white px-4 py-2 rounded-md"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatGpt;
