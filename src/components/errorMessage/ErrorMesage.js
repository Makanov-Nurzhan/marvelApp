import img from './error.gif'
const ErrorMessage = () => {
    return (
        <img src={img} alt='' style={{ display: 'block', width: '250px', hight: '250px', objectFit: 'contain', margin: '0 auto' }} />
    )
}
export default ErrorMessage;