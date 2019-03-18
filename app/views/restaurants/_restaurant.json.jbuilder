json.extract! restaurant, :id, :name, :currency, :rating, :website_url, :longitude, :latitude, :created_at, :updated_at
json.url restaurant_url(restaurant, format: :json)
