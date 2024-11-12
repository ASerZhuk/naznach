import Container from '@/app/components/Container'
import React from 'react'

import { getAppointmentByClientId } from '@/app/actions/getAppointmentByClientId'
import MyAppointmentlist from './client'

interface MyListProps {
	params: {
		telegramId: string
	}
}

export default async function MyList({ params }: MyListProps) {
	const appointment = await getAppointmentByClientId(params.telegramId)

	return (
		<Container>
			<MyAppointmentlist appointment={appointment} />
		</Container>
	)
}
