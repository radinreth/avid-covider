
/* tslint:disable */
export const script = {
  "s": [
    {
      "description": "תסריט לניהול שיחות מצד הפונה",
      "name": "פונה",
      "snippets": [
        {
          "name": "default",
          "steps": [
            {
              "goto": "personal-details",
              "uid": "a06dfaf7c2"
            },
            {
              "goto": "preconditions-check",
              "uid": "e9acb54132"
            },
            {
              "goto": "insulation",
              "uid": "7a26c4124f"
            },
            {
              "goto": "current-report",
              "uid": "346d2a3795"
            },
            {
              "goto": "exposures",
              "uid": "ff9a2f5002"
            },
            {
              "goto": "end-of-report",
              "uid": "91d138c403"
            }
          ],
          "uid": "898235e117"
        },
        {
          "name": "personal-details",
          "steps": [
            {
              "do": {
                "cmd": "load_local_storage",
                "params": [
                  "record"
                ]
              },
              "uid": "3dd65136eb"
            },
            {
              "switch": {
                "arg": "_existing_user",
                "cases": [
                  {
                    "match": "new",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "טוב שבאת,",
                            "ar": "ممتاز انك جيت/ي,",
                            "en": "How good of you to drop by,",
                            "es": "Qué bueno que viniste,",
                            "fr": "Merci de votre participation,",
                            "km-KH": "អរគុណណាស់ដែលអ្នកចូលមកទីនេះ",
                            "ru": "Как хорошо что вы здесь,"
                          }
                        },
                        "uid": "af5b77d3b6"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "התשובות שלך לכמה שאלות קצרות יעזרו מאוד במאמץ המשותף לעצור את התפרצות הקורונה",
                            "ar": "أجوبتك لشوية أسئلة قصيرة رح تساعد كثير بمسعانا المشترك لإيقاف إنتشار الكورونا",
                            "en": "Answering a few short questions would contribute a lot to our joint effort to stop the Corona outbreak",
                            "es": "Tus respuestas a algunas preguntas cortas nos ayudarán significativamente en el esfuerzo conjunto de detener el brote de coronavirus. ",
                            "fr": "Vos réponses à ces courtes questions nous aideront énormément dans notre  commun effort visant à arrêter la propagation du Coronavirus",
                            "km-KH": "ឆ្លើយនឹងសំនួរខ្លីៗមួយចំនួននេះ អ្នកនឹងចូលរួមចំណែកយ៉ាងច្រើនដល់ការខិតខំរួមគ្នាដើម្បីបញ្ឈប់ការផ្ទុះឡើងនៃវីរុសកូរ៉ូណា",
                            "ru": "Ваши ответы на несколько коротких вопросов очень помогут в совместных усилиях остановить вспышку Короны"
                          }
                        },
                        "uid": "73613badb3"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "אם זה בסדר, אבקש לדעת כמה פרטים אנונימיים לטובת המחקר",
                            "ar": "إذا ممكن, بدي أعرف شوية تفاصيل من أجل البحث.",
                            "en": "We have a few anonymous questions for you, to help the research",
                            "es": "Si te parece, me gustaría saber algunos datos anónimos a favor de la investigación",
                            "fr": "Si cela vous convient, j'aimerais connaître quelques détails anonymes au profit de l'étude",
                            "km-KH": "យើងមានសំណួរអនាមិកមួយចំនួនសម្រាប់អ្នកដើម្បីជួយក្នុងការស្រាវជ្រាវ",
                            "ru": "Если Вы не против, мы попросим Вас заполнить анонимный отчет для научного исследования."
                          }
                        },
                        "uid": "fbbed77d3e"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "נתחיל בדיווח עבורך, בסופו יתאפשר גם דיווח עבור בני משפחה נוספים",
                            "ar": "أولا إستبيانك انت, ولاحقا ممكن تعبئة إستبيان لأشخاص آخرين من عائلتك",
                            "en": "Let's start with reporting how you are feeling. Later you can submit another report for your family members",
                            "es": "Empezaremos con tu informe, y después también será posible informar acerca de otros miembros de la familia",
                            "fr": "Commençons à remplir ce questionnaire sur votre état de santé. Vous pourrez éventuellement le remplir pour d'autres membres de la famille",
                            "km-KH": "តោះចាប់ផ្តើមរាយការណ៍ពីអារម្មណ៍របស់អ្នក។ បន្ទាប់មកអ្នកអាចបញ្ចូលរបាយការណ៍ផ្សេងទៀតសម្រាប់សមាជិកគ្រួសាររបស់អ្នក",
                            "ru": "Начнем с вопросов о Вашем здоровье. После этого Вы сможете также заполнить отчет и о других членах семьи."
                          }
                        },
                        "uid": "208d7c05c2"
                      }
                    ],
                    "uid": "7ad5fdc853"
                  },
                  {
                    "match": "returning",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "הי! טוב לראותך שוב",
                            "ar": "مرحبا! مبسوطين برجعتك",
                            "en": "Hi! Nice to see you here again",
                            "es": "Hola, ¡qué bueno verte de nuevo!",
                            "fr": "Bonjour ! Ravi de vous revoir",
                            "km-KH": "សួស្តី! រីករាយណាស់ដែលបានជួបអ្នកនៅទីនេះម្តងទៀត",
                            "ru": "Здравствуйте, рады вас снова видеть!"
                          }
                        },
                        "uid": "29db961015"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "הדיווחים שלך ושל אחרים עוזרים לנו מאוד במחקר ובניסיון להיאבק בקורונה",
                            "ar": "إستباينك وإستبيانات الآخرين بتساعدنا كثير بالبحث وبمحاولة محاربة الكورونا",
                            "en": "The reports that you and others have submitted go a long way to support the research and the battle against the Corona Virus",
                            "es": "Tu informe y el de los demás nos son de gran ayuda en la investigación y en el intento de combatir el coronavirus",
                            "fr": "Vos rapports et ceux des autres nous aident énormément dans la recherche et la lutte contre le Corona",
                            "km-KH": "របាយការណ៍ដែលអ្នក រួមនិងអ្នកផ្សេងទៀតបានបញ្ជូន គឺគាំទ្រដល់ការស្រាវជ្រាវនិងការប្រយុទ្ធប្រឆាំងនឹងវីរុសកូរ៉ូណា",
                            "ru": "Ваши отчеты и отчеты других очень помогают нам в исследовании и попытке борьбы с Короной"
                          }
                        },
                        "uid": "b40745dc26"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "עבור מי ברצונך לדווח עכשיו?",
                            "ar": "لمين بدك تقوم/ي بتعبئة الإستبيان؟",
                            "en": "Whose health would you like to report about next? ",
                            "es": "¿Sobre quién deseas informar?",
                            "fr": "Pour qui souhaitez-vous remplir ce questionnaire maintenant ?",
                            "km-KH": "តើអ្នកចង់រាយការណ៍អំពីសុខភាពរបស់អ្នកណា?",
                            "ru": "За кого вы хотите заполнить отчет?"
                          }
                        },
                        "uid": "37236f3712"
                      },
                      {
                        "do": {
                          "cmd": "fetch_previous_reports",
                          "params": [
                            {
                              ".tx": {
                                "_": "דיווח חדש ב{{street}} {{city_town}}",
                                "ar": "تعبئة إستبيان جديد ب {{street}} مدينة {{city_town}}",
                                "en": "a new report in {{street}}, in {{city_town}}",
                                "es": "Nuevo informe en{{street}} {{city_town}}",
                                "fr": "Nouveau rapport de {{street}} {{city_town}}",
                                "km-KH": "របាយការណ៍ថ្មីនៅ  {{street}}, នៅ {{city_town}}",
                                "ru": "Новый отчёт, с улицы {{street}} в городе {{city_town}}"
                              }
                            },
                            {
                              ".tx": {
                                "_": "דיווח חדש בכתובת אחרת",
                                "ar": "إستبيان جديد بمكان سكن آخر",
                                "en": "New report for a different address",
                                "es": "Nuevo informe en otra dirección",
                                "fr": "Nouveau rapport pour une adresse différente",
                                "km-KH": "របាយការណ៍ថ្មីសម្រាប់អាស័យដ្ឋានថ្មី",
                                "ru": "Новый отчёт по другому адресу"
                              }
                            }
                          ],
                          "variable": "_report_options"
                        },
                        "uid": "e278b6b866"
                      },
                      {
                        "uid": "c10cf2ab5a",
                        "wait": {
                          "optionsFrom": "_report_options",
                          "variable": "_report_selection"
                        }
                      },
                      {
                        "do": {
                          "cmd": "update_from_selection",
                          "params": [
                            "record",
                            "_report_selection"
                          ]
                        },
                        "uid": "8c6d2e311f"
                      },
                      {
                        "say": "הכי טוב כשכולם מדווחים על עצמם בכל יום",
                        "uid": "34f7fd91ef"
                      },
                      {
                        "say": "אבל אם זה לא מסתדר, אפשר להקריא להם את השאלות או פשוט לענות בשמם",
                        "uid": "a46ed1d5ca"
                      }
                    ],
                    "uid": "8cc3349ed1"
                  }
                ]
              },
              "uid": "92054d1361"
            },
            {
              "switch": {
                "arg": "sex",
                "cases": [
                  {
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "בן? בת?",
                            "ar": "ذكر؟ أنثى؟",
                            "en": "Male? Female?",
                            "es": "¿Hombre? ¿Mujer?",
                            "fr": "Homme ? Femme ? ",
                            "km-KH": "ភេទប្រុស ឬ ស្រី? ",
                            "ru": "Женщина или мужчина?"
                          }
                        },
                        "uid": "289a7b45d8"
                      },
                      {
                        "uid": "2a490b8fb3",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "בן",
                                  "ar": "ذكر",
                                  "en": "Male",
                                  "es": "Hombre",
                                  "fr": "Homme",
                                  "km-KH": "ប្រុស",
                                  "ru": "Мужчина"
                                }
                              },
                              "value": "male"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "בת",
                                  "ar": "أنثى",
                                  "en": "Female",
                                  "es": "Mujer",
                                  "fr": "Femme",
                                  "km-KH": "ស្រី",
                                  "ru": "Женщина"
                                }
                              },
                              "value": "female"
                            }
                          ],
                          "variable": "sex"
                        }
                      }
                    ],
                    "uid": "b56d6cc89e",
                    "undefined": "true"
                  },
                  {
                    "default": "true"
                  }
                ]
              },
              "uid": "26ba900515"
            },
            {
              "switch": {
                "arg": "age",
                "cases": [
                  {
                    "steps": [
                      {
                        "switch": {
                          "arg": "sex",
                          "cases": [
                            {
                              "match": "male",
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "בן כמה?",
                                      "ar": "عُمره؟",
                                      "en": "How many years old?",
                                      "es": "¿Cuántos años tienes?",
                                      "fr": "Votre âge ?",
                                      "km-KH": "អាយុប៉ុន្មានឆ្នាំ?",
                                      "ru": "Ваш возраст"
                                    }
                                  },
                                  "uid": "1fb50d3ac9"
                                }
                              ],
                              "uid": "afe829864e"
                            },
                            {
                              "match": "female",
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "בת כמה?",
                                      "ar": "عمرها؟",
                                      "en": "How many years old?",
                                      "es": "¿Cuántos años tienes?",
                                      "fr": "Votre âge ?",
                                      "km-KH": "មានអាយុប៉ុន្មានឆ្នាំ?",
                                      "ru": "Ваш возраст"
                                    }
                                  },
                                  "uid": "c8e292635e"
                                }
                              ],
                              "uid": "708094b8ce"
                            }
                          ]
                        },
                        "uid": "78d963404b"
                      },
                      {
                        "uid": "7d99d320f0",
                        "wait": {
                          "input-kind": "number",
                          "input-max": "120",
                          "input-min": "0",
                          "placeholder": {
                            ".tx": {
                              "_": "גיל, 0-120",
                              "ar": "جيل، 0-120",
                              "en": "Age, 0-120",
                              "es": "Edad, 0-120",
                              "fr": "Âge, 0-120",
                              "km-KH": "អាយុ រវាង ០-120 ឆ្នាំ",
                              "ru": "Возраст, 0-120"
                            }
                          },
                          "variable": "age"
                        }
                      }
                    ],
                    "uid": "63516f048e",
                    "undefined": "true"
                  },
                  {
                    "default": "true"
                  }
                ]
              },
              "uid": "7394293f03"
            },
            {
              "switch": {
                "arg": "city_town",
                "cases": [
                  {
                    "steps": [
                      {
                        "do": {
                          "cmd": "prepare_city_town_suggestions",
                          "variable": "_cityTownSuggestions"
                        },
                        "uid": "b9d21cf202"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "מה הוא מקום המגורים?",
                            "ar": "شو مكان السكن؟",
                            "en": "Where do you live?",
                            "es": "¿En dónde vives?",
                            "fr": "Votre lieu de résidence ?",
                            "km-KH": "តើអ្នករស់នៅទីណា?",
                            "ru": "Где вы проживаете?"
                          }
                        },
                        "uid": "4c0abfecc9"
                      },
                      {
                        "uid": "174bb25fa7",
                        "wait": {
                          "placeholder": {
                            ".tx": {
                              "_": "שם העיר או הישוב",
                              "ar": "إسم المدينة أو القرية",
                              "en": "Place of residence",
                              "es": "Nombre de la ciudad o la localidad",
                              "fr": "Nom de la ville ou de la localité",
                              "km-KH": "ទីកន្លែងរស់នៅ",
                              "ru": "Название города или поселка"
                            }
                          },
                          "suggestionsFrom": "_cityTownSuggestions",
                          "variable": "city_town"
                        }
                      }
                    ],
                    "uid": "f23bac57b1",
                    "undefined": "true"
                  },
                  {
                    "default": "true"
                  }
                ]
              },
              "uid": "2ec0cb0fbb"
            },
            {
              "switch": {
                "arg": "street",
                "cases": [
                  {
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "שם הרחוב?",
                            "ar": "إسم الشارع؟",
                            "en": "Street name?",
                            "es": "¿En qué calle vives?",
                            "fr": "Nom de la rue ?",
                            "km-KH": "ឈ្មោះផ្លូវ?",
                            "ru": "Название улицы?"
                          }
                        },
                        "uid": "2966b83d86"
                      },
                      {
                        "uid": "4fdca8e817",
                        "wait": {
                          "placeholder": {
                            ".tx": {
                              "_": "שם הרחוב, אם ידוע",
                              "ar": "إسم الشارع، إذا معروف",
                              "en": "Street name, if known",
                              "es": "Nombre de la calle, si se sabe",
                              "fr": "Nom de la rue, s'il est connu",
                              "km-KH": "សូមប្រាប់ឈ្មោះផ្លូវ ប្រសិនបើដឹង",
                              "ru": "Название улицы, если известно"
                            }
                          },
                          "required": "false",
                          "variable": "street"
                        }
                      }
                    ],
                    "uid": "ced2bd1fc2",
                    "undefined": "true"
                  },
                  {
                    "default": "true"
                  }
                ]
              },
              "uid": "94b2b8dad7"
            },
            {
              "switch": {
                "arg": "alias",
                "cases": [
                  {
                    "steps": [
                      {
                        "do": {
                          "cmd": "calculate_alias",
                          "params": [
                            "record",
                            {
                              ".tx": {
                                "_": "בן {{age}} מ{{street}} {{city_town}}",
                                "ar": "إبن الـ {{age}} من {{street}} مدينة {{city_town}}",
                                "en": "{{age}} years old male from {{street}} {{city_town}}",
                                "es": "{{age}} años de {{street}} {{city_town}}",
                                "fr": "{{age}} ans de {{street}} {{city_town}}",
                                "km-KH": "ភេទប្រុស អាយុ{{age}} ឆ្នាំ មកពី {{street}} {{city_town}}",
                                "ru": "{{age}} лет, с улицы {{street}} в городе {{city_town}}"
                              }
                            },
                            {
                              ".tx": {
                                "_": "בת {{age}} מ{{street}} {{city_town}}",
                                "ar": "إبنة الـ {{age}} من {{street}} مدينة {{city_town}}",
                                "en": "{{age}} years old female from {{street}} {{city_town}}",
                                "es": "{{age}} años de {{street}} {{city_town}}",
                                "fr": "{{age}} ans de {{street}} {{city_town}}",
                                "km-KH": "ភេទស្រី អាយុ{{age}} ឆ្នាំ មកពី {{street}} {{city_town}}",
                                "ru": "{{age}} лет, с улицы {{street}} в городе {{city_town}}"
                              }
                            }
                          ],
                          "variable": "alias"
                        },
                        "uid": "8b55168adb"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "נהדר, בכדי לשמור על הפרטיות שלך, בדיווחים הבאים נקרא לך פשוט {{alias}}",
                            "ar": "ممتاز, من أجل المحافظة على خصوصيتك, في المرات القادمة سوف نسميك {{alias}}",
                            "en": "Great. In the interest of privacy, in your following daily reports we'll address you as  {{alias}}",
                            "es": "Excelente, para preservar tu privacidad, en los próximos informes, te llamaremos simplemente  {{alias}}",
                            "fr": "Parfait, afin de préserver votre confidentialité, dorénavant, nous vous appellerons simplement {{alias}}",
                            "km-KH": "ល្អណាស់។ ដើម្បីរក្សាភាពឯកជន នៅក្នុងរបាយការណ៍ប្រចាំថ្ងៃរបស់អ្នកខាងក្រោមនេះយើងនឹងសំដៅលើអ្នកជា {{alias}}",
                            "ru": "Отлично. Чтобы сохранить вашу конфиденциальность, в следующих отчетах мы просто вас будем называть {{alias}}"
                          }
                        },
                        "uid": "bf62d4b8ec"
                      }
                    ],
                    "uid": "1baea83011",
                    "undefined": "true"
                  },
                  {
                    "default": "true"
                  }
                ]
              },
              "uid": "65a50a6980"
            },
            {
              "do": {
                "cmd": "isAdult",
                "params": [
                  "record"
                ],
                "variable": "_isAdult"
              },
              "uid": "92dd5295a0"
            },
            {
              "switch": {
                "arg": "_isAdult",
                "cases": [
                  {
                    "match": "true",
                    "steps": [
                      {
                        "switch": {
                          "arg": "medical_staff_member",
                          "cases": [
                            {
                              "steps": [
                                {
                                  "say": "האם העבודה שלך היא כחלק מצוות רפואי- בטיפול בחולים או בקבלת קהל?",
                                  "uid": "9e168adf23"
                                },
                                {
                                  "uid": "9cf9cab2e9",
                                  "wait": {
                                    "options": [
                                      {
                                        "show": "כן, אני חלק מצוות רפואי",
                                        "value": "true"
                                      },
                                      {
                                        "show": "לא, אני לא",
                                        "value": "false"
                                      }
                                    ],
                                    "variable": "medical_staff_member"
                                  }
                                }
                              ],
                              "uid": "34975cfaea",
                              "undefined": "true"
                            },
                            {
                              "default": "true"
                            }
                          ]
                        },
                        "uid": "7e20f0fa55"
                      }
                    ],
                    "uid": "f9cc939acd"
                  }
                ]
              },
              "uid": "09d1a47992"
            }
          ],
          "uid": "ab5b28894d"
        },
        {
          "name": "preconditions-check",
          "steps": [
            {
              "switch": {
                "arg": "preconditions_received",
                "cases": [
                  {
                    "steps": [
                      {
                        "goto": "preconditions",
                        "uid": "2ee9cfe009"
                      }
                    ],
                    "uid": "b5f4a25217",
                    "undefined": "true"
                  },
                  {
                    "default": "true"
                  }
                ]
              },
              "uid": "be6509b6cd"
            }
          ],
          "uid": "7aebde456b"
        },
        {
          "name": "preconditions",
          "steps": [
            {
              "say": {
                ".tx": {
                  "_": "אשאל אותך על מחלות, שחשוב לנו לדעת אם אובחנו אצלך בעבר או שיש לך כיום:",
                  "ar": "بدي أسألك عن أمراض, اللي مهم لإلنا نعرف إذا تم تشخيصك بأي منها الآن أو في السابق:",
                  "en": "I'm going to ask about diseases, it's important to know whether you were diagnosed with them in the past and/or you are suffering from them now:",
                  "es": "Te preguntaré sobre algunas enfermedades, es importante que sepamos si te las han diagnosticado en el pasado:",
                  "fr": "Je vais vous poser des questions sur différentes maladies, et il est important pour nous de savoir si vous avez été diagnostiqué dans le passé ou si vous en souffrez aujourd'hui:",
                  "km-KH": "ខ្ញុំនឹងសួរអ្នកអំពីជំងឺ វាសំខាន់ណាស់ដែលយើងត្រូវដឹងថាតើអ្នកធ្លាប់បានធ្វើរោគវិនិច្ឆ័យកាលពីមុន និង / ឬក៏ កំពុងមានជំងឺទាំងនោះ។",
                  "ru": "Мы бы хотели задать вопрос о болезнях, которые были у вас диагностированы, в прошлом или в настоящем:"
                }
              },
              "uid": "6861e5ea76"
            },
            {
              "goto": "preconditions-diseases",
              "uid": "2e29f0c171"
            },
            {
              "goto": "preconditions-smoking",
              "uid": "c3bd210c40"
            },
            {
              "do": {
                "cmd": "set_flag",
                "params": [
                  "record",
                  "preconditions_received"
                ]
              },
              "uid": "8159f08bcb"
            }
          ],
          "uid": "d96a2bfad6"
        },
        {
          "name": "preconditions-diseases",
          "steps": [
            {
              "uid": "8188eb0451",
              "wait": {
                "multi": "true",
                "options": [
                  {
                    "field": "precondition_chronic_diabetes",
                    "show": {
                      ".tx": {
                        "_": "סוכרת",
                        "ar": "سُكري",
                        "en": "Diabetes",
                        "es": "Diabetes",
                        "fr": "Diabète",
                        "km-KH": "ជំងឺទឹកនោមផ្អែម",
                        "ru": "Диабет"
                      }
                    }
                  },
                  {
                    "field": "precondition_chronic_hypertension",
                    "show": {
                      ".tx": {
                        "_": "בעיית יתר לחץ דם",
                        "ar": "مشكلة ضغط دم عالي",
                        "en": "Hypertension",
                        "es": "Hipertensión arterial",
                        "fr": "Problème d'hypertension",
                        "km-KH": "ជំងឺលើសសំពាធឈាម",
                        "ru": "Высокое давление"
                      }
                    }
                  },
                  {
                    "field": "precondition_chronic_ischemic_heart_disease_or_stroke",
                    "show": {
                      ".tx": {
                        "_": "מחלת לב, כלי דם או שבץ",
                        "ar": "أمراض قلب, أوعية دموية أو جلطة",
                        "en": "Coronary artery disease, stroke or Cardiovascular disease",
                        "es": "Enfermedades del corazón, vasos sanguíneos o derrames cerebrales",
                        "fr": "Maladie cardiaque, artérielle ou AVC",
                        "km-KH": "ជំងឺទាក់ទងទៅនឹងសរសៃអាទែរកូរូណា ជំងឺដាច់សរសៃឈាមក្នុងខួរក្បាល ឬជំងឺបេះដូងសរសៃឈាម",
                        "ru": "Сердечно-сосудистое заболевание или инсульт"
                      }
                    }
                  },
                  {
                    "field": "precondition_chronic_lung_disease",
                    "show": {
                      ".tx": {
                        "_": "מחלת ריאות כרונית כולל אסתמה (ללא אסתמה בילדות)",
                        "ar": "مرض مُزمن بالرئات يشمل ربو - אסתמה (بإستثناء ربو بالطفولة) ",
                        "en": "Chronic pulmonary disease including asthma (not including childhood asthma)",
                        "es": "Enfermedad pulmonar crónica incluyendo asma (sin asma en la infancia)",
                        "fr": "Maladie pulmonaire chronique, y compris l'asthme (sans asthme infantile)",
                        "km-KH": "ជំងឺសួតរ៉ាំរ៉ៃរួមទាំងជំងឺហឺត (មិនរាប់បញ្ចូលជំងឺហឺតក្នុងវ័យកុមារភាព)",
                        "ru": "Хроническая болезнь легких, включая астму (но не детскую астму)"
                      }
                    }
                  },
                  {
                    "field": "precondition_chronic_cancer",
                    "show": {
                      ".tx": {
                        "_": "סרטן",
                        "ar": "سرطان",
                        "en": "Cancer",
                        "es": "Cáncer",
                        "fr": "Cancer",
                        "km-KH": "មហារីក",
                        "ru": "Рак"
                      }
                    }
                  },
                  {
                    "field": "precondition_chronic_kidney_failure",
                    "show": {
                      ".tx": {
                        "_": "אי ספיקת כליות",
                        "ar": "قصور كلوي",
                        "en": "Renal failure",
                        "es": "Insuficiencia renal",
                        "fr": "Insuffisance rénale",
                        "km-KH": "ខ្សោយតំរងនោម",
                        "ru": "Почечная недостаточность"
                      }
                    }
                  },
                  {
                    "field": "precondition_chronic_immune_system_suppression",
                    "show": {
                      ".tx": {
                        "_": "דיכוי חיסוני לרבות נטילת תרופות המדכאות את מערכת החיסון",
                        "ar": "نقص بالمناعة يشمل إستخدام أدوية اللي تُضعف جهاز المناعة",
                        "en": "Immunosupression, including taking immunosuppressant drugs",
                        "es": "Inmunosupresión incluyendo el consumo de remedios que inhiben el sistema inmunológico",
                        "fr": "Immunodéficience, y compris la prise de médicaments immunosupresseurs",
                        "km-KH": "ប្រពន្ធ័ការពាររាងកាយចុះខ្សោយ រួមមានលេបថ្នាំ ដែលធ្វើអោយប្រពន្ធ័ការពាររាងកាយចុះខ្សោយ",
                        "ru": "Иммуносупрессия, включая прием лекарств, подавляющих иммунную систему"
                      }
                    }
                  },
                  {
                    "class": "other",
                    "show": {
                      ".tx": {
                        "_": "<span class='empty'>אף אחת ממחלות הרקע הללו</span>\n<span class='not-empty'>זהו</span>\n<span class='none-selected'>ללא מחלות רקע</span>",
                        "ar": "<span class='empty'>ولا أي واحد من هاي الأمراض</span>\n<span class='not-empty'>بس </span>\n<span class='none-selected'>لا يوجد أمراض</span>",
                        "en": "<span class='empty'>None of these diseases</span>\n<span class='not-empty'>That's it</span>\n<span class='none-selected'>None of these diseases</span>",
                        "es": "<span class='empty'>Ninguna de estas enfermedades</span>\n<span class='not-empty'>Eso es todo</span>\n<span class='none-selected'>No hay enfermedades previas</span>",
                        "fr": "<span class='empty'>Aucun des ces antécédents médicaux</span>\n<span class='not-empty'>C'est tout</span>\n<span class='none-selected'>Pas d'antécédents médicaux </span>",
                        "km-KH": "<span class='empty'>គ្មានជំងឺទាំងនេះទេ</span>\n<span class='not-empty'>តែប៉ុណ្ណោះទេ</span>\n<span class='none-selected'>គ្មានជំងឺទាំងនេះទេ</span>",
                        "ru": "<span class='empty'>Ни одного из этих фоновых заболеваний</span>\n<span class='not-empty'>Всё</span>\n<span class='none-selected'>Нет фоновых заболеваний</span>"
                      }
                    }
                  }
                ],
                "variable": "_var"
              }
            },
            {
              "do": {
                "cmd": "update_from_selection",
                "params": [
                  "record",
                  "_var"
                ]
              },
              "uid": "d9eddffe93"
            }
          ],
          "uid": "56dc1eb702"
        },
        {
          "name": "preconditions-smoking",
          "steps": [
            {
              "say": {
                ".tx": {
                  "_": "מה לגבי עישון?",
                  "ar": "شو مع التدخين؟",
                  "en": "How about smoking?",
                  "es": "¿Qué podemos decir sobre el fumar?",
                  "fr": "Fumez-vous ?",
                  "km-KH": "តើមានជក់បារីទេ?",
                  "ru": "Как насчет курения?"
                }
              },
              "uid": "92a9456fa5"
            },
            {
              "uid": "cfb125483f",
              "wait": {
                "options": [
                  {
                    "show": {
                      ".tx": {
                        "_": "עישון יומיומי",
                        "ar": "تدخين بشكل يومي",
                        "en": "I smoke daily",
                        "es": "Fumo diariamente",
                        "fr": "Je fume quotidiennement ",
                        "km-KH": "ខ្ញុំជក់បារីរាល់ថ្ងៃ",
                        "ru": "ежедневное курение"
                      }
                    },
                    "value": "daily_smoker"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "עישנתי בעבר, הפסקתי לפני פחות מחמש שנים",
                        "ar": "دخنت في السابق, توقفت قبل أقل من خمس سنين",
                        "en": "I smoked in the past, stopped less than 5 years ago",
                        "es": "Fumé en el pasado, dejé hace menos de cinco años",
                        "fr": "J'ai fumé dans le passé, j'ai arrêté il y a moins de cinq ans",
                        "km-KH": "ខ្ញុំជក់បារីកាលពីមុន តែឈប់ជក់ខ្ទង់ 5 ឆ្នាំមុន",
                        "ru": "Я курил/а раньше, бросил/а менее пяти лет назад"
                      }
                    },
                    "value": "short_past_smoker"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "עישנתי בעבר, לפני יותר מחמש שנים",
                        "ar": "دخنت في السابق, قبل أكثر من خمس سنين",
                        "en": "I smoked in the past, more than 5 years ago",
                        "es": "Fumé en el pasado, hace más de cinco años",
                        "fr": "J'ai fumé dans le passé, il y a plus de cinq ans",
                        "km-KH": "ខ្ញុំជក់កាលពីជាង 5 ឆ្នាំមុន",
                        "ru": "Я курил/а раньше, бросил/а более пяти лет назад"
                      }
                    },
                    "value": "long_past_smokre"
                  },
                  {
                    "class": "other",
                    "show": {
                      ".tx": {
                        "_": "אף פעם",
                        "ar": "ولا مرة",
                        "en": "Never",
                        "es": "Nunca",
                        "fr": "Jamais",
                        "km-KH": "មិនដែល",
                        "ru": "Никогда"
                      }
                    },
                    "value": "never"
                  }
                ],
                "variable": "precondition_smoking"
              }
            }
          ],
          "uid": "397469aff5"
        },
        {
          "name": "insulation",
          "steps": [
            {
              "switch": {
                "arg": "exposure_status",
                "cases": [
                  {
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "אוקיי, עברנו את זה...",
                            "ar": "أوكي, مرقنا..",
                            "en": "OK, we're done with that...",
                            "es": "OK, lo pasamos... ",
                            "fr": "Bien, nous en avons fini avec ça...",
                            "km-KH": "អូខេ, យើងបញ្ចប់ហើយ ...",
                            "ru": "Так, это мы прошли..."
                          }
                        },
                        "uid": "384df452a2"
                      },
                      {
                        "say": {
                          ".tx": {
                            "_": "עכשיו, מה בנוגע לבידוד?",
                            "ar": " الآن, شو بالنسبة للحجر الصحي؟",
                            "en": "Now, what about quarantine?",
                            "es": "Ahora, ¿qué nos puedes decir respecto al aislamiento?",
                            "fr": "Maintenant, qu'en est-il du confinement ?",
                            "km-KH": "ឥឡូវចុះយ៉ាងម៉េចវិញពីការដាក់នៅដាច់ដោយឡែក?",
                            "ru": "А теперь, что насчет карантина?"
                          }
                        },
                        "uid": "cfe2d49073"
                      }
                    ],
                    "uid": "e7a358a104",
                    "undefined": "true"
                  },
                  {
                    "default": "true",
                    "steps": [
                      {
                        "switch": {
                          "arg": "exposure_status",
                          "cases": [
                            {
                              "pattern": "(insulation_with_family|insulation|diagnosed)",
                              "steps": [
                                {
                                  "say": "הדיווח הקודם היה על בידוד או אישפוז. האם משהו השתנה?",
                                  "uid": "312a90ab9c"
                                }
                              ],
                              "uid": "3fd598ac13"
                            },
                            {
                              "default": "true",
                              "steps": [
                                {
                                  "say": "בדיווח הקודם לא הוזכר בידוד או אשפוז. האם משהו השתנה?",
                                  "uid": "b7b570a8c4"
                                }
                              ],
                              "uid": "61970472ff"
                            }
                          ]
                        },
                        "uid": "c683e460e0"
                      },
                      {
                        "uid": "21ad5bc8c3",
                        "wait": {
                          "options": [
                            {
                              "show": "לא, המצב דומה"
                            },
                            {
                              "show": "כן, משהו השתנה",
                              "steps": [
                                {
                                  "say": "אז מה השתנה?",
                                  "uid": "5e7320cb38"
                                },
                                {
                                  "do": {
                                    "cmd": "clear_fields",
                                    "params": [
                                      "record",
                                      "exposure.*",
                                      "insulation.*"
                                    ]
                                  },
                                  "uid": "ca0311308d"
                                }
                              ],
                              "uid": "f1d7f53764"
                            }
                          ]
                        }
                      }
                    ],
                    "uid": "dc2b3db722"
                  }
                ]
              },
              "uid": "9961adaa98"
            },
            {
              "switch": {
                "arg": "exposure_status",
                "cases": [
                  {
                    "default": "true"
                  },
                  {
                    "steps": [
                      {
                        "uid": "fb0fdb2f9b",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "אני ומשפחתי בבידוד, ושוהים יחד באותם החדרים",
                                  "ar": "أنا وعائلتي بحجر منزلي, ومنتواجد مع بعض بنفس الغرف",
                                  "en": "My family and I are all under quarantine, in the same rooms",
                                  "es": "Estoy en aislamiento con mi familia y permanecemos juntos en las mismas habitaciones",
                                  "fr": "Moi et ma famille sommes en confinement, nous restons ensemble dans les mêmes pièces",
                                  "km-KH": "គ្រួសារខ្ញុំនិងខ្ញុំទាំងអស់ស្ថិតនៅដាច់ដោយឡែក(quarantine)ក្នុងបន្ទប់តែមួយ",
                                  "ru": "Я и моя семья на карантине и находимся в одном помещении"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "באיזה תאריך התחיל הבידוד?",
                                      "ar": "في أي تاريخ بدأ الحجر الصحي؟",
                                      "en": "On what date did your quarantine begin?",
                                      "es": "¿En qué fecha comenzó el aislamiento?",
                                      "fr": "À quelle date le confinement a-t-il commencé ?",
                                      "km-KH": "តើអ្នកបាននៅដាច់ដោយឡែកចាប់តាំងពីពេលណា?",
                                      "ru": "Какого числа начался карантин?"
                                    }
                                  },
                                  "uid": "f1818f4f2d"
                                },
                                {
                                  "uid": "645528a738",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": {
                                      ".tx": {
                                        "_": "תאריך: dd/mm/yy",
                                        "ar": "تاريخ: dd/mm/yy",
                                        "en": "date: dd/mm/yy",
                                        "es": "Fecha: dd.mm.aa",
                                        "fr": "Date: dd/mm/yy",
                                        "km-KH": "កាលបរិច្ឆេទ៖ ថ្ងៃ/ខែ/ ឆ្នាំ",
                                        "ru": "Число: dd/mm/yy"
                                      }
                                    },
                                    "variable": "insulation_start_date"
                                  }
                                }
                              ],
                              "uid": "f14e63ab7b",
                              "value": "insulation_with_family"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "אני בבידוד מבני משפחה, ובחדר סגור",
                                  "ar": "أنا معزول عن عائلتي, وبغرفة مغلقة",
                                  "en": "I'm quarantined from my family, in a separate room",
                                  "es": "Estoy aislado de mi familia, y en un cuarto cerrado",
                                  "fr": "Je suis isolé de ma famille et dans une pièce fermée",
                                  "km-KH": "ខ្ញុំត្រូវបានដាក់អោយនៅដាច់ដោយឡែកពីគ្រួសារខ្ញុំ នៅក្នុងបន្ទប់ដាច់ដោយឡែកមួយ",
                                  "ru": "Я в изоляции от семьи, и в закрытой комнате"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "באיזה תאריך התחיל הבידוד?",
                                      "ar": "في أي تاريخ بدأ الحجر الصحي؟",
                                      "en": "On what date did your quarantine begin?",
                                      "es": "¿En qué fecha comenzó el aislamiento?",
                                      "fr": "À quelle date le confinement a-t-il commencé ?",
                                      "km-KH": "តើអ្នកស្ថិតនៅដាច់ដោយឡែកពីគេចាប់ផ្តើមពីពេលណា?",
                                      "ru": "Какого числа начался карантин?"
                                    }
                                  },
                                  "uid": "d64d63ba82"
                                },
                                {
                                  "uid": "5f298814b6",
                                  "wait": {
                                    "input-kind": "date",
                                    "placeholder": {
                                      ".tx": {
                                        "_": "תאריך: dd/mm/yy",
                                        "ar": "تاريخ: dd/mm/yy",
                                        "en": "date: dd/mm/yy",
                                        "es": "Fecha: dd.mm.aa",
                                        "fr": "Date: dd/mm/yy",
                                        "km-KH": "កាលបរិច្ឆេទ៖ ថ្ងៃ/ខែ/ ឆ្នាំ",
                                        "ru": "Число: dd/mm/yy"
                                      }
                                    },
                                    "variable": "insulation_start_date"
                                  }
                                },
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "מה הסיבה לשהות שלך בבידוד?",
                                      "ar": "شو سبب وجودك بالحجر الصحي؟",
                                      "en": "Why are you under quarantine?",
                                      "es": "¿Cuál es la razón por la que te encuentras en aislamiento?",
                                      "fr": "Quelle est la raison de votre confinement ?",
                                      "km-KH": "ហេតុអ្វីបានជាអ្នកស្ថិតនៅដាច់ដោយឡែកពីគេឯង?",
                                      "ru": "В чем причина вашего пребывания на карантине?"
                                    }
                                  },
                                  "uid": "a23809efad"
                                },
                                {
                                  "uid": "a51b1efaef",
                                  "wait": {
                                    "options": [
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "אני בבידוד כי חזרתי מחו״ל לאחרונה",
                                            "ar": "أنا بحجر صحي لأنني كنت مسافر/ة",
                                            "en": "I'm under quarantine because I recently returned from a foreign country",
                                            "es": "Estoy en cuarentena ya que regresé últimamente del exterior",
                                            "fr": "Je suis en confinement car je viens de rentrer de l'étranger",
                                            "km-KH": "ខ្ញុំស្ថិតនៅដាច់ដោយឡែកពីគេព្រោះខ្ញុំទើបត្រឡប់មកពីប្រទេសក្រៅ",
                                            "ru": "Я на карантине вследствие недавнего возвращения из-за границы"
                                          }
                                        },
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "מתי חזרת לארץ?",
                                                "ar": "وينتا رجعت/ي على البلاد؟",
                                                "en": "When did you return to Israel?",
                                                "es": "¿Cuándo has regresado al país?",
                                                "fr": "Quand êtes-vous revenu en Israël ?",
                                                "km-KH": "តើអ្នកបានត្រឡប់មកកម្ពុជាវិញនៅពេលណា?",
                                                "ru": "Когда вы вернулись в страну?"
                                              }
                                            },
                                            "uid": "3af14d42ee"
                                          },
                                          {
                                            "uid": "8d53223749",
                                            "wait": {
                                              "input-kind": "date",
                                              "options": "",
                                              "placeholder": {
                                                ".tx": {
                                                  "_": "תאריך: dd/mm/yy",
                                                  "ar": "تاريخ: dd/mm/yy",
                                                  "en": "date: dd/mm/yy",
                                                  "es": "Fecha: dd.mm.aa",
                                                  "fr": "Date: dd/mm/yy",
                                                  "km-KH": "កាលបរិច្ឆេទ៖ ថ្ងៃ/ខែ/ ឆ្នាំ",
                                                  "ru": "Число: dd/mm/yy"
                                                }
                                              },
                                              "variable": "insulation_returned_from_abroad_date"
                                            }
                                          }
                                        ],
                                        "uid": "afa97d10e1",
                                        "value": "back-from-abroad"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "אני בבידוד כי נחשפתי לחולה מאומת",
                                            "ar": "أنا بحجر صحي لأنني تعرضت لمريض/ة تم التحقق منه/ا",
                                            "en": "I'm under quarantine because I've been exposed to a verified patient",
                                            "es": "Estoy en aislamiento porque he estado expuesto a un enfermo confirmado",
                                            "fr": "Je suis en confinement car j'ai été exposé à un malade confirmé",
                                            "km-KH": "ខ្ញុំស្ថិតនៅដាច់ដោយឡែកពីគេព្រោះខ្ញុំបានប៉ះពាល់នឹងអ្នកជំងឺដែលផ្ទុកវិរុស",
                                            "ru": "Я на карантине потому что был/а  рядом с подтвержденным больным"
                                          }
                                        },
                                        "steps": [
                                          {
                                            "say": {
                                              ".tx": {
                                                "_": "ידוע לך מה מספר החולה שפגשת?",
                                                "ar": "بتعرف/ي رقم المريض/ة اللي التقيته/ا؟",
                                                "en": "Do you know the number of the verified patient that you've been exposed to?",
                                                "es": "¿Sabes con qué enfermo (No. de enfermo) te has encontrado?",
                                                "fr": "Savez-vous le numéro du malade que vous avez rencontré ?",
                                                "km-KH": "តើអ្នកដឹងអំពីចំនួនអ្នកជំងឺដែលផ្ទុកវិរុសដែលអ្នកបានជួបប្រទះទេ?",
                                                "ru": "Известен ли вам номер больного с которым вы были в контакте?"
                                              }
                                            },
                                            "uid": "6a33972a29"
                                          },
                                          {
                                            "uid": "bd03329baf",
                                            "wait": {
                                              "options": [
                                                {
                                                  "show": {
                                                    ".tx": {
                                                      "_": "כן, ידוע לי מספר החולה",
                                                      "ar": "نعم، أنا أعرف رقم المريض",
                                                      "en": "Yes, I know the verified patient's number",
                                                      "es": "Sí, sé con qué número de enfermo me he encontrado ",
                                                      "fr": "Oui, je connais le numéro du malade",
                                                      "km-KH": "បាទ / ចាសខ្ញុំដឹងពីចំនួនអ្នកជំងឺដែលផ្ទុកវិរុស",
                                                      "ru": "Да, мне известен номер больного"
                                                    }
                                                  },
                                                  "steps": [
                                                    {
                                                      "say": {
                                                        ".tx": {
                                                          "_": "מצויין. מה המספר?",
                                                          "ar": "ممتاز. شو الرقم؟",
                                                          "en": "Excellent. What's their number?",
                                                          "es": "Excelente, ¿cuál es el número?",
                                                          "fr": "Excellent. Quel est ce numéro ?",
                                                          "km-KH": "ល្អណាស់។ តើលេខទូរសព្ទ័របស់គេប៉ុន្មានដែរ?",
                                                          "ru": "Отлично. Какой его номер?"
                                                        }
                                                      },
                                                      "uid": "0e021aac7c"
                                                    },
                                                    {
                                                      "uid": "4ff35e1c83",
                                                      "wait": {
                                                        "placeholder": {
                                                          ".tx": {
                                                            "_": "מספר החולה שפגשתי, בספרות",
                                                            "ar": "رقم المريض/ة اللي التقيت فيه/ا, بالأرقام",
                                                            "en": "The number of the verified patient I met, digits only",
                                                            "es": "Número del enfermo con el que me he encontrado, en cifras",
                                                            "fr": "Numéro du malade rencontré, en chiffre",
                                                            "km-KH": "ចំនួនអ្នកជំងឺដែលផ្ទុកវីរុសដែលខ្ញុំបានជួបគឺមានតែតួលេខប៉ុណ្ណោះ",
                                                            "ru": "Номер больного с которым я был/а в контакте, цифрами"
                                                          }
                                                        },
                                                        "variable": "insulation_patient_number"
                                                      }
                                                    },
                                                    {
                                                      "say": {
                                                        ".tx": {
                                                          "_": "האם זכור לך היום שבו נפגשתם?",
                                                          "ar": "متذكر/ة بأي يوم التقيت فيه/ا؟",
                                                          "en": "Do you remember the date when you met that patient?",
                                                          "es": "¿Recuerdas en qué fecha se encontraron?",
                                                          "fr": "Vous rappelez-vous du jour où vous vous êtes rencontrés ?",
                                                          "km-KH": "តើអ្នកចាំកាលបរិច្ឆេទដែលអ្នកជួបអ្នកជំងឺនោះទេ?",
                                                          "ru": "Вы помните день вашей встречи?"
                                                        }
                                                      },
                                                      "uid": "b1e097d57b"
                                                    },
                                                    {
                                                      "uid": "58f49c26f5",
                                                      "wait": {
                                                        "options": [
                                                          {
                                                            "show": {
                                                              ".tx": {
                                                                "_": "כן, זכור לי התאריך",
                                                                "ar": "نعم، قم بتذكر التاريخ",
                                                                "en": "Yes, I remember the date",
                                                                "es": "Sí, recuerdo la fecha",
                                                                "fr": "Oui, je me souviens de la date",
                                                                "km-KH": "បាទ / ចាសខ្ញុំចាំកាលបរិច្ឆេទ",
                                                                "ru": "Да, я помню дату"
                                                              }
                                                            },
                                                            "steps": [
                                                              {
                                                                "say": {
                                                                  ".tx": {
                                                                    "_": "מה היה התאריך?",
                                                                    "ar": "شو كان التاريخ؟",
                                                                    "en": "What was the date?",
                                                                    "es": "¿En qué fecha fue?",
                                                                    "fr": "Quelle était la date ?",
                                                                    "km-KH": "តើកាលបរិច្ឆេទពេលណាដែរ?",
                                                                    "ru": "Какого это было числа?"
                                                                  }
                                                                },
                                                                "uid": "9f06440aec"
                                                              },
                                                              {
                                                                "uid": "759844494b",
                                                                "wait": {
                                                                  "input-kind": "date",
                                                                  "placeholder": {
                                                                    ".tx": {
                                                                      "_": "תאריך: dd/mm/yy",
                                                                      "ar": "تاريخ: dd/mm/yy",
                                                                      "en": "date: dd/mm/yy",
                                                                      "es": "Fecha: dd.mm.aa",
                                                                      "fr": "Date: dd/mm/yy",
                                                                      "km-KH": "កាលបរិច្ឆេទ៖ ថ្ងៃ/ខែ/ ឆ្នាំ",
                                                                      "ru": "число: dd/mm/yy"
                                                                    }
                                                                  },
                                                                  "variable": "insulation_exposure_date"
                                                                }
                                                              }
                                                            ],
                                                            "uid": "72b4e523bf",
                                                            "value": "yes"
                                                          },
                                                          {
                                                            "show": {
                                                              ".tx": {
                                                                "_": "לא זכור לי",
                                                                "ar": "مش متذكر/ة",
                                                                "en": "I don't remember",
                                                                "es": "No lo recuerdo",
                                                                "fr": "Je ne me souviens pas",
                                                                "km-KH": "ខ្ញុំចាំមិនបានទេ",
                                                                "ru": "Не припомню"
                                                              }
                                                            },
                                                            "value": "no"
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  "uid": "a6fdd5ed5d",
                                                  "value": "yes"
                                                },
                                                {
                                                  "show": {
                                                    ".tx": {
                                                      "_": "לא ידוע לי",
                                                      "ar": "لا أعرف",
                                                      "en": "I don't know",
                                                      "es": "No lo sé",
                                                      "fr": "Je ne sais pas",
                                                      "km-KH": "ខ្ញុំចាំមិនបានទេ",
                                                      "ru": "Мне не известно"
                                                    }
                                                  },
                                                  "value": "no"
                                                }
                                              ]
                                            }
                                          }
                                        ],
                                        "uid": "8dee71f300",
                                        "value": "contact-with-patient"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "אני בבידוד כי חוויתי תסמינים",
                                            "ar": "أنا موجود/ة بحجر صحي لأنني شعرت بأعراض",
                                            "en": "I'm under quarantine because I've exhibited symptoms ",
                                            "es": "Estoy en aislamiento porque he padecido síntomas",
                                            "fr": "Je suis en confinement parce-que j'ai eu des symptômes",
                                            "km-KH": "ខ្ញុំស្ថិតនៅដាច់ដោយឡែកពីគេព្រោះខ្ញុំមានរោគសញ្ញា",
                                            "ru": "Я на карантине вследствии появления симптомов"
                                          }
                                        },
                                        "value": "has_symptoms"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "אני בבידוד מרצוני האישי",
                                            "ar": "أنا موجود/ة بحجر صحي بإختياري الشخصي",
                                            "en": "I'm under quarantine of my own choice",
                                            "es": "Estoy en aislamiento por propia voluntad",
                                            "fr": "Je suis en confinement de ma propre volonté",
                                            "km-KH": "ខ្ញុំស្ថិតនៅដាច់ដោយឡែកពីគេដោយសារជម្រើសផ្ទាល់ខ្លួនរបស់ខ្ញុំ",
                                            "ru": "Я на самоизоляции"
                                          }
                                        },
                                        "value": "voluntary"
                                      }
                                    ],
                                    "variable": "insulation_reason"
                                  }
                                }
                              ],
                              "uid": "cdbb8ee754",
                              "value": "insulation"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "אני חולה קורונה (מאומת בבדיקת מעבדה)",
                                  "ar": "أنا مريض كورونا (مؤكد بفحص مختبر)",
                                  "en": "I'm a verified COVID-19 patient (verified by a lab test)",
                                  "es": "Estoy diagnosticado con coronavirus (confirmado por medio de análisis de laboratorio)",
                                  "fr": "Je suis malade du Corona (vérifié par un test en laboratoire)",
                                  "km-KH": "ខ្ញុំជាអ្នកជំងឺដែលមានផ្ទុក COVID-19 (ផ្ទៀងផ្ទាត់ដោយការធ្វើតេស្តពីមន្ទីរពិសោធន៍)",
                                  "ru": "Я болен Короной (подтверждено лабораторными анализами)"
                                }
                              },
                              "steps": [
                                {
                                  "uid": "32b02ca38f",
                                  "wait": {
                                    "options": [
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "אשפוז בבית חולים",
                                            "ar": "في المستشفى",
                                            "en": "Hospitalized",
                                            "es": "Hospitalización",
                                            "fr": "Hospitalisation",
                                            "km-KH": "ដេកពេទ្យ",
                                            "ru": "Госпитализирован/а в больнице"
                                          }
                                        },
                                        "value": "hospital"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "בבית מלון",
                                            "ar": "في الفندق",
                                            "en": "Hotel",
                                            "es": "En un hotel",
                                            "fr": "Dans un hôtel",
                                            "km-KH": "អូតែល",
                                            "ru": "В отеле"
                                          }
                                        },
                                        "value": "hotel"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "בבית",
                                            "ar": "في البيت",
                                            "en": "Home",
                                            "es": "En mi casa",
                                            "fr": "À la maison",
                                            "km-KH": "ផ្ទះ",
                                            "ru": "Дома"
                                          }
                                        },
                                        "value": "home"
                                      },
                                      {
                                        "show": {
                                          ".tx": {
                                            "_": "החלמתי ואני בבית",
                                            "ar": "شفيت وأنا في البيت",
                                            "en": "I'm recovered and at home",
                                            "es": "Ya me he recuperado y estoy en casa",
                                            "fr": "Je ne suis plus malade et je suis à la maison",
                                            "km-KH": "ខ្ញុំបានជាសះស្បើយហើយនៅផ្ទះ",
                                            "ru": "Я выздоровел/а и нахожусь дома"
                                          }
                                        },
                                        "value": "recovered"
                                      }
                                    ],
                                    "variable": "diagnosed_location"
                                  }
                                }
                              ],
                              "uid": "7fdfa3db6a",
                              "value": "diagnosed"
                            },
                            {
                              "class": "other",
                              "show": {
                                ".tx": {
                                  "_": "אני לא בבידוד",
                                  "ar": "أنا لست بحجر صحي",
                                  "en": "I'm not under quarantine",
                                  "es": "No estoy en aislamiento",
                                  "fr": "Je ne suis pas en confinement",
                                  "km-KH": "ខ្ញុំមិនស្ថិតនៅដាច់ដោយឡែកពីគេទេ",
                                  "ru": "Я не на карантине"
                                }
                              },
                              "value": "none"
                            }
                          ],
                          "variable": "exposure_status"
                        }
                      }
                    ],
                    "uid": "0aea258f6e",
                    "undefined": "true"
                  }
                ]
              },
              "uid": "7a791ac067"
            }
          ],
          "uid": "ebd966ac43"
        },
        {
          "name": "current-report",
          "steps": [
            {
              "switch": {
                "arg": "general_feeling",
                "cases": [
                  {
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "ומה נשמע היום?",
                            "ar": "كيف حالك اليوم؟",
                            "en": "How are things today?",
                            "es": "¿Y cómo estás hoy?",
                            "fr": "Et comment allez-vous aujourd'hui ?",
                            "km-KH": "តើថ្ងៃនេះយ៉ាងម៉េចដែរ?",
                            "ru": "А как ваше самочувствие сегодня?"
                          }
                        },
                        "uid": "a8ade6b2ba"
                      },
                      {
                        "uid": "8bd1462742",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "בסדר גמור",
                                  "ar": "ممتاز",
                                  "en": "Fine",
                                  "es": "Todo está bien",
                                  "fr": "Très bien",
                                  "km-KH": "ល្អ",
                                  "ru": "отлично"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "נהדר לשמוע!",
                                      "ar": "ابسطنا نسمع!",
                                      "en": "That's great!",
                                      "es": "¡Nos alegra saber eso!",
                                      "fr": "Bon de l'entendre !",
                                      "km-KH": "ល្អណាស់!",
                                      "ru": "Рады слышать!"
                                    }
                                  },
                                  "uid": "c56fee8f07"
                                },
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "ליתר בטחון, האם יש משהו מהתסמינים האלה?",
                                      "ar": "فقط للتأكد, هل عندك أحد هاي الأعراض؟",
                                      "en": "To be on the safe side: experiencing any of the following symptoms?",
                                      "es": "Sólo para estar seguros, ¿sufres de algunos de estos síntomas?",
                                      "fr": "Pour être sûr, avez-vous l'un de ces symptômes ?",
                                      "km-KH": "ដើម្បីឱ្យប្រាកដ: តើអ្នកមានជួបនឹងរោគសញ្ញាដូចខាងក្រោមនេះ?",
                                      "ru": "На всякий случай, есть ли у вас какие-либо из следующих симптомов:"
                                    }
                                  },
                                  "uid": "6145fe48e5"
                                }
                              ],
                              "uid": "2ff5d05446",
                              "value": "feel_good"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "לא כל כך טוב",
                                  "ar": "مش كثير منيح",
                                  "en": "Not so good",
                                  "es": "No muy bien",
                                  "fr": "Pas très bien",
                                  "km-KH": "មិនសូវ​ល្អទេ",
                                  "ru": "Не очень хорошо"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "אוייש… איך זה בא לידי ביטוי?",
                                      "ar": "أوتش... كيف إحساسك؟",
                                      "en": "Oh, sorry to hear that... what are you feeling?",
                                      "es": "¡Oy! y ¿Cómo se manifiesta?",
                                      "fr": "Aïe… comment cela se manifeste-t-il ?",
                                      "km-KH": "អូសុំទោស... តើអ្នកកំពុងមានអារម្មណ៍យ៉ាងណា?",
                                      "ru": "Какая неприятность... В чем это выражается?"
                                    }
                                  },
                                  "uid": "363362616a"
                                }
                              ],
                              "uid": "1764f660a9",
                              "value": "feel_bad"
                            }
                          ],
                          "variable": "general_feeling"
                        }
                      }
                    ],
                    "uid": "2bf7b52516",
                    "undefined": "true"
                  },
                  {
                    "match": "feel_good",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "אני מקווה שהמרגש עדיין טוב כמו בדיווח הקודם",
                            "ar": "منتأمل أنك منيح كيف كنت بآخر إستبيان",
                            "en": "Hopefully, still feeling well like last time",
                            "es": "Espero que aún te sientas bien, como en el último informe enviado",
                            "fr": "J'espère que vous vous sentez toujours aussi bien que dans le rapport précédent",
                            "km-KH": "សង្ឃឹមថានៅតែមានអារម្មណ៍ល្អដូចលើកមុន",
                            "ru": "Я надеюсь, что вы себя чувствуете по-прежнему так же хорошо, как в предыдущем докладе"
                          }
                        },
                        "uid": "a5ebc5d67b"
                      },
                      {
                        "uid": "46d340eb90",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, בסדר גמור",
                                  "ar": "نعم, تمام",
                                  "en": "Yep, fine",
                                  "es": "Sí, todo está bien",
                                  "fr": "Oui, très bien",
                                  "km-KH": "មិនអីទេ",
                                  "ru": "Отлично"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "נהדר לשמוע!",
                                      "ar": "ابسطنا نسمع!",
                                      "en": "That's great!",
                                      "es": "¡Nos alegra saber eso!",
                                      "fr": "Bon de l'entendre !",
                                      "km-KH": "ល្អណាស់!",
                                      "ru": "Рады слышать!"
                                    }
                                  },
                                  "uid": "2936c148b0"
                                },
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "ליתר בטחון, האם יש משהו מהתסמינים האלה?",
                                      "ar": "فقط للتأكد, هل عندك أحد هاي الأعراض؟",
                                      "en": "To be on the safe side: experiencing any of the following symptoms?",
                                      "es": "Sólo para estar seguros, ¿sufres de algunos de estos síntomas?",
                                      "fr": "Pour être sûr, avez-vous l'un de ces symptômes ?",
                                      "km-KH": "ដើម្បីឱ្យប្រាកដ: តើអ្នកមានជួបនឹងរោគសញ្ញាដូចខាងក្រោមនេះទេ?",
                                      "ru": "На всякий случай, есть ли у вас какие-либо из следующих симптомов:"
                                    }
                                  },
                                  "uid": "fac1c21d48"
                                }
                              ],
                              "uid": "3b21d2175a",
                              "value": "feel_good"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "לצערי לא כל כך טוב",
                                  "ar": "مع الأسف, مش كثير منيح",
                                  "en": "Not too well, I'm afraid",
                                  "es": "Lamentablemente, no muy bien",
                                  "fr": "Malheureusement pas très bien",
                                  "km-KH": "មិនល្អទេ",
                                  "ru": "К сожалению, не очень хорошо"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "אוייש… איך זה בא לידי ביטוי?",
                                      "ar": "أوتش... كيف إحساسك؟",
                                      "en": "Oh, sorry to hear that... what are you feeling?",
                                      "es": "¡Oy! y ¿Cómo se manifiesta?",
                                      "fr": "Aïe… comment cela se manifeste-t-il ?",
                                      "km-KH": "អូសុំទោស... តើអ្នកកំពុងមានអារម្មណ៍យ៉ាងណា?",
                                      "ru": "Какая неприятность... В чем это выражается?"
                                    }
                                  },
                                  "uid": "fa7220ddab"
                                }
                              ],
                              "uid": "47d91ed4d0",
                              "value": "feel_bad"
                            }
                          ],
                          "variable": "general_feeling"
                        }
                      }
                    ],
                    "uid": "7671e76a41"
                  },
                  {
                    "match": "feel_bad",
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "אני מקווה שהמצב השתפר מהדיווח האחרון..?",
                            "ar": "منتأمل أنه الوضع تحسن عن آخر إستبيان..؟",
                            "en": "Feeling better than last time, hopefully?",
                            "es": "Espero que la situación haya mejorado desde el último informe...",
                            "fr": "J'espère que votre état s'est amélioré depuis le dernier rapport ..?",
                            "km-KH": "សង្ឃឹមថាមានអារម្មណ៍ល្អជាងពេលមុន?",
                            "ru": "Я надеюсь, что ваше самочувствие улучшилось с момента последнего доклада...?"
                          }
                        },
                        "uid": "8c4adf385a"
                      },
                      {
                        "uid": "98c766d9cb",
                        "wait": {
                          "options": [
                            {
                              "show": {
                                ".tx": {
                                  "_": "כן, עכשיו הכל בסדר",
                                  "ar": "نعم, حاليًا كلشي تمام",
                                  "en": "Yep, it's fine now",
                                  "es": "Sí, ahora todo está bien",
                                  "fr": "Oui, maintenant tout va bien",
                                  "km-KH": "បាទ / ចាស ឥលូវល្អ",
                                  "ru": "Да, теперь все хорошо"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "נהדר לשמוע!",
                                      "ar": "ابسطنا نسمع!",
                                      "en": "That's great!",
                                      "es": "¡Nos alegra saber eso!",
                                      "fr": "Bon de l'entendre !",
                                      "km-KH": "ល្អណាស់!",
                                      "ru": "Рады слышать!"
                                    }
                                  },
                                  "uid": "b9cde574b8"
                                },
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "ליתר בטחון, האם יש משהו מהתסמינים האלה?",
                                      "ar": "فقط للتأكد, هل عندك أحد هاي الأعراض؟",
                                      "en": "To be on the safe side: experiencing any of the following symptoms?",
                                      "es": "Sólo para estar seguros, ¿sufres de algunos de estos síntomas?",
                                      "fr": "Pour être sûr, avez-vous l'un de ces symptômes ?",
                                      "km-KH": "ដើម្បីឱ្យប្រាកដ: តើអ្នកមានជួបនឹងរោគសញ្ញាដូចខាងក្រោមនេះទេ?",
                                      "ru": "На всякий случай, есть ли у вас какие-либо из следующих симптомов:"
                                    }
                                  },
                                  "uid": "38b8805a2d"
                                }
                              ],
                              "uid": "75d8ef3565",
                              "value": "feel_good"
                            },
                            {
                              "show": {
                                ".tx": {
                                  "_": "לא, עדיין לא משהו",
                                  "ar": "لا, بعدني مش منيح",
                                  "en": "No, still so-so",
                                  "es": "No, aún no me siento bien",
                                  "fr": "Non, pas vraiment ",
                                  "km-KH": "អត់ទេ នៅតែអញ្ចឹង",
                                  "ru": "Нет, всё еще не очень"
                                }
                              },
                              "steps": [
                                {
                                  "say": {
                                    ".tx": {
                                      "_": "אוייש… איך זה בא לידי ביטוי?",
                                      "ar": "أوتش... كيف إحساسك؟",
                                      "en": "Oh, sorry to hear that... what are you feeling?",
                                      "es": "¡Oy! y ¿Cómo se manifiesta?",
                                      "fr": "Aïe… comment cela se manifeste-t-il ?",
                                      "km-KH": "អូសុំទោស... តើអ្នកកំពុងមានអារម្មណ៍យ៉ាងណា?",
                                      "ru": "Какая неприятность... В чем это выражается?"
                                    }
                                  },
                                  "uid": "49c5b0cb29"
                                }
                              ],
                              "uid": "8e09eddfe6",
                              "value": "feel_bad"
                            }
                          ],
                          "variable": "general_feeling"
                        }
                      }
                    ],
                    "uid": "d7ec4e1f7c"
                  }
                ]
              },
              "uid": "85bf6d9ac2"
            },
            {
              "goto": "current-report-symptoms",
              "uid": "991e420cbb"
            }
          ],
          "uid": "c961d87d9d"
        },
        {
          "name": "current-report-symptoms",
          "steps": [
            {
              "goto": "current-report-top-level-symptoms",
              "uid": "b19e056d7d"
            },
            {
              "goto": "current-report-cough-symptoms",
              "uid": "cb252a9f1a"
            },
            {
              "goto": "current-report-pain-symptoms",
              "uid": "03cd72e122"
            },
            {
              "goto": "current-report-temperature",
              "uid": "4cd7908fba"
            }
          ],
          "uid": "ee520e19a7"
        },
        {
          "name": "current-report-temperature",
          "steps": [
            {
              "say": {
                ".tx": {
                  "_": "האם נמדד חום ביממה האחרונה?",
                  "ar": "هل قمت/ي بقياس درجة حرارتك في آخر يومين؟",
                  "en": "Was temperature taken over the last 24 hours? ",
                  "es": "¿Te has tomado la fiebre durante el último día?",
                  "fr": "Avez-vous pris votre température au cours de la journée ? ",
                  "km-KH": "តើកំដៅហ្នឹងវាស់ក្នុងរយៈពេល 24 ម៉ោងចុងក្រោយមែនទេ?",
                  "ru": "Измеряли ли вы температуру за последние сутки?"
                }
              },
              "uid": "a265cb3659"
            },
            {
              "uid": "d8c6b1182c",
              "wait": {
                "options": [
                  {
                    "show": {
                      ".tx": {
                        "_": "כן, נמדד חום",
                        "ar": "نعم، قمت بقياس الحرارة",
                        "en": "Yes, temperature was checked",
                        "es": "Sí, me he tomado la fiebre",
                        "fr": "Oui, j'ai pris ma température",
                        "km-KH": "បាទ / ចាស បានត្រួតពិនិត្យកំដៅហើយ",
                        "ru": "Да, я измерял/а температуру"
                      }
                    },
                    "steps": [
                      {
                        "say": {
                          ".tx": {
                            "_": "ומה המדחום אומר?",
                            "ar": "وشو مكتوب على ميزان الحرارة؟",
                            "en": "What did the thermometer show?",
                            "es": "y ¿Qué dice el termómetro?",
                            "fr": "Et quelle est la température indiquée par le thermomètre ?",
                            "km-KH": "តើទែម៉ូម៉ែត្របានបង្ហាញអ្វីខ្លះ?",
                            "ru": "И что показал градусник?"
                          }
                        },
                        "uid": "fd6d8a43b5"
                      },
                      {
                        "uid": "928f10b036",
                        "wait": {
                          "input-kind": "number",
                          "input-max": "43",
                          "input-min": "35",
                          "input-step": "0.1",
                          "placeholder": {
                            ".tx": {
                              "_": "מעלות חום, 35-43",
                              "ar": "درجات حرارة, 35-43",
                              "en": "35-43 degrees Celsius",
                              "es": "Grados de fiebre, 35-43",
                              "fr": "Degrés de temperature, 35-43",
                              "km-KH": "35 ទៅ 43 អង្សា",
                              "ru": "35-43, в градусах"
                            }
                          },
                          "variable": "temperature"
                        }
                      }
                    ],
                    "uid": "7a92ab58eb",
                    "value": "yes"
                  },
                  {
                    "show": {
                      ".tx": {
                        "_": "לא נמדד חום",
                        "ar": "لا, لم أقم بقياس الحرارة",
                        "en": "No, the temperature was not taken",
                        "es": "No me he tomado la fiebre",
                        "fr": "Non, je n'ai pas pris ma température",
                        "km-KH": "ទេ មិនបានវាស់កំដៅទេ",
                        "ru": "Нет, я не измерял/а температуру"
                      }
                    },
                    "value": "no"
                  }
                ]
              }
            }
          ],
          "uid": "89a20e8104"
        },
        {
          "name": "current-report-top-level-symptoms",
          "steps": [
            {
              "uid": "536a638700",
              "wait": {
                "multi": "true",
                "options": [
                  {
                    "field": "toplevel_symptoms_cough",
                    "show": {
                      ".tx": {
                        "_": "שיעולים או נזלת",
                        "ar": "سُعال او سيلان بالأنف",
                        "en": "Coughing or a runny nose",
                        "es": "Tos o secreción nasal",
                        "fr": "Toux ou nez qui coule",
                        "km-KH": "ក្អកឬហៀរសំបោរ",
                        "ru": "Кашель или насморк"
                      }
                    }
                  },
                  {
                    "field": "symptoms_sore_throat",
                    "show": {
                      ".tx": {
                        "_": "כאבי גרון",
                        "ar": "وجع حلق",
                        "en": "Sore throat",
                        "es": "Dolor de garganta",
                        "fr": "Maux de gorge",
                        "km-KH": "ឈឺបំពង់ក",
                        "ru": "Боли в горле"
                      }
                    }
                  },
                  {
                    "field": "symptoms_breath_shortness",
                    "show": {
                      ".tx": {
                        "_": "קוצר נשימה",
                        "ar": "ضيق بالتنفس",
                        "en": "Shortness of breath",
                        "es": "Falta de aire al respirar",
                        "fr": "Essoufflement",
                        "km-KH": "ដង្ហើមខ្លី",
                        "ru": "Одышка"
                      }
                    }
                  },
                  {
                    "field": "toplevel_symptoms_pains",
                    "show": {
                      ".tx": {
                        "_": "כאבים",
                        "ar": "أوجاع",
                        "en": "Pain",
                        "es": "Dolores",
                        "fr": "Douleurs",
                        "km-KH": "ឈឺចាប់",
                        "ru": "Боли"
                      }
                    }
                  },
                  {
                    "field": "symptoms_diarrhea",
                    "show": {
                      ".tx": {
                        "_": "שלשול",
                        "ar": "إسهال",
                        "en": "Diarrhea",
                        "es": "Diarrea",
                        "fr": "Diarrhée",
                        "km-KH": "រាគ",
                        "ru": "Понос"
                      }
                    }
                  },
                  {
                    "field": "symptoms_nausea_and_vomiting",
                    "show": {
                      ".tx": {
                        "_": "בחילה או הקאות",
                        "ar": "غثيان أو تقيؤ",
                        "en": "Nausea or vomiting",
                        "es": "Náuseas o vómitos ",
                        "fr": "Nausée ou vomissements",
                        "km-KH": "ចង្អោរ ឬ ក្អួត",
                        "ru": "Тошнота или рвота"
                      }
                    }
                  },
                  {
                    "field": "symptoms_chills",
                    "show": {
                      ".tx": {
                        "_": "צמרמורת",
                        "ar": "إرتجاف",
                        "en": "Shivers or chills",
                        "es": "Mareos",
                        "fr": "Frissons",
                        "km-KH": "រងារញាក់",
                        "ru": "Озноб"
                      }
                    }
                  },
                  {
                    "field": "symptoms_confusion",
                    "show": {
                      ".tx": {
                        "_": "בלבול",
                        "ar": "هذيان",
                        "en": "Disorientation or confusion",
                        "es": "Confusión",
                        "fr": "Confusion",
                        "km-KH": "វង្វេង ឬ⁣ច្រលំ",
                        "ru": "Замешательство"
                      }
                    }
                  },
                  {
                    "field": "symptoms_tiredness_or_fatigue",
                    "show": {
                      ".tx": {
                        "_": "עייפות או חולשה",
                        "ar": "تعب او ضعف",
                        "en": "Fatigue or weakness",
                        "es": "Cansancio o debilidad",
                        "fr": "Fatigue ou faiblesse",
                        "km-KH": "អស់កម្លាំងឬខ្សោយ",
                        "ru": "Усталость или слабость"
                      }
                    }
                  },
                  {
                    "field": "symptoms_smell_taste_loss",
                    "show": {
                      ".tx": {
                        "_": "איבדתי את חוש הטעם או הריח",
                        "ar": "فقدت الإحساس بالأطعمة والروائح",
                        "en": "Lost my sense of taste or smell",
                        "es": "Pérdida del sentido del olfato o el gusto",
                        "fr": "J'ai perdu le sens du goût ou l'odorat",
                        "km-KH": "លែងដឹងរសជាតិឬក្លិន",
                        "ru": "Я потерял/а чувство вкуса или запаха"
                      }
                    }
                  },
                  {
                    "class": "other",
                    "show": {
                      ".tx": {
                        "_": "<span class='empty'>אף אחד מהתסמינים האלה</span>\n<span class='not-empty'>זהו</span>\n<span class='none-selected'>אין תסמינים</span>",
                        "ar": "<span class='empty'>ولا أي واحد من هاي الأعراض</span>\n<span class='not-empty'>بس </span>\n<span class='none-selected'>لا يوجد أعراض</span>",
                        "en": "<span class='empty'>None of these symptoms</span>\n<span class='not-empty'>That's it</span>\n<span class='none-selected'>No symptoms</span>",
                        "es": "<span class='empty'>Ninguno de estos síntomas</span>\n<span class='not-empty'>Eso es todo</span>\n<span class='none-selected'>No hay síntomas</span>",
                        "fr": "<span class='empty'>Aucun des ces symptômes</span>\n<span class='not-empty'>C'est tout</span>\n<span class='none-selected'>Pas de symptômes </span>",
                        "km-KH": "<span class='empty'>គ្មានរោគសញ្ញាទាំងនេះទេ</span>\n<span class='not-empty'>តែប៉ុណ្ណោះទេ</span>\n<span class='none-selected'>គ្មានរោគសញ្ញា</span>",
                        "ru": "<span class='empty'>Ни одного из этих симптомов</span>\n<span class='not-empty'>Всё</span>\n<span class='none-selected'>Нет симптомов</span>"
                      }
                    }
                  }
                ],
                "variable": "_var"
              }
            },
            {
              "do": {
                "cmd": "update_from_selection",
                "params": [
                  "record",
                  "_var"
                ]
              },
              "uid": "e478a0d84a"
            }
          ],
          "uid": "6c5d380604"
        },
        {
          "name": "current-report-cough-symptoms",
          "steps": [
            {
              "switch": {
                "arg": "toplevel_symptoms_cough",
                "cases": [
                  {
                    "default": "true"
                  },
                  {
                    "match": "true",
                    "steps": [
                      {
                        "say": "נשמח לעוד כמה פרטים לגבי השיעול והנזלת.",
                        "uid": "08160fed38"
                      },
                      {
                        "uid": "65d9bf1638",
                        "wait": {
                          "multi": "true",
                          "options": [
                            {
                              "field": "symptoms_clogged_nose",
                              "show": "נזלת או גודש באף"
                            },
                            {
                              "field": "symptoms_dry_cough",
                              "show": "שיעול יבש"
                            },
                            {
                              "field": "symptoms_moist_cough",
                              "show": "שיעול לח, או שיעול עם כיח"
                            },
                            {
                              "class": "other",
                              "show": "<span class='empty'>אף אחד מהתסמינים האלה</span>\n<span class='not-empty'>זהו</span>\n<span class='none-selected'>אין פרטים נוספים</span>"
                            }
                          ],
                          "variable": "_var"
                        }
                      },
                      {
                        "do": {
                          "cmd": "update_from_selection",
                          "params": [
                            "record",
                            "_var"
                          ]
                        },
                        "uid": "302ed7c21d"
                      }
                    ],
                    "uid": "1a0786dcff"
                  }
                ]
              },
              "uid": "f90ece8c4b"
            }
          ],
          "uid": "a7a1bb4959"
        },
        {
          "name": "current-report-pain-symptoms",
          "steps": [
            {
              "switch": {
                "arg": "toplevel_symptoms_pains",
                "cases": [
                  {
                    "default": "true"
                  },
                  {
                    "match": "true",
                    "steps": [
                      {
                        "say": "מה כואב בדיוק?",
                        "uid": "4153b1e0d9"
                      },
                      {
                        "uid": "86d33705af",
                        "wait": {
                          "multi": "true",
                          "options": [
                            {
                              "field": "symptoms_muscles_pain",
                              "show": "כאבי שרירים"
                            },
                            {
                              "field": "symptoms_headache",
                              "show": "כאבי ראש"
                            },
                            {
                              "field": "symptoms_sore_throat",
                              "show": "כאבי גרון"
                            },
                            {
                              "class": "other",
                              "show": "<span class='empty'>אף אחד מהתסמינים האלה</span>\n<span class='not-empty'>זהו</span>\n<span class='none-selected'>אין פרטים נוספים</span>      "
                            }
                          ],
                          "variable": "_var"
                        }
                      },
                      {
                        "do": {
                          "cmd": "update_from_selection",
                          "params": [
                            "record",
                            "_var"
                          ]
                        },
                        "uid": "551ae0e089"
                      }
                    ],
                    "uid": "2ce01a33c9"
                  }
                ]
              },
              "uid": "8f88af58ea"
            }
          ],
          "uid": "7ca6e7b00e"
        },
        {
          "name": "exposures",
          "steps": [
            {
              "say": "חשוב לנו לדעת",
              "uid": "8a4526029f"
            },
            {
              "say": "אם שהית בקרבת אנשים שונים ביממה האחרונה למשך יותר מ-15 דקות ובמרחק של פחות מ-2 מטרים,",
              "uid": "933db4184c"
            },
            {
              "say": "כמה מהם מתחת לגיל 18?",
              "uid": "d6876d7311"
            },
            {
              "uid": "16311dae71",
              "wait": {
                "input-kind": "number",
                "input-max": "99",
                "input-min": "0",
                "placeholder": "מספר האנשים, 0-99",
                "validation": "[0-9]+",
                "variable": "met_under_18"
              }
            },
            {
              "say": "וכמה מעל גיל 18?",
              "uid": "c5118716df"
            },
            {
              "uid": "a9b1fc2c72",
              "wait": {
                "input-kind": "number",
                "input-max": "99",
                "input-min": "0",
                "placeholder": "מספר האנשים, 0-99",
                "validation": "[0-9]+",
                "variable": "met_above_18"
              }
            }
          ],
          "uid": "ce7628ae51"
        },
        {
          "name": "end-of-report",
          "steps": [
            {
              "say": {
                ".tx": {
                  "_": "המון תודה, המידע ששלחת יעזור מאוד לחוקרים שלנו במכון ויצמן וגם לעמיתים שלנו במדינות אחרות לזהות התפרצויות נקודתיות של המחלה ולנסות לטפל בהן לפני שהן מתפשטות.",
                  "ar": "شكرًا كثير, المعلومات اللي قدمتها/قدمتيها رح تفيد كثير باحثينا في معهد وايزمان وشركاؤنا في بلاد أخرى لمعرفة بؤر تفشي المرض ومحاولة معالجتها قبل الإنتشار.",
                  "en": "Thanks a lot. The information you have sent will help the Weizmann Institution researchers as well as colleagues from other countries to locate disease hot-spots and try to deal with of them before they spread.",
                  "es": "Muchas gracias, la información que nos has brindado ayudará enormemente a nuestros investigadores en el Instituto Weizmann, así como a nuestros colegas en otros países, a identificar brotes puntuales de la enfermedad y a tratarlos antes de que se propaguen. ",
                  "fr": "Merci beaucoup, les informations que vous avez envoyées aideront grandement nos chercheurs de l'Institut Weizmann et nos collègues d'autres pays à identifier et à diagnostiquer les épidémies de la maladie avant qu'elles ne se propagent.",
                  "km-KH": "សូមអរគុណច្រើន។ ព័ត៌មានដែលអ្នកបានបញ្ជូន នឹងជួយអោយក្រុមអ្នកស្រាវជ្រាវ ក៏ដូចជាសហសេវិកមកពីប្រទេសដទៃទៀតដើម្បីរកទីតាំងចំនុចក្តៅ និងព្យាយាមដោះស្រាយមុនពេលវារីករាលដាល។",
                  "ru": "Огромное спасибо, предоставленная вами информация очень поможет нашим исследователям из Института Вейцмана и нашим зарубежным коллегам выявлять вспышки эпидемии и предупреждать их распространение."
                }
              },
              "uid": "e317217c7e"
            },
            {
              "say": {
                ".tx": {
                  "_": "אז נתראה מחר?",
                  "ar": "يعني منلتقي بكرا؟",
                  "en": "So we'll see you tomorrow?",
                  "es": "¿Nos vemos mañana?",
                  "fr": "Alors à demain ?",
                  "km-KH": "អញ្ចឹងយើងនឹងជួបអ្នកនៅថ្ងៃស្អែកទៀត?",
                  "ru": "Так до завтра?"
                }
              },
              "uid": "0cd94aa41c"
            },
            {
              "uid": "ccc68125a7",
              "wait": {
                "options": [
                  {
                    "class": "other",
                    "show": {
                      ".tx": {
                        "_": "בטח!",
                        "ar": "طبعًا!",
                        "en": "Sure!",
                        "es": "¡Claro!",
                        "fr": "Bien sûr !",
                        "km-KH": "ប្រាកដហើយ!",
                        "ru": "Конечно!"
                      }
                    }
                  }
                ]
              }
            }
          ],
          "uid": "a92af82c81"
        }
      ]
    },
    {
      "keys": [
        {
          "name": "calendarTitle",
          "show": {
            ".tx": {
              "_": "זמן לדיווח הבריאות היומי!",
              "ar": "حان وقت التبليغ اليومي عن وضعنا الصحي!",
              "en": "Time for your Daily Health Report!",
              "es": "¡Es hora de informarnos sobre tu estado de salud el día de hoy!",
              "fr": "C'est le moment du rapport de santé quotidien !",
              "km-KH": "ដល់ពេលរាយការណ៍ពីសុខភាពប្រចាំថ្ងៃរបស់អ្នកហើយ!",
              "ru": "Время для ежедневного отчёта о состоянии вашего здоровья! "
            }
          }
        },
        {
          "name": "calendarBody",
          "show": {
            ".tx": {
              "_": "הגיע הזמן לדווח שוב כיצד אתם מרגישים! רק ביחד ננצח את הקורונה 💪🏽!",
              "ar": "وقت تخبرونا مجددًا كيف حالكم! معًا فقط سوف نهزم الكورونا💪🏽!",
              "en": "Time to report again about how you're doing! It takes all of us to beat the Corona virus 💪🏽!",
              "es": "¡Llegó la hora de que nos vuelvas a contar cómo se sienten! ¡Sólo juntos venceremos a Coronavirus 💪🏽!",
              "fr": "Il est de nouveau temps de décrire votre état de santé ! Nous allons gagner contre le Corona ensemble !",
              "km-KH": "ដល់ពេលត្រូវរាយការណ៍ម្តងទៀតពីអារម្មណ៍របស់អ្នក! រួមគ្នាយើងនឹងឈ្នះកូរ៉ូណា!",
              "ru": "Пора снова заполнить отчёт о здоровье! Вместе мы победим Корону :muscle::skin-tone-4:! "
            }
          }
        }
      ],
      "name": "generic-translation-assets"
    }
  ]
};
