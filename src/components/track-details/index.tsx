import { TrackReleased } from './track-released'
import type { Track } from '@/@types/track.types'
import { TrackAlbum } from './track-album'

const TrackDetails = () => {
	const fakeTrack: Track = {
		id: '1',
		name: 'Dark Nessecities',
		coverArtUrl: '',
		duration: 200,
		genre: 'Rock',
		releasedDate: new Date('2016-06-17'),
		url: 'https://www.youtube.com/channel/UCEuOwB9vSL1oPKGNdONB4ig',
		artist: {
			id: '1',
			name: 'Red Hot Chili Peppers',
			biography:
				'Red Hot Chili Peppers are an American rock band formed in Los Angeles in 1983. The group consists of lead vocalist Anthony Kiedis, bassist Flea, drummer Chad Smith, and guitarist John Frusciante.',
			coverUrl: '',
			genres: ['Rock', 'Alternative Rock', 'Funk Rock'],

			url: 'https://www.youtube.com/watch?v=Q0oIoR9mLwc',
		},
		album: {
			name: 'The Getaway',
			coverUrl:
				'https://upload.wikimedia.org/wikipedia/en/a/ae/Thegetawayalbum.jpg',
			id: '1',
		},
	}

	return (
		<div className="flex h-[152px] w-full items-center justify-between gap-x-2">
			<TrackReleased releasedDate={fakeTrack.releasedDate} />
			<TrackAlbum album={fakeTrack.album} />
		</div>
	)
}

export { TrackDetails }
