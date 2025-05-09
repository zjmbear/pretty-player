import { TrackDetails } from '@/components/track-details'
import { Player } from '../components/player'
import { StreamingPlayers } from '@/components/streaming-players'

function App() {
	return (
		<main className="mx-auto mt-8 flex min-h-screen max-w-6xl flex-col items-center gap-2">
			<Player />
			<div className='flex w-[512px] items-center gap-2'>
				<TrackDetails />
				<StreamingPlayers />
			</div>
		</main>
	)
}

export { App }
