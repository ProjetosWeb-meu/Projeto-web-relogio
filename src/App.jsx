import {useState, useEffect} from 'react'



const App = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(()=>{
    const timer = setInterval(()=>{
      setCurrentTime(new Date());
    },1000);

    return () => clearInterval(timer);
  }, []);

  const generateNumber = ()=>{
    const num = Math.floor(Math.random() * 100) +1;
    setRandomNumber(num);
  };

  const formattedTime= currentTime.toLocaleTimeString();

  return (
    <>
      <div className='flex justify-center items-center min-h-screen bg-linear-to-br  from-blue-100 to-purple-200'>
        <div className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center'>
          <h1 className='text-2xl font-bold mb-6'>Explorando Math e Date</h1>

          {/* Relógio0 */}
          <div className='mb-6'>
            <h2 className='text-lg font-semibold text-gray-700'>
              ⏰ Relógio Atual
            </h2>
            <p className='text-3xl font-mono mt-2'>{formattedTime}</p>
          </div>

          {/* Gerador de Número */}
          <div className='mb-6'>
            <h2 className='text-lg font-semibold text-gray-700'>🎲 Número Aleatório</h2>
            {randomNumber !== null && (<p className='text-3xl font-bold text-green-500 mt-2'>{randomNumber}</p>)}
            <button onClick={generateNumber} className='mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors'>Gerar Número</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
