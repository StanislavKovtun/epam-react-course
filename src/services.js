export async function getCoursesAPI() {
	try {
		const response = await fetch('http://localhost:4000/courses/all');
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}

export async function deleteCourseAPI(id) {
	try {
		const response = await fetch(`http://localhost:4000/courses/${id}`, {
			method: 'DELETE',
			headers: {
				id,
				Authorization: `${localStorage.getItem('token')}`,
			},
		});
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}

export async function addCourseAPI(data) {
	try {
		const response = await fetch('http://localhost:4000/courses/add', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `${localStorage.getItem('token')}`,
			},
		});
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}

export async function updateCourseAPI(courseId, data) {
	try {
		const response = await fetch(`http://localhost:4000/courses/${courseId}`, {
			method: 'PUT',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `${localStorage.getItem('token')}`,
			},
		});
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}

export async function getAuthorsAPI() {
	try {
		const response = await fetch('http://localhost:4000/authors/all');
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}

export async function addAuthorAPI(data) {
	try {
		const response = await fetch('http://localhost:4000/authors/add', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `${localStorage.getItem('token')}`,
			},
		});
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}

export async function registerUserAPI(user) {
	try {
		const response = await fetch('http://localhost:4000/register', {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}

export async function getCurrentUserAPI(token) {
	try {
		const response = await fetch('http://localhost:4000/users/me', {
			method: 'GET',
			headers: {
				Authorization: token,
			},
		});
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}

export async function loginUserAPI(user) {
	try {
		const response = await fetch('http://localhost:4000/login', {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}

export async function logoutUserAPI(token) {
	try {
		await fetch('http://localhost:4000/logout', {
			method: 'DELETE',
			headers: {
				Authorization: token,
			},
		});
	} catch (error) {
		console.log(error);
	}
}
