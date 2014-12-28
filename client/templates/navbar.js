Template.navbar.helpers({
    activeIfTemplateIs: function (template) {
        //console.log(template);
        var currentRoute = Router.current();
        return currentRoute &&
        template === currentRoute.lookupTemplate() ? 'active' : '';
    }
});