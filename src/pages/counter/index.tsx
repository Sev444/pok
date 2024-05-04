import { useState } from "react";
import { Button } from "~/components/Button/Button";

export default function Counter() {
  const [value, setValue] = useState(1000);

  function onPlus(){
    console.log("plus")
    setValue((prevValue) => prevValue + 1)
  }
  
  function onMinus(){
    console.log("minus")
    setValue((prevValue) => prevValue - 1)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-[20px]">
        <Button onClick={onMinus}>
          -
        </Button>

        <Button onClick={onPlus}>
          +
        </Button>
      </div>

      <div>
       {value}
      </div>
    </div>
  )
}
