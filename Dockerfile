# Use the official Nginx image
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Copy application files to the Nginx HTML directory
COPY . /usr/share/nginx/html/

# Optional: Add a custom Nginx configuration (if needed)
# Uncomment the following lines if you want to include a custom configuration file

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
