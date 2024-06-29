# Node.js Task Management API

This project is designed to reinforce the API concepts for managing tasks. The API provides endpoints for creating, listing, updating, deleting, and marking tasks as complete, as well as importing tasks in bulk from a CSV file.

## Project Structure

The project follows a structured layout to maintain clarity and modularity:

- `server.js`: Entry point of the application.
- `routes.js`: Defines the API endpoints and their corresponding handlers.
- `database.js`: Manages the data storage using the `fs` module to read and write data.
- `utils/build-route-path.js`: A utility to construct route paths.
- `utils/extract-query-params.js`: A utility to extract query parameters from requests.
- `middlewares/json.js`: Middleware to parse JSON data in requests.

## API Endpoints

### Create Task

- **Endpoint:** `POST http://localhost:3333/tasks`
- **Description:** Create a new task with the provided data.
- **Request Body:**

  ```json
  {
    "title": "Task Title",
    "description": "Detailed description of the task"
  }
  ```

- **Business Rules:**
  - The fields `id`, `created_at`, `updated_at`, and `completed_at` are automatically populated.

### Get All Tasks

- **Endpoint:** `GET http://localhost:3333/tasks`
- **Description:** Retrieve a list of all tasks.
- **Query Parameters:**
  - `search`: Filter tasks by title or description.

### Update Task

- **Endpoint:** `PUT http://localhost:3333/tasks/:id`
- **Description:** Update task data for the task with the specified `id`.
- **Request Body:**

  ```json
  {
    "title": "Updated Task Title",
    "description": "Updated description of the task"
  }
  ```

- **Business Rules:**
  - Only the `title` and/or `description` can be updated.
  - Validate if the `id` exists in the database before updating.

### Delete Task

- **Endpoint:** `DELETE http://localhost:3333/tasks/:id`
- **Description:** Delete the task with the specified `id`.
- **Business Rules:**
  - Validate if the `id` exists in the database before deleting.

### Mark Task as Complete

- **Endpoint:** `PATCH http://localhost:3333/tasks/:id/complete`
- **Description:** Mark the task as complete or revert it to incomplete.
- **Business Rules:**

  - Validate if the `id` exists in the database before updating.

  ## Getting Started

To run the server locally, follow these steps:

1. Clone the project repository:

   ```bash
   git clone https://github.com/lucastenani/node.js-challenge-tasks.git
   ```

2. Navigate to the project folder:

   ```bash
   cd task-management-api
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

The server will start, and you can access the API endpoints using tools like [Insomnia](https://insomnia.rest/) to test the calls.

**Note:** The API endpoints are accessible at `http://localhost:3333`.

## Additional Validations

- `title` and `description` fields need to be present in the request body for the `POST` and `PUT` routes.
- Returns a message if the `id` does not exist in the database for routes that require an `id`.

## Database

User data is stored in a physical file named `db.json` using the `database.js` module. This approach ensures data is not lost between server restarts.

## License

This project is licensed under the [MIT License](LICENSE).
