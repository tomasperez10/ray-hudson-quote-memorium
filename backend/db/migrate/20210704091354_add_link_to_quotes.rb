class AddLinkToQuotes < ActiveRecord::Migration[6.1]
  def change
    add_column :quotes, :link, :string
  end
end
