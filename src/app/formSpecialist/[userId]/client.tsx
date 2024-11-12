'use client'

import Container from '@/app/components/Container'
import { MainButton } from '@vkruglikov/react-telegram-web-app'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ClientProps {
	user: {
		lastName: string | null
		firstName: string | null
		username: string | null
		userId: string
		price: string | null
		phone: string | null
		address: string | null
		category: string | null
		description: string | null
	}
}

const ClientForm = ({ user }: ClientProps) => {
	const router = useRouter()
	const [formData, setFormData] = useState({
		firstName: user.firstName || '',
		lastName: user.lastName || '',
		price: user.price || '',
		phone: user.phone || '',
		address: user.address || '',
		category: user.category || '',
		description: user.description || '',
		userId: user.userId,
	})

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		try {
			const response = await fetch('/api/profile', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			if (response.ok) {
				toast.success('Профиль успешно обновлен')
				router.refresh() // Обновление данных на странице
			} else {
				toast.error('Ошибка при обновлении профиля')
			}
		} catch (error) {
			toast.error('Произошла ошибка')
		}
	}

	useEffect(() => {
		setFormData({
			firstName: user.firstName || '',
			lastName: user.lastName || '',
			price: user.price || '',
			phone: user.phone || '',
			address: user.address || '',
			category: user.category || '',
			description: user.description || '',
			userId: user.userId,
		})
	}, [user]) // Перезагрузка данных формы при изменении user

	useEffect(() => {
		const tg = window.Telegram.WebApp
		tg.ready()
		tg.BackButton.show
		tg.BackButton.onClick(() => router.push(`/profile/${user.userId}`))
	}, [])

	return (
		<>
			<MainButton
				text='Сохранить профиль'
				onClick={() =>
					handleSubmit(
						new Event('submit') as unknown as React.FormEvent<HTMLFormElement>
					)
				}
			></MainButton>
			<Container>
				<div className='bg-white shadow-md rounded-lg p-6 mb-4 flex flex-col text-xl'>
					Редактирование профиля
					<span className='text-sm mt-2 border-b pb-4'>
						Основные данные отображаются сразу при загрузке вашего профиля
					</span>
					<div className=''>
						<ToastContainer />
						<form onSubmit={handleSubmit}>
							<div className='mb-4 mt-4'>
								<label
									className='block text-gray-700 text-sm font-normal mb-2'
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
									className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm'
								/>
							</div>
							<div className='mb-4 mt-4'>
								<label
									className='block text-gray-700 text-sm font-normal mb-2'
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
									className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm'
								/>
							</div>
							<div className='mb-4 mt-4'>
								<label
									className='block text-gray-700 text-sm font-normal mb-2'
									htmlFor='price'
								>
									Цена (руб.)
								</label>
								<input
									id='price'
									name='price'
									type='text'
									placeholder='1000'
									value={formData.price}
									onChange={handleChange}
									className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm'
								/>
							</div>
							<div className='mb-4 mt-4'>
								<label
									className='block text-gray-700 text-sm font-normal mb-2'
									htmlFor='phone'
								>
									Телефон
								</label>
								<input
									id='phone'
									name='phone'
									type='tel'
									placeholder='+79202002020'
									value={formData.phone}
									onChange={handleChange}
									className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm'
								/>
							</div>
							<div className='mb-4 mt-4'>
								<label
									className='block text-gray-700 text-sm font-normal mb-2'
									htmlFor='category'
								>
									Категория
								</label>
								<input
									id='category'
									name='category'
									type='text'
									placeholder='Парикмахер'
									value={formData.category}
									onChange={handleChange}
									className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm'
								/>
							</div>
							<div className='mb-4 mt-4'>
								<label
									className='block text-gray-700 text-sm font-normal mb-2'
									htmlFor='address'
								>
									Адрес
								</label>
								<input
									id='address'
									name='address'
									type='text'
									placeholder='г. Москва, ул. Пушкина д.15, оф.1'
									value={formData.address}
									onChange={handleChange}
									className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm'
								/>
							</div>
							<div className='mb-4 mt-4'>
								<label
									className='block text-gray-700 text-sm font-normal mb-2'
									htmlFor='description'
								>
									Описание
								</label>
								<textarea
									id='description'
									name='description'
									placeholder='Расскажите о себе'
									value={formData.description}
									onChange={handleChange}
									className='shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm'
								/>
							</div>
						</form>
					</div>
				</div>
			</Container>
		</>
	)
}

export default ClientForm
