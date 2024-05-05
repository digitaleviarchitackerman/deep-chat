import { CountButton } from "~features/count-button"
import DeepChatComponent from "~features/deep-chat-component"
import CurrentTabInfo from "~features/get-tab-info"

import "~style.css"

function IndexPopup() {
  return (
    <div className="plasmo-flex plasmo-items-center">
      <DeepChatComponent />
      <CurrentTabInfo />
    </div>
  )
}

export default IndexPopup
