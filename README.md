# On This Day

"On This Day" is a React application that allows users to see and select famous birthdays on a specific date. The selected birthdays are shown as favourites. 

## Setup

Follow these steps to set up the project on your local machine:

1. **Clone or Fork the Repository**

    Clone the repository using the following command:<br>
    (`git clone https://github.com/yourusername/on-this-day.git`)<br>

    Or fork the repository to your own GitHub account and then clone it.

2. **Install the Dependencies**

    Navigate into the project directory and run:<br>
    (`npm install`)<br>
    This will install all the necessary dependencies required for the project.

3. **Start the Application**

    Run the following command to start the application:<br>
    (`npm start`)<br>
    
    This will start the development server and open the application in your default web browser at `http://localhost:3000`.

## Usage

- The main view shows a list of famous birthdays on the current date.
- You can select or deselect birthdays by checking or unchecking the checkboxes next to each name.
- The selected birthdays are displayed in the "Favourite Birthdays" section.



- **`DateContext.js`**: Manages the global state for selected dates and items using React Context API.
- **`BirthdayList.js`**: Displays the list of birthdays for a given date and allows users to select or deselect them.
- **`FavouriteBirthdays.js`**: Shows the list of selected favourite birthdays.

## Wikimedia API

This project utilizes the Wikimedia API to fetch information about famous birthdays. The API provides a list of historical events, births, and deaths that occurred on the current date. For more information, refer to the [Wikimedia API documentation](https://api.wikimedia.org/wiki/Feed_API/Reference/On_this_day).

## Material-UI Calendar Component

The Material-UI Calendar component is used to display a calendar interface, allowing users to select a specific date. This component enhances the user experience by providing an intuitive way to navigate to different dates. For more information about Material-UI and its components, visit the [Material-UI documentation](https://material-ui.com/).

## Deployment

The application is deployed on Netlify and can be accessed at: [https://onthisdayy.netlify.app](https://onthisdayy.netlify.app)


## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

Please ensure that your pull request adheres to the project's coding standards and includes relevant tests or documentation as needed.

