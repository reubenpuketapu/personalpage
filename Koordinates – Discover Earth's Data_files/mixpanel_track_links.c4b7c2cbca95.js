(function(){
    // helper to get all the elements the a elems with mixpanel-track-link attribute
    var getAllElementsWithAttribute = function(attribute) {
        var matchingElements = [];
        var allElements = document.getElementsByTagName("a");
        for (var i = 0, n = allElements.length; i < n; i++) {
            if (allElements[i].getAttribute(attribute) !== null) {
                // Element exists with attribute. Add to array.
                matchingElements.push(allElements[i]);
            }
        }
        return matchingElements;
    }

    var slug = function(str) {
        var slug = '';
        var trimmed = str.trim();
        slug = trimmed.replace(/[^a-z0-9-]/gi, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
        return slug.toLowerCase();
    }

    // track the links with the mixpanel-track-link attribute
    var anchors = getAllElementsWithAttribute("mixpanel-track-link");
    for(var j = 0; j < anchors.length; j++){
        var elem = anchors[j];
        mixpanel.track_links(elem, "click", {
            "link-name": slug(elem.getAttribute("mixpanel-track-link")),
        });
    }
}());
