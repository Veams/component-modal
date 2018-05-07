
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

#### Initializing in Veams V5
``` js
// @INSERT :: START @tag: js-init-v5 //
Veams.modules.add('modal', Modal);
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
