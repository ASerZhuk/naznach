'use client'

import Container from '@/app/components/Container'
import { Avatar, Image, Modal } from 'antd'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import {
	FaCalendarAlt,
	FaChevronDown,
	FaChevronUp,
	FaPhone,
	FaRegEdit,
} from 'react-icons/fa'
import { GiPositionMarker } from 'react-icons/gi'
import { GrMoney } from 'react-icons/gr'
import {
	MdArrowForwardIos,
	MdKeyboardArrowDown,
	MdKeyboardArrowUp,
	MdOutlinePhoneIphone,
} from 'react-icons/md'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ClientProps {
	user: {
		lastName: string | null
		firstName: string | null
		userId: string
		username: string | null
		price: string | null
		phone: string | null
		category: string | null
		address: string | null
		description: string | null
		status: string | null
	}
	grafik:
		| {
				specialistId: string | undefined
				startTime: string
				endTime: string
				interval: number
				dayOfWeek: number
				time: string[]
				id?: number
		  }[]
		| null
}

const Client = ({ user, grafik }: ClientProps) => {
	const [userPhoto, setUserPhoto] = useState<string | undefined>()
	const [status, setStatus] = useState(user.status)

	const [expanded, setExpanded] = useState(false)

	const router = useRouter()

	useEffect(() => {
		const tg = window.Telegram.WebApp
		tg.ready()
		tg.BackButton.show()
		tg.BackButton.onClick(() => router.push(`/`))

		tg.MainButton.show()
		tg.MainButton.setText('Изменить профиль')
		tg.MainButton.onClick(() => router.push(`/formSpecialist/${user.userId}`))

		if (user) {
			const botToken = '6874087551:AAHHCPMYy9JXgHVBavUdce_YjoXWgd0Fuew' // Замените на токен вашего бота

			fetch(
				`https://api.telegram.org/bot${botToken}/getUserProfilePhotos?user_id=${user.userId}`
			)
				.then(response => {
					if (!response.ok) {
						throw new Error('Ошибка получения данных от Telegram API')
					}
					return response.json()
				})
				.then(data => {
					if (data?.result?.photos?.length > 0) {
						const file = data.result.photos[0][0].file_id
						return fetch(
							`https://api.telegram.org/bot${botToken}/getFile?file_id=${file}`
						)
					} else {
						throw new Error('Фотографии профиля не найдены')
					}
				})
				.then(response => {
					if (!response?.ok) {
						throw new Error('Ошибка получения файла с Telegram API')
					}
					return response.json()
				})
				.then(fileData => {
					if (fileData?.result?.file_path) {
						setUserPhoto(
							`https://api.telegram.org/file/bot${botToken}/${fileData.result.file_path}`
						)
					} else {
						throw new Error('Путь к файлу не найден')
					}
				})
				.catch(error => {
					console.error('Ошибка получения фото профиля:', error)
					setUserPhoto('/placeholder-image.jpg') // Путь к изображению-заглушке
				})
		}
	}, [user])

	// Функция для преобразования числового дня недели в текстовый
	const dayOfWeekNames = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']

	const toggleExpanded = () => {
		setExpanded(!expanded)
	}

	const info = () => {
		Modal.info({
			title: 'Введите статус',
			content: (
				<div>
					<form id='statusForm'>
						<input
							type='text'
							id='status'
							className='border-2 border-gray-300 p-2 rounded-lg w-full'
							placeholder='Отпуск с 1 по 10 января'
						/>
					</form>
				</div>
			),
			onOk: async () => {
				const status = document.getElementById('status') as HTMLInputElement
				const newStatus = status?.value

				if (newStatus) {
					try {
						const response = await fetch('/api/updateStatus', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({ userId: user.userId, status: newStatus }),
						})

						if (response.ok) {
							setStatus(newStatus)
							toast.success('Статус успешно обновлен')
						} else {
							toast.error('Статус не обновлен')
						}
					} catch (error) {
						console.error('Ошибка при отправке запроса:', error)
					}
				}
			},
		})
	}

	return (
		<Container>
			<div className='bg-white shadow-md rounded-lg flex items-center justify-between mb-4'>
				<div className='flex items-center'>
					<div className='p-2'>
						<Avatar src={userPhoto || '/placeholder-image.jpg'} size={48} />
					</div>
					<div className='pl-2 font-medium'>{user?.firstName}</div>
				</div>
				<div className='pr-2'>
					<Image width={150} src='/logo.svg' alt='Логотип' />
				</div>
			</div>

			<ToastContainer />

			<div className='bg-blue-200 mt-4 p-2 border-l-4 border-blue-500  flex flex-row justify-between'>
				<span className='text-sm text-blue-500'>{status}</span>
				<FaRegEdit
					size={24}
					className='bg-blue-500 rounded-lg p-1 mr-2'
					color='white'
					onClick={info}
				/>
			</div>

			<div className='bg-white shadow-md rounded-lg flex flex-col mt-4'>
				<div className='flex flex-row items-center'>
					<div className='p-2'>
						<Avatar
							className='border-2 border-orange-500'
							src={userPhoto}
							size={100}
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<div className='text-xl font-semibold'>
							{user.firstName} {user.lastName}
						</div>
						<div className='flex items-center'>
							<MdOutlinePhoneIphone
								size={24}
								className='bg-cyan-500 rounded-lg p-1 mr-2'
								color='white'
							/>
							<div className='text-cyan-500'>{user.phone}</div>
						</div>

						<div className='text-sm font-light mb-2'>{user.address}</div>
					</div>
				</div>
				<div className='pl-2 font-semibold'>{user.category}</div>
				<div className='text-wrap mt-4 pl-2'>
					{user.description?.split('\n').map((line, index) => (
						<p key={index}>{line}</p>
					))}
				</div>
				<div className=' mt-4 p-2 text-sm'>
					<div
						className='flex items-center justify-between cursor-pointer'
						onClick={toggleExpanded}
					>
						<div className='flex items-center'>
							<FaCalendarAlt
								size={32}
								className='bg-red-500 rounded-lg p-1'
								color='white'
							/>
							<span className='ml-2 font-semibold'>График работы</span>
						</div>
						{expanded ? (
							<MdKeyboardArrowUp size={24} />
						) : (
							<MdKeyboardArrowDown size={24} />
						)}
					</div>
					{expanded && grafik && grafik.length > 0 && (
						<div className='flex items-center text-right mt-2'>
							<ul className='list-none m-0 p-0'>
								{grafik.map((item, index) => (
									<li key={index}>
										{dayOfWeekNames[item.dayOfWeek]}: {item.startTime} -{' '}
										{item.endTime}
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
				<div className=' flex items-center justify-between mt-4 p-2 text-sm'>
					<div className='flex items-center'>
						<GrMoney
							size={32}
							className='bg-green-500 rounded-lg p-1'
							color='white'
						/>
						<span className='ml-2 font-semibold'>Стоимость</span>
					</div>
					<div>{user.price} руб.</div>
				</div>
			</div>
		</Container>
	)
}

export default Client
