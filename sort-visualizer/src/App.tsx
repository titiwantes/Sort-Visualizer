import { useState } from 'react'
import Visualizer from './components/Visualizer'
import { IListParams, getRandomNumberList } from './lib/utils';
import { Button } from './components/ui/button';

const App = () => {
  const [listParams, setListParams] = useState<IListParams>({
    length: 10,
    max: 100,
    min: 0
  })
  const [list, setList] = useState<number[]>(getRandomNumberList(listParams));

  const V = () => {
    console.log(list)
    return <div className="w-3/4 max-w-full bg-white h-[500px] flex gap-1 items-end">
      {
        list.map((item, index) => (
          <div style={{ background: 'black', width: '10%', height: `${item * 10 / 2}px` }}>{item}</div>
        ))
      }
    </div>;
  };

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
      <V list={list} setList={setList}/>
      <Button onClick={() => {
        setList((prev) => {
          const tmp = prev[0]
          prev[0] = prev[1]
          prev[1] = tmp
          console.log(prev[0], prev[1])
          return prev
        })
      }}>click</Button>

    </div>
  )
}

export default App
