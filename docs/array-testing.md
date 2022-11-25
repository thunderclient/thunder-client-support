## Array Testing

<img width="1578" alt="ArrayTests" src="https://user-images.githubusercontent.com/8637550/203997869-b12bee5e-6fff-4e86-a45f-22a43011bb4a.png">

#### Array Filters
- Array can tested using array filters
- The following filter operations are supported `*, =, !=, <=, <, >=, >, *=, ^=, $=`
- `*=` filters using `contains` operation
- `^=` filters using `startsWith` operation
- `$=` filters using `endsWith` operation
- To access array items from the end use negative index number `json.items[-2].id`

#### Function Filters
- For advanced operations you can use [Function Filters](https://github.com/rangav/thunder-client-support/blob/master/docs/filters.md#filters-in-env-var)
- For custom functionality you can also create [Custom Filters](https://github.com/rangav/thunder-client-support/blob/master/docs/filters.md#custom-filters)
