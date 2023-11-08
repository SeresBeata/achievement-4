import { useState } from 'react';

//Create LoginView child component
//Pass function from parent component (MainView) to the child component (LoginView) by using prop
//Export the created child component LoginView, and return login form
export const LoginView = ({ onLoggedIn }) => {
    //Create state variable "username" and "password", with initial state ''.
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        // Use preventDefault() to prevent default behavior of the form (reloading the entire page)
        event.preventDefault();

        const data = {
            username: username,
            password: password,
        };

        //Use fetch() method for "/login" endpoint of myFlix API
        fetch('https://movieapi-myflix.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json()) //transforms the response content into a JSON object that can be used to extract the JWT sent by API.
            .then((data) => {
                console.log('Login response: ', data);
                if (data.user) {
                    localStorage.setItem('user', JSON.stringify(data.user)); //use localStorage to store the user object
                    localStorage.setItem('token', data.token); //use the localStorage to store the token
                    onLoggedIn(data.user, data.token); //pass the user and token back to MainView so they can be used in all the subsequent API requests.
                } else {
                    alert('No such user');
                }
            })
            .catch((e) => {
                alert('Something went wrong');
            });
    };

    //Return Login form
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    minLength="5"
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength="5"
                    maxLength="10"
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};
