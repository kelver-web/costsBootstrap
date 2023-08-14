import PropTypes from 'prop-types'

import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';


function LinkButton({href, text}) {
    return (
        <>
            <Nav.Link href={href} className='mt-2'>
                <Button variant="outline-warning">{text}</Button>
            </Nav.Link>
        </>
    )
}

LinkButton.propTypes = {
    href: PropTypes.node,
    text: PropTypes.string,
}

export default LinkButton
