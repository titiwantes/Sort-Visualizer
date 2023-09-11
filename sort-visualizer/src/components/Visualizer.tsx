import { Dispatch, SetStateAction } from "react";

interface IVisualizer {
  list: number[];
  setList: Dispatch<SetStateAction<number[]>>;
}

const Visualizer = ({ list, setList }: IVisualizer) => {
  console.log(list)
  return <div className="w-3/4 max-w-full bg-white h-[500px] flex gap-1 items-end">
    {
      list.map((item, index) => (
        <div style={{ background: 'black', width: '10%', height: `${item * 10 / 2}px` }}>{item}</div>
      ))
    }
  </div>;
};

export default Visualizer;
