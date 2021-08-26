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
# Playwright.destroy_all
# Playwright.reset_pk_sequence
Person.destroy_all
Person.reset_pk_sequence
Location.destroy_all
Location.reset_pk_sequence
Casting.destroy_all
Casting.reset_pk_sequence
User.destroy_all
User.reset_pk_sequence

User.create!(name: "Adrienne Paquin", username: "apaquin", password: "password", password_confirmation: "password")

# User.create!(name: "Julie Andrews", username: "jaedwards", password: "password", password_confirmation: "password")

User.create!(name: "Laurie Metcalf", username: "itsnora", password: "password", password_confirmation: "password")

User.create!(name: "Meryl Streep", username: "merylstreet", password: "password", password_confirmation: "password")

# User.create!(name: "Patrick Page", username: "misterhades", password: "password", password_confirmation: "password")

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
    agency: "Tara Rubin Casting",
    notes: "none"
},
{
    agency: "Jack Doulin",
    notes: "none"
},
{
    agency: "McCorkle Casting",
    notes: "none"
},
{
    agency: "Judy Henderson Casting",
    notes: "none"
},
{
    agency: "Caparelliotis Casting",
    notes: "none"
}])
puts "created #{Casting.count} castings"

# Person.create!([{
#     name: "Dennis Razze",
#     position: "Penn Shakes Festival Assc AD"
# },
# {
#     name: "Chalin Tulyathan",
#     position: "Casting Assc"
# },
# {
#     name: "Dawn McAndrews",
#     position: "Theatre at Monmouth Producing AD"
# },
# {
#     name: "James Noel Huban",
#     position: "Theatre at Monmouth Assc AD"
# },
# {
#     name: "Robert J McGuire",
#     position: "Theatre at Monmouth Treasurer, Board of Directors"
# },
# {
#     name: "Jake Loewenthal",
#     position: "Theatre at Monmouth Company Manager"
# },
# {
#     name: "David Dreyfoos",
#     position: "Westport County Playhouse Assc Producer"
# },
# {
#     name: "Liam Lonegan",
#     position: "Westport County Playhouse Asst AD"
# },
# {
#     name: "Laura Schutzel",
#     position: "Tara Rubin CD"
# }])
Person.create!([{
    name: "Dennis Razze (Penn Shakes Festival Assc AD)"
},
{
    name: "Chalin Tulyathan (Casting Assc)"
},
{
    name: "Dawn McAndrews (Theatre at Monmouth Producing AD)"
},
{
    name: "James Noel Huban (Theatre at Monmouth Assc AD)"
},
{
    name: "Robert J McGuire (Theatre at Monmouth Treasurer, Board of Directors)"
},
{
    name: "Jake Loewenthal (Theatre at Monmouth Company Manager)"
},
{
    name: "David Dreyfoos (Westport County Playhouse Assc Producer)"
},
{
    name: "Liam Lonegan (Westport County Playhouse Asst AD)"
},
{
    name: "Laura Schutzel (Tara Rubin CD)"
},
{
    name: "Emma Gibson (Casting Assc)"
},
{
    name: "Alan Filderman (CD)"
},
{
    name: "Molly Jo (Company Manager)"
},
{
    name: "Erin Sheffield (GM)"
},
{
    name: "Robert Shea (AD)"
},
{
    name: "Kaytlin McIntyre (CD)"
},
{
    name: "Jack Doulin (CD)"
},
{
    name: "Michael Paddon (Cast Asst)"
},
{
    name: "Jeffrey Dreisbach (CD)"
},
{
    name: "Emma Goldman (Asst)"
},
{
    name: "Emily Goeler (Art/Mgmt Assc)"
},
{
    name: "Cheyenne Barboza (House Mgr)"
},
{
    name: "Charlie Owens (Comp Mgr)"
},
{
    name: "Naija Anttila (Producer)"
},
{
    name: "Dep Kirkland (Author)"
},
{
    name: "Annie Hartkemeyer (Asst Dir)"
},
{
    name: "Judy Henderson (CD)"
},
{
    name: "Jason Brubaker (Assc CD)"
},
{
    name: "Ciaran O'Reilly (Prod Dir)"
},
{
    name: "Daniel Hasse (Assc AD)"
},
{
    name: "Nathan Winkelstein (Cast Consultant)"
},
{
    name: "Joe Gery (CD)"
}])
puts "created #{Person.count} people"

# Playwright.create!([{
#     name: "William Shakespeare"
# },
# {
#     name: "George Bernard Shaw"
# }])
# puts "created #{Playwright.count} playwrights"

