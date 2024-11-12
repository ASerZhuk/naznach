'use client'

import Container from '@/app/components/Container'
import { BackButton, MainButton } from '@vkruglikov/react-telegram-web-app'
import { ru } from 'date-fns/locale'

import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './calendar.css'
import { addMonths, format } from 'date-fns'
import { GrMoney, GrUser } from 'react-icons/gr'
import { MdMoreTime, MdOutlinePhoneIphone } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CiCalendarDate } from 'react-icons/ci'
registerLocale('ru', ru as any)

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
	}
	garfik: {
		dayOfWeek: number
		time: string[] // Время интервалов в виде массива строк
	}[]
}

enum STEPS {
	DATE = 0,
	INFO = 1,
	CONF = 2,
}

const Zapis = ({ user, garfik }: ClientProps) => {
	const router = useRouter()
	const [step, setStep] = useState(STEPS.DATE)
	const [selectedDate, setSelectedDate] = useState<Date | null>(null)
	const [availableTimes, setAvailableTimes] = useState<string[]>([])
	const [selectedTime, setSelectedTime] = useState<string | null>(null)
	const [clientId, setClientId] = useState<number | undefined>()

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		phone: '',
	})

	const formatDate = (date: Date | null) => {
		if (!date) {
			return null // Если дата не выбрана, возвращаем null
		}
		return format(date, 'dd.MM.yyyy') // Форматируем дату в 'дд.мм.гггг'
	}
	const date = formatDate(selectedDate)

	const onBack = () => {
		router.back()
	}
	const onNext = () => {
		setStep(value => value + 1)
	}
	const onBackStep = () => {
		setStep(value => value - 1)
	}

	// Функция для проверки, является ли день рабочим
	const isDayAvailable = (date: Date) => {
		const dayOfWeek = date.getDay()
		return garfik.some(slot => slot.dayOfWeek === dayOfWeek)
	}

	// Обновление доступных временных интервалов на основе выбранной даты
	useEffect(() => {
		const tg = window.Telegram.WebApp
		tg.ready()

		const usr = tg.initDataUnsafe?.user
		setClientId(usr?.id)

		const fetchAppointments = async () => {
			if (selectedDate) {
				const dayOfWeek = selectedDate.getDay()
				const selectedDay = garfik.find(slot => slot.dayOfWeek === dayOfWeek)

				if (selectedDay) {
					try {
						const response = await fetch(
							`/api/appointments?specialistId=${user?.userId}&date=${date}`
						)

						if (response.ok) {
							const appointments = await response.json()

							// Проверяем, что данные - это массив
							if (Array.isArray(appointments)) {
								const occupiedTimes = appointments.map(
									(appointment: { time: string }) => appointment.time
								)

								// Отфильтровываем только свободные временные интервалы
								const freeTimes = selectedDay.time.filter(
									time => !occupiedTimes.includes(time)
								)

								setAvailableTimes(freeTimes)
							} else {
								console.error(
									'Ответ от API не является массивом:',
									appointments
								)
								setAvailableTimes([]) // Если формат неверен, сбрасываем доступные интервалы
							}
						} else {
							console.error('Ошибка при загрузке записей')
							setAvailableTimes([])
						}
					} catch (error) {
						console.error('Ошибка при загрузке записей:', error)
						setAvailableTimes([])
					}
				} else {
					setAvailableTimes([])
				}
			}
		}

		fetchAppointments()
	}, [selectedDate, garfik])

	const handleTimeSelect = (time: string) => {
		setSelectedTime(time)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const handleSubmit = async () => {
		try {
			const response = await fetch('/api/appointments', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					firstName: formData.firstName,
					lastName: formData.lastName,
					phone: formData.phone,
					specialistId: user.userId,
					clientId: clientId?.toString(),
					date: date, // Преобразуем дату в строку
					time: selectedTime,
					specialistName: user.firstName,
					specialistLastName: user.lastName,
					specialistPhone: user.phone,
					specialistCategory: user.category,
					specialistAddress: user.address,
					specialistPrice: user.price,
				}),
			})

			if (!response.ok) {
				throw new Error('Ошибка при создании записи')
			}

			const data = await response.json()
			console.log('Запись успешно создана:', data)
			toast.success('Запись прошла успешно')
			router.push('/')
		} catch (error) {
			console.error('Ошибка при создании записи:', error)
		}
	}

	let bodyContent

	if (step === STEPS.DATE) {
		bodyContent = (
			<>
				<BackButton onClick={onBack} />
				<MainButton text='Далее' onClick={onNext} />

				<div className='flex-col bg-white rounded-lg shadow-md p-6 text-xl flex justify-center'>
					<div className='border-b pb-4'>
						<h2 className='text-xl font-normal mb-2'>Выбери дату и время</h2>
						<span className='text-sm pb-2'>
							Выбери актуальную для тебя дату и время для записи на услугу
						</span>
					</div>

					<div className='mt-4 flex justify-center'>
						<DatePicker
							selected={selectedDate}
							onChange={date => setSelectedDate(date)}
							filterDate={isDayAvailable}
							minDate={new Date()}
							maxDate={addMonths(new Date(), 1)}
							locale='ru'
							inline
							className='datepicker-custom'
						/>
					</div>

					{selectedDate && (
						<div className='mt-4 p-6'>
							<div className='grid grid-cols-4 gap-4 place-items-center text-sm'>
								{availableTimes.length > 0 ? (
									availableTimes.map((time, index) => (
										<button
											key={index}
											onClick={() => handleTimeSelect(time)}
											className={`px-3 py-2 rounded-full ${
												selectedTime === time
													? 'bg-blue-500 text-white'
													: 'bg-gray-200 hover:bg-gray-300'
											}`}
										>
											{time}
										</button>
									))
								) : (
									<p>Нет доступного времени</p>
								)}
							</div>
						</div>
					)}
				</div>
			</>
		)
	}

	if (step === STEPS.INFO) {
		bodyContent = (
			<>
				<BackButton onClick={onBackStep} />
				<MainButton text='Далее' onClick={onNext} />
				<div className='max-w-md mx-auto bg-white shadow-md rounded-lg p-6'>
					<div className=' border-b pb-4 mb-4'>
						<h2 className='text-xl font-normal mb-2'>Информация</h2>
						<span className='text-sm'>Введи необходимые данные</span>
					</div>

					<form>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='firstName'
						>
							Имя
						</label>
						<input
							id='firstName'
							name='firstName'
							type='text'
							placeholder='Введите имя'
							value={formData.firstName}
							onChange={handleChange}
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6 text-sm'
						/>

						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='lastName'
						>
							Фамилия
						</label>
						<input
							id='lastName'
							name='lastName'
							type='text'
							placeholder='Введите фамилию'
							value={formData.lastName}
							onChange={handleChange}
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6 text-sm'
						/>

						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='phone'
						>
							Телефон
						</label>
						<input
							id='phone'
							name='phone'
							type='tel'
							placeholder='Введите телефон'
							value={formData.phone}
							onChange={handleChange}
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm'
						/>
					</form>
				</div>
			</>
		)
	}
	if (step === STEPS.CONF) {
		bodyContent = (
			<>
				<BackButton onClick={onBackStep} />
				<MainButton text='Записаться' onClick={handleSubmit} />
				<div className='flex flex-col bg-white rounded-lg shadow-md p-6 text-xl'>
					<ToastContainer />
					<div className=' border-b pb-4 mb-4'>
						<h2 className='text-xl font-normal mb-2'>Проверь данные</h2>
						<span className='text-sm pb-4'>
							Если данные введены верно записывайся на услугу
						</span>
					</div>

					<div className='border-b flex items-center justify-between mt-4 p-2 text-sm'>
						<div className='flex items-center'>
							<GrUser
								size={32}
								className='bg-green-500 rounded-lg p-1'
								color='white'
							/>
							<span className='ml-2 font-semibold'>Имя и Фамилия</span>
						</div>
						<div>
							{formData.firstName} {formData.lastName}
						</div>
					</div>
					<div className='border-b flex items-center justify-between mt-4 p-2 text-sm'>
						<div className='flex items-center'>
							<MdOutlinePhoneIphone
								size={32}
								className='bg-cyan-500 rounded-lg p-1'
								color='white'
							/>
							<span className='ml-2 font-semibold'>Номер телефона</span>
						</div>
						<div>{formData.phone}</div>
					</div>
					<div className='border-b flex items-center justify-between mt-4 p-2 text-sm'>
						<div className='flex items-center'>
							<CiCalendarDate
								size={32}
								className='bg-red-500 rounded-lg p-1'
								color='white'
							/>
							<span className='ml-2 font-semibold'>Дата записи</span>
						</div>
						<div>{date}</div>
					</div>
					<div className='border-b flex items-center justify-between mt-4 p-2 text-sm'>
						<div className='flex items-center'>
							<MdMoreTime
								size={32}
								className='bg-orange-500 rounded-lg p-1'
								color='white'
							/>
							<span className='ml-2 font-semibold'>Время записи</span>
						</div>
						<div>{selectedTime}</div>
					</div>
					<div className='border-b flex items-center justify-between mt-4 p-2 text-sm'>
						<div className='flex items-center'>
							<GrMoney
								size={32}
								className='bg-yellow-500 rounded-lg p-1'
								color='white'
							/>
							<span className='ml-2 font-semibold'>Стоимость</span>
						</div>
						<div>{user.price} руб.</div>
					</div>
				</div>
			</>
		)
	}

	return (
		<Container>
			<div>{bodyContent}</div>
		</Container>
	)
}

export default Zapis
