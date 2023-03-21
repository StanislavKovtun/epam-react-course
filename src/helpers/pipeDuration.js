export default function pipeDuration(totalMinutes) {
	let hours = Math.floor(totalMinutes / 60);
	const minutes = totalMinutes % 60;
	if (hours < 10) {
		hours = '0' + hours;
	}
	return { hours, minutes };
}
