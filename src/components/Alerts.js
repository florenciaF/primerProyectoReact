import React from 'react'

export const Alerts = (props) => {
  return (
    <div>

        {/* <div class="alert alert-secondary" role="alert">
         ¡¡Esto es una alerta secundaria !!
        </div> */}
        <div class={props.tipo} role="alert">
          {props.titulo}
        </div>
    </div>
  )
}
