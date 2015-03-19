I18n.translations || (I18n.translations = {});
I18n.translations["pt"] = {"date":{"formats":{"default":"%d/%m/%Y","short":"%d de %B","long":"%d de %B de %Y"},"day_names":["Domingo","Segunda","Ter\u00e7a","Quarta","Quinta","Sexta","S\u00e1bado"],"abbr_day_names":["Dom","Seg","Ter","Qua","Qui","Sex","S\u00e1b"],"month_names":[null,"Janeiro","Fevereiro","Mar\u00e7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],"abbr_month_names":[null,"Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],"order":["day","month","year"]},"time":{"formats":{"default":"%A, %d de %B de %Y, %H:%Mh","short":"%d/%m, %H:%M hs","long":"%A, %d de %B de %Y, %H:%Mh"},"am":"am","pm":"pm"},"support":{"array":{"words_connector":", ","two_words_connector":" e ","last_word_connector":", e","sentence_connector":"e","skip_last_comma":true},"select":{"prompt":"Por favor seleccione"}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"n\u00e3o est\u00e1 inclu\u00eddo na lista","exclusion":"\u00e9 reservado","invalid":"\u00e9 inv\u00e1lido","confirmation":"n\u00e3o coincide com a confirma\u00e7\u00e3o","accepted":"tem de ser aceite","empty":"n\u00e3o pode estar vazio","blank":"n\u00e3o pode estar em branco","too_long":"\u00e9 demasiado grande (o m\u00ednimo \u00e9 de %{count} characters)","too_short":"\u00e9 demasiado pequeno (o m\u00ednimo \u00e9 de %{count} caracteres)","wrong_length":"comprimento errado (deve ter %{count} caracteres)","not_a_number":"n\u00e3o \u00e9 um n\u00famero","not_an_integer":"tem de ser um n\u00famero integral","greater_than":"tem de ser maior que %{count}","greater_than_or_equal_to":"tem de ser maior ou igual a %{count}","equal_to":"tem de ser igual a %{count}","less_than":"tem de ser menor que %{count}","less_than_or_equal_to":"tem de ser menor ou igual a %{count}","odd":"tem de ser \u00edmpar","even":"tem de ser par","carrierwave_processing_error":"failed to be processed","carrierwave_integrity_error":"is not of an allowed file type","carrierwave_download_error":"could not be downloaded","extension_white_list_error":"You are not allowed to upload %{extension} files, allowed types: %{allowed_types}","extension_black_list_error":"You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}","rmagick_processing_error":"Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}","mime_types_processing_error":"Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}","mini_magick_processing_error":"Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}","already_confirmed":"j\u00e1 estava confirmado, por favor volte a registrar-se","expired":"has expired, please request a new one","not_found":"n\u00e3o foi encontrado","not_locked":"n\u00e3o estava bloqueado","not_saved":{"one":"Um erro impdiu que %{resource} fosse salvo:","other":"%{count} erros impediu que %{resource} fossem salvos :"},"taken":"j\u00e1 pertence a outra pessoa","confirmation_period_expired":"needs to be confirmed within %{period}, please request a new one"},"models":{"node":{"website":{"invalid":"Website address is not valid."},"phone":{"invalid":"Phone number is not valid. It must have the following format: +49 30 234567"}}},"dynamic_format":"%{message}","template":{"body":"Houve problemas com os seguintes campos: ","header":{"one":"Um erro impdiu que %{model} fosse salvo:","other":"%{count} erros impediu que %{model} fossem salvos :"}}},"activerecord":{"errors":{"messages":{"taken":"n\u00e3o est\u00e1 dispon\u00edvel","record_invalid":"A valida\u00e7\u00e3o falhou: %{errors}","accepted":"tem de ser aceite","blank":"n\u00e3o pode estar em branco","confirmation":"n\u00e3o coincide com a confirma\u00e7\u00e3o","empty":"n\u00e3o pode estar vazio","equal_to":"tem de ser igual a %{count}","even":"tem de ser par","exclusion":"\u00e9 reservado","greater_than":"tem de ser maior que %{count}","greater_than_or_equal_to":"tem de ser maior ou igual a %{count}","inclusion":"n\u00e3o est\u00e1 inclu\u00eddo na lista","invalid":"\u00e9 inv\u00e1lido","less_than":"tem de ser menor que %{count}","less_than_or_equal_to":"tem de ser menor ou igual a %{count}","not_a_number":"n\u00e3o \u00e9 um n\u00famero","not_equal_to":"must not be equal to %{count}","odd":"tem de ser \u00edmpar","too_long":"\u00e9 demasiado grande (o m\u00ednimo \u00e9 de %{count} characters)","too_short":"\u00e9 demasiado pequeno (o m\u00ednimo \u00e9 de %{count} caracteres)","wrong_length":"comprimento errado (deve ter %{count} caracteres)"},"full_messages":{"format":"%{attribute}%{message}"},"models":{"user":{"attributes":{"email":{"blank":"can't be blank if password is given"},"privacy_policy":{"accepted":"must be accepted"},"terms":{"accepted":"must be accepted"}}},"user_session":{"email":"E-mail","password":"Palavra Passe","remember_me":"Manter-se ligado \u00e0 conta"}},"template":{"body":"Por favor, verifique os seguintes campos:","header":{"one":"N\u00e3o foi poss\u00edvel guardar %{model}: 1 erro","other":"N\u00e3o foi poss\u00edvel guardar %{model}: %{count} erros"}}},"attributes":{"user":{"first_name":"Given name","last_name":"Last name","privacy_policy":"Privacy policy","terms":"Terms"},"poi":{"name":"Nome","type":"Tipo","address":"Address","website":"Website","phone":"Telefone","note":"Note","address_street":"Rua","address_housenumber":"Nr","address_postcode":"c\u00f3digo postal","address_city":"Cidade"}},"models":{"user":"User"}},"number":{"format":{"separator":",","delimiter":".","precision":3,"significant":0,"strip_insignificant_zeros":0},"currency":{"format":{"format":"%u%n","unit":"\u20ac","separator":",","delimiter":".","precision":2,"significant":0,"strip_insignificant_zeros":0}},"percentage":{"format":{"delimiter":null}},"precision":{"format":{"delimiter":null}},"human":{"format":{"delimiter":null,"precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u","units":{"unit":null,"thousand":"Mil","million":"Milh\u00e3o","billion":"Bilh\u00e3o","trillion":"Trilh\u00e3o","quadrillion":"Quatrilh\u00e3o"}}}},"datetime":{"distance_in_words":{"half_a_minute":"meio minuto","less_than_x_seconds":{"one":"menos de 1 segundo","other":"menos de %{count} segundos"},"x_seconds":{"one":"1 segundo","other":"%{count} segundos"},"less_than_x_minutes":{"one":"menos de um minuto","other":"menos de %{count} minutos"},"x_minutes":{"one":"1 minuto","other":"%{count} minutos"},"about_x_hours":{"one":"aproximadamente 1 hora","other":"aproximadamente %{count} horas"},"x_days":{"one":"1 dia","other":"%{count} dias"},"about_x_months":{"one":"aproximadamente 1 m\u00eas","other":"aproximadamente %{count} meses"},"x_months":{"one":"1 m\u00eas","other":"%{count} meses"},"about_x_years":{"one":"aproximadamente 1 ano","other":"aproximadamente %{count} anos"},"over_x_years":{"one":"mais de 1 ano","other":"mais de %{count} anos"},"almost_x_years":{"one":"quase 1 ano","other":"quase %{count} years"}},"prompts":{"year":"Ano","month":"M\u00eas","day":"Dia","hour":"Hora","minute":"Minuto","second":"Segundo"}},"helpers":{"select":{"prompt":"Por favor seleccione"},"submit":{"create":"Criar  %{model}","update":"Actualizar  %{model}","submit":"Guardar  %{model}"},"button":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"},"page_entries_info":{"more_pages":{"display_entries":"Displaying %{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> of <b>%{total}</b> in total"},"one_page":{"display_entries":{"one":"Displaying <b>1</b> %{entry_name}","other":"Displaying <b>all %{count}</b> %{entry_name}","zero":"No %{entry_name} found"}}}},"flash":{"actions":{"create":{"notice":"%{resource_name} foi criado com sucesso."},"update":{"notice":"%{resource_name} foi actualizado com sucesso"},"destroy":{"notice":"%{resource_name} foi eliminado com sucesso","alert":"%{resource_name} n\u00e3o pode ser eliminado. "}},"photos":{"destroy":{"notice":"Image was successfully deleted"}}},"meta_search":{"or":"or","predicates":{"equals":"%{attribute} equals","does_not_equal":"%{attribute} doesn't equal","contains":"%{attribute} contains","does_not_contain":"%{attribute} doesn't contain","starts_with":"%{attribute} starts with","does_not_start_with":"%{attribute} doesn't start with","ends_with":"%{attribute} ends with","does_not_end_with":"%{attribute} doesn't end with","greater_than":"%{attribute} greater than","less_than":"%{attribute} less than","greater_than_or_equal_to":"%{attribute} greater than or equal to","less_than_or_equal_to":"%{attribute} less than or equal to","in":"%{attribute} is one of","not_in":"%{attribute} isn't one of","is_true":"%{attribute} is true","is_false":"%{attribute} is false","is_present":"%{attribute} is present","is_blank":"%{attribute} is blank","is_null":"%{attribute} is null","is_not_null":"%{attribute} isn't null"}},"views":{"pagination":{"first":"&laquo; First","last":"Last &raquo;","next":"Next &rsaquo;","previous":"&lsaquo; Prev","truncate":"&hellip;"}},"active_admin":{"dashboard":"Dashboard","dashboard_welcome":{"welcome":"Welcome to Active Admin. This is the default dashboard page.","call_to_action":"To add dashboard sections, checkout 'app/admin/dashboard.rb'"},"view":"View","edit":"Edit","delete":"Delete","delete_confirmation":"Are you sure you want to delete this?","new_model":"New %{model}","create_model":"New %{model}","edit_model":"Edit %{model}","update_model":"Edit %{model}","delete_model":"Delete %{model}","details":"%{model} Details","cancel":"Cancel","empty":"Empty","previous":"Previous","next":"Next","download":"Download:","has_many_new":"Add New %{model}","has_many_delete":"Delete","filter":"Filter","clear_filters":"Clear Filters","search_field":"Search %{field}","equal_to":"Equal To","greater_than":"Greater Than","less_than":"Less Than","main_content":"Please implement %{model}#main_content to display content.","logout":"Logout","powered_by":"Powered by %{active_admin} %{version}","sidebars":{"filters":"Filters"},"pagination":{"empty":"No %{model} found","one":"Displaying <b>1</b> %{model}","one_page":"Displaying <b>all %{n}</b> %{model}","multiple":"Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{total}</b> in total","entry":{"one":"entry","other":"entries"},"multiple_without_total":"Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>"},"any":"Any","blank_slate":{"content":"There are no %{resource_name} yet.","link":"Create one"},"batch_actions":{"button_label":"Batch Actions","delete_confirmation":"Are you sure you want to delete these %{plural_model}? You won't be able to undo this.","succesfully_destroyed":{"one":"Successfully destroyed 1 %{model}","other":"Successfully destroyed %{count} %{plural_model}"},"selection_toggle_explanation":"(Toggle Selection)","link":"Create one","action_label":"%{title} Selected","labels":{"destroy":"Delete"}},"comments":{"body":"Body","author":"Author","title":"Comment","add":"Add Comment","resource":"Resource","no_comments_yet":"No comments yet.","title_content":"Comments (%{count})","errors":{"empty_text":"Comment wasn't saved, text was empty."},"resource_type":"Resource Type","author_type":"Author Type"},"devise":{"login":{"title":"Login","remember_me":"Remember me","submit":"Login"},"reset_password":{"title":"Forgot your password?","submit":"Reset My Password"},"change_password":{"title":"Change your password","submit":"Change my password"},"links":{"sign_in":"Sign in","forgot_your_password":"Forgot your password?","sign_in_with_omniauth_provider":"Sign in with %{provider}"},"unlock":{"title":"Resend unlock instructions","submit":"Resend unlock instructions"}},"has_many_remove":"Remove","filters":{"buttons":{"filter":"Filter","clear":"Clear Filters"},"predicates":{"contains":"Contains","equals":"Equals","starts_with":"Starts with","ends_with":"Ends with","greater_than":"Greater than","less_than":"Less than"}},"access_denied":{"message":"You are not authorized to perform this action."},"index_list":{"table":"Table","block":"List","grid":"Grid","blog":"Blog"}},"devise":{"confirmations":{"confirmed":"A sua conta est\u00e1 confirmada. Est\u00e1 agora ligado \u00e0 sua conta.","link":"N\u00e3o recebeu a confirma\u00e7\u00e3o com instru\u00e7\u00f5es?","send_instructions":"Receber\u00e1 dentro de minutos um e-mail com intru\u00e7\u00f5es de como confirmar a sua conta.","send_paranoid_instructions":"If your email address exists in our database, you will receive an email with instructions about how to confirm your account in a few minutes."},"destroy":{"confirm":"Tem a certeza?","headline":"Apagar a conta.","link":"Apagar agora"},"edit":{"form":{"labels":{"current_password":"Palavra passe actual <i> (precisamos do seguinte para confirmar a altera\u00e7\u00e3o) </i>","email":"E-mail","password":"Palavra passe <i> (deixar em branco se n\u00e3o quiser mudar) </i>","password_confirmation":"Repita a palavra passe"},"submit":"Gravar mudan\u00e7as"},"headline":"Op\u00e7\u00f5es da conta"},"failure":{"already_authenticated":"You are already signed in.","inactive":"A sua conta ainda nao foi activada.","invalid":"Palavra passe ou Email inv\u00e1lido. ","invalid_token":"d","locked":"A sua conta est\u00e1 bloqueada.","timeout":"A sua sess","unauthenticated":"Vo\u00e7\u00ea tem de se registrar antes de poder continuar.  ","unconfirmed":"Vo\u00e7\u00ea tem de confirmar a sua conta antes de continuar.","not_found_in_database":"Invalid email or password."},"mailer":{"confirmation_instructions":{"landing_page":"Please click on the link that we just sent to your email address. If you do not receive an email from us please first check it is not hiding in your spam folder, if it is not there return to the sign up page and try again.","subject":"Confirma\u00e7\u00e3o das instru\u00e7\u00f5es"},"reset_password_instructions":{"subject":"Restabelecer as intru\u00e7\u00f5es sobre a palavra passe"},"unlock_instructions":{"subject":"Desbloquear as instru\u00e7\u00f5es  "}},"mandatory":"* campo obrigat\u00f3rio","omniauth_callbacks":{"failure":"n\u00e3o p\u00f4de ser confirmado de  %{kind} porque \"%{reason}","permission_missing":"You did not grant the required permissions.","success":"Autorizado com sucesso de %{kind} conta"},"password_recovery":{"form":{"labels":{"email":"E-mail"},"submit":"Restabelecer a sua palavra passe"},"headline":"Esqueceu-se da palavra passe?"},"password_reset":{"email":{"comment":"Se n\u00e3o pediu para alterar a sua palavra passe, por favor ignore este mail <br/>. A sua palavra passe n\u00e3o ser\u00e1 alterada a n\u00e3o ser que carregue no seguinte link.","headline":"Bem vindo %{email}","link":"Mudar a palavra passe","text":"Algu\u00e9m pediu para alterar a sua palavra passe. Pode fazer essa altera\u00e7\u00e3o carregando no seguinte link: "},"form":{"labels":{"password":"Nova palavra passe","password_confirmation":"Repita a palavra passe"},"submit":"Restabelecer a palavra passe"},"headline":"Restabelecer a palavra passe"},"passwords":{"link":"Esquececeu-se da palavra passe?","send_instructions":"Dentro de minutos receber\u00e1 um mail com as instru\u00e7\u00f5es de como restablecer a sua palavra passe","send_paranoid_instructions":"If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.","updated":"A sua palavra passe foi alterada con sucesso. Est\u00e1 agora ligado \u00e0 sua conta.","updated_not_active":"Your password was changed successfully.","no_token":"You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided."},"registrations":{"destroyed":"Adeus! A sua conta foi cancelada com sucesso. At\u00e9 breve.","inactive_signed_up":"You have signed up successfully, but we could not log you in. Reason: \"%{reason}\"","link":"Criar conta","reasons":{"inactive":"inactive","locked":"locked","unconfirmed":"unconfirmed"},"signed_up":"Conta criada com sucesso. Uma confirma\u00e7\u00e3o foi mandada para o seu mail.","updated":"A actualiza\u00e7\u00e3o da sua conta decorreu com sucesso","signed_up_but_inactive":"You have signed up successfully. However, we could not sign you in because your account is not yet activated.","signed_up_but_locked":"You have signed up successfully. However, we could not sign you in because your account is locked.","signed_up_but_unconfirmed":"A message with a confirmation link has been sent to your email address. Please open the link to activate your account.","update_needs_confirmation":"You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address."},"sessions":{"inactive":"A sua conta ainda n\u00e3o foi activada","invalid":"E-mail ou palavra passe inv\u00e1lida ","invalid_token":"Ficha de autentifica\u00e7\u00e3o inv\u00e1lida","link":"Entrar na conta","locked":"A sua conta est\u00e1 bloqueada","new":{"no_osm_account":"No OpenStreetMap account?","osm_promo_text":"The wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must to be logged in with it.","promo_text_thank_you":"Thank you very much for your support!","sign_in_with":"Log in with %{kind}","sign_up_with_osm":"Register now.","wheelmap_promo_text":"With your knowledge about wheelchair accessible places you help people with physical impairments to better organize their everyday live. Furthermore the OpenStreetMap gets considerably richer in detail."},"signed_in":"Entrou na conta com sucesso","signed_out":"Saiu da conta com sucesso","timeout":"A sua sess\u00e3o expiou, por favor volte a entrar na sua conta para continuar.","unauthenticated":"Tem de criar uma conta ou entrar na sua conta para continuar.","unconfirmed":"Tem de confirmar a sua conta antes de continuar"},"sign_in":{"form":{"labels":{"email":"E-mail","password":"Palavra passe","remember_me":"manter-se ligado \u00e0 sua conta"},"submit":"entrar"},"headline":"Entrar"},"sign_out":{"headline":"Sair"},"sign_up":{"email":{"confirm_my_account":"Confirm my account","please_confirm":"You can confirm your account through the link below:","welcome":"Welcome %{email}!"},"form":{"labels":{"email":"E-mail","password":"Palavra passe","password_confirmation":"Repita a palavra passe","wants_newsletter":"Yes, keep me up to date about wheelmap - but please not more than once a month."},"submit":"Registrar-se"},"headline":"Registrar-se"},"unlocks":{"link":"N\u00e3o recebeu instru\u00e7\u00f5es para desbloquear a sua conta?","send_instructions":"Receber\u00e1 dentro de minutos um mail com intru\u00e7\u00f5es de como desbloquear a sua conta.","send_paranoid_instructions":"If your account exists, you will receive an email with instructions about how to unlock it in a few minutes.","unlocked":"A sua conta foi desbloqueada com sucesso. Est\u00e1 agora ligado(a) \u00e0 sua conta"}},"poi":{"category":{"accommodation":"Acomoda\u00e7\u00e3o ","education":"Ecuca\u00e7\u00e3o ","food":"Comida","government":"Governo","health":"Health","leisure":"Prazer","misc":"outros","money_post":"Banco & Correios","public_transfer":"Trnsportes P\u00fablicos","shopping":"Shopping","sport":"Desporto","tourism":"Turismo","unknown":"Desconhecido"},"name":{"accommodation":{"beach_resort":"Hotel Praia","bed_and_breakfast":"Bed and Breakfast","camp_site":"Acampamento","caravan_site":"Sitio de caravana","chalet":"Chalet","dormitory":"Dormitory","guest_house":"Guest House","hostel":"Pousada","hotel":"Hotel","motel":"Motel"},"education":{"college":"Col\u00e9gio","driving_school":"Driving school","kindergarten":"Jardim escola","library":"Biblioteca","museum":"Museu","school":"Escola","university":"Universidade"},"food":{"bar":"Bar","biergarten":"Bar de cerveja","cafe":"caf\u00e9","drinking_water":"Agua pot\u00e1vel","fast_food":"Fast food","ice_cream":"Ice cream parlour","pub":"Pub","restaurant":"Restaurante"},"government":{"courthouse":"Tribunal","embassy":"Embaixada","government":"Government agency","police":"Police","public_building":"Edificio p\u00fablico","townhall":"Townhall"},"health":{"dentist":"Dentist","doctors":"Doutores","hearing_aids":"Hearing aid dealer","hospital":"Hospital","medical_supply":"Medical supplies","pharmacy":"Farm\u00e1cia","social_facility":"Social facility","veterinary":"Veteren\u00e1rio"},"leisure":{"arena":"Arena","brothel":"Brothel","casino":"Casino","cinema":"Cinema","community_center":"Community Center","gallery":"Galeria","nightclub":"Clube Nocturno","playground":"Playground","sauna":"Sauna","stripclub":"Stripclub","theatre":"Teatro","zoo":"Zool\u00f3gico"},"misc":{"company":"Company (Office)","estate_agent":"Real estate agent","insurance":"Insurance","lawyer":"Lawyer","place_of_worship":"Lugar de ora\u00e7\u00e3o ","toilets":"Casa de banho"},"money_post":{"atm":"Caixa Multibanco","bank":"Banco","bureau_de_change":"Loja de Cambio","post_box":"Caixa de Correio","post_office":"Correios"},"public_transfer":{"aerodrome":"Aeroporto","bicycle_parking":"Parque para bicicletas","bicycle_rental":"Aluguer de bicicletas","boatyard":"Lugar onde barcos s\u00e3o constru\u00eddos e guardados ","bus_station":"Esta\u00e7\u00e3o de Autocarros","bus_stop":"Esta\u00e7\u00e3o de Autocarros","cable_car":"Telef\u00e9rico","car_rental":"Aluguer de carros","car_sharing":"Car sharing","chair_lift":"Elevador","ferry":"Ferry","ferry_terminal":"Terminal Ferry","fuel":"Bomba de gasolina","halt":"Esta\u00e7\u00e3o ","light_rail":"Metro","parking":"Parque de estacionamento","parking_aisle":"Lugar de estacionamento","platform":"Plataforma","station":"Metro","subway_entrance":"Entrada do Metro ","terminal":"Terminal de Aeroporto ","tram_stop":"Esta\u00e7\u00e3o de el\u00e9ctrico"},"shopping":{"alcohol":"Licor","bakery":"Padaria","beauty":"Beauty salon","beverages":"Bebidas","bicycle":"Loja de bicicletas","books":"Livros","butcher":"Talho","car_repair":"Car repair","car_shop":"Car shop","chemist":"Chemist","clothes":"Roupa","computer":"Computador","confectionery":"Candy store","convenience":"Conveni\u00eancia","deli":"Delicatessen","department_store":"Shopping Center","doityourself":"Fa\u00e7a voc\u00ea mesmo","dry_cleaning":"Limpeza a seco","electronics":"Eletr\u00f3nica","fabric":"Fabric shop","farm_shop":"Farm shop","florist":"Florista","furniture":"M\u00f3v\u00e9is","garden_centre":"Centro de jardinagem","gift":"Gift shop","hairdresser":"Cabeleireiro","hardware":"Hardware","jewelry":"Jewelry","kiosk":"Quisque","laundry":"Lavandaria","mall":"Shopping Center","optician":"\u00d3ptica","organic":"Organic shop","outdoor":"Outdoor supply","pet":"Pet shop","photo":"Photo","second_hand":"Second hand","shoes":"Sapatos","sports":"Sports","stationery":"Stationery","supermarket":"Supermercado","toys":"Toys","travel_agency":"Travel agency","video":"Video rental store"},"sport":{"pitch":"Sports field","sports_centre":"Centro de desporto","stadium":"Est\u00e1dio","swimming":"Nadar","swimming_pool":"Piscina"},"tourism":{"archaeological_site":"Local arqueol\u00f3gico","arts_centre":"centro de artes","artwork":"Obra de arte","attraction":"Atrac\u00e7\u00e3o","battlefield":"Campo de batalha","beach":"Praia","beacon":"Farol","castle":"castelo","cave_entrance":"Entrada da caverna","information":"Informa\u00e7\u00e3o para turistas","memorial":"Memorial","theme_park":"Parque tem\u00e1tico","tower":"Torre","viewpoint":"Ponto de vista"},"unknown":{"unknown":"Desconhecido"}}},"models":{"category":{"prompt":"Choose a category"},"node_type":{"prompt":"Choose a type"},"node":{"info_edit_position":"The location will appear on the Wheelmap as it is shown above. If the marker is not in the correct spot you can <a href=\"%{url}\">change its position on the OpenStreetMap.</a>","mail":{"subject":"[Wheelmap] Problem with %{headline}","body":"(Please only write in English or German.)\n\nHi Sozialhelden,\nsomething is wrong with location: %{url}\n\nThe problem is:"}}},"actions":{"send":"Send","save":"Guardar","cancel":"Cancel"},"faq":{"answers":{"0":"You can always change the marking of a place yourself. Just choose the right marking and \"Save\" - done!","1":"As a logged in user you can add / correct all the details of a place. Click on \"Edit\" and correct or add information in the mask.","2":"You can add further information (e.g. \"This place has a mobile ramp\") in the comment section. Click on \"Edit\" and \"Add comment\"."},"headline":"Is there a problem with this place?","questions":{"0":"The marking is wrong.","1":"The details of the place are incorrect or missing.","2":"I have more information about this place."}},"header":{"navigation":{"about_wheelmap":"About Wheelmap","choose_language":"Choose language","contact":"Contact","map":"Map","projects":"Projects","blog":"Blog","feedback":"Feedbck","home":"Iniciar","how_to_add_a_place":"Como adicionar lugares?","imprint":"Imprimir","logged_in_as":"Registrado como:","login":"Entrar","logout":"Sair","newsletter":"Newsletter","press":"Imprensa","profile":"Profile","suggestions":"Sugest\u00f5es","what_is_barrier_free":"Qual o significado de \"acess\u00edvel a cadeira de rodas\"?","what_is_wheelmap":"O que \u00e9 o wheelmap?"},"toolbar":{"categories":"Categories"},"meta":{"description":"encontrar lugares acess\u00edveis a cadeira de rodas - wheelmap.org","homepage":"Homepage","keywords":"lugares acess\u00edveis a cadeira de rodas procurar indicador de procura","search":"Procurar"},"searchbar":{"add_place":"Adicionar outro lugar","find":"encontrar","label":null,"placeholder":"p. Ex. Sunset Boulevard L.A. ou o Port\u00e3o de Brandenburgo","title_add_place":"Adicionar um novo lugar nesta posi\u00e7\u00e3o agora!"},"tagline":"L\u00f3gotipo do Wheelmap","title":"Encontre lugares acessiv\u00e9is a cadeira de rodas"},"home":{"index":{"overlay":{"button":"Okay, let\u2019s go!","categories":"Filter places by categories","filter":"Filter places by wheelchair accessibility","headline":"Mark and find wheelchair accessible places with Wheelmap.org - worldwide and for free. It\u2019s easy:","lookup":"Search for a specific place","secondary_headline":"Our traffic light system to mark the wheelchair accessibility of public places:"},"filter":{"category":"Categoria:","deselect_all":"Deselect all","select_all":"Select all","wheelchair":"Acessivel a cadeira de rodas? (O que significa isto?) "},"ie":{"action":{"ignore":"Ignore","upgrade":"Update Browser"},"warning":{"headline":"We apologise!","message":"You appear to use Internet Explorer. Wheelmap requires a standard-compliant browser to work properly. Please consider using Firefox, Chrome, Safari or Opera."}},"link":{"node":{"create":"Adicionar um novo lugar"}},"popup":{"form":{"limited":"parcial acesibilidade a cadeira de rodas","no":"sem acessibilidade a cadeira de rodas","save":"Update","unknown":"acessibilidade a cadeira de rodas desconhecida","yes":"Completa acessibilidade a cadeira de rodas"},"help":"Wheelchair accessible? (Help)","more":"more ..."}}},"nodes":{"new":{"form":{"legend":"Location of the place","location":"Please click on the map and place the marker at the exact position."},"header":{"title":"Novo lugar | wheelmap.org"},"link":{"large_map":"&laquo; Cancel"}},"node_data":{"address":"Address:","contact_details":"Contact details:"},"node_edit":{"details":"Details","edit":"Edit"},"node_map":{"map":"Map:"},"node_note":{"comment":"Comment:"},"node_photos":{"add":"Add","photos_of_this_place":"Photos of this place:","upload":"Upload"},"node_similar":{"similar":"Similar places: %{name}"},"node_status":{"accessible_toilet":"Wheelchair accessible toilet:","premium":"%{name} says: this place is","wheelchair_accessibility":"Wheelchair accessibility:"},"node_streetview":{"streetview":"Streetview:"},"show":{"header":{"meta":{"description":"Find out if this place is wheelchair accessible on Wheelmap.org. Or add further information and photos to the place.","title":"This place is on Wheelmap.org: %{name}"},"title":"Place: %{node} | wheelmap.org"},"share":{"email":"E-mail","facebook":"Facebook","text":"I've found this place on Wheelmap.org: %{name}","twitter":"Twitter"},"link":{"back":"back","large_map":"Aumentar","listing":"All places of typ '%{type}' in %{city}","upload":"Upload image"},"more_data_from":"There is more data for this place, checked by:","show-in-osm":"OpenStreetMap"},"create":{"flash":{"not_successfull":"Oops, os dados introduzido est\u00e3o incorrectos ou incompletos","successfull":"Muito obrigado, os dados submetidos foram guardados com sucesso e estar\u00e3o online em breve. "}},"edit":{"header":{"title":"Edit place: %{node} | wheelmap.org"},"link":{"large_map":"&laquo; Cancel"}},"errors":{"default":"Oops, algo n\u00e3o correu bem. N\u00f3s j\u00e1 fomos informados sobre a situa\u00e7\u00e3o. ","not_authorized":"Desculpe, a autentifica\u00e7\u00e3o falhou","not_available":"Desculpe, mas esta p\u00e1gina n\u00e3o est\u00e1 de momento acess\u00edvel","not_existent":"Desculpe, este lugar j\u00e1 n\u00e3o est\u00e1 mais acess\u00edvel","not_found":"Desculpe, a p\u00e1gina n\u00e3o foi encontrada","param_missing":"Por Favor introduza um termo para procura"},"flash":{"authorize_wheelmap":"Voc\u00ea precisa de uma conta OpenStreetMap para alterar os dados."},"node":{"link":{"claim":"Do you work here?","edit_node":"Editar lugar","report_bug":"Report a problem"}},"update":{"flash":{"not_successfull":"Oops, os dados introduzido est\u00e3o incorrectos ou incompletos","successfull":"Muito obrigado, os dados submetidos foram guardados com sucesso e estar\u00e3o online em breve. "}},"update_wheelchair":{"successfull":"The status for \"%{name}\" has been changed to \"%{status}\" and will be online shortly."}},"search":{"index":{"no-results":{"headline":"Sorry, we couldn\u2019t find a place called \"%{query}\".","hint":{"example":"<strong>Example:</strong> London, United Kingdom","info":"Our search service only works with name and/or address information. Hence, please either search for the name of the place or an address, e.g. street name and/or city. Searching for a type of place, e.g. restaurant or cinema, does not work!","work_in_progress":"We work hard to make searching for places easier and more intuitive in the future."},"try_this":{"address":"Please provide more <strong>address details</strong>.","intro":"Try this:","spell_check":"Check the <strong>spelling</strong> of your input."}},"results":{"ticker":{"one":"%{count} result:","other":"%{count} results:"}},"search":{"for":"Procurando \"%{q}","not_found":"N\u00e3o foi poss\u00edvel encontrar um lugar"}},"timeout":{"headline":"Oh, our fault","info":"Our search service was temporarily not available.","repeat_search":"Retry search"}},"users":{"profile":{"explanation_text":"This is a simple text that will explain what users see here ...","greeting":{"anonymously":"Hello you","personalized":"Hello %{name}"},"headline":{"edit_profile":"Edit profile","overview":"Your Account","your_photos":"Your photos"}},"tabs":{"account":"Account","images":"Images","overview":"Overview"},"after_signup_edit":{"welcome":{"headline":"You're almost there! Finish the sign up for your Wheelmap account here:","set_password_for_mobile":"You've completed your registration with OpenStreetMap.\nNow choose an email address and password for your Wheelmap account and then you're all set! You need this email address and password to log in the Wheelmap app for iPhone or Android. ","text":"How can we get in touch with you? You can change this information later in your profile."}},"edit":{"headline":{"your_images":"Your uploaded images"}}},"application":{"require_no_user":{"notice":"J\u00e1 est\u00e1 ligado \u00e0 sua conta"},"require_user":{"notice":"Tem de se ligar \u00e0 sua conta para ver o conte\u00fado desta p\u00e1gina."}},"breadcrumbs":{"node":{"create":"Adicionar um novo lugar","edit":"Editar um lugar"},"root":"\u00ea \u00e3 \u00f5  \u00e7"},"common":{"close":"fechar","skip":"skip"},"form":{"show_fully_accessible_places":"acess\u00edvel a cadeira de rodas","show_limited_accessible_places":"parcialmente acess\u00edvel a cadeira de rodas","show_places_without_status":"estatuto desconhecido","show_unaccessible_places":"n\u00e3o acess\u00edvel a cadeira de rodas"},"formtastic":{"hints":{"email":"We treat your address confidentially, no spam. Promise!","lat":"Coloque o inicador que se encontra no mapa para a posi\u00e7\u00e3o correcta ","osm_username":"Ainda n\u00e3o \u00e9 membro? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Criar uma conta Openstreetmp agora</a>","password":"(deixe em branco se n\u00e3o quiser mudar) ","phone":"p. ex. +351 21 6100453","website":"p. ex. http://www.example.com"},"labels":{"category":"Categoria:","centralkey":"Central key:","city":"Cidade:","create":"Criar um lugar","email":"Mail","finish":"Finish","housenumber":"Nr:","lat":"Latitude","lon":"Longitude","name":"Nome:","osm_password":"OSM palavra passe","osm_username":"OSM nome da conta","password":"Palavra passe","password_confirmation":"Repita a palavra passe","phone":"Telefone:","postcode":"c\u00f3digo postal:","privacy_policy":"I accept paragraphs 1 and 2 of the data privacy agreement.","reset":"Reset","save":"Guardar","street":"Rua:","terms":"I accept the terms of use.","type":"Tipo","website":"Website","wheelchair":"Acessibilidade para cadeira de rodas?","wheelchair_description":"Coment\u00e1rio sobre a acessibilidade: ","wheelchair_toilet":"Wheelchair bathroom:"},"titles":{"basic":"Data base ","optional":"Mais informa\u00e7\u00e3o <span class=\"addition\">(all fields are optional)</span>"}},"global":{"form_validation_error":"Por favor tome aten\u00e7\u00e3o aos erros mencionados em baixo."},"how?":"How?","landing_pages":{"index":{"wheelchair":{"limit":{"headline":"All limited wheelchair accessible %{type} in %{city} (%{count})"},"no":{"headline":"All non-wheelchair accessible %{type} in %{city} (%{count})"},"unknown":{"headline":"All %{type} in %{city} with unknown wheelchair status (%{count})"},"yes":{"headline":"All wheelchair accessible %{type} in %{city} (%{count})"}}}},"layouts":{"application":{"banner":{"alt":"Um projecto de Sozialhelden.de"}}},"node":{"address":{"city":"%{city} %{postcode}","street":"%{housenumber} %{street}"},"tags":{"phone":"Telefone:","website":"site na Web:"}},"oauth":{"application":{"connect":{"headline":"You need to connect your account with your 'open street map' account before you can create or modify places on wheelmap.org."}},"callback":{"notice":"Your wheelmap account is now connected to the OpenStreetMap account %{user}."}},"or":"ou","place":{"one":"%{count} place","other":"%{count} places"},"profile":{"edit":{"application":{"oauth":{"connected":"Estado: Ligado","grant":"Ligar agora","not_connected":"Estado: Desligado","revoke":"Desligar "}},"headline":"Editar o seu profil"}},"splash":{"countline":"%{count} places have already been marked.","headline":"Everyone can add wheelchair accessible places!","start":"Iniciar","step1":"Click on a place you know","step2":"Mark it and click save","step3":"That's it! No registration necessary","what_is_wheelmap":"O que \u00e9 o wheelmap?"},"statistics":"Estat\u00edsticas","toiletstatus":{"no":"no wheelchair accessible bathroom","unknown":"acessibilidade a cadeira de rodas desconhecida","yes":"wheelchair accessible bathroom"},"user_sessions":{"create":{"activation":{"notice":"A sua conta est\u00e1 agora activa."},"error":{"notice":"E-Mail e palavra passe n\u00e3o correspondem"},"notice":"Voc\u00ea est\u00e1 dentro!"},"destroy":{"notice":"Adeus, at\u00e9 breve!"},"new":{"email":"E-Mail","login":"Log in","login_with_twitter":"Log in com Twitter","password":"Palavra passe","remember_me":"Mantenha-se connectado"}},"wheelchairstatus":{"limited":"parcial acesibilidade a cadeira de rodas","no":"sem acessibilidade a cadeira de rodas","unknown":"acessibilidade a cadeira de rodas desconhecida","yes":"Completa acessibilidade a cadeira de rodas"},"wheelmap":{"footer":{"a_project_of":"A project by","based_on":"Based on","become_a_supporter":"Become a supporter","main_supporter":"Main supporter"},"itunes":{"alt":"AppStore Logo","title":"Fa\u00e7a agora o download do seu iPhone App!"},"logo":{"alt":"Wheelmap Logo - encontre lugares com acessibilidade para cadeira de rodas","title":"Wheelmap - encontre lugares com acessibilidade para cadeira de rodas"},"what_is":{"fully_accessible":"O desn\u00edvel na entrada n\u00e3o \u00e9 superior a 7 cm; todas as localidades com acesso a cadeira de rodas (sem excep\u00e7\u00e3o); casa de banho para desabilitados ","limited_accessible":"O desn\u00edvel na entrada n\u00e3o \u00e9 superior a 7 cm; as localidades mais importantes acesso a cadeira de rodas ","not_accessible":"O desn\u00edvel na entrada n\u00e3o \u00e9 superior a 7 cm; ou escadas na entrada; ou as mais importantes localidades sem acesso a cadeira de rodas","unknown_accessible":"A acessibilidade a cadeira de rodas \u00e9 desconhecida."}},"will_paginate":{"next_label":"Next &#8594;","page_entries_info":{"multi_page":"Displaying %{model} %{from} - %{to} of %{count} in total","multi_page_html":"Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{count}</b> in total","single_page":{"one":"Displaying 1 %{model}","other":"Displaying all %{count} %{model}","zero":"No %{model} found"},"single_page_html":{"one":"Displaying <b>1</b> %{model}","other":"Displaying <b>all&nbsp;%{count}</b> %{model}","zero":"No %{model} found"}},"page_gap":"&hellip;","previous_label":"&#8592; Previous"},"apipie":{"resources":"Resources","resource":"Resource","description":"Description","no_docs_found":"No documentation found","no_docs_found_descr":"We have not found any documentation for your API.","follow_instructions_html":"Follow %{href} on how to describe your controllers.","follow_instructions_href":"further instructions","oops":"Oops!!","resource_not_found_html":"Resource %{res} not found.","method_not_found_html":"Method %{method} not found for resource %{resource}.","goto_homepage_html":"Try going to %{href}","goto_homepage_href":"%{app_name} API documentation homepage","required":"required","optional":"optional","nil_allowed":"nil allowed","param_name":"Param name","params":"Params","examples":"Examples","metadata":"Metadata","errors":"Errors","supported_formats":"Supported Formats","enable_javascript_html":"Please enable JavaScript to view the %{comments_href}.","comments_powered_by_disqus":"comments powered by %{disqus}","api_documentation":"API documentation"}};
