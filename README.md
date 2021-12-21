## What the app does

The express.js server reads the source_data.json on each page refresh.  The source_data.json contains all the details on servers, apps, app owners, app descriptions, app urls, etc.

Whenever you need to revise the data in inventory app:  pull this git repo, edit the source_data.json file, docker build a new image, push the new image.


## Building a production image

  - After you're happy with your code changes:
  ```
  docker login libapps-admin.uncw.edu:8000
  docker build --no-cache -t libapps-admin.uncw.edu:8000/randall-dev/inventory-express --platform linux/x86_64/v8 .
  docker push libapps-admin.uncw.edu:8000/randall-dev/inventory-express
  ```

## Running a dev box


Create a file at ./inventory-express/.env with contents: 
```
NODE_ENV=development
```

then, `docker-compose up -d`

  Site at localhost:3001

  - `docker-compose down` to stop it


To revise the app, revised the code in the ./app folder.  Nodemon inside the container will auto-reload the app whenever you revise ./app.  This works because the ./app folder on your local computer is volume mounted inside the container.  Any revisions to ./app is reflected inside container.

To revise the source data, edit the source_data.json file.  The app will pull the latest changes on browser refresh.  The source_data.json gets baked into in the image, so pushing the image to production pushes the latest changes.

Push any code changes to gitlab.
