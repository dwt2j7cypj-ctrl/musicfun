
import { useTracks } from "../bll/useTracks"
import TrackItem from "./TrackItem"

import style from './TracksList.module.css'

type Props = {
    onTrackSelect: ( trackId:string | null) => void
    selectedTrackId: string | null
}

function TracksList({onTrackSelect, selectedTrackId}: Props) {

    const { tracks } = useTracks()

    

    if (tracks === null){
        return(
            <span style={{color: "white"}}>Loading...</span>
        )
    }

    const handleReset = () => {
        onTrackSelect(null)
    }

    const handleClick = (id:string) => {
        onTrackSelect(id)
    }

    return(
        <div className={style.list_container}>

            <button onClick={() => handleReset()}>Reset</button>
        <ul className={style.list}>
            {tracks.map((track) => {
                return (
                    <TrackItem 
                    isSelected = {selectedTrackId === track.id}
                    handleClick = {handleClick}
                    key = {track.id} 
                    trackId={track.id} 
                    title={track.attributes.title} 
                    url={track.attributes.attachments[0].url}/>
                )
            })}
            
        </ul>
        </div>
    )
}

export default TracksList