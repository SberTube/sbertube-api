# SberTube (API)
![](logo-readme.svg)

## The Smallest and powerful API for new generation video service for creators.


# Methods
1. Auth - Authorization 
   1. [Register](#register)
   2. [Login](#login)
2. User - User manipulation methods
   1. [Get current user](#get-current-user)Authentication needed)
   2. [Get user by username](#get-user-by-username)
   3. [Edit User](#edit-user)Authentication needed)
   4. [Delete User](#delete-user)(Authentication needed)
3. video
   1. [Upload Video](#upload-video)(Authentication needed)
   2. [Get Video By Title](#get-video-by-title)
   3. [Get Videos](#get-all-videos)
   4. [Edit Video](#edt-video)(Authentication needed)
   5. [Delete Video](#delete-video)(Authentication needed)


# Auth

> **Note**
> This section dedicated to creating and authorizing users

# Register


> Type: POST
## This method accept user to register
```http request
   POST api/auth/login
```
> Incoming parameters:

| # | naming        | type   | specs                   |
|---|---------------|--------|-------------------------|
| 1 | email         | string | your email              |
| 2 | username      | string | your username           |
| 3 | password      | string | your password           |
| 4 | checkPassword | string | repeat of your password |

## Example
```javascript
    const req = await fetch('api/auth/login', { 
      body: 
        {
          email: "123@mail.ru", 
          username:"test",
          password: "123",
          checkPassword: "123" 
        },
      method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    const resp = req.json()
```
>Returned object
``` JSON
{
    "user": {
        "email": "1234@mail.ru",
        "username": "test",
        "password": "$2b$10$5/DK9tMXP3OTGhMT3Sdw4e1OXa0OzhYH3A7o5jtAiHF5hEY0X.mFS",
        "token": "...",
        "videos": []
    }
}
````

# Login

> Type: POST
## This method accept user to login
```http request
    api/auth/login
```
> Incoming parameters:

| # | naming        | type   | specs                   |
|---|---------------|--------|-------------------------|
| 1 | username      | string | your username           |
| 2 | password      | string | your password           |

> Returned object
## Example
```javascript
    const req = await fetch('api/auth/login', { 
      body: 
        {
          username:"test",
          password: "123",
        },
      method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    const resp = req.json()
```
``` JSON
 {
    "user": {
        "email": "1234@mail.ru",
        "username": "test",
        "password": "$2b$10$5/DK9tMXP3OTGhMT3Sdw4e1OXa0OzhYH3A7o5jtAiHF5hEY0X.mFS",
       "token": "...",
        "videos": []
    }
}
````

# User 

> **Note**
> This section dedicated to work with users

# Edit User
> **Required**
> Needs Authorization

> Type: Put
```http request
 PUT api/auth/login
```


| # | naming   | type   | specs         |
|---|----------|--------|---------------|
| 1 | email    | string | your email    |
| 1 | username | string | your username |
| 2 | password | string | your password |

> **Note**
> Email not editable field
> These method will edit your data on datatbase




> Returned object
## Example
```javascript
    const req = await fetch('api/user', { 
      body: 
        {
          email: "123@mail.ru",
          username:"test123",
          password: "123",
        },
      method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    const resp = req.json()
```
``` JSON
 {
    "user": {
        "email": "1234@mail.ru",
        "username": "test",
        "password": "$2b$10$5/DK9tMXP3OTGhMT3Sdw4e1OXa0OzhYH3A7o5jtAiHF5hEY0X.mFS",
        "token": "...",
        "videos": []
    }
}
```

# Get Current User
> **Required**
> Needs Authorization

> Type: Get

```http request
 GET api/user/account
```

> **Required**
> Authentication Needed

> **Note**
> This method return all your data from database

> Not Return Value
## Example
```javascript
    const req = await fetch('api/user/account', { 
      
      method: "GET",
        headers: {
          "Content-Type": "application/json",
           Authentcation: 'Bearer 123'
        },
      }
    )
```
## Returns object
```JSON
{
    "user": {
        "email": "1234@mail.ru",
        "username": "test",
        "password": "$2b$10$5/DK9tMXP3OTGhMT3Sdw4e1OXa0OzhYH3A7o5jtAiHF5hEY0X.mFS",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzRAbWFpbC5ydSIsInVzZXJuYW1lIjoidGVzdCIsInBhc3N3b3JkIjoiMTIzIiwiY2hlY2tQYXNzd29yZCI6IjEyMyIsImlhdCI6MTY5NDI2NzE3MH0.MSBM-okUu8irbWDoze0yQI_BdheXghyI9cpctpIFDIg",
        "videos": []
    }
}
```

# Get User By Username


> Type: Get

```http request
 GET api/user/:username
```

> **Note**
> This method return all requested user data

> Not Return Value
## Example
```javascript
    const req = await fetch('api/user/test', { 
      
      method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
```
## Returns object
```JSON
{
    "user": {
        "email": "1234@mail.ru",
        "username": "test",
        "password": "$2b$10$5/DK9tMXP3OTGhMT3Sdw4e1OXa0OzhYH3A7o5jtAiHF5hEY0X.mFS",
       "token": "...",
       "videos": []
    }
}
```


# Delete User
> **Required**
> Needs Authorization

> Type: Delete

```http request
 DELETE api/user
```

> **Required**
> Authentication Needed

> **Note**
> This method will delete your user from database


## Example
```javascript
    const req = await fetch('api/user', {
      method: "DELETE",
        headers: {
          "Content-Type": "application/json",
           Authentication: 'Bearer 123'
        },
      }
    )
```

> Not Return Value


# Video

> **Note**
> This section dedicated to work with videos

## Upload Video

> **Required**
> Authentication required

> Type: POST


```http request
   POST api/video 
```

### Expected values
| # | naming    | type   | specs                          |
|---|-----------|--------|--------------------------------|
| 1 | file      | file   | file which you want to upload  |
| 2 | title     | string | your uploaded video title      |
| 3 | body      | string | your video description         |
| 4 | shortBody | string | your video short description   |

> **Note**
> These method use form-data for file upload

```javascript
const params = new FormData(form); 


fetch('api/video', {
   method: 'POST',
   body: params
});
```

## Returned Object

```JSON
   {
   "video": {
      "id": 1,
      "title": "test",
      "body": "test",
      "shortBody": "test3",
      "path": "static/video/Screencast 2023-09-05 22:13:25.avi",
      "author": {
         "id": 2,
         "email": "1234@mail.ru",
         "username": "test",
         "password": "$2b$10$5/DK9tMXP3OTGhMT3Sdw4e1OXa0OzhYH3A7o5jtAiHF5hEY0X.mFS",
         "checkPassword": "$2b$10$I2X7aWAgpeU.MOY3hMpRNu9MYaJ0FbitzUVny1qxzpBsx.F7EPvfe",
         "token": "...",
         "videos": [
            {
               "id": 1,
               "title": "test",
               "body": "test",
               "shortBody": "test",
               "path": "static/video/Screencast 2023-09-05 22:13:25.avi"

            }
         ]
      }
   }
}
```

## Get All Videos

> Returns all videos

> Type: GET


```http request
   GET api/video 
```

### Expected values
| # | naming | type   | specs       |
|---|--------|--------|-------------|
| 1 | title  | string | video title |




```javascript
fetch('api/video/test', {
   method: 'GET',
});
```

## Returned Object

```JSON
   {
   "video": {
      "id": 1,
      "title": "test",
      "body": "test",
      "shortBody": "test3",
      "path": "static/video/Screencast 2023-09-05 22:13:25.avi",
      "author": {
         "id": 2,
         "email": "1234@mail.ru",
         "username": "test",
         "password": "$2b$10$5/DK9tMXP3OTGhMT3Sdw4e1OXa0OzhYH3A7o5jtAiHF5hEY0X.mFS",
         "checkPassword": "$2b$10$I2X7aWAgpeU.MOY3hMpRNu9MYaJ0FbitzUVny1qxzpBsx.F7EPvfe",
         "token": "..."
      }
   }
}
```

## Get Video By Title

> Return your all information about requested video

> Type: GET


```http request
   GET api/video/:title 
```



```javascript
fetch('api/video/test', {
   method: 'GET',
});
```

## Returned Object

```JSON
   {
   "video": {
      "id": 1,
      "title": "test",
      "body": "test",
      "shortBody": "test3",
      "path": "static/video/Screencast 2023-09-05 22:13:25.avi",
      "author": {
         "id": 2,
         "email": "1234@mail.ru",
         "username": "test",
         "password": "$2b$10$5/DK9tMXP3OTGhMT3Sdw4e1OXa0OzhYH3A7o5jtAiHF5hEY0X.mFS",
         "checkPassword": "$2b$10$I2X7aWAgpeU.MOY3hMpRNu9MYaJ0FbitzUVny1qxzpBsx.F7EPvfe",
         "token": "..."
      }
   }
}
```

## Edt Video

> **Required**
> Authentication required

> Type: PUT


```http request
   PUT api/video
```


## Expected Values
| # | naming    | type   | specs                 |
|---|-----------|--------|-----------------------|
| 1 | title     | string | video title           |
| 1 | body      | string | new video description |
| 1 | shortBody | string | new short description |


```javascript
fetch('api/video', {
  body: {
    video: {
      title: "123",
       body: "123",
       shortBody: "123"
    }
  },
   method: 'PUT',
   headers: {
    Authentication: 'Beqrer 123'
   }
});
```


## Returned Object

```JSON
   {
   "video": {
      "id": 1,
      "title": "123",
      "body": "123",
      "shortBody": "123",
      "path": "static/video/Screencast 2023-09-05 22:13:25.avi",
      "author": {
         "id": 2,
         "email": "1234@mail.ru",
         "username": "test",
         "password": "$2b$10$5/DK9tMXP3OTGhMT3Sdw4e1OXa0OzhYH3A7o5jtAiHF5hEY0X.mFS",
         "checkPassword": "$2b$10$I2X7aWAgpeU.MOY3hMpRNu9MYaJ0FbitzUVny1qxzpBsx.F7EPvfe",
         "token": "...",
         "videos": [
            {
               "id": 1,
               "title": "123",
               "body": "123",
               "shortBody": "123",
               "path": "static/video/Screencast 2023-09-05 22:13:25.avi",
               ...
            }
         ]
      }
   }
}
```


## Delete Video

> **Required**
> Authentication required

> Type: PUT


```http request
   DELETE api/video
```


## Expected Values
| # | naming | type   | specs       |
|---|--------|--------|-------------|
| 1 | title  | string | video title |


```javascript
fetch('api/video', {
  body: {
    video: {
      title: "123"
    }
  }
   method: 'DELETE',
   headers: {
    Authentication: 'Beqrer 123'
   }
});
```


## Returned Object

### these method not returns any value