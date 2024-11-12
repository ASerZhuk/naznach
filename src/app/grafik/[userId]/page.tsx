import Container from '@/app/components/Container'
import TimeSlotPicker from './client'

import { getSpecialistByUseId } from '@/app/actions/getSpecialistByUserId'
import { getGrafikById } from '@/app/actions/getGrafikById'

interface TimeSlotsProps {
	params: {
		userId: string
	}
}

export default async function TimeSlots({ params }: TimeSlotsProps) {
	const user = await getSpecialistByUseId(params.userId)
	const grafik = await getGrafikById(params.userId)

	return (
		<div>
			<Container>
				<TimeSlotPicker specialistId={user?.userId} grafik={grafik} />
			</Container>
		</div>
	)
}
