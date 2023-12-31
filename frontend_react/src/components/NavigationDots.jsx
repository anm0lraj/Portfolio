import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
        {['home', 'about','education','skills','roles','works','designs','achievements','certificates','contact'].map((item,index)=>(
                <a 
                    href={`#${item}`} 
                    key={item+index}
                    className='app__navigation-dot'
                    style={active===item ? {backgroundColor: "var(--secondary-color)"}:{}}
                />
        ))}
    </div>
  )
}

export default NavigationDots