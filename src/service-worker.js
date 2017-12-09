function showNotification(event) {
  return new Promise(resolve => {
    const { body, title, tag } = JSON.parse(event.data.text());

    self.registration
      .getNotifications({ tag })
      .then(existingNotifications => {})
      .then(() => {
        return self.registration
          .showNotification(title, { body, tag });
      })
      .then(resolve);
  });
}

self.addEventListener('push', event => {
  event.waitUntil(
    showNotification(event)
  );
});

