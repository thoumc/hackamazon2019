json.extract! user, :id, :name, :mobile_no, :email, :created_at, :updated_at
json.url user_url(user, format: :json)
