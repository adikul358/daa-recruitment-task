# API Documentation

This is a REST API that utilises the `GET`, `POST`, `PATCH`, and `DELETE` HTTP methods to make a CRUD API with MongoDB. The content type is simple and as follows:

```typescript
type DataObject = {
  _id: string,
  name: string,
  quantity: integer
}
```

The IDs are unique and automatically generated.

### `GET` /api

`HTTP 200` Returns the list of all objects

### `GET` /api/\[id]

`HTTP 200` Returns the specified object

### `POST` /api

`HTTP 201` Adds the object(s)
If multiple objects need to be added, submit the JSON body as follows:

```typescript
[
  {...},
  {...},
  ...
]
```

### `PATCH` /api/\[id]

`HTTP 200` Updates the object
Submit the JSON body as follows:

```typescript
{
  [attribute_to_update]: updated_value
}
```

### `PATCH` /api

`HTTP 200` Updates the objects
For multiple objects, submit the JSON body as follows:

```typescript
[
  {
    _id: id,
    [attribute_to_update]: updated_value
  }, 
  ...
]
```

### `DELETE` /api/\[id]

`HTTP 200` Deletes the object

### `DELETE` /api

`HTTP 200` Deletes the objects
For multiple objects, submit the JSON body as follows:

```typescript
[
  id_1, id_2, ...
]
```
