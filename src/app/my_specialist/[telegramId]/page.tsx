import Container from '@/app/components/Container'
import React from 'react'
import MySpecialist from './client'
import { getAppointmentByClientId } from '@/app/actions/getAppointmentByClientId'

interface MySpecialistListProps {
	params: {
		telegramId: string
	}
}

export default async function MySpecialistList({
	params,
}: MySpecialistListProps) {
	const appointment = await getAppointmentByClientId(params.telegramId)

	return (
		<Container>
			<MySpecialist appointment={appointment} />
		</Container>
	)
}
