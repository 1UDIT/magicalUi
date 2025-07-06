import Link from 'next/link'
import { headers } from 'next/headers'

export default async function NotFound() {
  const headersList = await headers()
  const domain = headersList.get('host')
  return (
    <div className='flex items-center justify-center flex-col h-screen text-center'>
      <p>Could not find requested resource</p>
      <div className="btn relative  cursor-pointer flex items-center justify-center rounded-[100px] border-none p-[2px] w-31 ">
        <p className="relative z-[1] w-full rounded-[100px] bg-black p-1 text-base text-[#fff] backdrop-blur-[40px]">
          <Link href="/components"> View all posts</Link>
        </p>
      </div>
    </div>
  )
}