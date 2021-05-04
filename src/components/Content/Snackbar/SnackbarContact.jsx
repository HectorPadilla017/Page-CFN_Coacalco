import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

export default function SnackbarContact(props) {
    // const [state, setState] = useState({
        // open: false,
        // vertical: 'bottom',
        // horizontal: 'left',
    // });

    // const { open } = state;

    // const handleClick = (newState) => () => {
    //     setState({ open: true, ...newState });
    // };

    // const handleClose = () => {
    //     setState({ ...state, open: false });
    // };

    return (
    <div>
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={props.open}
            autoHideDuration={6000}
            onClose={props.onClose}
            message="Mensaje Enviado"
            // key={vertical + horizontal}
            />
    </div>
    );
}

//     const buttons = (
//     <React.Fragment>
//       <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>Bottom-Left</Button>
//     </React.Fragment>
//   );
