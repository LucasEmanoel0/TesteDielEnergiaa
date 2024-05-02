// eslint-disable-next-line react/prop-types
export default function Input({type,text,id,value,set,placeholder}){
    return(
        <div>
            <label htmlFor={id}>{text}</label>
            <input type={type} id={id} value={value} onChange={(ev)=>set(ev.target.value)} placeholder= {placeholder}/>
        </div>
    )
}