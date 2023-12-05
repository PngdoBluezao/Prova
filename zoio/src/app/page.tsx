import Image from 'next/image'
import codegirl from '@/img/codegirl.png'
import Logo from '@/img/Logo.png'
import Logo2 from '@/img/Logo2.png'
export default function Home() {
  return (
    <main className='bg-zinc-900 lg:bg-background lg:bg-cover flex flex-col
    max-h-screen h-screen lg:items-center'>
      <div className= 'p-10 mt-16 flex-1 flex flex-col justify-between lg:p-40 ml-500 lg:bg-white lg:rounded-lg lg:bg-contain'>
     
      <Image src={Logo2}alt="cover" width={300} />
      <div className='flex flex-col gap-4 lg:bg-color-white'>
        <h1 className='text-white lg:text-black'>Nome de usuario</h1>
      <input type="text" className="rounded-lg max-w-0,5 lg:w-72  bg-zinc-700 lg:bg-white max-h-0,5
      h-10 outline lg:outline-slate-700 outline-white outline-1"/>
      <h1 className='text-white lg:text-black'>Senha</h1>
      <input type="text" className="rounded-lg max-w-0,5 lg:w-72 bg-zinc-700 lg:bg-white max-h-0,5
      h-10 outline outline-white outline-1 lg:outline-slate-700" />
      <div className="flex-1 flex flex-col justify-between gap-4">
<button className='bg-pink-700 hover:bg-zinc-900 active:bg-zinc-900 text-white rounded-lg
w-full p-4 lg:w-72'>Entrar</button>

<button className='lg:bg-slate-500 bg-slate-50 active:bg-zinc-900 text-pink-700 rounded-lg
w-full p-4 lg:w-72 lg:h-10'>Esqueci minha senha</button>
</div>
</div>
</div>
    </main>
  )
}
