'use client'

import Container from './components/Container'
import { useEffect, useState } from 'react'
import Main from './components/Main'
import { getUserById } from './actions/getUserById'

export default function Home() {
	const [telegramId, setTelegramId] = useState<string>()
	const [loading, setLoading] = useState(true)
	const [user, setUser] = useState<any>(null)

	useEffect(() => {
		const tg = window.Telegram.WebApp
		tg.ready()

		const id = tg.initDataUnsafe?.user?.id.toString()
		setTelegramId(id)
	}, [])
	useEffect(() => {
		const fetchUser = async () => {
			if (telegramId) {
				try {
					const userData = await getUserById(telegramId) // передаем идентификатор
					setUser(userData)
				} catch (error) {
					console.error('Ошибка при загрузке пользователя:', error)
				} finally {
					setLoading(false)
				}
			}
		}

		fetchUser()
	}, [telegramId])

	return (
		<Container>
			<Main user={user} />
		</Container>
	)
}