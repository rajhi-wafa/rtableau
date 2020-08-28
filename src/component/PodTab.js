import React from 'react'
import PropTypes from 'prop-types'

 const PodTab = (props) => {
    return (
        <div>
      
       <table>
  <tr>
    <th>name</th>
    <th>price</th>
    <th>category</th>
  </tr>
  <tbody>
      {props.products.map((el,i)=>{
          return(
              < tr key={i}>
          <td>{el.name}</td>
          <td>{el.price}</td>
          <td>{el.category}</td>
          </tr>
      )
      })}
    
  </tbody>
</table>
            
        </div>
    )
}
PodTab.propTypes={
    products:PropTypes.arrayOf(PropTypes.object).isRequired
}
export default PodTab