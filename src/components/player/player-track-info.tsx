import type { ComponentProps } from 'react'
import { cn } from '../../utils/cn'
import type { Track } from '../../@types/track.types'

type PlayerTrackInfoProps = ComponentProps<'div'> & {
	track: Pick<Track, 'name' | 'url' | 'artist'>
}

const PlayerTrackInfo = ({
	track,
	className = undefined,
	...props
}: PlayerTrackInfoProps) => {
	return (
		<div className={cn('flex select-none flex-col', className)} {...props}>
			<a
				href={track.artist.url}
				target="_blank"
				rel="noopener noreferrer"
				className="group"
			>
				<h1 className="font-medium text-[20px] text-white group-hover:underline">
					{track.name}
				</h1>
			</a>
			<a
				href={track.url}
				target="_blank"
				rel="noopener noreferrer"
				className="group"
			>
				<p className="text-neutral-200 text-sm group-hover:underline">
					{track.artist.name}
				</p>
			</a>
		</div>
	)
}

export { PlayerTrackInfo }
