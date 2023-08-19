## Get all objects
curl "http://localhost:3000/api"

## Get object by ID
curl "http://localhost:3000/api/64df980ea01e26fff8b5b4c9"

## Create object
curl -X "POST" "http://localhost:3000/api" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "name": "iMac 27\\"",
  "quantity": 5
}'

## Create multiple objects
curl -X "POST" "http://localhost:3000/api" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'[
  {
    "name": "iPhone 14 Pro",
    "quantity": 1
  },
  {
    "name": "iPad Air",
    "quantity": 4
  }
]'

## Update object by ID
curl -X "PATCH" "http://localhost:3000/api/64df980ea01e26fff8b5b4c9" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "name": "iMac 27\\""
}'

## Delete object by ID
curl -X "DELETE" "http://localhost:3000/api/64df9c9fec13d0fbe36e881f"
