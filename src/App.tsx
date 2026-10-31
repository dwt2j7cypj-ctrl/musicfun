import TrackDetails from "./ui/TrackDetails"
import TracksList from "./ui/TracksList"

import style from './App.module.css'
import { useState } from "react"

function App() {

  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)

  const onTrackSelect = (id: string | null) => {
    setSelectedTrackId(id)
  }

  return (
    <div className={style.container}>
      <TracksList onTrackSelect = {onTrackSelect} selectedTrackId = {selectedTrackId} />
      <TrackDetails selectedTrackId = {selectedTrackId} />
    </div>
  )
}

export default App
