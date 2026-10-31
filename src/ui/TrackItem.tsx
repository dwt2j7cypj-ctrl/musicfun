import clsx from 'clsx'
import style from './TrackItem.module.css'

type Props = {
    isSelected: boolean
    handleClick: (trackId: string)=>void
    trackId: string
    url: string
    title: string
}

function TrackItem({isSelected, handleClick, trackId, url, title}:Props) {

    const trackClassName = clsx({
        [style.track_item]: true,
        [style.selected]: isSelected,
    })

    return(
        <li className={trackClassName} onClick={() => handleClick(trackId)}
        id={trackId}>
            <div style={{
                width: 300,
                overflow: 'hidden'
            }}>
                <span>{title}</span>
            </div>
            <audio src={url} controls></audio>
        </li>
    )
}

export default TrackItem
