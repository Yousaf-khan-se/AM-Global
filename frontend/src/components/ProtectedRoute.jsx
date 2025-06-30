import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { loadUser } from '../thunk/userThunk';
import { clearError, clearSuccess } from '../redux/features/userSlice';

const ProtectedRoute = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuthenticated, loading, error, user } = useSelector((state) => state.user);
    const [userLoading, setUserLoading] = useState(true);

    useEffect(() => {
        const loadUserData = async () => {
            if (!user) {
                console.log('ProtectedRoute: Loading user data...');
                try {
                    await dispatch(loadUser()).unwrap();
                    console.log('ProtectedRoute: User data loaded successfully');
                } catch (err) {
                    console.error('ProtectedRoute: Failed to load user data', err);
                }
            }
            setUserLoading(false);
        };

        if (!isAuthenticated && !userLoading) {
            dispatch(clearError());
            dispatch(clearSuccess());
            navigate('/login');
        } else {
            loadUserData();
        }
    }, [dispatch, isAuthenticated, navigate, user, userLoading]);

    // Show loading when:
    // 1. Auth is loading OR
    // 2. User is authenticated but user data is still loading
    if (loading || (isAuthenticated && userLoading)) {
        return <div className="text-center mt-32">🔄 Loading your profile...</div>;
    }

    // Show error only if authenticated but there's an error
    if (isAuthenticated && error) {
        return <div className="text-center mt-32 text-red-500">⚠️ {error}</div>;
    }

    // If authenticated and user data is loaded (or doesn't need loading),
    // show the protected content
    if (isAuthenticated && !userLoading) {
        return (
            <>
                <Nav />
                <div className='mt-28'>
                    <Outlet />
                </div>
                <Footer />
            </>

        );
    }

    // Fallback - should never reach here because of the navigate in useEffect
    return <div className="text-center mt-32">Redirecting to login...</div>;
};

export default ProtectedRoute;
