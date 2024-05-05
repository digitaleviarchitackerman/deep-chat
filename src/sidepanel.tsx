import { useState } from "react"

import DeepChatComponent from "~features/deep-chat-component"
import CurrentTabInfo from "~features/get-tab-info"

function IndexSidePanel() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 5,
        alignItems: "center"
      }}>
      <DeepChatComponent />
      <CurrentTabInfo />
    </div>
  )
}

export default IndexSidePanel
