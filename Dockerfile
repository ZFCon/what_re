# Use an official Python runtime as a parent image
FROM python:3.10-slim

# Set environment variables
ENV PYTHONUNBUFFERED 1

# Set the working directory to /code
WORKDIR /code

# Install essential packages
RUN apt-get update && apt-get install -y build-essential

# Copy the current directory contents into the container at /code
COPY . /code

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Expose port 8000 for the Django app
EXPOSE 80

# Define the command to run the Django app
ENTRYPOINT ["/code/entrypoint.sh"]
