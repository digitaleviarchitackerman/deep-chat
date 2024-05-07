import { DeepChat } from "deep-chat-react"

const DeepChatComponent = () => {
  const initialMessages = [
    { role: "user", text: "Hey, how are you today?" },
    { role: "ai", text: "I am doing very well!" }
  ]

  return (
    <div className="App">
      <h1>Deep Chat</h1>
      <DeepChat
        demo={true}
        style={{ borderRadius: "10px", width: "96vw", height: "calc(100vh - 270px)", paddingTop: "10px" }}
        textInput={{ placeholder: { text: "Welcome to the demo!" } }}
        initialMessages={initialMessages}
      />
    </div>
  )
}

export default DeepChatComponent
