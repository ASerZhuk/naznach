'use client'

import useTelegramUserProfile from '@/app/hooks/useTelegramUserProfile'
import { Avatar, Button, Image, Spin } from 'antd'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { MdArrowForwardIos } from 'react-icons/md'

// Интерфейс для данных специалиста
interface Specialist {
	id: string
	firstName: string
	lastName: string
	category: string
	photoUrl?: string // Добавляем поле для фото
}

interface MySpecialistProps {
	appointment:
		| {
				id: number
				specialistId: string
		  }[]
		| null
}

const MySpecialist: React.FC<MySpecialistProps> = ({ appointment }) => {
	const [specialists, setSpecialists] = useState<Specialist[]>([])
	const [specialistIds, setSpecialistIds] = useState<string[]>([]) // Состояние для хранения specialistId
	const router = useRouter()
	const { telegram_user, userPhoto, loading, error } = useTelegramUserProfile()

	useEffect(() => {
		const tg = window.Telegram.WebApp
		tg.ready()
		tg.BackButton.show()
		tg.BackButton.onClick(() => router.push('/'))
		tg.MainButton.hide()

		if (appointment) {
			const fetchSpecialists = async () => {
				const uniqueSpecialistIds = Array.from(
					new Set(appointment.map(app => app.specialistId))
				)

				setSpecialistIds(uniqueSpecialistIds) // Сохраняем specialistId в состоянии

				// Загружаем данные о специалистах по их ID
				const fetchedSpecialists = await Promise.all(
					uniqueSpecialistIds.map(async id => {
						const res = await fetch('/api/getSpecialist', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({ specialistId: id }),
						})

						const specialistData = await res.json()

						// Получаем фото профиля через Telegram API
						const botToken = '6874087551:AAHHCPMYy9JXgHVBavUdce_YjoXWgd0Fuew' // Ваш токен бота

						try {
							const profilePhotoResponse = await fetch(
								`https://api.telegram.org/bot${botToken}/getUserProfilePhotos?user_id=${id}`
							)

							if (profilePhotoResponse.ok) {
								const profilePhotoData = await profilePhotoResponse.json()

								if (profilePhotoData?.result?.photos?.length > 0) {
									const fileId = profilePhotoData.result.photos[0][0].file_id

									// Получаем путь к файлу по file_id
									const fileResponse = await fetch(
										`https://api.telegram.org/bot${botToken}/getFile?file_id=${fileId}`
									)

									if (fileResponse.ok) {
										const fileData = await fileResponse.json()

										if (fileData?.result?.file_path) {
											// Устанавливаем URL фотографии специалиста
											specialistData.photoUrl = `https://api.telegram.org/file/bot${botToken}/${fileData.result.file_path}`
										}
									}
								}
							}
						} catch (error) {
							console.error('Ошибка получения фото профиля:', error)
							specialistData.photoUrl = '/placeholder-image.jpg' // Устанавливаем заглушку
						}

						return specialistData
					})
				)

				setSpecialists(fetchedSpecialists)
			}

			fetchSpecialists()
		}
	}, [appointment])

	return (
		<>
			<div className='bg-white shadow-md rounded-lg flex items-center justify-between mb-4'>
				<div className='flex items-center'>
					<div className='p-2'>
						<Avatar src={userPhoto} size={48} />
					</div>
					<div className='pl-2 font-medium'>{telegram_user?.first_name}</div>
				</div>
				<div className='pr-2'>
					<Image width={150} src='/logo.svg' />
				</div>
			</div>
			<div className='max-w-md mx-auto bg-white shadow-md rounded-lg p-6'>
				<div className=' border-b pb-4'>
					<h2 className='text-xl font-normal pb-2'>Мои специалисты</h2>
					<span className='text-sm '>
						Список специалистов для повторной записи
					</span>
				</div>

				<div>
					{specialists.length > 0 && appointment ? (
						specialists.map((specialist, index) => (
							<div
								key={specialistIds[index]}
								className=' mt-4'
								onClick={() =>
									router.push(`/profile_zapis/${specialistIds[index]}`)
								}
							>
								<div className='flex items-center border-b p-2 justify-between'>
									<div className='flex flex-row space-x-4'>
										<Avatar
											src={specialist.photoUrl || '/placeholder-image.jpg'}
											size={84}
										/>
										<div className='flex flex-col justify-center'>
											<div className='text-md font-semibold'>
												{specialist.firstName} {specialist.lastName}
											</div>
											<div className='text-sm text-red-500'>
												{specialist.category}
											</div>
										</div>
									</div>

									<div>
										<MdArrowForwardIos />
									</div>
								</div>
							</div>
						))
					) : (
						<p className='text-center'>Записей нет</p>
					)}
				</div>
			</div>
		</>
	)
}

export default MySpecialist
