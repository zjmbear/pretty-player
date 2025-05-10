import { TrackDetails } from '@/components/track-details'
import { Player } from '../components/player'
import { StreamingPlayers } from '@/components/streaming-players'
import { ArtistBanner } from '@/components/artist-banner'

function App() {
	const data = {
		artist: {
			id: '1',
			name: 'Red Hot Chili Peppers',
			biography:
				'Red Hot Chili Peppers are an American rock band formed in Los Angeles in 1983. The group consists of lead vocalist Anthony Kiedis, bassist Flea, drummer Chad Smith, and guitarist John Frusciante.',
			coverUrl:
				'https://yt3.googleusercontent.com/5g9AkymitjI_hQgiZAfUuQ4suzi_q1X5ec7er4xO8FnJlK--Skg3c3F6k3Pwqr-I2Z-8KXnXSg=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
			genres: ['Rock', 'Alternative Rock', 'Funk Rock'],

			url: 'https://www.youtube.com/watch?v=Q0oIoR9mLwc',
		},
	}

	return (
		<main className="mx-auto mt-8 flex min-h-screen max-w-6xl flex-col items-center gap-2">
			<Player />

			<div className="flex w-[512px] items-center gap-2">
				<TrackDetails />
				<StreamingPlayers />
			</div>

			<ArtistBanner artist={data.artist} />
		</main>
	)
}

export { App }
