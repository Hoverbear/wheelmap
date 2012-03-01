# encoding: UTF-8
WheelchairStatus = %w{yes limited no unknown}

Languages = {
  'bg'    => 'български',
  'cn'    => '中文',
  'da'    => 'Danske',
  'de'    => 'Deutsch',
  'de-CH' => 'Schwitzerdütsch',
  'el'    => 'Ελληνικά',
  'en'    => 'English',
  'es'    => 'Español',
  'fr'    => 'Français',
  'is'    => 'Íslenska',
  'it'    => 'Italiano',
  'ja'    => '日本',
  'jp'    => '日本',
  'ko'    => '한국어',
  'lv'    => 'Latvijas',
  'nl'    => 'Nederlands',
  'pl'    => 'Polski',
  'pt'    => 'Português',
  'ru'    => 'Русский',
  'se'    => 'Svenska',
  'sk'    => 'Slovenčina',
  'tlh'   => 'tlhIngan Hol',
  'tr'    => 'Türkçe',
  'zh'    =>  '中文'
}

Amenities = {
  :public_transfer => %w{station bicycle_rental bus_station bus_stop ferry ferry_terminal halt platform subway_entrance terminal tram_stop parking_aisle fuel parking car_rental car_sharing boatyard cable_car chair_lift},
  :food => %w{cafe bar pub restaurant fast_food drinking_water},
  :leisure => %w{cinema theatre zoo nightclub gallery arena},
  :money_post => %w{post_office atm bank bureau_de_change},
  :education => %w{college  library school university museum kindergarten},
  :shopping => %w{supermarket hairdresser clothes mall furniture electronics books beverages alcohol department_store shoes hardware garden_centre optician computer bakery laundry bicycle butcher convenience doityourself dry_cleaning florist kiosk},
  :sport => %w{stadium sports_centre swimming},
  :tourism => %w{archaeological_site arts_centre artwork beacon theme_park attraction beach viewpoint tower memorial information cave_entrance castle},
  :accommodation => %w{chalet hostel hotel motel camp_site guest_house caravan_site bed_and_breakfast beach_resort},
  :misc => %w{place_of_worship hospital doctors pharmacy veterinary toilets},
  :government => %w{courthouse townhall}
}

Tags = {
  :alcohol => :shop,
  :archaeological_site => :historic,
  :arena => :leisure,
  :arts_centre => :amenity,
  :artwork => :amenity,
  :atm => :amenity,
  :attraction => :tourism,
  :bakery => :shop,
  :bank => :amenity,
  :bar => :amenity,
  :beach => :natural,
  :beach_resort => :leisure,
  :beacon => :man_made,
  :bed_and_breakfast => :tourism,
  :beverages => :shop,
  :bicycle => :shop,
  :bicycle_rental => :amenity,
  :biergarten => :amenity,
  :boatyard => :waterway,
  :books => :shop,
  :brothel => :amenity,
  :bureau_de_change => :amenity,
  :butcher => :shop,
  :bus_station => :amenity,
  :bus_stop => :highway,
  :cable_car => :aerialway,
  :cafe => :amenity,
  :camp_site => :tourism,
  :caravan_site => :tourism,
  :car => :shop,
  :car_rental => :amenity,
  :car_repair => :shop,
  :car_sharing => :amenity,
  :castle => :historic,
  :cave_entrance => :natural,
  :chair_lift => :aerialway,
  :chalet => :tourism,
  :chemist => :shop,
  :cinema => :amenity,
  :clothes => :shop,
  :college => :amenity,
  :community_center => :amenity,
  :company => :office,
  :computer => :shop,
  :convenience => :shop,
  :courthouse => :amenity,
  :department_store => :shop,
  :doctors => :amenity,
  :doityourself => :shop,
  :drinking_water => :amenity,
  :dry_cleaning => :shop,
  :electronics => :shop,
  :embassy => :amenity,
  :fast_food => :amenity,
  :ferry => :route,
  :ferry_terminal => :amenity,
  :florist => :shop,
  :fuel => :amenity,
  :furniture => :shop,
  :gallery => :amenity,
  :garden_centre => :shop,
  :guest_house => :tourism,
  :hairdresser => :shop,
  :halt => :railway,
  :hardware => :shop,
  :hearing_aids => :shop,
  :hospital => :amenity,
  :hostel => :tourism,
  :hotel => :tourism,
  :kindergarten => :amenity,
  :kiosk => :shop,
  :laundry => :shop,
  :lawyer => :office,
  :library => :amenity,
  :mall => :shop,
  :medical_supply => :shop,
  :memorial => :historic,
  :motel => :tourism,
  :museum => :tourism,
  :nightclub => :amenity,
  :optician => :shop,
  :outdoor => :shop,
  :parking => :amenity,
  :parking_aisle => :amenity,
  :pharmacy => :amenity,
  :photo => :shop,
  :place_of_worship => :amenity,
  :platform => :railway,
  :playground => :leisure,
  :police => :amenity,
  :post_office => :amenity,
  :pub => :amenity,
  :restaurant => :amenity,
  :school => :amenity,
  :second_hand => :shop,
  :shoes => :shop,
  :social_facility => :amenity,
  :sports => :shop,
  :sports_centre => :leisure,
  :stadium => :leisure,
  :station => :railway,
  :stationery => :shop,
  :stripclub => :amenity,
  :subway_entrance => :railway,
  :supermarket => :shop,
  :swimming_pool => :amenity,
  :terminal => :aeroway,
  :theatre => :amenity,
  :theme_park => :tourism,
  :toilets => :amenity,
  :tower => :power,
  :townhall => :amenity,
  :tram_stop => :railway,
  :university => :amenity,
  :veterinary => :amenity,
  :video => :shop,
  :viewpoint => :tourism,
  :zoo => :tourism
}

