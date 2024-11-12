import React, { useContext, useState } from 'react'
import { ApiContext } from '../contexts/ApiContext'
import { Form } from 'react-bootstrap'

function Urlap() {

    const {postAdat, katLista} = useContext(ApiContext)

    const [adat,setAdat] = useState({
        title:'Ez a termék neve',
        price:1000,
        category:'...',
        description:'...',
        image:'...',

    })
    function valtoztatasKezeles(event) {
        /* az inputba beírt adatokkal kell frissíteni az objektumunkat */
        const segedObj = {...adat}
        segedObj[event.target.id] = event.target.value
        setAdat({...segedObj})
    }
    function elkuld(event) {
        event.preventDefault()

        console.log("elküld " , adat);

        postAdat("/products", adat)

    }

  return (
    <>
    <form onSubmit={elkuld}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Termék neve</label>
    <input type="text" value={adat.title} onChange={valtoztatasKezeles} className="form-control" id="title" aria-describedby="titleHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="price" className="form-label">Termék ára</label>
    <input type="number" min={1000} max={100000} value={adat.price} onChange={valtoztatasKezeles} className="form-control" id="price" aria-describedby="priceHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Termék ára</label>
    <textarea value={adat.description} onChange={valtoztatasKezeles} className="form-control" id="description" aria-describedby="priceHelp" rows="3"/>
  </div>
  <Form.Select aria-label="Default select example">
      <option>Kategória kiválaszt</option>
      {katLista.map((kategoria) =>{
        return  <option value={kategoria}>{kategoria}</option>
      })}

    </Form.Select>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</>
  )
}

export default Urlap