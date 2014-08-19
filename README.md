# Simple jQuery Equal Heights Object

This was a "scratch my own itch" type of thing. Just add the object to your custom JS file, or wherever, and call it where you need it (usually on <i>load</i> and <i>resize</i>). I find it useful to designate two classes, one for the items that need equalizing, and one for their container. For example, <i>equal-container</i> and <i>equal-item</i>. Then you simply add those onto the appropriate elements in your HTML.

## The Details

The object contains two methods:

| Method  | Description |
| ------------- | ------------- |
| equalHeights.set<i>(container,item)</i>  | Equalizes min-height of selected items within selected container  |
| equalHeights.clear<i>(container,item)</i>  | Clears min-height of selected items within selected container  |

Each method has two parameters that are both currently required:

| Param  | Description |
| ------------- | ------------- |
| container  | ID, class, or name of element that contains the items to equalize  |
| item  | ID, class, or name of elements within the container to equalize  |

## Example Usage

```javascript
jQuery(window).on('load', function() {
	equalHeights.set('.equal-container', '.equal-item');
});

jQuery(window).on('resize', function() {
	equalHeights.clear('.equal-container', '.equal-item');
	equalHeights.set('.equal-container', '.equal-item');
});
```

## Care to Contribute?

Create a new pull request or issue!

## License

You are free to share, distribute, modify, or whatever the heck else you want to do with it.

### Changelog

#### 1.0.2
- Forgot a semicolon (of course)

#### 1.0.1
- Removed JS setTimeout method from equalHeights clear method

#### 1.0.0
- Initial version