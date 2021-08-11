# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "destroying data"
InTheRoom.destroy_all
InTheRoom.reset_pk_sequence
UserAudition.destroy_all
UserAudition.reset_pk_sequence
Audition.destroy_all
Audition.reset_pk_sequence
Monologue.destroy_all
Monologue.reset_pk_sequence
Playwright.destroy_all
Playwright.reset_pk_sequence
Person.destroy_all
Person.reset_pk_sequence
Location.destroy_all
Location.reset_pk_sequence
Casting.destroy_all
Casting.reset_pk_sequence
User.destroy_all
User.reset_pk_sequence

User.create!([{
    name: "Adrienne",
    username: "apaquin",
    password_digest: "12345"
},
{
    name: "Dana",
    username: "danacola",
    password_digest: "12345"
}])
puts "created #{User.count} users"

Location.create!([{
    name: "AEA",
    address: "165 W. 46th St 15th floor",
    notes: "Clean, good bathrooms"
},
{
    name: "500 Pearl",
    address: "500 8th avenue",
    notes: "crowded and loud"
},
{
    name: "520 Ripley",
    address: "520 8th avenue",
    notes: "plenty of quiet spots to hide"
}])
puts "created #{Location.count} locations"

Casting.create!([{
    agency: "none",
    notes: "in house casting"
},
{
    agency: "Tara Rubin",
    notes: "none"
}])
puts "created #{Casting.count} castings"

Person.create!([{
    name: "Dennis Razze",
    position: "Penn Shakes Festival Assc AD"
},
{
    name: "Chalin Tulyathan",
    position: "Casting Assc"
},
{
    name: "Dawn McAndrews",
    position: "Theatre at Monmouth Producing AD"
},
{
    name: "James Noel Huban",
    position: "Theatre at Monmouth Assc AD"
},
{
    name: "Robert J McGuire",
    position: "Theatre at Monmouth Treasurer, Board of Directors"
},
{
    name: "Jake Loewenthal",
    position: "Theatre at Monmouth Company Manager"
},
{
    name: "David Dreyfoos",
    position: "Westport County Playhouse Assc Producer"
},
{
    name: "Liam Lonegan",
    position: "Westport County Playhouse Asst AD"
},
{
    name: "Laura Schutzel",
    position: "Tara Rubin CD"
}])
puts "created #{Person.count} people"

Playwright.create!([{
    name: "William Shakespeare"
},
{
    name: "George Bernard Shaw"
}])
puts "created #{Playwright.count} playwrights"

Monologue.create!([{
    play: "As You Like It",
    playwright_id: 1,
    public: true,
    genre: "comedic",
    role: "Rosalind",
    length: "90 seconds",
    first_line: "And why, I pray you? Who might be your mother...",
    user_id: 1
},
{
    play: "The Winter's Tale",
    playwright_id: 1,
    public: true,
    genre: "dramatic",
    role: "Hermione",
    length: "1-2 minutes",
    first_line: "Since what I am to say must be but that...",
    user_id: 1
}])
puts "created #{Monologue.count} monologues"

Audition.create!([{
    date: "2020/01/06",
    time: "12:10 pm",
    appointment: false,
    location_id: 1,
    producer: "Penn Shakes Festival",
    monologue_id: 1,
    casting_id: 1,
    shows: "Midsummer, Sense & Sensibility, Henry 4 etc",
    outfit: "green jumpsuit, brown boots",
    response: "'very funny' after I was done",
    callback: false,
    booked: false
},
{
    date: "2020/01/08",
    time: "10:50 am",
    appointment: false,
    location_id: 1,
    producer: "Public Theatre Mobile Unit",
    monologue_id: 1,
    casting_id: 1,
    shows: "Cymbeline",
    outfit: "black skinny jeans, navy tank, black boots",
    callback: false,
    booked: false
},
{
    date: "2020/01/09",
    time: "11:10 am",
    appointment: false,
    location_id: 1,
    producer: "Theatre at Monmouth",
    monologue_id: 1,
    casting_id: 1,
    shows: "Cymbeline, Julius Caesar etc",
    outfit: "blue skinny jeans, green tank, brown boots",
    response: "Dawn remembered and was like you are changed! Laughed at Ros, asked for second. Callback in the room",
    callback: true,
    booked: false
},
{
    date: "2020/01/27",
    time: "12:10 pm",
    appointment: false,
    location_id: 2,
    producer: "Westport County Playhouse",
    monologue_id: 2,
    casting_id: 2,
    shows: "Antigone",
    outfit: "black skinny jeans, light blue top, black boots",
    response: "lost it in the first couple lines because SO LOUD outside (they were super understanding) and seemed to dig the monologue",
    callback: false,
    booked: false
}])
puts "created #{Audition.count} auditions"

UserAudition.create!([{
    user_id: 1,
    audition_id: 1
},
{
    user_id: 2,
    audition_id: 2
},
{
    user_id: 2,
    audition_id: 3
},
{
    user_id: 1,
    audition_id: 4
}])
puts "created #{UserAudition.count} user/auditions"

InTheRoom.create!([{
    audition_id: 1,
    person_id: 1
},
{
    audition_id: 2,
    person_id: 2
},
{
    audition_id: 3,
    person_id: 3
},
{
    audition_id: 3,
    person_id: 4
},
{
    audition_id: 3,
    person_id: 5
},
{
    audition_id: 3,
    person_id: 6
},
{
    audition_id: 4,
    person_id: 7
},
{
    audition_id: 4,
    person_id: 8
},
{
    audition_id: 4,
    person_id: 9
}])
puts "created #{InTheRoom.count} people in the rooms"


puts "finished seeding!"