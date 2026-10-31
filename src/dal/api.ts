type TrackAttachment = { 
    id: string
    addedAt: string
    updatedAt: string
    version: number
    url: string
}

type TrackListItemAttributes = {
    title: string
    addedAt: string
    likesCount: number
    attachments: Array<TrackAttachment>
}

export type TrackListItemResource = {
    id: string
    type: string
    attributes: TrackListItemAttributes
}

export const getTracks = () => {
    const promise: Promise<{data : Array<TrackListItemResource>}> = fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks",{
        headers: {
            'api-key': import.meta.env.VITE_API_KEY
        }
    }).then((res)=> res.json())
    return promise
}

type ArtistRef = {
    id: string
    name: string
}

type TrackDetailsAttributes = {
    title: string
    lyrics: string
    releaseDate: string
    addedAt: string
    updatedAt: string
    duration: number
    likesCount: number
    artists: Array<ArtistRef>
}

export type TrackDetailsResource = {
    id: string
    type: string
    attributes: TrackDetailsAttributes
}

export const getTrackDetails = (selectedTrackId: string) => {
    const promise: Promise<{data: TrackDetailsResource}> = fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + selectedTrackId,{
        headers: {
            'api-key' : import.meta.env.VITE_API_KEY
        }
    }).then((res)=> res.json())
    return promise
}