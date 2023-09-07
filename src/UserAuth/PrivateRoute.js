import { Navigate } from 'react-router-dom';
import { useAuth } from './authContext';

function PrivateRoute({ path, element }) {
    let { currentUser } = useAuth();

    return currentUser ? element : <Navigate to="/signin" replace />;
}

export default PrivateRoute;
