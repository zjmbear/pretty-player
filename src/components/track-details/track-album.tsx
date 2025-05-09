import type { Album } from '@/@types/track.types'

type TrackAlbumProps = {
	album: Omit<Album, 'id'>
}

const TrackAlbum = ({ album }: TrackAlbumProps) => {
	return (
		<div className="flex h-full w-full flex-col justify-between rounded-2xl p-4 ring ring-neutral-200">
			<div className="flex flex-col gap-y-2">
				<span className="font-medium text-base text-neutral-900">Album</span>
				<p className="text-base text-neutral-900">{album.name}</p>
			</div>

			<img
				src={album.coverUrl}
				alt={album.name}
				className="size-11 select-none rounded-lg bg-cover"
			/>
		</div>
	)
}

export { TrackAlbum }
