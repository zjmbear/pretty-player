import type { Track } from '../../@types/track.types'

type PlayerCoverProps = {
	track: Pick<Track, 'name' | 'coverArtUrl' | 'album'> | undefined
}

const PlayerCover = ({ track }: PlayerCoverProps) => {
	return (
		<div className="relative">
			<div className="absolute h-full w-full bg-gradient-to-l from-[#8f8e93]" />
			<img
				src={track?.album.coverUrl ?? track?.coverArtUrl}
				alt={track?.album.name ?? track?.name}
				className="h-full w-[207px] bg-cover"
			/>
		</div>
	)
}

export { PlayerCover }
