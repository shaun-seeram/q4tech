var reportsWidget = {
    options: {
        containerSelector: '.reports',
        template: (
            '{{#.}}' +
                '<article class="reports_item">' +
                    '<a href="{{cover}}" target="_blank"> <img class="reports_cover" src="{{cover}}" alt="{{title}} Cover"/> </a>' +
                    '<footer class="reports_docs">' +
                        '{{#documents}}' +
                            '<h2 class="reports_title">' +
                                '<a href="{{url}}" target="_blank">{{title}}</a>' +
                            '</h2>' +
                        '{{/documents}}' +
                    '</footer>' +
                '</article>' +
            '{{/.}}'
        )
    },

    init: function() {
        this.renderReports(reportData || []);
    },

    renderReports: function(reports) {
        var options = this.options;

        $(options.containerSelector).html(Mustache.render(options.template, reports));
    }
};

reportsWidget.init();