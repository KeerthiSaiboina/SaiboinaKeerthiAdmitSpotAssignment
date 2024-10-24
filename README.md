# Next.js Contact Management API

## Overview
This is a RESTful API built with Next.js for managing user authentication and contacts. It supports JWT-based authentication, file uploads for CSV/Excel parsing, and timezone-based date-time handling.
### Objective 
Develop a comprehensive RESTful API for a contact management system that includes  user authentication, advanced contact features, and file handling capabilities. 
### Requirements 
1. User Authentication: 
a. Implement user registration and login functionality using JWT (JSON Web  Tokens). 
b. Include email verification upon registration. 
c. Allow password reset functionality via one-time-code. 
2. Contact Management: 
a. Create endpoints for: 
i. Adding a new contact with fields for name, email, phone number,  address, and timezone. 
ii. Retrieving contacts with filtering options (e.g., by name, email, or  timezone) and sorting capabilities. 
iii. Updating contact details. 
iv. Deleting contacts (soft delete functionality). 
v. Batch processing: adding/updating multiple contacts via a single  request. 
3. Data Validation: 
a. Implement robust validation for user input using a validation library (e.g., Joi,  yup). 
b. Ensure unique constraints on emails in the contact and user tables. 4. Date-Time Handling: 
a. Store contact creation and update timestamps in UTC. 
b. Convert these timestamps to the user’s specified timezone when retrieving  contact information. 
c. Implement a feature to retrieve contacts created within a specific date  range. 
5. File Handling:
a. Implement CSV and Excel file upload functionality for bulk contact creation  and updates. 
b. Parse the uploaded files and validate the data against existing constraints  before saving to the database. 
c. Provide a download endpoint that generates a CSV/Excel file of all contacts,  including their creation dates and timezones. 
6. Database: 
a. Use a SQL database (e.g., PostgreSQL, MySQL) to store user and contact  information. 
b. Design the database schema to ensure normalization and include necessary  relationships. 
c. Implement transactions for batch processing and file uploads to ensure data  integrity. 
7. Security: 
a. Implement rate limiting on sensitive endpoints (e.g., login, registration). b. Ensure that sensitive information (like passwords) is properly hashed and  stored securely. 

## Features
- User registration, login, and password reset
- Add, update, delete, and retrieve contacts
- CSV/Excel file upload for bulk contact creation
- Download contacts as CSV/Excel
- Timestamps handled in UTC and converted to user timezones
### Install dependencies:
npm install
JWT: For authentication
bcrypt: For password hashing
pg: PostgreSQL database client
multer: For file uploads
csv-parser: For CSV parsing
exceljs: For handling Excel files
yup: For input validation
date-fns: For date and time management

### Database Setup:
Use PostgreSQL for the database.

### Set up environment variables
Create a .env file and include:
DATABASE_URL=your_postgres_connection_url
JWT_SECRET=your_secret_key

## Setup Instructions

### Clone the repository
```bash
git clone https://github.com/yourusername/nextjs-backend.git
cd nextjs-backend

### API Endpoints
Auth Routes
POST /api/auth/register: Register a new user.
POST `/api/auth