# Monologue.create!([{
#     play: "As You Like It",
#     playwright: "William Shakespeare",
#     public: true,
#     genre: "comedic",
#     role: "Rosalind",
#     length: "90 seconds",
#     first_line: "And why, I pray you? Who might be your mother...",
#     user_id: rand(1..3)
# },
# {
#     play: "The Winter's Tale",
#     playwright: "William Shakespeare",
#     public: true,
#     genre: "dramatic",
#     role: "Hermione",
#     length: "1-2 minutes",
#     first_line: "Since what I am to say must be but that...",
#     user_id: rand(1..3)
# },
# {
#     play: "Gloria",
#     playwright: "Branden Jacobs-Jenkins",
#     public: true,
#     genre: "comedic",
#     role: "Kendra",
#     length: "1-2 minutes",
#     first_line: "If you have half a brain, you'd look around...",
#     user_id: rand(1..3)
# },
# {
#     play: "Misalliance",
#     playwright: "George Bernard Shaw",
#     public: true,
#     genre: "comedic",
#     role: "Hypatia",
#     length: "1-2 minutes",
#     first_line: "Well I daresay it's vulgar, but there's no other word for it...",
#     user_id: rand(1..3)
# }])
mono1 = Monologue.create!(
    play: "As You Like It",
    playwright: "William Shakespeare",
    public: true,
    genre: "comedic",
    role: "Rosalind",
    length: "90 seconds",
    first_line: "And why, I pray you? Who might be your mother...",
    user_id: rand(1..3)
)
mono1.mono_pdf.attach(
    io: File.open('./public/monos/Rosalind.pdf'),
    filename: 'Rosalind.pdf',
    content_type: 'application.pdf'
)
mono2 = Monologue.create!(
    play: "The Winter's Tale",
    playwright: "William Shakespeare",
    public: true,
    genre: "dramatic",
    role: "Hermione",
    length: "1-2 minutes",
    first_line: "Since what I am to say must be but that...",
    user_id: rand(1..3)
)
mono2.mono_pdf.attach(
    io: File.open('./public/monos/Hermione.pdf'),
    filename: 'Hermione.pdf',
    content_type: 'application.pdf'
)
mono3 = Monologue.create!(
    play: "Gloria",
    playwright: "Branden Jacobs-Jenkins",
    public: true,
    genre: "comedic",
    role: "Kendra",
    length: "1-2 minutes",
    first_line: "If you have half a brain, you'd look around...",
    user_id: rand(1..3)
)
mono3.mono_pdf.attach(
    io: File.open('./public/monos/Gloria.pdf'),
    filename: 'Gloria.pdf',
    content_type: 'application.pdf'
)
mono4 = Monologue.create!(
    play: "Misalliance",
    playwright: "George Bernard Shaw",
    public: true,
    genre: "comedic",
    role: "Hypatia",
    length: "1-2 minutes",
    first_line: "Well I daresay it's vulgar, but there's no other word for it...",
    user_id: rand(1..3)
)
mono4.mono_pdf.attach(
    io: File.open('./public/monos/Hypatia.pdf'),
    filename: 'Hypatia.pdf',
    content_type: 'application.pdf'
)
mono5 = Monologue.create!(
    play: "The Merchant of Venice",
    playwright: "William Shakespeare",
    public: true,
    genre: "romantic",
    role: "Portia",
    length: "2 minutes",
    first_line: "You see me, Lord Bassanio, where I stand...",
    user_id: rand(1..3)
)
mono5.mono_pdf.attach(
    io: File.open('./public/monos/Portia.pdf'),
    filename: 'Hypatia.pdf',
    content_type: 'application.pdf'
)
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
},
{
    date: "2020/02/25",
    time: "10:50 am",
    appointment: false,
    location_id: 3,
    producer: "The Barnstormers",
    monologue_id: 4,
    casting_id: 1,
    shows: "Young Frankenstein, Sherwood, Once etc",
    outfit: "black skirt, green blouse, black boots",
    response: "felt good, he laughed so who knows",
    callback: true,
    booked: false
},
{
    date: "2020/03/02",
    time: "10:50 am",
    appointment: false,
    location_id: 1,
    producer: "People's Light Opera",
    monologue_id: 3,
    casting_id: 1,
    shows: "Walden etc",
    outfit: "black skinny jeans, light blue top, black boots",
    response: "",
    callback: false,
    booked: false
},
{
    date: "2020/03/09",
    time: "11:50 am",
    appointment: false,
    location_id: 1,
    producer: "Berkshire Theatre Festival",
    monologue_id: 3,
    casting_id: 1,
    shows: "various",
    outfit: "blue jean dress, Madewell boots",
    response: "",
    callback: false,
    booked: false
},
{
    date: "2020/03/13",
    time: "10:10 am",
    appointment: false,
    location_id: 1,
    producer: "Chester Theatre Company",
    monologue_id: 3,
    casting_id: 1,
    shows: "various",
    outfit: "blue skinny jeans, light blue top, brown boots",
    response: "almost cried because... covid19",
    callback: false,
    booked: false
},
{
    date: "2019/12/16",
    time: "12:30 pm",
    appointment: false,
    location_id: 2,
    producer: "The Minutes (Broadway)",
    monologue_id: 3,
    casting_id: 6,
    shows: "The Minutes",
    outfit: "blue skinny jeans, cream tie back top, brown boots",
    response: "",
    callback: false,
    booked: false
},
{
    date: "2019/11/15",
    time: "11:50 am",
    appointment: false,
    location_id: 1,
    producer: "American Shakespeare Center",
    monologue_id: 1,
    casting_id: 1,
    shows: "Much Ado/Henrys/Othello/Merchant",
    outfit: "blue skinny jeans, grey tank, black boots",
    response: "got laughs, forgot a word - they couldn't remember it either so I made something up",
    callback: false,
    booked: false
},
{
    date: "2019/10/15",
    time: "11:30 am",
    appointment: false,
    location_id: 1,
    producer: "Irish Repertory Theatre",
    monologue_id: 4,
    casting_id: 1,
    shows: "London Assurance",
    outfit: "green romper, Coach flats",
    response: "",
    callback: false,
    booked: false
},
{
    date: "2019/09/06",
    time: "2:00 pm",
    appointment: false,
    location_id: 1,
    producer: "Ms. Trial (Off-Broadway)",
    monologue_id: 3,
    casting_id: 5,
    shows: "Ms. Trial",
    outfit: "green romper, black sandals",
    response: "",
    callback: false,
    booked: false
},
{
    date: "2019/06/07",
    time: "10:30 am",
    appointment: false,
    location_id: 1,
    producer: "Long Wharf Theatre",
    monologue_id: 5,
    casting_id: 1,
    shows: "Pride & Prejudice etc",
    outfit: "navy ruffle dress, black belt, black sandals",
    response: "mentioned my new show, great chat -- fucked up the mono a little but seemed good",
    callback: false,
    booked: false
},
{
    date: "2019/05/23",
    time: "12:10 pm",
    appointment: false,
    location_id: 1,
    producer: "Repetory Theatre of St. Louis",
    monologue_id: 4,
    casting_id: 4,
    shows: "Angels/Pride/Cake/Thanksgiving",
    outfit: "jean dress, sandals",
    response: "",
    callback: false,
    booked: false
},
{
    date: "2019/05/21",
    time: "4:50 pm",
    appointment: false,
    location_id: 1,
    producer: "Theatre for a New Audience",
    monologue_id: 1,
    casting_id: 3,
    shows: "Timon of Athens",
    outfit: "blue jean dress, sandals",
    response: "lovely chat, told him about Midsummer",
    callback: false,
    booked: false
},
{
    date: "2019/05/14",
    time: "11:10 am",
    appointment: false,
    location_id: 1,
    producer: "Seattle Repertory Theatre",
    monologue_id: 4,
    casting_id: 1,
    shows: "Earnest, etc",
    outfit: "blue skinny jeans, cream tie back top, black boots",
    response: "",
    callback: false,
    booked: false
}])
puts "created #{Audition.count} auditions"

