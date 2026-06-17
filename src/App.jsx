
import './App.css'
import TicTac from './components/TicTac'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
       <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <TicTacToe />
      </div>
    </>
  )
}

export default App
