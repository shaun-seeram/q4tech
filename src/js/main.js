const reportsWidget = {
    options: {
        containerSelector: '.reports',
        template: (
            '{{#.}}' +
                '<article class="reports_item">' +
                    '<a href="{{cover}}" target="_blank">' +
                        '<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover"/>' +
                        // Noticed the plus sign was missing after the img tag, casuing an error
                    '</a>' +
                    '<footer class="reports_docs">' +
                        '{{#documents}}' +
                            '<h2 class="reports_title">' +
                            // Changed the H3 to an H2. We were taught it was best practice to not skip headings.
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
        const options = this.options;
        // Opted to combine both variables into one for a cleaner code. Also changed all vars to consts to be inline with ES6 standards

        $(options.containerSelector).html(Mustache.render(options.template, reports));
    }
};

reportsWidget.init();