Icons = {
  :arts_centre => 'palette',
  :atm => 'credit-cards',
  :audiologist => 'cross-small-white',
  :baby_hatch => 'cross-small-white',
  :bank => 'money-coin',
  :bar => 'glass',
  :bench => 'cross-small-white',
  :bicycle => 'shopping-basket',
  :bicycle_parking => 'car',
  :bicycle_rental => 'car',
  :brothel => 'cross-small-white',
  :bureau_de_change => 'bureau-de-change',
  :butcher => 'shopping-basket',
  :cafe => 'cake',
  :car_rental => 'car-rental',
  :car_sharing => 'car-sharing',
  :cinema => 'film',
  :clock => 'clock-frame',
  :coast_guard => 'lifebuoy',
  :college => 'book-open',
  :community_centre => 'cross-small-white',
  :convenience => 'shopping-basket',
  :courthouse => 'auction-hammer-gavel',
  :crematorium => 'cross-small-white',
  :doctors => 'hospital',
  :doityourself => 'shopping-basket',
  :drinking_water => 'water',
  :dry_cleaning => 'shopping-basket',
  :emergency_phone => 'cross-small-white',
  :fast_food => 'fast-food',
  :fire_hydrant => 'fire',
  :fire_station => 'fire-station',
  :florist => 'shopping-basket',
  :fountain => 'cross-small-white',
  :fuel => 'car',
  :grave_yard => 'cross-small-white',
  :grit_bin => 'cross-small-white',
  :hospital => 'hospital',
  :hunting_stand => 'target',
  :kindergarten => 'smiley',
  :outdoor => 'shopping-basket',
  :kiosk => 'shopping-basket',
  :zoo => 'smiley',
  :gallery => 'smiley',
  :library => 'book-open',
  :marketplace => 'shopping-basket',
  :milk_dispenser => 'cross-small-white',
  :nightclub => 'speaker',
  :parking => 'parking',
  :pharmacy => 'pharmacie-germany',
  :place_of_worship => 'bell',
  :post_box => 'mail',
  :post_office => 'mail',
  :prison => 'user-thief-baldie',
  :pub => 'beer',
  :recycling => 'bin-full',
  :register_office => 'bank',
  :restaurant => 'cutlery',
  :sauna => 'cross-small-white',
  :school => 'book-open',
  :stripclub => 'cross-small-white',
  :studio => 'cross-small-white',
  :telephone => 'telephone',
  :theatre => 'mask',
  :toilets => 'toilet',
  :townhall => 'bank',
  :university => 'book-open',
  :vending_machine => 'cross-small-white',
  :veterinary => 'hospital',
  :waste_basket => 'bin-full',
  :waste_disposal => 'bin-full',
  :station => 'traffic-light',
  :light_rail => 'car',
  :tram_stop => 'car',
  :bus_stop => 'car',
  :ferry_terminal => 'car',
  :taxi => 'car',
  :place_of_worship => 'bell',
  :supermarket => 'shopping-basket',
  :hairdresser => 'shopping-basket',
  :clothes => 't-shirt',
  :mall => 'shopping-basket',
  :furniture => 'chair',
  :electronics => 'television',
  :books => 'book',
  :beverages => 'shopping-basket',
  :alcohol => 'shopping-basket',
  :department_store => 'shopping-basket',
  :shoes => 'shopping-basket',
  :hardware => 'wrench',
  :garden_centre => 'leaf',
  :optician => 'glasses',
  :computer => 'computer',
  :bakery => 'cookies',
  :hotel => 'building',
  :guest_house => 'building',
  :motel => 'building',
  :hostel => 'building',
  :chalet => 'building',
  :attraction => 'star',
  :memorial => 'star',
  :stadium => 'sport',
  :sports_centre => 'sport',
  :swimming => 'sport',
  :museum => 'bank',
  :information => 'information',
  :viewpoint => 'camera'
}