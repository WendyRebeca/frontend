function InputEmail(props){
    const regras = {
        required: {value: true}
    }
    return (
        <>
            <label htmlFor="email">Email</label>
            <input type="email" {props}/>
        </>
    )
}

export default InputEmail