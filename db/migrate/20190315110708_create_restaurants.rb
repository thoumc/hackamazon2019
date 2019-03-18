class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :currency
      t.string :rating
      t.string :website_url
      t.integer :longitude
      t.integer :latitude
      t.integer :average_cost_for_two
      t.integer :price_range
      t.string :menu_url
      t.string :votes
      t.string :featured_image
      t.string :photos_url

      t.timestamps
    end
  end
end
