# Build the project
npx webpack

# Create the assets directory if it doesn't exist
mkdir -Force \\192.168.1.2\docker\flarum\extensions\flarum-better-codeblock\assets

# Copy the JavaScript files to the network share
Copy-Item -Path dist\forum.js -Destination \\192.168.1.2\docker\flarum\extensions\flarum-better-codeblock\assets\forum.js -Force
Copy-Item -Path dist\admin.js -Destination \\192.168.1.2\docker\flarum\extensions\flarum-better-codeblock\assets\admin.js -Force
Copy-Item -Path dist\forum.js.map -Destination \\192.168.1.2\docker\flarum\extensions\flarum-better-codeblock\assets\forum.js.map -Force
Copy-Item -Path dist\admin.js.map -Destination \\192.168.1.2\docker\flarum\extensions\flarum-better-codeblock\assets\admin.js.map -Force

Write-Host "Build completed and files copied to the network share." 