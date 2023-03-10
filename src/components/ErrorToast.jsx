import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const ErrorToast = () => {
  return (
    <ToastContainer className="p-3" position='middle-center'>
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Error</strong>
      </Toast.Header>
      <Toast.Body>Opps!!, Error fetching data, try again later</Toast.Body>
    </Toast>
    </ToastContainer>
  );
}

export default ErrorToast;