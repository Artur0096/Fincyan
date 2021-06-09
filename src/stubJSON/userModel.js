const CardsArrayData = {
    "version": "1.0",
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
                    "description": "This is the default scenation ",
                    "last_Engine_Hash": ""
                },
                "cards": [
                    {
                        "card_type": "_id",
                        "_id": "USR1",
                        "card_description": "User ID",
                        "title":"ID",
                        "card_category":"profile",
                        "icon":"icon.png",
                        "priority":100,
                        "scale":1000,
                        "form":{
                            "customer_id": "USR1",
                            "group_id": "India"
                        },
                        "goal_success":0.29999999999999716,
                        "errors":{
                            "group_id": [
                                "Value has to be India"
                            ]

                        }
                    },
                    {
                        "card_type":"_scenario",
                        "_id":"SC1",
                        "card_description":"User Scenario",
                        "title":"Scenario",
                        "card_category":"profile",
                        "icon":"icon.png",
                        "priority":100,
                        "scale":1000,
                        "form":{
                            "start_year": "2500",
                            "savings_rate":"0.5",
                            "equity_ratio":"0.5",
                            "insurance_value":"10"
                        },
                        "goal_success":0.29999999999999716,
                        "errors":{
                            "start_year": [
                                "Value has to be Positive"
                            ],
                            "savings_rate": [
                                "Value has to be Positive"
                            ],
                            "equity_ratio": [
                                "Value has to be Positive"
                            ],
                            "insurance_value": [
                                "Value has to be Positive"
                            ]

                        }
                    },
                    {
                        "card_type":"_profile_data",
                        "_id":"PF1",
                        "card_description":"User Data",
                        "title":"Data",
                        "card_category":"profile",
                        "icon":"icon.png",
                        "priority":100,
                        "scale":1000,
                        "form":{
                            "current_age": "24",
                            "number_of_years_to_retirement": "20",
                            "gender":"male"
                        },
                        "goal_success":0.29999999999999716,
                        "errors":{
                            "current_age": [
                                "Value has to be Positive"
                            ],
                            "number_of_years_to_retirement": [
                                "Value has to be Positive"
                            ],
                            "gender": [
                                "Value has to be Positive"
                            ]

                        }
                    },
                    {
                        "card_type":"_primary_income_data",
                        "_id": "CRD1",
                        "card_description":"User primary income",
                        "title":"primary income",
                        "card_category":"profile",
                        "icon":"icon.png",
                        "priority":100,
                        "scale":1000,
                        "form":{
                            "annual_salary_income": "100000"
                        },
                        "goal_success":0.29999999999999716,
                        "errors":{
                            "annual_salary_income": [
                                "Value has to be Positive"
                            ]

                        }
                    },
                    {
                        "card_type":"_secondary_income_data",
                        "_id": "CRD2",
                        "card_description":"User secondary income",
                        "title":"secondary income",
                        "card_category":"profile",
                        "icon":"icon.png",
                        "priority":100,
                        "scale":1000,
                        "form":{
                            "secondary_income_description": "rent",
                            "secondary_income_annual": "75000",
                            "life_of_secondary_income":"15"
                        },
                        "goal_success":0.29999999999999716,
                        "errors":{
                            "secondary_income_description": [
                                "Value has to be Positive"
                            ],
                            "secondary_income_annual": [
                                "Value has to be Positive"
                            ],
                            "life_of_secondary_income": [
                                "Value has to be Positive"
                            ]

                        }
                    },
                    {
                        "card_type":"_debt_data",
                        "_id": "CRD3",
                        "card_description":"User Debt",
                        "title":"Debt",
                        "card_category":"Asset",
                        "icon":"icon.png",
                        "priority":100,
                        "scale":1000,
                        "form":{
                            "loan_amount": "100000",
                            "loan_monthly_emi":"10000"
                        },
                        "goal_success":0.29999999999999716,
                        "errors":{
                            "loan_amount": [
                                "Value has to be Positive"
                            ],
                            "loan_monthly_emi": [
                                "Value has to be Positive"
                            ]

                        }
                    },
                    {
                        "card_type":"_assets_data",
                        "_id": "CRD4",
                        "card_description":"User Assets data",
                        "title":"Assets data",
                        "card_category":"Asset",
                        "icon":"icon.png",
                        "priority":100,
                        "scale":1000,
                        "form":{
                            "asset_type":"mutual_fund",
                            "asset_value": "0"
                        },
                        "goal_success":0.29999999999999716,
                        "errors":{
                            "asset_type": [
                                "Value has to be Positive"
                            ],
                            "asset_value": [
                                "Value has to be Positive"
                            ]

                        }
                    },
                    {
                        "card_type":"_insurance",
                        "_id":"INS1",
                        "card_description":"Insurance purchased by client",
                        "title":"Insurance purchased by client",
                        "card_category":"Asset",
                        "icon":"icon.png",
                        "priority":100,
                        "scale":1000,
                        "form":{
                            "insured_amount": "1000000",
                            "term": "20",
                            "cash_value":"1000000"
                        },
                        "goal_success":0.29999999999999716,
                        "errors":{
                            "insured_amount": [
                                "Value has to be Positive"
                            ],
                            "term": [
                                "Value has to be Positive"
                            ],
                            "cash_value": [
                                "Value has to be Positive"
                            ]

                        }
                    },
                    {
                        "card_type":"_family_essentials_expense_data",
                        "_id": "CRD5",
                        "card_description":"User family expenses",
                        "title":"family essential expenses",
                        "card_category":"Goal",
                        "icon":"icon.png",
                        "priority":100,
                        "scale":1000,
                        "goal_priority": "2",
                        "form":{
                            "annual_family_essentials_expense": "100000"
                        },
                        "goal_success":0.29999999999999716,
                        "errors":{
                            "annual_family_essentials_expense": [
                                "Value has to be Positive"
                            ]

                        }
                    },
                    {
                        "card_type":"_family_lifestyle_expense_data",
                        "_id": "CRD6",
                        "card_description":"User family expenses",
                        "title":"family lifestyle  expenses",
                        "card_category":"Goal",
                        "icon":"icon.png",
                        "priority":100,
                        "scale":1000,
                        "goal_priority": "2",
                        "form":{
                            "annual_family_lifestyle_expense": "100000"
                        },
                        "goal_success":0.29999999999999716,
                        "errors":{
                            "annual_family_lifestyle_expense": [
                                "Value has to be Positive"
                            ]

                        }
                    },
                    {
                        "card_type":"_personal_essentials_expense_data",
                        "_id": "CRD7",
                        "card_description":"User personal expenses",
                        "title":"personal essential expenses",
                        "card_category":"Goal",
                        "icon":"icon.png",
                        "priority":100,
                        "scale":1000,
                        "goal_priority": "1",
                        "form":{
                            "annual_personal_essentials_expense": "125000"
                        },
                        "goal_success":0.29999999999999716,
                        "errors":{
                            "annual_personal_essentials_expense": [
                                "Value has to be Positive"
                            ]

                        }
                    },
                    {
                        "card_type":"_personal_lifestyle_expense_data",
                        "_id":"CRD8",
                        "card_description":"User personal expenses",
                        "title":"personal lifestyle expenses",
                        "card_category":"Goal",
                        "icon":"icon.png",
                        "priority":100,
                        "scale":1000,
                        "goal_priority": "1",
                        "form":{
                            "annual_personal_lifestyle_expense": "125000"
                        },
                        "goal_success":0.29999999999999716,
                        "errors":{
                            "annual_personal_lifestyle_expense": [
                                "Value has to be Positive"
                            ]

                        }
                    },
                    {
                        "card_type":"_kids_education_data",
                        "_id": "CRD9",
                        "card_description":"User kid 1 education",
                        "title":"kid 1 education",
                        "card_category":"Goal",
                        "icon":"icon.png",
                        "priority":100,
                        "scale":1000,
                        "goal_priority": "3",
                        "form":{
                            "cost_per_year": "40000",
                            "number_of_years_of_education": "5",
                            "beginning_year": "2020"
                        },
                        "goal_success":0.29999999999999716,
                        "errors":{
                            "cost_per_year": [
                                "Value has to be Positive"
                            ],
                            "number_of_years_of_education": [
                                "Value has to be Positive"
                            ],
                            "beginning_year": [
                                "Value has to be Positive"
                            ]

                        }
                    },
                    {
                        "card_type":"_kids_education_data",
                        "_id": "CRD10",
                        "card_description":"User kid 2 education",
                        "title":"kid 2 education",
                        "card_category":"Goal",
                        "icon":"icon.png",
                        "priority":100,
                        "scale":1000,
                        "goal_priority": "5",
                        "form":{
                            "cost_per_year": "40000",
                            "number_of_years_of_education": "5",
                            "beginning_year": "2020"
                        },
                        "goal_success":0.29999999999999716,
                        "errors":{
                            "cost_per_year": [
                                "Value has to be Positive"
                            ],
                            "number_of_years_of_education": [
                                "Value has to be Positive"
                            ],
                            "beginning_year": [
                                "Value has to be Positive"
                            ]

                        }
                    },
                    {
                        "card_type":"_luxury_expense_data",
                        "_id": "CRD11",
                        "card_description":"User Luxury Item",
                        "title":"Luxury Item",
                        "card_category":"Goal",
                        "icon":"icon.png",
                        "priority":100,
                        "scale":1000,
                        "goal_priority": "4",
                        "form":{
                            "luxury_type":"car",
                            "luxury_item_cost": "2500000",
                            "year_of_purchase": "2025"
                        },
                        "goal_success":0.29999999999999716,
                        "errors":{
                            "luxury_type": [
                                "Value has to be Positive"
                            ],
                            "luxury_item_cost": [
                                "Value has to be Positive"
                            ],
                            "year_of_purchase": [
                                "Value has to be Positive"
                            ]

                        }
                    }
                ],
                "iso_goodness_values": {
                    "iso_goodness_value": 99.09,
                    "Engine_hash": "",
                    "goals_success": [
                        {
                            "goal_id": 1000,
                            "goal_priority": 2,
                            "goal_success": 0,
                            "goal_type": "_family_expense_data"
                        },
                        {
                            "goal_id": 2000,
                            "goal_priority": 1,
                            "goal_success": 0.29999999999999716,
                            "goal_type": "_personal_expense_data"
                        }
                    ]
                },
                "errors": {
                    "Engine_hash": "",
                    "CRD1": {
                        "annual_salary_income": [
                            "The input value cannot be negative number"
                        ]
                    },
                    "PF1": {
                        "number_of_years_to_retirement": [
                            "The input value cannot be negative number"
                        ]
                    },
                    "SC1": {
                        "insurance_value": [
                            "The input value cannot be negative number"
                        ]
                    }
                }
            }
        ]
    }
}