export default function dateFormater(date) {
	return date
		.split('/')
		.map((el) => (el.length === 1 ? `0${el}` : el))
		.join('.');
}
