import { Slider } from '@material-ui/core'
import React from 'react'

const Redils = () => {
    const mark=[
        {
            value:0,
            label:'start'
        },
        {
            value:50,
            label:'med'
        },
        {
            value:100,
            label:'stop'
        },
    ] 
    const getValue=(e,val)=>{
        console.log(val) 
    }
  return (
    <>
    <div>
        <h2>Slider</h2>
        <div style={{ margin:40,alignItems:'center',textAlign:'center'}}>
            <Slider
              color='secondary'
              defaultValue={40}
              step={10}
              marks={mark}
              valueLabelDisplay='auto'
              onChange={getValue}

            />

        </div>
        
    </div>
    </>
  )
}

export default Redils