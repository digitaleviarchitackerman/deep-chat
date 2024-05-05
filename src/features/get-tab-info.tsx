import React, { useState } from "react"

const CurrentTabInfo = () => {
  const [tabInfo, setTabInfo] = useState({ title: "", url: "" })

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length === 0) return
    const { title, url } = tabs[0]
    setTabInfo({ title, url })
  })

  return (
    <div className="plasmo-flex plasmo-flex-row plasmo-items-center">
      <p>
        Current Tab Title: <b>{tabInfo.title}</b>
      </p>
      <p>
        Current Tab URL: <b>{tabInfo.url}</b>
      </p>
    </div>
  )
}

export default CurrentTabInfo
