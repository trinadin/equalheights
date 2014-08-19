# Simple jQuery Equal Heights Object

This was a "scratch my own itch" type of thing.

## The Details

The object contains two methods:

| Method  | Description |
| ------------- | ------------- |
| equalHeights.set_(container,item)_  | Equalizes min-height of selected items within selected container  |
| equalHeights.clear_(container,item)_  | Clears min-height of selected items within selected container  |

Each method takes two parameters that are both currently required:

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

## Care to contribute?

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