
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: modal, @tag: component-partial }}
{{#with modal}}
	{{> modal}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: JavaScript


#### Initializing in Veams (@veams/plugin-modules v1.x)

``` js
// @INSERT :: START @tag: js-init-modules-@1 //
Veams.modules.add(namespace: 'modal', module: Modal);
// @INSERT :: END
```

#### Custom Events
``` js
// @INSERT :: START @tag: js-events //
/**
 * Events for Modal
 */
EVENTS.modal = {
	close: 'modal:close'
};
// @INSERT :: END
```
