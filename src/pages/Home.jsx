import { useState } from 'react';
import Display from "../components/Display/Display"
import Button from "../components/Button/Button"

function Home(){
	  {/* ここにコードを書く  */}
	  const [count, setCount] = useState(0);
	 
	  const handleClick = () => {
			setCount(count + 1);
		}

	   return (
	   <>
		 <h1>Hello World</h1>
		 <Button type = "submit" disabled = {false} onClick={handleClick}>
			カウント: {count}
		 </Button>
		 <Display count = {count}/>
	   </>
	   )
}


export default Home