UserAudition.create!([{
    user_id: rand(1..3),
    audition_id: 1
},
{
    user_id: rand(1..3),
    audition_id: 2
},
{
    user_id: rand(1..3),
    audition_id: 3
},
{
    user_id: rand(1..3),
    audition_id: 4
},
{
    user_id: rand(1..3),
    audition_id: 5
},
{
    user_id: rand(1..3),
    audition_id: 6
},
{
    user_id: rand(1..3),
    audition_id: 7
},
{
    user_id: rand(1..3),
    audition_id: 8
},
{
    user_id: rand(1..3),
    audition_id: 9
},
{
    user_id: rand(1..3),
    audition_id: 10
},
{
    user_id: rand(1..3),
    audition_id: 11
},
{
    user_id: rand(1..3),
    audition_id: 12
},
{
    user_id: rand(1..3),
    audition_id: 13
},
{
    user_id: rand(1..3),
    audition_id: 14
},
{
    user_id: rand(1..3),
    audition_id: 15
},
{
    user_id: rand(1..3),
    audition_id: 16
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
},
{
    audition_id: 8,
    person_id: 10
},
{
    audition_id: 7,
    person_id: 11
},
{
    audition_id: 6,
    person_id: 12
},
{
    audition_id: 6,
    person_id: 13
},
{
    audition_id: 5,
    person_id: 14
},
{
    audition_id: 9,
    person_id: 31
},
{
    audition_id: 10,
    person_id: 30
},
{
    audition_id: 10,
    person_id: 29
},
{
    audition_id: 11,
    person_id: 28
},
{
    audition_id: 11,
    person_id: 27
},
{
    audition_id: 12,
    person_id: 26
},
{
    audition_id: 12,
    person_id: 25
},
{
    audition_id: 12,
    person_id: 24
},
{
    audition_id: 12,
    person_id: 23
},
{
    audition_id: 13,
    person_id: 22
},
{
    audition_id: 13,
    person_id: 21
},
{
    audition_id: 13,
    person_id: 20
},
{
    audition_id: 14,
    person_id: 19
},
{
    audition_id: 14,
    person_id: 18
},
{
    audition_id: 15,
    person_id: 17
},
{
    audition_id: 15,
    person_id: 16
},
{
    audition_id: 16,
    person_id: 15
}])
puts "created #{InTheRoom.count} people in the rooms"


puts "finished seeding!"