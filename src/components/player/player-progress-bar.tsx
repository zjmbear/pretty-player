import { useState } from 'react'
import { Slider } from '../ui/slider'

type PlayerProgressBarProps = {
	duration: number
	currentTime: number
	onSeek?: (time: number) => void
}

const PlayerProgressBar = ({
	duration,
	currentTime,
	onSeek,
}: PlayerProgressBarProps) => {
	const [seekValue, setSeekValue] = useState(currentTime)

	const handleSeek = (value: number[]) => {
		const newValue = value[0]

		setSeekValue(newValue)

		if (onSeek) {
			onSeek(newValue)
		}
	}

	return (
		<div className="flex h-2.5 w-full flex-row items-center rounded-lg bg-white/25">
			<Slider
				min={0}
				max={duration}
				step={0.1}
				defaultValue={[currentTime]}
				value={[seekValue]}
				onValueChange={handleSeek}
				orientation="horizontal"
			/>
		</div>
	)
}

export { PlayerProgressBar }
