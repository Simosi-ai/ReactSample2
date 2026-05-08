function Button(){
	const handleClick = () =>{
		alert('クリックされました');
	}

	return (
		<button type = "button" onClick={handleClick}>
			<i>icon</i>
			<span>クリック君</span>
		</button>
	)	
}

	export default Button;