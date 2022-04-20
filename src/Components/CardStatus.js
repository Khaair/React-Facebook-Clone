import React from 'react'
import "./CardStatus.css"


export default function CardStatus({Delete6,kk}) {
  return (
    <div>
                  <div className="card cardd">
                    <div className="card-body">
                    <div >
                    <button className='card-button2'>Edit</button>
                     <button className='card-button2' onClick={() => Delete6(kk)}>Delete</button>
                    </div>

                      

                    </div>
                  </div>
                
    </div>
  )
}
