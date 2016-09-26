var equalHeights = {
	set: function(container, item) {
		jQuery(container).each(function() {

			var equalChild = jQuery(this).find(item);
			var maxHeight = -1;

			jQuery(equalChild).each(function() {
				if(jQuery(this).outerHeight() > maxHeight) {
					maxHeight = jQuery(this).outerHeight();
				}
			});

			jQuery(equalChild).each(function() {
				jQuery(this).css('height', maxHeight);
			});

		});
	},
	clear: function(container, item) {
		jQuery(container).each(function() {

			var equalChild = jQuery(this).find(item);

			jQuery(equalChild).each(function() {
				jQuery( this ).removeAttr( 'style' );
			});

		});
	}
};