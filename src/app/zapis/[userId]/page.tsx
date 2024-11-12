import React from 'react'
import Zapis from './client'
import { getSpecialistByUseId } from '@/app/actions/getSpecialistByUserId'
import { getGrafikById } from '@/app/actions/getGrafikById'
import Container from '@/app/components/Container'

interface ZapisPageProps {
	params: {
		userId: string
	}
}

const page = async ({ params }: ZapisPageProps) => {
	const user = await getSpecialistByUseId(params.userId)
	const grafik = await getGrafikById(params.userId)
	if (!user) {
		return <div>Пользователь не найден</div>
	}

	return (
		<Container>
			<Zapis user={user} garfik={grafik ?? []} />
		</Container>
	)
}

export default page
