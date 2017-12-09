export default function registerServiceWorker() {
  console.log('here')
  navigator.serviceWorker
    .register('./service-worker.js')
    .then(registration => {
      console.log(
        'ServiceWorker registered with scope:',
        registration.scope
      );
    })
    .catch(e => console.error('ServiceWorker failed:', e))
}
