'use client'

import useTelegramUserProfile from '@/app/hooks/useTelegramUserProfile'
import { Avatar, Image, Input, Modal } from 'antd'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import {
	MdOutlineDateRange,
	MdOutlineAccessTime,
	MdOutlineAttachMoney,
	MdPerson,
	MdPhone,
	MdLocationOn,
	MdCategory,
	MdOutlineCancel,
} from 'react-icons/md'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface MyAppointmentlistProps {
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

const MyAppointmentlist: React.FC<MyAppointmentlistProps> = ({
	appointment,
}) => {
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

	useEffect(() => {
		const tg = window.Telegram.WebApp
		tg.ready()
		tg.BackButton.show()
		tg.BackButton.onClick(() => router.push('/'))
		tg.MainButton.hide()

		// Выполнение на клиенте: переворачиваем массив
		if (appointment && appointment.length > 0) {
			setClientAppointments([...appointment].reverse()) // Reverse appointments array
		}
	}, [appointment])

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
				<div className=' border-b pb-4'>
					<h2 className='text-xl pb-2 font-normal'>Мои записи</h2>
					<span className='text-sm'>Актуальные и прошедшие записи</span>
				</div>

				<div>
					{clientAppointments && clientAppointments.length > 0 ? (
						clientAppointments.map(app => (
							<div key={app.id} className='mt-4 p-4 border-b'>
								{/* Информация о записи (время, дата, цена, категория) */}
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
									{app.specialistPrice && (
										<div className='flex items-center mb-1'>
											<MdOutlineAttachMoney
												size={24}
												className='bg-green-500 p-1 rounded-lg mr-2'
												color='white'
											/>
											<div className='mr-2'>Цена:</div>
											<span className='font-semibold'>
												{app.specialistPrice} ₽
											</span>
										</div>
									)}
									{app.specialistCategory && (
										<div className='flex items-center'>
											<MdCategory
												size={24}
												className='bg-orange-500 p-1 rounded-lg mr-2'
												color='white'
											/>
											<div className='mr-2'>Категория:</div>
											<span className='font-semibold'>
												{app.specialistCategory}
											</span>
										</div>
									)}
								</div>

								{/* Информация о мастере */}
								<div className=''>
									<div className='flex items-center mb-1'>
										<MdPerson
											size={24}
											className='bg-blue-500 p-1 rounded-lg mr-2'
											color='white'
										/>
										<div className='mr-2'>Мастер:</div>
										<span className='font-semibold'>
											{app.specialistName} {app.specialistLastName}
										</span>
									</div>
									<div className='flex items-center mb-1'>
										<MdPhone
											size={24}
											className='bg-red-500 p-1 rounded-lg mr-2'
											color='white'
										/>
										<div className='mr-2'>Телефон:</div>
										<span className='font-semibold'>{app.specialistPhone}</span>
									</div>
									{app.specialistAddress && (
										<div className='flex items-center mb-1'>
											<MdLocationOn
												size={24}
												className='bg-orange-500 p-1 rounded-lg mr-2'
												color='white'
											/>
											<div className='mr-2'>Адрес:</div>
											<span className='font-semibold'>
												{app.specialistAddress}
											</span>
										</div>
									)}
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
						<p className='text-center'>Записей нет</p>
					)}
				</div>
			</div>
		</>
	)
}

export default MyAppointmentlist
