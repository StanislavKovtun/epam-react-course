export default function pipeDuration(totalMinutes) {
	if (totalMinutes < 0) return '00:00';
	let hours = Math.floor(totalMinutes / 60);
	let minutes = totalMinutes % 60;
	hours = hours < 10 ? '0' + hours : hours;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	return `${hours}:${minutes}`;
}
