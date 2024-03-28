import React from 'react';

export function UncontrolledLogin() {
    function handleFormSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const data = {
            username: formData.get("username"),
            password: formData.get("password"),
            session: formData.get("session") === "on" ? true : false,
        }

        console.log(data);
    }

    return (
        <div className="form-card">
            <form onSubmit={handleFormSubmit}>
                <h1>UNCONTROLLED FORM</h1>
                <input name="username" type="text" placeholder="Username" />
                <input name="password" type="password" placeholder="Password" />
                <input name="session" type="checkbox" />
                <button type="submit">Login</button>
                <button type="reset">Reset</button>
            </form>
        </div>
    );
}
