# DRAFT
# BoneMeatsKibble
## Link 

## BoneMeatsKibble Overview
BoneMeetsKibble is an exciting new app where dog owners can find playmates for their dogs. Dog owners can create profiles for their dogs and specify certain traits such as breed, size, gender, activeness, and personality. The owner can then browse possible matches for each dog and filter based off of desired traits. If the owner sees a dog that they think would be a good fit for their dog, they can send a request to match with that dog. If the other owner accepts, they will be able to message each other using Socket.IO for live chat. 

![splash_page](demo_folder/splash_page.png)
## Technologies
  * MongoDB
  * Express
  * React
  * Node.js
## Features
### User Authentication
Users can create an account and use the same credentials to login. Database constraints, model validations, and frontend error rendering are used to ensure a secure sign-up/login process. There is also a demo login feature that allows people visiting the web app to access the site and its features without creating an account. 
### Dog profiles
Users can create multiple dog profiles and attribute certain character traits to their dogs such as breed, size, gender, activeness, and personality. We utilized AWS S3 to allow users to upload profile images of their dogs. We also incorporated client-side form validations in the form of dropdown menus when creating dog profiles to avoid unnecessary axios requests. 

![create_dog_gif](demo_folder/demo_create_dog.gif)
### Matching Logic
One of the challenges was how to store matching data for each dog. We used three different collections to store dog match data (below). Each document within the collection will have a dog ID that it corresponds to and an array of dog IDs that correspond to the match data. 
  * Possible matches - All other dog profiles
  * Pending matches - Dogs that want to match with your dog
  * Matches - Dogs that are matched with your dog
When a user looks at possible matches for their dog and clicks request match on a dog, that requested dog's ID is removed from the possible matches array. The user's dog's ID is then pushed into the requested dog's pending matches array. If the requested dog views their pending matches and accepts, the dog ID is removed from pending matches and put into their matches array. The ID of the dog who accepts will then be pushed into the requesting dog's matches array. 


### Filter for Dog Traits

![filter_dog_gif](demo_folder/demo_dog_filter.gif)
### Live Chat
Users can chat in real-time within each channel. The functionality is integrated using INSERTHERE. WebSockets allow both the server and the client to push messages at any time without any relation to a previous request, resulting in live-chat.

### Future Directions
  * 
