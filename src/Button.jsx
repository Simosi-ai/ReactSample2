function Button(){
	const handleClick = () =>{
		alert('クリックされました');
	}

	return (
		<button type = "button" onClick={handleClick}>
			<i>icon</i>
			<span>クaaabbb</span>
		</button>
	)	
}

	export default Button;