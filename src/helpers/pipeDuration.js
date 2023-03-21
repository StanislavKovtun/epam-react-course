export default function pipeDuration(totalMinutes) {
	let hours = Math.floor(totalMinutes / 60);
	let minutes = totalMinutes % 60;
	minutes = minutes === 0 ? '00' : minutes;
	if (hours < 10) {
		hours = '0' + hours;
	}
	return { hours, minutes };
}
