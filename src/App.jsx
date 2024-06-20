import { useState } from 'react'
import { Provider } from 'react-redux'
import store from './reduxContainer/store'
import { BookContainer} from './reduxContainer/BookContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <div className='App'>
        <BookContainer/>
      </div>
    </Provider>
  )
}

export default App
