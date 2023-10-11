import './Filter.css'

export function Filter({ onChange, currentValue, filters }) {

    const handleChange = ({target}) => {
        onChange(target.value)
    }
    return(
    <div className='containerFilter'>
        {
            filters.map(({ id, value, label }) => {
                return(
                    <div className='radio' key={id}>
                        <input type="radio" id={id} value={value} onChange={handleChange} checked={currentValue === value}/>
                        <label htmlFor={id}>{label}</label>
                    </div>
                )
            })
        }
    </div>
    )
}