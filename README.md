# React + Redux

This projects main aim and requirements are:
A small React application that allows users to:
- View a list of users
- Click on a user to see their profile
- View that user’s posts
- Edit profile information via a form
- Use routing to navigate between views
- Manage state using Redux
- Use Redux Thunks for async API calls

Prerequisites
Node.js, npm installed
create-react-app
Familiarity with JSONPlaceholder API: https://jsonplaceholder.typicode.com/ or you can use a local API instead

Project Structure
/src
  /components
    UserList.js
    UserCard.js
    UserProfile.js
    EditProfileForm.js
    PostList.js
  /redux
    store.js
    userSlice.js
    postSlice.js
  /pages
    Home.js
    Profile.js
  /App.js
  /index.js

Phase 1: Setup and User List
Task 1: Project Setup
Create a new React project using create-react-app.
Set up folder structure.
Install react-router-dom, redux, @reduxjs/toolkit, and react-redux.
Task 2: User List Page
Fetch a list of users from: https://jsonplaceholder.typicode.com/users or local JSON API.
Store users in Redux using createSlice and createAsyncThunk.
Display each user in a card (UserCard.js) with:
Name
Email
A “View Profile” button
Apply basic CSS.
Phase 2: Routing and Profile View
Task 3: Add Routing
Use react-router-dom to set up:
/ → UserList
/users/:id → UserProfile
Task 4: UserProfile Component
Use useParams to get user ID.
Fetch user details (from Redux or directly if not cached).
Fetch user’s posts (/posts?userId=1) and display in PostList.js.
Show user’s:
Name, Email, Website, Company Name
List of posts with title

Phase 3: Edit Profile and Form Handling
Task 5: Edit Profile Form
Add an "Edit" button on the UserProfile page.
Clicking "Edit" navigates to /users/:id/edit.
Prefill a controlled form with user details (name, email).
Handle form submission with:
Validation (required fields)
State update locally (you don’t need to call API for PUT)

