class Poi < ActiveRecord::Base
  
  WHEELCHAIR_STATUS_VALUES = {:yes => 1, :limited => 2, :no => 4, :unknown => 8}

    # Tags sollen fuer die Datenbank serialisiert werden

    serialize :tags
    
    attr_reader :lat, :lon

    # osm_id ist der Primaerschluessel

    set_primary_key :osm_id
    
    named_scope :limit, lambda {|limit|{ :limit => limit}}
    
    validate :relevant?
    
    before_save :set_status
    
    # Spezielle Find-Methode fuer den Zugriff auf alle POIs in einer 
    # Bounding-Box. Fruehere Versionen von GeoRuby hatten dazu etwas
    # im MySQL-Adapter, aber das wird inzwischen nicht mehr supported,
    # daher bauen wir hier einen Standard-Contains-Query. Dieser Query
    # benutzt den raeumlichen Index und geht daher schnell (wenn man 
    # nicht gerade eine Bounding-Box fuer die ganze Welt uebergibt).
    
    named_scope :fully_accessible, :conditions => {:status => WHEELCHAIR_STATUS_VALUES[:yes]}
    named_scope :not_accessible, :conditions => {:status => WHEELCHAIR_STATUS_VALUES[:no]}
    named_scope :limited_accessible, :conditions => {:status => WHEELCHAIR_STATUS_VALUES[:limited]}
    named_scope :unknown_accessibility, :conditions => {:status => WHEELCHAIR_STATUS_VALUES[:unknown]}
    
    named_scope :within_bbox, lambda {|left, bottom, right, top|{
      :conditions => "MBRContains(GeomFromText('POLYGON(( \
                      #{left} #{bottom}, #{right} #{bottom}, \
                      #{right} #{top}, #{left} #{top}, \
                      #{left} #{bottom}))'), pois.geom)" } }
    
    def lat
      self.geom.lat if self.geom
    end
    
    def lon
      self.geom.lng if self.geom
    end
    
    def attributes
      super.reverse_merge!(
      :lat => lat,
      :lon => lon,
      :name => name,
      :type => type,
      :category => category,
      :wheelchair => wheelchair,
      :wheelchair_description => wheelchair_description
      )
    end
    
    def id
      osm_id
    end
      
    
    def type
      tags['amenity'] || tags['station'] || tags['railway'] || tags['highway'] || tags['leisure'] || tags['shop'] || tags['tourism'] || tags['historic'] || tags['shop']
    end
    
    def category
      Amenities.each do |cat, amenities|
        return cat.to_s if amenities.include?(self.type)
      end
      nil
    end

    def name
      tags['name']
    end

    def wheelchair
      tags['wheelchair'] ||= 'unknown'
    end

    def wheelchair_description
      tags['wheelchair_description']
    end

    def to_json(options={})
      {'id' => id,
       'lat' => lat,
       'lon' => lon,
       'name' => name,
       'icon' => 'bank',
       'state' => 'yes',
       'wheelchair' => wheelchair,
       'tags' => tags.reverse_merge!('wheelchair' => wheelchair).reject{|k,v| v.blank?},
       'type' => type,
       'category' => self.category}.to_json
    end

    def to_geojson(options={})
      result = { :type => 'Feature',
        :geometry => { :type => 'Point', :coordinates  => [self.lon, self.lat]
        },
        :properties => tags.reverse_merge!('wheelchair' => wheelchair, 'type' => type, 'category' => category, 'icon' => icon).reject{|k,v| v.blank?}
      }
      result[:id] = self.osm_id unless osm_id.blank?
      result
    end
    
    def icon
      Icons[type.to_sym] unless type.blank?
    end

    def relevant?
      if !tags.blank? &&
        ( tags.has_key?('amenity') ||
        tags.has_key?('shop') ||
        tags.has_key?('tourism') ||
        tags.has_key?('natural') ||
        tags.has_key?('sport') ||
        tags.has_key?('leisure') ||
        tags.has_key?('historic'))
        # valid!
      else
        errors.add(:tags, "needs to have at least one of the following keys: amenity, tourism natural sport leisure shop historic")
      end
    end

    def existing_record!
        @new_record = false
    end
    
    def set_status
      self.status = WHEELCHAIR_STATUS_VALUES[wheelchair.to_sym]
    end
end
