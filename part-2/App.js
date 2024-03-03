const App = () => {
    return ( 
        <div>
            <h1> Tweets </h1>
            < Tweet username="Rocco" originalAuthor="Marbles" date="08-12-2024" msg="Happy Birthday to us!" ></Tweet>
            < Tweet username="Marbles" originalAuthor="Rocco" date="08-12-2024" msg="Today is our Birthday!" ></Tweet>
            < Tweet username="World News" originalAuthor="Jaz" date="08-12-2024" msg="My cats turn 12 years old today!" ></Tweet>
        </div>
    );
};

