import './MobileProduct.scss'

const MobileProduct = ({image}) => {
  return (
    <div className='mobile-app-conteiner' style={{backgroundImage: `url(${image})`}}>
    </div>
  )
}

export default MobileProduct