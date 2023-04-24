import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRouter = ({ isAuth }) => {
	if (isAuth) {
		return <Outlet />;
	} else {
		return <Navigate to='/login' />;
	}
};
