import DeepChatComponent from "~features/deep-chat-component"
import CurrentTabInfo from "~features/get-tab-info"

function IndexSidePanel() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 10,
        alignItems: "center"
      }}>
      <DeepChatComponent />
      <CurrentTabInfo />
    </div>
  )
}

export default IndexSidePanel
