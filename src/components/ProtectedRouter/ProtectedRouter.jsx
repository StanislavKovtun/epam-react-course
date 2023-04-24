import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import { getUserRole } from '../../store/selectors';
// import { roles } from '../../constants';

export const ProtectedRouter = ({ isAuth }) => {
	if (isAuth) {
		return <Outlet />;
	} else {
		return <Navigate to='/login' />;
	}
};
