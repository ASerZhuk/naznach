'use client'

import useTelegramUserProfile from '@/app/hooks/useTelegramUserProfile'
import { Avatar, Image, Modal, Input, DatePicker } from 'antd'
import locale from 'antd/es/date-picker/locale/ru_RU'
import dayjs, { Dayjs } from 'dayjs'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import {
	MdOutlineDateRange,
	MdOutlineAccessTime,
	MdPerson,
	MdPhone,
	MdOutlineCancel,
} from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './calendar.css'

interface MySpecialBookingProps {
	appointment:
		| {
				id: number
				clientId: string
				firstName: string
				lastName: string
				specialistId: string
				date: string
				time: string
				phone: string
				specialistName: string | null
				specialistLastName: string | null
				specialistAddress: string | null
				specialistPrice: string | null
				specialistPhone: string | null
				specialistCategory: string | null
		  }[]
		| null
}

const MySpecialBooking: React.FC<MySpecialBookingProps> = ({ appointment }) => {
	const router = useRouter()
	const { telegram_user, userPhoto } = useTelegramUserProfile()
	const [clientAppointments, setClientAppointments] = useState(
		appointment || []
	)
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [cancelReason, setCancelReason] = useState('')
	const [selectedAppointmentId, setSelectedAppointmentId] = useState<
		number | null
	>(null)
	const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null)
	const [filteredAppointments, setFilteredAppointments] =
		useState(clientAppointments)

	useEffect(() => {
		const tg = window.Telegram.WebApp
		tg.ready()
		tg.BackButton.show()
		tg.BackButton.onClick(() => router.back())
		tg.MainButton.hide()

		if (appointment && appointment.length > 0) {
			setClientAppointments([...appointment].reverse())
			setFilteredAppointments([...appointment].reverse())
		}
	}, [appointment])

	useEffect(() => {
		if (selectedDate) {
			const filtered = clientAppointments.filter(app =>
				dayjs(app.date, 'DD.MM.YYYY').isSame(dayjs(selectedDate), 'day')
			)
			setFilteredAppointments(filtered)
		} else {
			setFilteredAppointments(clientAppointments)
		}
	}, [selectedDate, clientAppointments])

	const handleCancel = async () => {
		if (!cancelReason.trim()) {
			toast.error('Пожалуйста, укажите причину отмены')
			return
		}

		if (selectedAppointmentId !== null) {
			try {
				const response = await fetch(
					`/api/appointments?id=${selectedAppointmentId}`,
					{
						method: 'DELETE',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({ reason: cancelReason }),
					}
				)

				if (response.ok) {
					setClientAppointments(prevAppointments =>
						prevAppointments.filter(app => app.id !== selectedAppointmentId)
					)
					toast.success('Запись успешно отменена')
					setIsModalVisible(false) // Закрываем модальное окно после успешного удаления
				} else {
					toast.error('Не удалось отменить запись')
				}
			} catch (error) {
				console.error('Ошибка при отмене записи:', error)
				toast.error('Произошла ошибка при отмене записи')
			}
		}
	}

	const openCancelModal = (appointmentId: number) => {
		setSelectedAppointmentId(appointmentId)
		setCancelReason('') // Сбрасываем причину при каждом новом открытии модального окна
		setIsModalVisible(true)
	}

	return (
		<>
			<ToastContainer />
			<Modal
				title='Причина отмены'
				visible={isModalVisible}
				onOk={handleCancel}
				onCancel={() => setIsModalVisible(false)}
				okText='Подтвердить'
				cancelText='Отмена'
			>
				<Input
					value={cancelReason}
					onChange={e => setCancelReason(e.target.value)}
					placeholder='Введите причину отмены'
				/>
			</Modal>

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
				<div className='border-b pb-4'>
					<h2 className='text-xl font-normal mb-2'>Запись ко мне</h2>
					<span className='text-sm'>
						Актуальные и прошедшие записи клиентов
					</span>
					<div className='mt-2'>
						<DatePicker
							locale={locale}
							onChange={date => setSelectedDate(date)}
							placeholder='Выберите дату'
							format={'DD.MM.YYYY'}
							style={{ width: '100%' }}
						/>
					</div>
				</div>

				<div>
					{filteredAppointments && filteredAppointments.length > 0 ? (
						filteredAppointments.map(app => (
							<div key={app.id} className='mt-4 p-4 border-b'>
								<div className='mb-2'>
									<div className='flex items-center mb-1'>
										<MdOutlineDateRange
											size={24}
											className='bg-blue-500 p-1 rounded-lg mr-2'
											color='white'
										/>
										<div className='mr-2'>Дата:</div>
										<span className='font-semibold'>{app.date}</span>
									</div>
									<div className='flex items-center mb-1'>
										<MdOutlineAccessTime
											size={24}
											className='bg-red-500 p-1 rounded-lg mr-2'
											color='white'
										/>
										<div className='mr-2'>Время:</div>
										<span className='font-semibold'>{app.time}</span>
									</div>
								</div>

								<div>
									<div className='flex items-center mb-1'>
										<MdPerson
											size={24}
											className='bg-yellow-500 p-1 rounded-lg mr-2'
											color='white'
										/>
										<div className='mr-2'>Клиент:</div>
										<span className='font-semibold'>
											{app.firstName} {app.lastName}
										</span>
									</div>
									<div className='flex items-center mb-1'>
										<MdPhone
											size={24}
											className='bg-orange-500 p-1 rounded-lg mr-2'
											color='white'
										/>
										<div className='mr-2'>Телефон:</div>
										<span className='font-semibold'>{app.phone}</span>
									</div>
								</div>

								<div className='flex justify-center'>
									<div className='text-center pt-2 mt-2'>
										<button
											onClick={() => router.push(`/perezapis/${app.id}`)}
											className='bg-green-500 rounded-full px-5 py-3 mt-4 text-white text-sm'
										>
											<div className='flex items-center'>
												<FaRegEdit className='mr-2' />
												Перезаписать
											</div>
										</button>
									</div>
									<div className='text-center pt-2 mt-2 ml-4'>
										<button
											onClick={() => openCancelModal(app.id)}
											className='bg-red-500 rounded-full px-9 py-3 mt-4 text-white text-sm'
										>
											<div className='flex items-center'>
												<MdOutlineCancel className='mr-2' />
												Отменить
											</div>
										</button>
									</div>
								</div>
							</div>
						))
					) : (
						<p className='text-center text-sm'>Записей нет</p>
					)}
				</div>
			</div>
		</>
	)
}

export default MySpecialBooking
