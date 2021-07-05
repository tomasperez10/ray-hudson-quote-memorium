# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Quote.destroy_all

quotes = Quote.create([
    {description: "You can follow him on Facebook, and he'll come out on Twitter!", link: "https://www.youtube.com/watch?v=oT9kPvzYPhs"},
    {description: "Sir Isaac Newton from up above, looks down and says, 'About that gravity thing? I was wrong, Messi was right!'", link: "https://www.youtube.com/watch?v=ciQKYsXip-M"},
    {description: "You can drop a tarantula into his shorts and he'll still be cool!", link: "https://www.youtube.com/watch?v=vNf8eGnNTDA"},
    {description: "He curls this divinely with more curve on it than Jessica Rabbit!", link: "https://www.youtube.com/watch?v=jQGIceRIzuA"},
    {description: "As electrifying as a hairdryer thrown into a hot tub!", link: "https://www.youtube.com/watch?v=0Pca2t3A5rk"}
])
# Quote.create(description: "You can follow him on Facebook, and he'll come out on Twitter!", link: "https://www.youtube.com/watch?v=oT9kPvzYPhs")
# Quote.create(description: "Sir Isaac Newton from up above, looks down and says, 'About that gravity thing? I was wrong, Messi was right!'", link: "https://www.youtube.com/watch?v=ciQKYsXip-M") 
# Quote.create(description: "You can drop a tarantula into his shorts and he'll still be cool!", link: "https://www.youtube.com/watch?v=vNf8eGnNTDA") 
# Quote.create(description: "He curls this divinely with more curve on it than Jessica Rabbit!", link: "https://www.youtube.com/watch?v=jQGIceRIzuA")
# Quote.create(description: "As electrifying as a hairdryer thrown into a hot tub!", link: "https://www.youtube.com/watch?v=0Pca2t3A5rk")

p "Created #{quote.count} quotes"

