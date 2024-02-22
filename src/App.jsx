import QRCode from 'qrcode.react';

function App() {

  const url = "https://www.frontendmentor.io";


  return (
    <div className="flex justify-center items-center h-screen w-full max-w-[1440px] mx-auto font-outfit">

    <div className="bg-white w-[310px] rounded-2xl p-4 flex flex-col">
      <div className='bg-[#2B7DFA] w-full p-12 flex justify-center items-center
      rounded-xl relative overflow-hidden'>
        <div className='bg-white/10 w-[300px] h-[300px] absolute rounded-full top-[-125px] left-[-125px]'></div>
        <div className='bg-white/10 w-[200px] h-[200px] absolute rounded-full bottom-[-120px] right-[-70px]'></div>
      <QRCode value={url} size={180} fgColor='#FFFFFF' bgColor='transparent' />
      </div>
      <div className='flex flex-col gap-5 mt-6 items-center'>
        <h1 className='text-[#1F3251] font-bold text-xl text-center'>Improve your front-end skills by building projects</h1>
        <p className='text-[#7B879D] font-medium text-center pb-5'>Scan the QR code to visit Frontend Mentor
           and take your coding skills to the next level</p>
      </div>
    </div>

    </div>
  )
}

export default App
