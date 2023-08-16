import Button from 'react-bootstrap/Button'


// eslint-disable-next-line react/prop-types
function SubmitButton({ text }) {
  return (
    <Button type="submit" variant="outline-warning">{text}</Button>
  )
}

export default SubmitButton
