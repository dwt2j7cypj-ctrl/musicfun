import { useEffect, useState } from "react"
import { getTracks, type TrackListItemResource } from "../dal/api"
// import { getFakeTracks } from "../dal/api-fake"

export function useTracks() {

    const [tracks, setTracks] = useState<Array<TrackListItemResource>|null>(null)
    
    useEffect(() => {
        getTracks().then((json)=>{ setTracks(json.data)})
        // getFakeTracks().then((json)=>{ setTracks(json.data)})
    }, [])

    return {
        tracks,
    }
}