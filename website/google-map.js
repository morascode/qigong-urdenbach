// ===================================
// FUNCTIONS
// ======================
export async function googleMapInit() {
	const { Map } = await google.maps.importLibrary("maps");
	const myLatLng = { lat: -25.363, lng: 131.044 };
	const map = new Map(document.getElementById("google-map"), {
		zoom: 4,
		center: myLatLng,
	});

	// new google.maps.Marker({
	// 	position: myLatLng,
	// 	map,
	// 	title: "Hello World!",
	// });
}
