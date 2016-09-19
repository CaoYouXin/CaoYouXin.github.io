/**
 * Created by cls on 16/9/15.
 */
;(function (P) {

    var locationPrefix = window.top.Router.LocationPrefix;

    P.all([
        P.getJSON(locationPrefix + 'articles.json'),
        P.ajax(locationPrefix + '_dev/x-handlebars-templates/article_list.html')
    ]).then(function (values) {
        var html = window.top.Handlebars.compile(values[1])(values[0]);

        var articleListElem = document.getElementById('article_list');

        articleListElem.innerHTML = html;

        function route(elem) {
            if (elem.tagName === 'A') {
                e.preventDefault();

                var url = elem.getAttribute('data-rel');

                window.top.Router.go(url, window.top.PageSlider.go);
            }
        }

        articleListElem.addEventListener('click', function (e) {

            var it = e.target;
            do {
                route(it);
            } while (it = it.parentElement);
        })
    });

})(window.ES6Promise.Promise);
