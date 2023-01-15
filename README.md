# randomCountry
A simple Cordova based mobile application that display random country on Google Maps.
## Getting started
1. Clone the project using git clone `<repo_url>`
2. Install the dependencies by running `yarn install`
3. Add a platform by running `cordova platform add <platform>` (iOS or Android)
4. Open `./www/index.html` and replace the placeholder "YOUR_API_KEY" in the following line of code with the actual key obtained from the Google Cloud Console:
```
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
```

## Obtaining an API key

In order to use the Google Maps JavaScript API, you will need to obtain a unique API key from the Google Cloud Console.

To obtain your API key, follow these steps:
1. Go to the Google Cloud Console at https://console.cloud.google.com/
2. Sign in with your Google account
3. Click on the "Select a Project" button and select or create a new project
4. Click on the hamburger menu in the top left corner and select "APIs & Services"
5. Click on the "Library" tab and search for "Google Maps JavaScript API"
6. Click on the "Enable" button to enable the API
7. Click on the "Credentials" tab on the left sidebar
8. Click on the "Create Credentials" button and select "API Key"
9. A modal will appear containing your API key, you can now copy and paste it to replace "YOUR_API_KEY" in your code.

***It's important to keep your API key secure and never share it with anyone or include it in a public repository.***

### Build and Run
Once you have replaced the API key, you can build and run the application on the platform you added using Cordova command

`cordova run <platform>` or run build on Android Studio or XCode

### Built With
<ins>Cordova</ins> - Mobile application development framework

<ins>Google Maps JavaScript API</ins> - Map integration

### Authors
Ployrung Dusarux - Initial work
