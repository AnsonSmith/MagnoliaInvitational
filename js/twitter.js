 'use strict';
        $('.example1 .tweet').twittie({
            dateFormat: '%b. %d, %Y',
            template: '{{tweet}} <div class="date">{{date}}</div>',
            count: 2,
            loadingText: 'Loading!'
        });