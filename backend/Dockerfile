# Use an official Python image as the base
FROM python:3.11-slim

# Set the working directory inside the container
WORKDIR /backend

# Copy requirements.txt to the working directory
COPY requirements.txt .

# Copy the rest of the application code
COPY . .
RUN apt-get update && apt-get install -y libpq-dev build-essential

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port the Flask app runs on
EXPOSE 5000

# Start the Flask app
CMD ["flask", "run"]