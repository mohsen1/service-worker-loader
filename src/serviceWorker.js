
export default function serviceWorker(publicPath, file) {
	return `export var ServiceWorkerNoSupportError = (function() {

	function ServiceWorkerNoSupportError() {
		var err = Error.call(this, 'ServiceWorker is not supported.');
		Object.setPrototypeOf(err, ServiceWorkerNoSupportError.prototype);
		return err;
	}

	ServiceWorkerNoSupportError.prototype = Object.create(Error.prototype);

	return ServiceWorkerNoSupportError;
})();

export default function registerServiceWorkerIfSupported(options) {

	if ('serviceWorker' in navigator) {
		return navigator.serviceWorker.register(${publicPath} + ${file}, options);
	}

	return Promise.reject(new ServiceWorkerNoSupportError());
}
`;
}
