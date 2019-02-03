window.addEventListener('load', () => {
  const el = $('#app');

  // Compile Handlebar Templates
  const errorTemplate = Handlebars.compile($('#error-template').html());
  const usersTemplate = Handlebars.compile($('#users-template').html());

  // Router Declaration
  const router = new Router({
    mode: 'history',
    page404: (path) => {
      const html = errorTemplate({
        color: 'yellow',
        title: 'Error 404 - Page NOT Found!',
        message: `The path '/${path}' does not exist on this site`,
      });
      el.html(html);
    },
  });

  router.add('/', () => {
    let html = usersTemplate();
    el.html(html);
  });

  // Navigate app to current url
  router.navigateTo(window.location.pathname);

});
