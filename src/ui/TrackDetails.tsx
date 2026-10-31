import { useTrackDetails } from "../bll/useTrackDetails"
import style from "./TrackDetails.module.css"

type Props = {
    selectedTrackId: string | null
}

function TrackDetails({selectedTrackId}: Props) {

    const {trackDetails} = useTrackDetails(selectedTrackId)
    
    return(
        <div className={style.details}>
            <h2>Track details</h2>
            {!selectedTrackId && !trackDetails && "Track is not selected"}
            {((selectedTrackId && !trackDetails) || (trackDetails && selectedTrackId != trackDetails.id)) && "Loading..."}
            {trackDetails && (
                <div className={style.container}>
                    <h3>{trackDetails.attributes.title}</h3>
                    <div className={style.artist}>
                        <h4>Artist</h4>
                        <p>
                            {(trackDetails.attributes.artists.length && trackDetails.attributes.artists[0].name) || "Unknown"}
                        </p>
                        <div className={style.lyrics}>
                            <h4>Lyrics</h4>
                            <p>
                                {trackDetails.attributes.lyrics || "No lyrics"}
                            </p>
                        </div>
                    </div>
                    
                </div>
            )}
        </div>
    )
}

export default TrackDetails