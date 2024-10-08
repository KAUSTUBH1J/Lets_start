import react from 'react';
import PropTypes from 'prop-types'

export default function Alert(props){
    const typeHandle = (word) => {
        let lowercase = word.toLowerCase();
        return lowercase.charAt(0).toUpperCase()+ lowercase.slice(1);
    }
    return(
        props.alert &&
        <>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{typeHandle(props.alert.type)}</strong> {props.alert.msg}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div> 
        </>
    )
}

// Alert.propTypes = {
//     massage: PropTypes.string.isRequired,
// }

// Alert.defaultProps = {
//     massage: 'Defult massage',
// }