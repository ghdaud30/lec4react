import React from 'react'
import Hh1 from '../comm/Hh1'
const MyRef = () => {
    const title = "Useref Hook"
  return (
    <main className='container'>
        <article>
            <Hh1 title = {title}></Hh1>
            <footer>
              <div className='grid'>
              <button>state 변수 증가</button>
              </div>
            </footer>
        </article>
    </main>
  )
}

export default MyRef

