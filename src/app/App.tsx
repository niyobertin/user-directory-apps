import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'

function App() {
  return (
    <>
      <div className='flex justify-center items-center gap-4'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold text-blue-600 underline mb-4">
        User Directory App
      </h1>
    </>
  )
}

export default App
