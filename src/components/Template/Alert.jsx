import react from 'react';
import PropTypes from 'prop-types'

export default function Alert(props){
    return(
        <>
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                {/* {props.alert.m} */}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </>
    )
}

Alert.propTypes = {
    massage: PropTypes.string.isRequired,
}

Alert.defaultProps = {
    massage: 'Defult massage',
}