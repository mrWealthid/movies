import React, {useState} from 'react'

function Movieform({handleSubmit}) {

  const [control, setControl] = useState({
    name: '',
    rating : 0,
    duration: ''
  })


  const [error, setError] = useState(false)


  function submit() {
    if(control.duration.includes('m')|| control.duration.includes('h') ) {
      setError(false)
      handleSubmit(control)
      setControl({
        name: '',
        rating : 0,
        duration: ''
      })
    }
  else {
      setError(true)
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setControl({ ...control, [name]: value });
  };

  function handleFocus(e) {
    if(e.target){
setError(false)
    }

  }
  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={ e => e.preventDefault() }>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input 
              type='text' 
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
              name='name'
              value={control.name}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input 
              type='number' 
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
              onChange={handleChange}
              name='rating'
              value={control.rating}
              onFocus={handleFocus}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input 
              type='text' 
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
              name='duration'
              onChange={handleChange}
              value={control.duration}
              onFocus={handleFocus}
            />
          </div>
          {/* Use this div when time format is invalid */}
          {error&& <div
            className='alert error mb-30'
            data-testid='alert'
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>  }
          <div className='layout-row justify-content-end'>
            <button 
              type='submit'
              className='mx-0'
              data-testid='addButton'
              onClick={submit}
            >
              Add Movie
            </button>
          </div>
          </form>
      </div> 
    </section>
  )
}

export default Movieform
