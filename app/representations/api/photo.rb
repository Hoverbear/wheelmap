module Api::Photo
  extend ActiveSupport::Concern

  included do
    def around_api_response(api_template)
      custom_cache_key = "api_response_#{self.cache_key}_#{api_template.to_s}"
      Rails.cache.fetch(custom_cache_key, :expires_in => 1.day) do
        yield
      end
    end

    api_accessible :simple do |t|
      t.add :id
      t.add :taken_on
      t.add :image_versions, :as => :images
    end

  end
end