'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'

const Page: FC = () => {
  let roomIdInput = ''
  const router = useRouter()

  const generateRandomId = (length: number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const createRoom = async () => {
   const roomId: string = generateRandomId(8);
    router.push(`/room/${roomId}`)
  }

  const joinRoom = async (roomId: string) => {
    router.push(`/room/${roomId}`)
  }

  return (
    <div>
      <button onClick={createRoom}>Create room</button>
      <div className='flex gap-2'>
        <input
          type='text'
          onChange={({ target }) => (roomIdInput = target.value)}
          className='border border-zinc-300'
        />

        <button onClick={() => joinRoom(roomIdInput)}>Join room</button>
      </div>
    </div>
  )
}

export default Page
