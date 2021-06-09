const CardArray={
    "version": "1.1",
    "Data": {
        "UserData": {
            "name": "srikant",
            "login": "xxx@gmail.com",
            "userId": "xxx-yyy-zzzzzzz"
        },
        "Scenario_data": [
            {
                "Scenario": {
                    "scenario_id": 7,
                    "title": "Default",
                    "description": "This is the default scenation "                },
                "cards": [
                    {
                        "card_type": "_id",
                        "_id": "USR1",
                        "card_description": "User ID",
                        "title":"Yourname",
                        "card_category":"profile",
                        "icon":"icon.png",
                        "priority":100,
                        "scale":1000,
                        "form":{
                            "customer_id": "USR1",
                            "group_id": "Indi"
                        },
                        "goal_success":0,
                        "errors":{
                            "group_id": [
                                "Value has to be India"
                            ]

                        }    
                    }
                ],
                "iso_goodness_value": 99.09,

                "Engine_hash": {
                    "scenarioHash":"abc-def-hij",
                    "errors":  "aaa-pas-err",
                    "CalcHash":"aaa-calc-resp"
                    
                }
            }
        ]
    }
}