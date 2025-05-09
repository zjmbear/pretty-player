type TrackReleasedProps = {
	releasedDate: Date
}

const TrackReleased = ({ releasedDate }: TrackReleasedProps) => {
	const formattedReleasedDate = new Date(releasedDate).toLocaleDateString(
		'en-US',
		{
			year: 'numeric',
		}
	)

	return (
		<div className="flex h-full w-full flex-col justify-between rounded-2xl p-4 ring ring-neutral-200">
			<span className="font-medium text-base text-neutral-900">Released</span>
			<p className="text-[20px] text-neutral-900">{formattedReleasedDate}</p>
		</div>
	)
}

export { TrackReleased }
