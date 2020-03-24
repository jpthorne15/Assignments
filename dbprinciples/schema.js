{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Person",
    "description": "A person",
    "type": "object",
    "properties":
    {
       "name":
       {
          "description": "A person's name",
          "type": "string"
       },
       "age":
       {
          "description": "A person's age",
          "type": "number",
          "minimum": 18,
          "maximum": 64
       }                                                                                
    },
    "email"
    {
        "description": "A persons email address"
        "type": "string"
    }
    "username"
    {
        "description": "A users username"
        "type": "string"
    }
    "required": ["name", "age"]    
 }
 "password"
 {
     "description": "A users password"
     "type": "string"
 }

 {
    "name": "John Doe",
    "age": 35
 }
 