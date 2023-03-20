export const GetKnightsMock = (
    page: string | null,
    itemsPerPage: string | null,
    filter?: string
): any => {
  return {
    "body": "",
    "resource": "/{proxy+}",
    "path": "/path/to/resource",
    "httpMethod": "POST",
    "queryStringParameters": {
      "page": page,
      "itemsPerPage": itemsPerPage
    },
    "pathParameters": {
      "proxy": "path/to/resource"
    },
    "stageVariables": {
      "baz": "qux"
    },
    "headers": {
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Accept-Encoding": "gzip, deflate, sdch",
      "Accept-Language": "en-US,en;q=0.8",
      "Cache-Control": "max-age=0",
      "CloudFront-Forwarded-Proto": "https",
      "CloudFront-Is-Desktop-Viewer": "true",
      "CloudFront-Is-Mobile-Viewer": "false",
      "CloudFront-Is-SmartTV-Viewer": "false",
      "CloudFront-Is-Tablet-Viewer": "false",
      "CloudFront-Viewer-Country": "US",
      "Host": "1234567890.execute-api.{dns_suffix}",
      "Upgrade-Insecure-Requests": "1",
      "User-Agent": "Custom User Agent String",
      "Via": "1.1 08f323deadbeefa7af34d5feb414ce27.cloudfront.net (CloudFront)",
      "X-Amz-Cf-Id": "cDehVQoZnx43VYQb9j2-nvCh-9z396Uhbp027Y2JvkCPNLmGJHqlaA==",
      "X-Forwarded-For": "127.0.0.1, 127.0.0.2",
      "X-Forwarded-Port": "443",
      "X-Forwarded-Proto": "https"
    },
    "requestContext": {
      "accountId": "123456789012",
      "resourceId": "123456",
      "stage": "prod",
      "requestId": "c6af9ac6-7b61-11e6-9a41-93e8deadbeef",
      "identity": {
        "cognitoIdentityPoolId": null,
        "accountId": null,
        "cognitoIdentityId": null,
        "caller": null,
        "apiKey": null,
        "sourceIp": "127.0.0.1",
        "cognitoAuthenticationType": null,
        "cognitoAuthenticationProvider": null,
        "userArn": null,
        "userAgent": "Custom User Agent String",
        "user": null
      },
      "resourcePath": "/{proxy+}",
      "httpMethod": "POST",
      "apiId": "1234567890"
    }
  }
}

export const malformedObjectError = {
  "status": 400,
  "body": [
    {
      "_id": "6414d754ebf7e65dae73153c",
      "name": "Gold Knight",
      "nickname": "Goldsmith",
      "birthday": "01/01/1665",
      "class": "Swordsman",
      "weapons": [
        {
          "_id": "6414d023cda7399520d25d4c",
          "name": "Long Sword",
          "mod": 4,
          "attr": "strengh"
        }
      ],
      "equippedWeapon": "6414d023cda7399520d25d4c",
      "attributes": {
        "strength": 19,
        "dexterity": 6,
        "constitution": 2,
        "intelligence": 6,
        "wisdom": 6,
        "charisma": 3
      },
      "keyAttribute": "strength",
      "__v": 0
    },
    {
      "_id": "64174dbd34c7cc942d16cdb8",
      "name": "Crystal Knight",
      "nickname": "Crystal",
      "birthday": "01/01/1665",
      "class": "Swordsman",
      "weapons": [
        {
          "_id": "6414d023cda7399520d25d4c",
          "name": "Long Sword",
          "mod": 4,
          "attr": "strengh"
        }
      ],
      "equippedWeapon": "6414d023cda7399520d25d4c",
      "attributes": {
        "strength": 12,
        "dexterity": 6,
        "constitution": 2,
        "intelligence": 9,
        "wisdom": 6,
        "charisma": 3
      },
      "keyAttribute": "strength",
      "__v": 0
    },
    {
      "_id": "64174dfd4c89513410d488ad",
      "name": "Lennon Star",
      "nickname": "Nameless",
      "birthday": "01/01/1829",
      "class": "Magician",
      "weapons": [
        {
          "_id": "64174d091ea04990d352949c",
          "name": "God maker wand",
          "mod": 8,
          "attr": "strength"
        }
      ],
      "equippedWeapon": "64174d091ea04990d352949c",
      "attributes": {
        "strength": 39,
        "dexterity": 2,
        "constitution": 2,
        "intelligence": 11,
        "wisdom": 17,
        "charisma": 0
      },
      "keyAttribute": "wisdom",
      "__v": 0
    }
  ],
  "message": "3 knights retrieved"
}

export const okResponse = {
  "status": 200,
  "body": [
    {
      "_id": "6414d754ebf7e65dae73153c",
      "name": "Gold Knight",
      "nickname": "Goldsmith",
      "birthday": "01/01/1665",
      "class": "Swordsman",
      "weapons": [
        {
          "_id": "6414d023cda7399520d25d4c",
          "name": "Long Sword",
          "mod": 4,
          "attr": "strengh"
        }
      ],
      "equippedWeapon": "6414d023cda7399520d25d4c",
      "attributes": {
        "strength": 19,
        "dexterity": 6,
        "constitution": 2,
        "intelligence": 6,
        "wisdom": 6,
        "charisma": 3
      },
      "keyAttribute": "strength",
      "__v": 0
    },
    {
      "_id": "64174dbd34c7cc942d16cdb8",
      "name": "Crystal Knight",
      "nickname": "Crystal",
      "birthday": "01/01/1665",
      "class": "Swordsman",
      "weapons": [
        {
          "_id": "6414d023cda7399520d25d4c",
          "name": "Long Sword",
          "mod": 4,
          "attr": "strengh"
        }
      ],
      "equippedWeapon": "6414d023cda7399520d25d4c",
      "attributes": {
        "strength": 12,
        "dexterity": 6,
        "constitution": 2,
        "intelligence": 9,
        "wisdom": 6,
        "charisma": 3
      },
      "keyAttribute": "strength",
      "__v": 0
    },
    {
      "_id": "64174dfd4c89513410d488ad",
      "name": "Lennon Star",
      "nickname": "Nameless",
      "birthday": "01/01/1829",
      "class": "Magician",
      "weapons": [
        {
          "_id": "64174d091ea04990d352949c",
          "name": "God maker wand",
          "mod": 8,
          "attr": "strength"
        }
      ],
      "equippedWeapon": "64174d091ea04990d352949c",
      "attributes": {
        "strength": 39,
        "dexterity": 2,
        "constitution": 2,
        "intelligence": 11,
        "wisdom": 17,
        "charisma": 0
      },
      "keyAttribute": "wisdom",
      "__v": 0
    }
  ],
  "message": "3 knights retrieved"
}
