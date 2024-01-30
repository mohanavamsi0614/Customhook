import useStorage  from './storeage'

import './App.css'

function App() {
  const [state, setstate] = useStorage("er")
  localStorage.setItem("store",state)
  sessionStorage.setItem("store",state)
  console.log(state)

  return (
    <>
    <input onChange={(e)=>{setstate(e.target.value)}}/>
    </>
  )
}

export default App
