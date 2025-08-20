# Personal Finance Tracker - Backend

## Introduction
This is the **backend repository** for the Personal Finance Tracker application we created for Project 3 (MERN Stack) of General Assembly's Software Engineering Bootcamp.  
It provides RESTful APIs for user authentication, profile management, transactions, and categories.  
The backend is built with **Node.js, Express, MongoDB**, and **JavaScript**.  

---

## Getting Started

> [!NOTE]
> Frontend should be running at the same time the backend is running

### Prerequisites
- Node.js and npm installed
- MongoDB running locally or in the cloud

### Installation
1. Clone the repository  
   ```bash  
   git clone https://github.com/ayahmeftah/personal-finance-tracker-backend.git  
   ```

2. Navigate into the project folder  
   ```bash  
   cd personal-finance-tracker-backend  
   ```

3. Install dependencies  
   ```bash  
   npm install 
   ``` 

4. Create a `.env` file and add your environment variables
    ```env
    MONGODB_URI=your_mongodb_connection_string
    PORT=your_port_number
    SECRET=your_secret_key
    CLOUD_NAME=your_cloudinary_name
    API_KEY=your_cloudinary_api_key
    API_SECRET=your_cloudinary_api_secret
    ```

5. Start the server  
   ```bash  
   npm run dev  
   ```
---

## Frontend Repository
The frontend repository can be found here:  
[Personal Finance Tracker - Frontend](https://github.com/ayahmeftah/personal-finance-tracker-frontend)  

---

## Routes

### Auth Routes
| HTTP Method | Controller | Response | URI | Use Case |
|-------------|------------|---------|-----|----------|
| POST | signup | 201 | /auth/signup | Create a new user account |
| POST | login | 200 | /auth/login | Login with username and password |

### User Routes
| HTTP Method | Controller | Response | URI | Use Case |
|-------------|------------|---------|-----|----------|
| GET | getUser | 200 | /users/profile | Get current user profile |
| PUT | updateUser | 200 | /users/profile | Update user profile |
| DELETE | deleteUser | 200 | /users/profile | Delete user account |
| DELETE | removeProfilePic | 200 | /users/profile/profile-pic | Remove user's profile picture |

### Transaction Routes
| HTTP Method | Controller | Response | URI | Use Case |
|-------------|------------|---------|-----|----------|
| POST | createTransaction | 201 | /transactions | Create a new transaction |
| GET | getAllTransactions | 200 | /transactions | List all user transactions |
| GET | getOneTransaction | 200 | /transactions/:id | Get a single transaction |
| PUT | updateTransaction | 200 | /transactions/:id | Update a transaction |
| DELETE | deleteTransaction | 200 | /transactions/:id | Delete a transaction |

### Category Routes
| HTTP Method | Controller | Response | URI | Use Case |
|-------------|------------|---------|-----|----------|
| POST | createCategory | 201 | /category | Create a new category |
| GET | getCategories | 200 | /category | List all user categories |
| GET | showCategory | 200 | /category/:categoryId | Get a single category |
| PUT | updateCategory | 200 | /category/:categoryId | Update a category |
| DELETE | deleteCategory | 200 | /category/:categoryId | Delete a category and related transactions |
