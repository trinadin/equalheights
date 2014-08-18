var equalHeights = {
	set: function(container, item) {
		jQuery(container).each(function() {

			var equalChild = jQuery(this).find(item);
			var maxHeight = -1;

			jQuery(equalChild).each(function() {
				if(jQuery(this).height() > maxHeight) {
					maxHeight = jQuery(this).height();
				}
			});

			jQuery(equalChild).each(function() {
				jQuery(this).css('min-height', maxHeight);
			});

		});
	},
	clear: function(container, item) {
		jQuery(container).each(function() {

			var equalChild = jQuery(this).find(item);

			jQuery(equalChild).each(function() {
				jQuery(this).css('min-height', 'auto');
			});

		});
	}
}