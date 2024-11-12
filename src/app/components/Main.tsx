'use client'

import { Avatar, Image, Spin } from 'antd'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { FaBook, FaCalendarAlt, FaUsers } from 'react-icons/fa'
import { IoSettingsSharp } from 'react-icons/io5'
import { MdMenuBook } from 'react-icons/md'
import useTelegramUserProfile from '../hooks/useTelegramUserProfile'

interface MainProps {
	user: {
		id: number
		telegramId: number | undefined
		firstName: string | null
		lastName: string | null
		chatId: string | null
		username: string | null
		isMaster: boolean
		createdAt: Date
	} | null
}

const Main = ({ user }: MainProps) => {
	const { userPhoto, loading, error } = useTelegramUserProfile()
	const router = useRouter()

	useEffect(() => {
		const tg = window.Telegram.WebApp
		tg.ready()
		tg.MainButton.hide()
		tg.BackButton.hide()
	}, [])

	if (!user) {
		return (
			<div className='flex justify-center items-center h-screen'>
				<span className='text-lg font-medium'>
					<Spin size='large' />
				</span>
			</div>
		)
	}

	return (
		<>
			<div className='bg-white shadow-md rounded-lg flex items-center justify-between'>
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

			{/* Блок "Запись клиента" для мастеров */}
			{user?.isMaster && (
				<div className='bg-white shadow-md rounded-lg flex flex-col items-center justify-center mt-4 p-2 mx-4 text-sm'>
					<span className='font-semibold'>Запись клиента</span>
					<span className='pt-2'>Запишите клиента к себе на услугу</span>
					<button
						onClick={() => router.push(`/profile_zapis/${user?.telegramId}`)}
						className='bg-green-500 rounded-full px-12 py-3 mt-4 text-white text-sm'
					>
						Записать
					</button>
				</div>
			)}

			<div className='mt-4 mx-4 grid grid-cols-2 gap-4'>
				{/* Блок "Мой график" */}
				{user?.isMaster && (
					<Card
						onClick={() => router.push(`/grafik/${user?.telegramId}`)}
						icon={
							<FaCalendarAlt
								size={32}
								className='bg-orange-500 p-1 mb-2 rounded-lg'
								color='white'
							/>
						}
						label='Мой график'
					/>
				)}

				{/* Блок "Моя информация" */}
				{user?.isMaster && (
					<Card
						onClick={() => router.push(`/profile/${user?.telegramId}`)}
						icon={
							<IoSettingsSharp
								size={32}
								className='bg-yellow-500 p-1 mb-2 rounded-lg'
								color='white'
							/>
						}
						label='Моя информация'
					/>
				)}

				{/* Блок "Мои мастера" */}
				<Card
					onClick={() => router.push(`/my_specialist/${user?.telegramId}`)}
					icon={
						<FaUsers
							size={32}
							className='bg-red-500 p-1 mb-2 rounded-lg'
							color='white'
						/>
					}
					label='Мои мастера'
				/>

				{/* Блок "Мои записи" */}
				<Card
					onClick={() => router.push(`/my_list/${user?.telegramId}`)}
					icon={
						<FaBook
							size={32}
							className='bg-blue-500 p-1 mb-2 rounded-lg'
							color='white'
						/>
					}
					label='Мои записи'
				/>

				{/* Блок "Запись ко мне" */}
				{user?.isMaster && (
					<Card
						onClick={() => router.push(`/my_booking/${user?.telegramId}`)}
						icon={
							<MdMenuBook
								size={32}
								className='bg-green-500 p-1 mb-2 rounded-lg'
								color='white'
							/>
						}
						label='Запись ко мне'
					/>
				)}
			</div>
		</>
	)
}

// Вспомогательный компонент для карточек
const Card = ({
	onClick,
	icon,
	label,
}: {
	onClick: () => void
	icon: React.ReactNode
	label: string
}) => (
	<div
		className='bg-white p-4 rounded-lg shadow flex justify-center items-center cursor-pointer'
		onClick={onClick}
	>
		<div className='flex flex-col justify-center items-center text-sm'>
			{icon}
			<span>{label}</span>
		</div>
	</div>
)

export default Main
