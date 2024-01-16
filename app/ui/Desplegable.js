export default function Desplegable () {
  return (
    <>
      <div className=' p-0 absolute right-2 -mt-4 h-40 w-32 bg-slate-600 flex flex-col justify-center text-center rounded-xl'>
        <ul className='p-0 m-0'>
          <li className='hover:bg-slate-400 h-1/4'>
            <a href='/profile'>Profile</a>
          </li>
          <li className='hover:bg-slate-400 h-1/4'>
            <a href='/deliveries'>My deliveries</a>
          </li>
          <li className='hover:bg-slate-400 h-1/4'>
            <a href='/q&a'>Q&A</a>
          </li>
          <li className='hover:bg-slate-400 h-1/4'>
            <a>Log Out</a>
          </li>
        </ul>
      </div>
    </>
  )
}
