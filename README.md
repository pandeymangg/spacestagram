# Spacestagram

This is my submission for the shopify frontend internship challenge for summer 2022.

### [Deployed Link](https://spacestagram-9999.netlify.app/)

## Features Implemented

### Dark Mode

Implemented both light and dark themes, the defualt is dark.

|                Dark Theme                 |                 Light Theme                 |
| :---------------------------------------: | :-----------------------------------------: |
| ![Dark Theme!](/src/data/images/dark.jpg) | ![Light Theme!](/src/data/images/light.jpg) |

### Loader State and Lazy Loading

Added a loader for the time data is fetched from the NASA's api. Also implemented lazy loading alongside the loader so that only some of the images are fetched initially and the rest are fetched only when the user scrolls down to the bottom of the page.

![Loading State!](/src/data/images/loading.jpg)

### Saving Liked Images

The images liked by a user are saved to the local storage of their browser so that they are persisted even if the user goes away or refreshes the page.

### Like Animation

Made a nice animation on clicking the like button, similar to instagram posts.

![Like Animation!](/src/data/images/like-animation.gif)

### Shareable Links

Users can copy the image link by clicking the copy icon on each image, so that they can then share it.

![Copy Image Link!](/src/data/images/copy-link.gif)
