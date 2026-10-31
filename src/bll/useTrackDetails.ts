import { useEffect, useState } from "react"
// import { getFakeTrackDetails } from "../dal/api-fake"
import { getTrackDetails, type TrackDetailsResource } from "../dal/api"

export function useTrackDetails(selectedTrackId: string | null) {
    const [trackDetails, setTreackDetails] = useState<TrackDetailsResource | null>(null)
    
        useEffect(()=>{
    
            if(selectedTrackId === null){
                setTreackDetails(null)
                return
            }
    
            getTrackDetails(selectedTrackId).then(json => setTreackDetails(json.data))
            // getFakeTrackDetails().then(json => setTreackDetails(json.data))
            
        },[selectedTrackId])

    return {trackDetails,}
}