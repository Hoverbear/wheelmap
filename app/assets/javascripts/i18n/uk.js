I18n.translations || (I18n.translations = {});
I18n.translations["uk"] = I18n.extend((I18n.translations["uk"] || {}), {
  "actions": {
    "cancel": "Скасувати",
    "next": "Наступне",
    "save": "Зберегти",
    "send": "Надіслати"
  },
  "active_admin": {
    "access_denied": {
      "message": "Ви не авторизовані для виконання даної дії."
    },
    "any": "Будь-який",
    "batch_actions": {
      "action_label": "%{title} вибране",
      "button_label": "Групові операції",
      "default_confirmation": "Ви справді бажаєте це зробити?",
      "delete_confirmation": "Ви впевнені, що хочете видалити %{plural_model}?",
      "labels": {
        "destroy": "Видалити"
      },
      "link": "Створити",
      "selection_toggle_explanation": "(Відмінити все / Зняти виділення)",
      "succesfully_destroyed": {
        "few": "Успішно видалено: %{count} %{plural_model}",
        "many": "Успішно видалено: %{count} %{plural_model}",
        "one": "Успішно видалено: 1 %{model}",
        "other": "Успішно видалено: %{count} %{plural_model}"
      }
    },
    "blank_slate": {
      "content": "Покищо немає %{resource_name}.",
      "link": "Створити"
    },
    "cancel": "Відміна",
    "clear_filters": "Clear Filters",
    "comments": {
      "add": "Додати Коментар",
      "author": "Автор",
      "author_missing": "Анонім",
      "author_type": "Тип автора",
      "body": "Текст",
      "created_at": "Created",
      "delete": "Delete Comment",
      "delete_confirmation": "Are you sure you want to delete these comment?",
      "errors": {
        "empty_text": "Коментар не збережено, текст не повинен бути пустим."
      },
      "no_comments_yet": "Покищо немає коментарів.",
      "resource": "Ресурс",
      "resource_type": "Тип ресурса",
      "title": "Коментар",
      "title_content": "Коментарі (%{count})"
    },
    "create_model": "New %{model}",
    "dashboard": "Панель керування",
    "dashboard_welcome": {
      "call_to_action": "Щоб додати сюди що-небудь загляніть в 'app/admin/dashboard.rb'",
      "welcome": "Ласкаво просимо в Active Admin. Це стандартна сторінка керування сайтом."
    },
    "delete": "Видалити",
    "delete_confirmation": "Ви впевнені, що хочете це видалити?",
    "delete_model": "Видалити %{model}",
    "details": "%{model} детальніше",
    "devise": {
      "change_password": {
        "submit": "Змінити пароль",
        "title": "Зміна паролю"
      },
      "email": {
        "title": "Ел. пошта"
      },
      "links": {
        "forgot_your_password": "Забули пароль?",
        "resend_confirmation_instructions": "Повторна відправка інструкцій підтвердження",
        "resend_unlock_instructions": "Повторна відправка інструкцій розблокування",
        "sign_in": "Увійти",
        "sign_in_with_omniauth_provider": "Увійти з допомогою %{provider}",
        "sign_up": "Зареєструватись"
      },
      "login": {
        "remember_me": "Запам'ятати мене",
        "submit": "Увійти",
        "title": "Вхід"
      },
      "password": {
        "title": "Пароль"
      },
      "resend_confirmation_instructions": {
        "submit": "Вислати повторно листа з активацією",
        "title": "Вислати повторно листа з активацією"
      },
      "reset_password": {
        "submit": "Скинути пароль",
        "title": "Забули пароль?"
      },
      "sign_up": {
        "submit": "Зареєструватися",
        "title": "Зареєструватися"
      },
      "subdomain": {
        "title": "Піддомен"
      },
      "unlock": {
        "submit": "Відправити повторно інструкції з розблокування",
        "title": "Відправити повторно інструкції з розблокування"
      },
      "username": {
        "title": "Ім'я користувача"
      }
    },
    "download": "Завантаження:",
    "dropdown_actions": {
      "button_label": "Oперації"
    },
    "edit": "Змінити",
    "edit_model": "Змінити %{model}",
    "empty": "Пусто",
    "equal_to": "Equal To",
    "filter": "Filter",
    "filters": {
      "buttons": {
        "clear": "Очистити",
        "filter": "Фільтрувати"
      },
      "predicates": {
        "contains": "Містить",
        "ends_with": "Закінчується",
        "equals": "=",
        "greater_than": "більше",
        "less_than": "меньше",
        "starts_with": "Починається з"
      }
    },
    "greater_than": "Greater Than",
    "has_many_delete": "Прибрати",
    "has_many_new": "Додати %{model}",
    "has_many_remove": "Видалити",
    "index_list": {
      "block": "Список",
      "blog": "Блог",
      "grid": "Сітка",
      "table": "Таблиця"
    },
    "less_than": "Less Than",
    "logout": "Вийти",
    "main_content": "Створіть %{model}#main_content для відображення вмісту.",
    "new_model": "Створити %{model}",
    "next": "Наст.",
    "pagination": {
      "empty": "%{model} не знайдено",
      "entry": {
        "few": "записи",
        "many": "записів",
        "one": "запис",
        "other": "записів"
      },
      "multiple": "Результат: %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> з <b>%{total}</b>",
      "multiple_without_total": "Результат: %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>",
      "one": "Результат: <b>1</b> %{model}",
      "one_page": "Результат: <b>%{n}</b> %{model}"
    },
    "powered_by": "Powered by %{active_admin} %{version}",
    "previous": "Поперед.",
    "search_field": "Search %{field}",
    "search_status": {
      "current_filters": "Поточний фільтр:",
      "headline": "Область:",
      "no_current_filters": "Жоден"
    },
    "sidebars": {
      "filters": "Фільтри",
      "search_status": "Статус пошуку"
    },
    "status_tag": {
      "no": "Ні",
      "yes": "Так"
    },
    "unsupported_browser": {
      "headline": "Зверніть, будь-ласка, увагу, що ActiveAdmin більше не підтримує Internet Explorer 8 версії і нижче",
      "recommendation": "Ми рекомендуємо оновити версію вашого браузеру (<a href=\"http://windows.microsoft.com/ie\">Internet Explorer</a>, <a href=\"https://chrome.google.com/\">Google Chrome</a>, або <a href=\"https://mozilla.org/firefox/\">Firefox</a>).",
      "turn_off_compatibility_view": "Якщо ви використовуєте IE 9 і вище переконайтесь, що <a href=\"http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer\">ви виключили опцію \"Перегляд в режимі сумісності\"</a>."
    },
    "update_model": "Edit %{model}",
    "view": "Переглянути"
  },
  "activerecord": {
    "attributes": {
      "poi": {
        "address": "Адреса",
        "address_city": "Місто",
        "address_housenumber": "Номер будинку",
        "address_postcode": "Поштовий індекс",
        "address_street": "Вулиця",
        "name": "Назва",
        "note": "Примітка",
        "phone": "Телефон",
        "type": "Тип",
        "website": "Веб-сторінка"
      },
      "user": {
        "first_name": "Дати ім'я",
        "last_name": "Прізвище",
        "privacy_policy": "Privacy policy",
        "terms": "Terms"
      }
    },
    "errors": {
      "full_messages": {
        "format": "%{attribute} %{message}"
      },
      "messages": {
        "accepted": "має бути прийнятий",
        "blank": "не може бути пустим",
        "confirmation": "не збігається з підтвердженням",
        "empty": "не може бути порожнім",
        "equal_to": "має дорівнювати %{count}",
        "even": "має бути парним",
        "exclusion": "зарезервовано",
        "greater_than": "має бути більше ніж %{count}",
        "greater_than_or_equal_to": "має бути більше або рівним %{count}",
        "inclusion": "не включено до переліку",
        "invalid": "недійсний",
        "less_than": "має бути менше ніж %{count}",
        "less_than_or_equal_to": "має бути менше ніж або дорівнювати %{count}",
        "not_a_number": "не число",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "має бути непарним",
        "record_invalid": "Виникли помилки: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "вже зайнятий",
        "too_long": "Занадто довгий ( максимум %{count} символів)",
        "too_short": "Занадто короткий (мінімум %{count} символів)",
        "wrong_length": "має неправильну довжину (має бути% {число} символів)"
      },
      "models": {
        "user": {
          "attributes": {
            "email": {
              "blank": "не може бути порожнім, якщо є пароль"
            },
            "privacy_policy": {
              "accepted": "must be accepted"
            },
            "terms": {
              "accepted": "must be accepted"
            }
          }
        },
        "user_session": {
          "email": "Адреса електронної пошти",
          "password": "Пароль",
          "remember_me": "Запам'ятати мене"
        }
      },
      "template": {
        "body": "Помилки виявлено в таких полях:",
        "header": {
          "one": "%{model} не збережено через %{count} помилку",
          "other": "%{model} не збережено через %{count} помилки"
        }
      }
    },
    "models": {
      "user": "Користувач"
    }
  },
  "apipie": {
    "api_documentation": "API documentation",
    "comments_powered_by_disqus": "comments powered by %{disqus}",
    "description": "Description",
    "enable_javascript_html": "Please enable JavaScript to view the %{comments_href}.",
    "error_code": "Code",
    "error_description": "Description",
    "error_metadata": "Metadata",
    "errors": "Errors",
    "examples": "Examples",
    "follow_instructions_href": "further instructions",
    "follow_instructions_html": "Follow %{href} on how to describe your controllers.",
    "goto_homepage_href": "%{app_name} API documentation homepage",
    "goto_homepage_html": "Try going to %{href}",
    "header_name": "Header name",
    "headers": "Headers",
    "metadata": "Metadata",
    "method_not_found_html": "Method %{method} not found for resource %{resource}.",
    "nil_allowed": "nil allowed",
    "no_docs_found": "No documentation found",
    "no_docs_found_descr": "We have not found any documentation for your API.",
    "oops": "Oops!!",
    "optional": "optional",
    "param_name": "Param name",
    "params": "Params",
    "required": "required",
    "resource": "Resource",
    "resource_not_found_html": "Resource %{resource} not found.",
    "resources": "Resources",
    "supported_formats": "Supported Formats"
  },
  "application": {
    "require_no_user": {
      "notice": "Ви увійшли в систему ..."
    },
    "require_user": {
      "notice": "Ви маєте зареєструватись, щоб переглянути цю сторінку."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Додати нове місце",
      "edit": "Змінити місце"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "закрити",
    "skip": "пропустити"
  },
  "date": {
    "abbr_day_names": [
      "нд.",
      "пн.",
      "вт.",
      "ср.",
      "чт.",
      "пт.",
      "сб."
    ],
    "abbr_month_names": [
      null,
      "січ.",
      "лют.",
      "бер.",
      "квіт.",
      "трав.",
      "черв.",
      "лип.",
      "серп.",
      "вер.",
      "жовт.",
      "лист.",
      "груд."
    ],
    "day_names": [
      "неділя",
      "понеділок",
      "вівторок",
      "середа",
      "четвер",
      "п'ятниця",
      "субота"
    ],
    "formats": {
      "default": "%d.%m.%Y",
      "long": "%d %B %Y",
      "short": "%d %b"
    },
    "month_names": [
      null,
      "Січень",
      "Лютий",
      "Березень",
      "Квітень",
      "Травень",
      "Червень",
      "Липень",
      "Серпень",
      "Вересень",
      "Жовтень",
      "Листопад",
      "Грудень"
    ],
    "order": [
      "day",
      "month",
      "year"
    ]
  },
  "datetime": {
    "distance_in_words": {
      "about_x_hours": {
        "few": "близько %{count} години",
        "many": "близько %{count} годин",
        "one": "близько %{count} година",
        "other": "близько %{count} години"
      },
      "about_x_months": {
        "few": "близько %{count} місяців",
        "many": "близько %{count} місяців",
        "one": "близько %{count} місяця",
        "other": "близько %{count} місяця"
      },
      "about_x_years": {
        "few": "близько %{count} років",
        "many": "близько %{count} років",
        "one": "близько %{count} року",
        "other": "близько %{count} року"
      },
      "almost_x_years": {
        "few": "майже %{count} років",
        "many": "майже %{count} років",
        "one": "майже %{count} роки",
        "other": "майже %{count} років"
      },
      "half_a_minute": "півхвилини",
      "less_than_x_minutes": {
        "few": "менше %{count} хвилин",
        "many": "менше %{count} хвилин",
        "one": "менше %{count} хвилини",
        "other": "менше %{count} хвилини"
      },
      "less_than_x_seconds": {
        "few": "менше %{count} секунд",
        "many": "менше %{count} секунд",
        "one": "менше %{count} секунди",
        "other": "менше %{count} секунди"
      },
      "over_x_years": {
        "few": "більше %{count} років",
        "many": "більше %{count} років",
        "one": "більше %{count} року",
        "other": "більше %{count} року"
      },
      "x_days": {
        "few": "%{count} дні",
        "many": "%{count} днів",
        "one": "%{count} день",
        "other": "%{count} дня"
      },
      "x_minutes": {
        "few": "%{count} хвилини",
        "many": "%{count} хвилин",
        "one": "%{count} хвилина",
        "other": "%{count} хвилини"
      },
      "x_months": {
        "few": "%{count} місяці",
        "many": "%{count} місяців",
        "one": "%{count} місяць",
        "other": "%{count} місяця"
      },
      "x_seconds": {
        "few": "%{count} секунди",
        "many": "%{count} секунд",
        "one": "%{count} секунда",
        "other": "%{count} секунди"
      }
    },
    "prompts": {
      "day": "День",
      "hour": "Година",
      "minute": "Хвилина",
      "month": "Місяць",
      "second": "Секунда",
      "year": "Рік"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "Вашу реєстрацію було успішно підтверджено.",
      "link": "You didn't receive confirmation instructions?",
      "send_instructions": "На Ваш email надіслано інструкції з підтвердження реєстрації.",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to confirm your account."
    },
    "destroy": {
      "confirm": "Ви впевнені?",
      "headline": "Delete account",
      "link": "Видалити зараз"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Поточний  пароль <i>(він потрібен для підтвердження змін) </і>",
          "email": "Електронна пошта",
          "password": "пароль <i>(залишити порожнім, якщо ви не хочете змінити) </i>",
          "password_confirmation": "Повторіть пароль"
        },
        "submit": "Зберегти зміни"
      },
      "headline": "Змінити обліковий запис"
    },
    "failure": {
      "already_authenticated": "Ви вже увійшли.",
      "inactive": "Your account has not been activated yet.",
      "invalid": "Невірний email або пароль.",
      "invalid_token": "Невірний код аутентифікації",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "Ваш обліковий запис заблоковано.",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Ви маєте увійти або зареєструватися.",
      "unconfirmed": "Ви маєте підтвердити Вашу реєстрацію."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Please click on the link that we just sent to your email address. If you do not receive an email from us, please first check if it is not hiding in your spam folder. If it is not there return to the sign up page and try again.",
        "subject": "Інструкції з підтвердження паролю"
      },
      "reset_password_instructions": {
        "subject": "Інструкції зі зміни паролю"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "mandatory": "* Обов'язково",
    "omniauth_callbacks": {
      "failure": "Неможливо увійти з облікового запису %{kind} через те, що обліковий запис \"%{reason}\".",
      "permission_missing": "You did not grant the required permission.",
      "success": "Вхід успішний %{kind}."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "електронна адреса"
        },
        "submit": "Скинути пароль"
      },
      "headline": "Забули пароль?"
    },
    "password_reset": {
      "email": {
        "comment": "Якщо ви не робили запит по зміні паролю, ігноруйте це повідомлення.<br/> Ваш парольне буде змінено, доки ви не натиснете на посилання вище.",
        "headline": "Ласкаво просимо %{email}",
        "link": "Змінити пароль",
        "text": "We received a request to change your password. If you sent the request, click the following link - otherwise ignore this!"
      },
      "form": {
        "labels": {
          "password": "Новий пароль",
          "password_confirmation": "Повторити пароль"
        },
        "submit": "Зміна паролю"
      },
      "headline": "Скинути пароль"
    },
    "passwords": {
      "link": "Забули пароль?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "Ваш пароль було успішно змінено.",
      "updated_not_active": "Ваш пароль було успішно змінено."
    },
    "registrations": {
      "destroyed": "До побачення! Ваш обліковий запис було успішно закрито. Сподіваємось незабаром побачитись з Вами знову.",
      "inactive_signed_up": "Ви успішно зареєструвалися. Але, Ви не можете увійти з причини %{reason}.",
      "link": "Зареєструватися",
      "reasons": {
        "inactive": "не активний",
        "locked": "заблоковано",
        "unconfirmed": "не підтверджено"
      },
      "signed_up": "You have signed up successfully. A you have been sent a confirmation email.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "Ви успішно оновили свій обліковий запис."
    },
    "sessions": {
      "inactive": "Your account has not been activated yet",
      "invalid": "Невірне ім'я користувача або пароль.",
      "invalid_token": "Неприпустимий маркер аутентифікації",
      "link": "Увійти",
      "locked": "Ваш профіль заблоковано",
      "new": {
        "no_osm_account": "Немає аккаунту на OpenStreetMap?",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "Велике спасибі за вашу підтримку!",
        "sign_in_with": "Увійти з %{kind}",
        "sign_up_with_osm": "Зареєструватися зараз.",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "Вхід успішний.",
      "signed_out": "Вихід успішний.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Ви повинні увійти або зареєструватися, перш ніж продовжити",
      "unconfirmed": "Ви повинні підтвердити свій аккаунт, перш ніж продовжити"
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "Електронна адреса",
          "password": "Пароль",
          "remember_me": "Залишатись в системі?"
        },
        "submit": "Увійти"
      },
      "headline": "Увійти"
    },
    "sign_out": {
      "headline": "Вийти"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Підтвердіть свій аккаунт",
        "please_confirm": "Ви можете підтвердити свій аккаунт за посиланням нижче:",
        "welcome": "Ласкаво просимо %{email}!"
      },
      "form": {
        "labels": {
          "email": "Електронна адреса",
          "password": "Пароль",
          "password_confirmation": "Повторіть пароль",
          "wants_newsletter": "Yes, keep me up to date about Wheelmap - but please not more than once a month."
        },
        "submit": "Зареєструватися"
      },
      "headline": "Зареєструватися"
    },
    "unlocks": {
      "link": "You didn't receive unlock instructions?",
      "send_instructions": "You will receive an email in a few minutes with instructions on how to unlock your account",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to unlock your account",
      "unlocked": "Ваш аккаунт було успішно розблоковано."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "вже було підтверджено",
      "blank": "must be filled in",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "не збігається з підтвердженням",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "must be filled in",
      "equal_to": "має дорівнювати %{count}",
      "even": "must be an even number",
      "exclusion": "зарезервовано",
      "expired": "прострочено, будь ласка, створіть новий запит",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "має бути більше ніж %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "недійсне значення",
      "invalid": "недійсний",
      "less_than": "має бути менше ніж %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "не є числом",
      "not_an_integer": "має бути цілим числом",
      "not_found": "не знайдено",
      "not_locked": "не було заблоковано",
      "not_saved": {
        "few": "%{count} помилки завадили зберегти %{resource}:",
        "one": "Помилка завадила зберегти %{resource}:",
        "other": "%{count} помилок завадили зберегти %{resource}:"
      },
      "odd": "must be an odd number",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "вже зайнятий",
      "too_long": "занадто довгий (не більше% {count} символів)",
      "too_short": "занадто короткий (не менше %{count} символів)",
      "wrong_length": "має неправильну довжину (має бути %{count} символів)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "Адреса веб-сторінки недійсна."
        }
      }
    },
    "template": {
      "body": "Помилки виявлено в таких полях:",
      "header": {
        "few": "%{count} помилки завадили зберегти %{model}",
        "one": "1 помилка завадила зберегти %{model}",
        "other": "%{count} помилок завадили зберегти %{model}"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "Ви завжди можете змінити доступність місця самі. Просто виберіть відповідний варіант і натисніть \"Зберегти\".",
      "1": "Ви, як зареєстрований користувач, можете додавати чи змінювати інформацію про місця. Натисніть \"Змінити\" і виправте чи додайте інформацію.",
      "2": "Ви можете надати додаткову інформацію (наприклад \"Це місце має пандус\") у коментарях. Натисніть на \"Змінити\" і \"Додати коментар\"."
    },
    "headline": "З цим місцем проблема?",
    "questions": {
      "0": "Доступність вказана неправильно",
      "1": "Опис цього місця неточний чи відсутній.",
      "2": "Я маю додаткову інформацію про це місце."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "Створено %{resource_name}"
      },
      "destroy": {
        "alert": "Не вдалось видалити %{resource_name}",
        "notice": "%{resource_name} видалено"
      },
      "update": {
        "notice": "%{resource_name} оновлено"
      }
    },
    "photos": {
      "destroy": {
        "notice": "Зображення успішно видалено"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "Доступне для людей на інвалідних візках",
    "show_limited_accessible_places": "З обмеженою зручністю для людей на інвалідних візках.",
    "show_places_without_status": "Невідомий статус",
    "show_unaccessible_places": "Недоступно для інвалідних візків"
  },
  "formtastic": {
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "Перемістіть маркер на карті у правильне положення",
      "osm_username": "Ще не зареєстровані? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Створіть обліковий запис на OpenStreetMap</a>",
      "password": "(Залиште порожнім, якщо не хочете змінювати)",
      "phone": "For example: +49 30 12345678",
      "website": "Наприклад: http://www.example.com"
    },
    "labels": {
      "category": "Категорія:",
      "centralkey": "Центральний ключ:",
      "city": "Місто:",
      "create": "Create a place",
      "email": "Email",
      "finish": "Завершити",
      "housenumber": "Ні:",
      "lat": "Широта",
      "lon": "Довгота",
      "name": "Назва:",
      "osm_password": "OpenStreetMap password",
      "osm_username": "OpenStreetMap account name",
      "password": "Пароль",
      "password_confirmation": "Повторіть пароль",
      "phone": "Телефон",
      "postcode": "Поштовий індекс:",
      "privacy_policy": "Я приймаю умови параграфів 1 та 2 угоди про конфіденційність даних.",
      "reset": "Скинути",
      "save": "Зберегти",
      "street": "Вулиця:",
      "terms": "Я приймаю умови використання.",
      "type": "Тип:",
      "website": "Веб-сторінка:",
      "wheelchair": "Чи доступно для людей на інвалідних візках?",
      "wheelchair_description": "Коментар про доступність:",
      "wheelchair_toilet": "Доступний туалет:"
    },
    "titles": {
      "basic": "Основні дані",
      "optional": "Більш детальна інформація <span class=\"addition\">(всі поля - необов’язкові)</ span>"
    }
  },
  "global": {
    "form_validation_error": "Будь-ласка, зверніть увагу на помилки, перераховані нижче"
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org is an online map to search, find and mark wheelchair-accessible places. Get involved by marking public places like bars, restaurants, cinemas or supermarkets!",
      "homepage": "Головна",
      "keywords": "пошук місць доступних для людей на інвалідних візках",
      "search": "Пошук",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "about_wheelmap": "Про Wheelmap",
      "blog": "Новини",
      "choose_language": "Змінити мову",
      "contact": "Контакт",
      "feedback": "Відгуки",
      "home": "Старт",
      "how_to_add_a_place": "Як я можу додати місця?",
      "imprint": "Імпринт",
      "logged_in_as": "Ви увійшли як:",
      "login": "Увійти",
      "logout": "Вихід",
      "map": "Карта",
      "newsletter": "Інформаційний бюлетень",
      "press": "Преса",
      "profile": "Профіль",
      "projects": "Проекти",
      "suggestions": "Пропозиції",
      "what_is_barrier_free": "Що означає \"доступ для людей на інвалідних візках\"?",
      "what_is_wheelmap": "What is Wheelmap?"
    },
    "searchbar": {
      "add_place": "Додати інше місце",
      "find": "Знайти",
      "placeholder": "Шукати місце",
      "title_add_place": "Додати тут нове місце."
    },
    "tagline": "Логотип Wheelmap",
    "title": "Find wheelchair accessible places",
    "toolbar": {
      "categories": "Категорії"
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {
        "display_entries": "Відображено %{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> із <b>%{total}</b>"
      },
      "one_page": {
        "display_entries": {
          "few": "Відображені <b>%{count}</b> %{entry_name}",
          "many": "Відображені <b>%{count}</b> %{entry_name}",
          "one": "Відображено <b>%{count}</b> %{entry_name}",
          "other": "Відображені <b>всі %{count}</b> %{entry_name}",
          "zero": "Жодного %{entry_name}"
        }
      }
    },
    "select": {
      "prompt": "Оберіть: "
    },
    "submit": {
      "create": "cтворити %{model}",
      "submit": "зберегти %{model}",
      "update": "оновити %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "Show on Wheelmap.org",
      "filter": {
        "category": "Оберіть категорію",
        "deselect_all": "Скасувати вибір",
        "select_all": "Вибрати всі",
        "wheelchair": "Чи доступно для людей на інвалідних візках?"
      },
      "ie": {
        "action": {
          "ignore": "Ігнорувати",
          "upgrade": "Оновлення переглядача"
        },
        "warning": {
          "headline": "Вибачте!",
          "message": "You appear to be using Internet Explorer. Wheelmap requires a standards compliant browser to work properly. Please consider using Firefox, Chrome, Safari or Opera."
        }
      },
      "link": {
        "node": {
          "create": "Додати нове місце"
        }
      },
      "overlay": {
        "button": "Гаразд, поїхали!",
        "categories": "Фільтрувати місця за категоріями",
        "filter": "Фільтрувати місця за доступністю",
        "headline": "Позначайте та знаходьте місця з доступом для людей на інвалідних візках на Wheelmap.org по всьому світу безкоштовно. Це просто:",
        "lookup": "Шукати конкретне місце",
        "secondary_headline": "Доступність громадських місць позначається кольорами світлофора:"
      },
      "popup": {
        "form": {
          "limited": "З обмеженою зручністю для людей на інвалідних візках.",
          "no": "Недоступно для інвалідних візків",
          "save": "Оновлення",
          "unknown": "Невідомий статус",
          "yes": "Доступне для людей на інвалідних візках"
        },
        "help": "Чи є доступ для людей на інвалідних візках? (Довідка)",
        "more": "детальніше ..."
      },
      "zoom_alert": "Zoom in closer to see more places."
    }
  },
  "how?": "Як?",
  "landing_pages": {
    "index": {
      "wheelchair": {
        "limit": {
          "headline": "All partially wheelchair accessible %{type} in %{city} (%{count})"
        },
        "no": {
          "headline": "All not wheelchair accessible %{type} in %{city} (%{count})"
        },
        "unknown": {
          "headline": "Усі місця типу \"%{type}\" у місті %{city} з невідомим статусом (%{count})"
        },
        "yes": {
          "headline": "Усі місця типу \"%{type}\" з доступом для людей на інвалідних візках у місті %{city} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Проект Sozialhelden.de"
      }
    }
  },
  "models": {
    "category": {
      "prompt": "Оберіть категорію"
    },
    "node": {
      "info_edit_position": " Місце з’явиться на Wheelmap таким, як показано вище. Якщо маркер не на потрібній точці, Ви можете <a href=\"%{url}\">виправити його розміщення на OpenStreetMap.</a>",
      "mail": {
        "body": "(Будь ласка, пишіть англійською або німецькою.)\n\nHi Sozialhelden,\nsomething is wrong with location: %{url}\n\nThe problem is:",
        "subject": "[Wheelmap] Проблема з %{headline}"
      }
    },
    "node_type": {
      "prompt": "Оберіть тип"
    }
  },
  "node": {
    "address": {
      "city": "%{city} %{postcode} ",
      "street": "%{housenumber} %{street}"
    },
    "tags": {
      "phone": "Телефон:",
      "website": "Веб-сторінка:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "На жаль, введена Вами інформація неправильна або неповна",
        "successfull": "Дякуємо, Ваше доповнення збережено і найближчим часом з’явиться на карті."
      }
    },
    "edit": {
      "header": {
        "title": "Змінити місце: %{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Скасувати"
      }
    },
    "errors": {
      "default": "Oops something went wrong. We have been informed about this issue",
      "not_authorized": "На жаль, аутентифікація не вдалася",
      "not_available": "Вибачте, ця сторінка тимчасово недоступна.",
      "not_existent": "Вибачте, цієї точки більше не існує на карті.",
      "not_found": "Сторінку не знайдено",
      "param_missing": "Будь ласка, введіть пошуковий запит"
    },
    "flash": {
      "authorize_wheelmap": "Для зміни даних вам необхідно мати обліковий запис OpenStreetMap"
    },
    "new": {
      "form": {
        "legend": "Розташування місця",
        "location": "Please click on the map where the place is located!",
        "section": {
          "accessibility": {
            "name": "Wheelchair accessibility",
            "title": "Information on wheelchair accessibility"
          },
          "address": {
            "help": "You can move the marker to the correct location on the map.",
            "name": "Адреса",
            "title": "Where is the place?"
          },
          "contact": {
            "name": "Контакт",
            "title": "Other contact information"
          },
          "name_category": {
            "name": "Name and place type",
            "title": "Give us some initial information about your place:"
          },
          "overview": {
            "title": "Is all the information correct?"
          },
          "similar_nodes": {
            "empty": "No similar places were found.",
            "go_edit": "Continue with this place",
            "go_new": "It is none of the places above …",
            "name": "Similar places",
            "title": "We found similar places nearby. Is it one of these?"
          }
        },
        "title": "Add a place"
      },
      "header": {
        "title": "Нове місце | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Скасувати"
      }
    },
    "node": {
      "link": {
        "claim": "Ви працюєте тут?",
        "edit_node": "Змінити місце",
        "report_bug": "Повідомити про проблему"
      }
    },
    "node_data": {
      "address": "Адреса:",
      "contact_details": "Контактні дані:"
    },
    "node_edit": {
      "details": "Опис",
      "edit": "Змінити"
    },
    "node_map": {
      "map": "Карта:"
    },
    "node_note": {
      "comment": "Коментар:"
    },
    "node_photos": {
      "add": "Додати",
      "photos_of_this_place": "Фотографії цього місця:",
      "upload": "Вивантажити"
    },
    "node_similar": {
      "similar": "Схожі місця: %{name}"
    },
    "node_status": {
      "accessible_toilet": "Доступний туалет:",
      "premium": "%{name} каже: це місце",
      "wheelchair_accessibility": "Доступність для людей на інвалідному візку:"
    },
    "node_streetview": {
      "streetview": "Перегляд вулиці:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Дізнайтесь, чи доступне це місце для людей на інвалідних візках на Wheelmap.org. Або надайте додаткову інформацію та фотографії місця.",
          "title": "Це місце є на Wheelmap.org: %{name}"
        },
        "title": "Місце: %{node} | wheelmap.org"
      },
      "link": {
        "back": "назад",
        "large_map": "Збільшити",
        "listing": "Усі місця типу \"%{type}\" у місті %{city}",
        "upload": "Вивантажити зображення"
      },
      "more_data_from": "There is more information about this place, validated by:",
      "share": {
        "email": "Email",
        "facebook": "Facebook",
        "text": "I found this place on Wheelmap.org: %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "На жаль, введені Вами дані були неправильними або неповними",
        "successfull": "Дякуємо, Ваше доповнення збережено і найближчим часом з’явиться на карті."
      }
    },
    "update_wheelchair": {
      "successfull": "Статус \"%{name}\" було змінено на \"%{status}\" та буде оновлений на карті найближчим часом."
    }
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": " ",
        "format": "%n %u",
        "precision": 2,
        "separator": ",",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "₴"
      }
    },
    "format": {
      "delimiter": " ",
      "precision": 3,
      "separator": ",",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": "Мільярд",
          "million": "Мільйон",
          "quadrillion": "Квадрільон",
          "thousand": "Тисяча",
          "trillion": "Трильйон",
          "unit": ""
        }
      },
      "format": {
        "delimiter": "",
        "precision": 3,
        "significant": true,
        "strip_insignificant_zeros": true
      },
      "storage_units": {
        "format": "%n %u",
        "units": {
          "byte": {
            "few": "Байти",
            "one": "Байт",
            "other": "Байт"
          },
          "gb": "ГБ",
          "kb": "КБ",
          "mb": "МБ",
          "tb": "ТБ"
        }
      }
    },
    "percentage": {
      "format": {
        "delimiter": "",
        "format": "%n%"
      }
    },
    "precision": {
      "format": {
        "delimiter": ""
      }
    }
  },
  "oauth": {
    "application": {
      "connect": {
        "headline": "You need to connect your account with your OpenStreetMap account before you can create or modify places on Wheelmap.org."
      }
    },
    "callback": {
      "notice": "Your Wheelmap account is now connected to the OpenStreetMap account %{user}."
    }
  },
  "or": "або",
  "place": {
    "few": "%{count} місця",
    "one": "%{count} місце",
    "other": "%{count} місць"
  },
  "poi": {
    "category": {
      "accommodation": "Апартаменти",
      "education": "Освіта",
      "food": "Їжа",
      "government": "Державні установи",
      "health": "Здоров'я",
      "leisure": "Дозвілля",
      "misc": "змішаний",
      "money_post": "Bank / Post office",
      "public_transfer": "Public transport",
      "shopping": "Магазини",
      "sport": "Спорт",
      "tourism": "Туризм",
      "unknown": "Категорію не вказано"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Готель з пляжами",
        "bed_and_breakfast": "Готель. Ночівля й сніданок",
        "camp_site": "Місце для табору",
        "caravan_site": "Стоянка житлових трейлерів",
        "chalet": "Шале",
        "dormitory": "Гуртожиток",
        "guest_house": "Гостьовий будинок",
        "hostel": "Хостел",
        "hotel": "Готель",
        "motel": "Мотель"
      },
      "education": {
        "college": "Коледж/Технікум",
        "driving_school": "Автошкола",
        "kindergarten": "Дитячий садок",
        "library": "Бібліотека",
        "museum": "Музей",
        "school": "Школа",
        "university": "Університет"
      },
      "food": {
        "bar": "Бар",
        "biergarten": "Паб під відкритим небом",
        "cafe": "Кафе",
        "drinking_water": "Питна вода",
        "fast_food": "Фастфуд",
        "ice_cream": "Морозиво",
        "pub": "Паб",
        "restaurant": "Ресторан"
      },
      "government": {
        "courthouse": "Суд",
        "embassy": "Посольство",
        "government": "Урядова організація",
        "police": "Поліція/Міліція",
        "public_building": "Громадський заклад",
        "townhall": "Town hall"
      },
      "health": {
        "dentist": "Дантист",
        "doctors": "Doctor",
        "hearing_aids": "Продаж слухових апаратів",
        "hospital": "Лікарня",
        "medical_supply": "Медикаменти",
        "pharmacy": "Аптека",
        "social_facility": "Соціальний центр",
        "veterinary": "Ветеринар"
      },
      "leisure": {
        "arena": "Арена",
        "brothel": "Бордель",
        "casino": "Казино",
        "cinema": "Кінотеатр",
        "community_centre": "Community centre",
        "gallery": "Галерея",
        "nightclub": "Нічний клуб",
        "playground": "Дитячий майданчик",
        "sauna": "Сауна",
        "stripclub": "Стрип-клуб",
        "theatre": "Театр",
        "zoo": "Зоопарк"
      },
      "misc": {
        "company": "Компанія (офіс)",
        "estate_agent": "Агентство нерухомості",
        "insurance": "Страхування",
        "lawyer": "Адвокат/Юрист",
        "place_of_worship": "Місце поклоніння",
        "toilets": "Туалет"
      },
      "money_post": {
        "atm": "Банкомат",
        "bank": "Банк",
        "bureau_de_change": "Обмін валют",
        "post_box": "Поштова скринька",
        "post_office": "Поштове відділення"
      },
      "public_transfer": {
        "aerodrome": "Аеропорт",
        "bicycle_parking": "Паркування для велосипедів",
        "bicycle_rental": "Оренда велосипедів",
        "boatyard": "Boat yard",
        "bus_station": "Автобусна станція",
        "bus_stop": "Автобусна зупинка",
        "cable_car": "Фунікулер",
        "car_rental": "Прокат автомобілів",
        "car_sharing": "Короткотермінова оренда авто",
        "chair_lift": "Крісельний підйомник",
        "ferry": "Пором",
        "ferry_terminal": "Термінал порому",
        "fuel": "АЗС",
        "halt": "Залізнична зупинка",
        "light_rail": "Швидкісний трамвай",
        "parking": "Автостоянка",
        "parking_aisle": "Проїзд на автостоянку",
        "platform": "Платформа",
        "station": "Залізнична станція",
        "subway_entrance": "Вхід в метро",
        "terminal": "Термінал аеропорту",
        "tram_stop": "Трамвайна зупинка"
      },
      "shopping": {
        "alcohol": "Алкоголь",
        "bakery": "Хліб",
        "beauty": "Салон краси",
        "beverages": "Напої",
        "bicycle": "Магазин велосипедів",
        "books": "Книгарня",
        "butcher": "М'ясний",
        "car_repair": "СТО",
        "car_shop": "Автосалон",
        "chemist": "Chemist / Drugstore",
        "clothes": "Одяг",
        "computer": "Комп'ютерний",
        "confectionery": "Кондитерська",
        "convenience": "Міні-маркет",
        "deli": "Делікатеси",
        "department_store": "Промтовари",
        "doityourself": "Зроби сам",
        "dry_cleaning": "Хімчистка",
        "electronics": "Електроніка",
        "fabric": "Тканини",
        "farm_shop": "Фермерський",
        "florist": "Флорист",
        "furniture": "Меблі",
        "garden_centre": "Garden centre",
        "gift": "Подарунки",
        "hairdresser": "Перукар",
        "hardware": "Господарський магазин",
        "jewelry": "Ювелірні вироби",
        "kiosk": "Кіоск",
        "laundry": "Пральня",
        "mall": "Торговий центр",
        "optician": "Оптика",
        "organic": "Натуральні харчові продукти",
        "outdoor": "Туристичний",
        "pet": "Зоомагазин",
        "photo": "Фото",
        "second_hand": "Вживані речі",
        "shoes": "Взуття",
        "sports": "Спортивний магазин",
        "stationery": "Канцелярські товари",
        "supermarket": "Супермаркет",
        "toys": "Іграшки",
        "travel_agency": "Туристичне агентство",
        "video": "Відеопрокат"
      },
      "sport": {
        "pitch": "Спортивне поле",
        "sports_centre": "Спортивний центр",
        "stadium": "Стадіон",
        "swimming": "Плавання",
        "swimming_pool": "Басейн"
      },
      "tourism": {
        "archaeological_site": "Пам’ятка археології",
        "arts_centre": "Мистецький центр",
        "artwork": "Витвір мистецтва",
        "attraction": "Пам’ятка",
        "battlefield": "Поле бою",
        "beach": "Пляж",
        "beacon": "Маяк",
        "castle": "Замок",
        "cave_entrance": "Вхід в печеру",
        "information": "Інформація для туристів",
        "memorial": "Пам'ятник",
        "theme_park": "Парк розваг",
        "tower": "Вежа",
        "viewpoint": "Оглядовий майданчик"
      },
      "unknown": {
        "unknown": "Категорію не вказано"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Статус: з'єднано",
          "grant": "З'єднати",
          "not_connected": "Статус: немає з'єднання",
          "revoke": "Роз'єднано"
        }
      },
      "headline": "Змінити порофіль"
    }
  },
  "ransack": {
    "all": "all",
    "and": "and",
    "any": "any",
    "asc": "ascending",
    "attribute": "attribute",
    "combinator": "combinator",
    "condition": "condition",
    "desc": "descending",
    "or": "or",
    "predicate": "predicate",
    "predicates": {
      "blank": "is blank",
      "cont": "contains",
      "cont_all": "contains all",
      "cont_any": "contains any",
      "does_not_match": "doesn't match",
      "does_not_match_all": "doesn't match all",
      "does_not_match_any": "doesn't match any",
      "end": "ends with",
      "end_all": "ends with all",
      "end_any": "ends with any",
      "eq": "equals",
      "eq_all": "equals all",
      "eq_any": "equals any",
      "false": "is false",
      "gt": "greater than",
      "gt_all": "greater than all",
      "gt_any": "greater than any",
      "gteq": "greater than or equal to",
      "gteq_all": "greater than or equal to all",
      "gteq_any": "greater than or equal to any",
      "in": "in",
      "in_all": "in all",
      "in_any": "in any",
      "lt": "less than",
      "lt_all": "less than all",
      "lt_any": "less than any",
      "lteq": "less than or equal to",
      "lteq_all": "less than or equal to all",
      "lteq_any": "less than or equal to any",
      "matches": "matches",
      "matches_all": "matches all",
      "matches_any": "matches any",
      "not_cont": "doesn't contain",
      "not_cont_all": "doesn't contain all",
      "not_cont_any": "doesn't contain any",
      "not_end": "doesn't end with",
      "not_end_all": "doesn't end with all",
      "not_end_any": "doesn't end with any",
      "not_eq": "not equal to",
      "not_eq_all": "not equal to all",
      "not_eq_any": "not equal to any",
      "not_in": "not in",
      "not_in_all": "not in all",
      "not_in_any": "not in any",
      "not_null": "is not null",
      "not_start": "doesn't start with",
      "not_start_all": "doesn't start with all",
      "not_start_any": "doesn't start with any",
      "null": "is null",
      "present": "is present",
      "start": "starts with",
      "start_all": "starts with all",
      "start_any": "starts with any",
      "true": "is true"
    },
    "search": "search",
    "sort": "sort",
    "value": "value"
  },
  "search": {
    "index": {
      "no-results": {
        "headline": "Вибачте, нам не вдалось знайти \"%{query}\".",
        "hint": {
          "example": "<strong>Приклад:</strong> Київ, Україна",
          "info": "Наша система пошуку працює лише з назвами і адресами місць. Отже, будь ласка, шукайте або за назвою або за адресою, наприклад вулицею чи містом. Пошук за типом місця, наприклад ресторану чи кінотеатру, не працює.",
          "work_in_progress": "Ми активно працюємо над вдосконаленням пошуку у майбутньому."
        },
        "try_this": {
          "address": "Будь ласка, додайте більше <strong>відомостей про адресу</strong>.",
          "intro": "Спробуйте наступне:",
          "spell_check": "Перевірте <strong>написання</strong> введених слів."
        }
      },
      "results": {
        "ticker": {
          "few": "%{count} результата:",
          "one": "%{count} результат:",
          "other": "%{count} результатів:"
        }
      },
      "search": {
        "for": "Пошук \"%{q}\"",
        "not_found": "Жодного місця не знайдено"
      }
    },
    "timeout": {
      "headline": "Sorry, something went wrong",
      "info": "Наша система пошуку була тимчасово недоступна.",
      "repeat_search": "Спробувати пошукати ще раз"
    }
  },
  "splash": {
    "countline": "%{count} місця вже були позначені.",
    "headline": "Кожен може додати місця, доступні для людей на інвалідних візках.",
    "start": "Старт",
    "step1": "Натисніть на місце, яке ви знаєте",
    "step2": "Виберіть його статус і натисніть Зберегти",
    "step3": "І все! Реєстрація не потрібна",
    "what_is_wheelmap": "What is Wheelmap?"
  },
  "statistics": "Статистика",
  "support": {
    "array": {
      "last_word_connector": " та ",
      "sentence_connector": "і",
      "two_words_connector": " і ",
      "words_connector": ", "
    },
    "select": {
      "prompt": "Будь ласка, виберіть"
    }
  },
  "time": {
    "am": "до полудня",
    "formats": {
      "default": "%a, %d %b %Y, %H:%M:%S %z",
      "long": "%d %B %Y, %H:%M",
      "short": "%d %b, %H:%M"
    },
    "pm": "по полудні"
  },
  "toiletstatus": {
    "no": "Немає туалету, доступного для людей на візках",
    "unknown": "Статус туалету невідомий",
    "what_is": {
      "no": "Doorways' inner width min. 90 cm (35 in), clear floor space min. 150 x 150 cm (59 x 59 in), wheelchair-height toilet seat, folding grab rails and accessible hand basin.",
      "unknown": "Help out by marking the toilet status!",
      "yes": "Doorways' inner width min. 90 cm (35 inc), clear floor space min. 150 x 150 cm (59 x 59), wheelchair-height toilet seat, folding grab rails and accessible hand basin."
    },
    "yes": "Туалет доступний для людей на візках"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "Ваш обліковий запис активовано!"
      },
      "error": {
        "notice": "Електронна пошта чи пароль недійсні."
      },
      "notice": "Ви увійшли!"
    },
    "destroy": {
      "notice": "Бувай, заходь ще!"
    },
    "new": {
      "email": "Email address",
      "login": "Увійти",
      "login_with_twitter": "Увійти через Twitter",
      "password": "Пароль",
      "remember_me": "Запам'ятати мене"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "You are almost there! Now on to finalize your Wheelmap account:",
        "set_password_for_mobile": "You have successfully registered with OpenStreetMap. Please choose an email address that you would like Wheelmap to use so we can keep you informed about your activities (for example the number of places you have marked). You can access this information on your \"Profile\".",
        "text": "Як ми можемо зв'язатися з вами? Ви можете змінити цю інформацію пізніше в своєму профілі."
      }
    },
    "edit": {
      "headline": {
        "your_images": "Ваші вивантажені зображення"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "Інформація профілю"
        },
        "title": "Профіль"
      },
      "newsletter": {
        "label": "Так, надсилайте мені останні новини Wheelmap.",
        "text": "Stay up to date with the Wheelmap newsletter. Don't worry, we won't spam you. You'll hear from us once a month at most.",
        "title": "Інформаційний бюлетень"
      },
      "photos": {
        "empty": "You haven't uploaded any photos yet.",
        "title": "Фото"
      },
      "show": {
        "greeting": {
          "anonymously": "Вітаємо",
          "personalized": "Вітаємо, %{name}"
        },
        "overview": {
          "photos_uploaded": {
            "few": "вивантажено %{count} фотографії",
            "one": "вивантажено %{count} фотографію",
            "other": "вивантажено %{count} фотографій"
          },
          "pois_added": {
            "few": "додано %{count} місця",
            "one": "додано %{count} місце",
            "other": "додано %{count} місць"
          },
          "pois_edited": {
            "one": "edited %{count} place",
            "other": "edited %{count} places"
          },
          "pois_marked": {
            "few": "відмічено %{count} місця",
            "one": "відмічено %{count} місце",
            "other": "відмічено %{count} місць"
          },
          "text": "У вас"
        },
        "text_html": "Hello there,<br>\nWelcome (back) to Wheelmap.org! We’re happy to have you on board! You can browse our <a href=\"http://wheelmap.org/en/blog-2/\">Blog</a> or <a href=\"http://wheelmap.org/en/faqs/\">FAQs</a> if you want to get to know Wheelmap.org a bit better. Or you can learn more about the <a href=\"http://wheelmap.org/en/get-engaged/\">projects</a> we offer around Wheelmap.org and how you can get involved.<br>\nKeep in touch<br>\nTo stay in contact you can subscribe to our monthly newsletter and follow us on <a href=\"https://www.facebook.com/wheelmap\">Facebook</a> and <a href=\"https://twitter.com/wheelmap\">Twitter</a>. We’re looking forward to hearing your opinion and starting a conversation with you!<br>\nAnd now, happy mapping!<br>\nYour Wheelmap team",
        "title": "Огляд"
      },
      "widget": {
        "categories": "Show category filter",
        "center": "Map area",
        "empty_center": "Search for center of map …",
        "empty_provider": "Choose a Provider",
        "height": "Height",
        "legends": {
          "embed": "Embed code",
          "embed_explanation": "You can change the specifications for latitude (<code>lat</code>), longitude (<code>lon</code>) and zoom level (<code>zoom</code>) in the code above manually and thereby adjust the map segment (widget) according to the location you want to show.",
          "general": "Create your own Wheelmap widget and embed it in your website or blog.",
          "preview": "Preview",
          "settings": "налаштування"
        },
        "providers": "Provider",
        "title": "Widget",
        "width": "Width"
      }
    }
  },
  "views": {
    "pagination": {
      "first": "&laquo; Перша",
      "last": "Остання &raquo;",
      "next": "Наступна &rsaquo;",
      "previous": "&lsaquo; Попередня",
      "truncate": "&hellip;"
    }
  },
  "wheelchairstatus": {
    "limited": "З обмеженою зручністю для людей на інвалідних візках.",
    "no": "Недоступно для інвалідних візків",
    "unknown": "Невідомий статус",
    "yes": "Доступне для людей на інвалідних візках"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "Проект",
      "based_on": "На основі",
      "become_a_supporter": "Стати спонсором",
      "main_supporter": "Головний спонсор"
    },
    "itunes": {
      "alt": "Логотип AppStore",
      "title": "Завантажуйте iPhone App!"
    },
    "logo": {
      "alt": "Логотип Wheelmap - пошук місць, доступних для людей на інвалідних візках",
      "title": "Wheelmap - пошук місць, що доступні для людей на інвалідних візках"
    },
    "what_is": {
      "fully_accessible": "Вхід без сходинок. Усі номери також без сходинок.",
      "limited_accessible": "На вході є сходинка з максимальною висотою до 7см (3 дюйма). В більшості номерів сходів немає.",
      "not_accessible": "На вході є сходинка чи кілька сходинок. Номери не обладнані.",
      "unknown_accessible": "Допоможіть, позначивши місця!"
    }
  },
  "will_paginate": {
    "next_label": "Далі &#8594;",
    "page_entries_info": {
      "multi_page": "Показано %{model} %{from} - %{to} з %{count} загалом",
      "multi_page_html": "Показано %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> з <b>%{count}</b> загалом",
      "single_page": {
        "one": "Показано 1 %{model}",
        "other": "Показано усі %{count} %{model}",
        "zero": "%{model} не знайдено"
      },
      "single_page_html": {
        "one": "Показано <b>1</b> %{model}",
        "other": "Показано <b>усі&nbsp;%{count}</b> %{model}",
        "zero": "%{model} не знайдено"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Назад"
  }
});
