import React, { useState, useEffect} from "react";


const AddUser = ({ setCurrentUser }) => {
    const [formData, setFormData] = useState({});
    const [inspections, setInspections] = useState(undefined)

    // we may want to change this for sustainability measures
    //  useEffect(() => {
    //    fetch("/inspection/all", {
    //      method: "GET",
    //      headers: {
    //        "Content-Type": "application/json",
    //      },
    //    })
    //      .then((res) => res.json())
    //      .then((data) => {
    //        setInspections(data);
    //      });
    //  }, []);


    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        fetch("/register", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                //we will probably want to change this
                // setCurrentUser(data);
            });
    };

    return (
        <div className="Form">
            <form className="Form1" onSubmit={handleSubmit}>
                <h1>Add User</h1>

                <section className="section">
                    <label className="label">Username</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Enter Username"
                            name="username"
                            id="username"
                            onChange={handleChange}
                            required
                        />
                    </div>


                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input
                                className="input"
                                type="password"
                                placeholder="Enter Password"
                                name="password"
                                id="password"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Inspection ID</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                placeholder="Enter Inspection ID"
                                name="inspection_id"
                                id="inspection_id"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>


                    <div className="field">
                        <label className="label">Admin?</label>
                        <div className="control">
                            <input
                                className="checkbox"
                                type="checkbox"
                                name="admin"
                                id="admin"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button
                                className="button"
                                type="submit"
                                id="register-button"
                            >
                                Submit
                    </button>
                        </div>
                        <div className="control">
                            <button className="button" type="reset" id="cancel-button">
                                Cancel
                    </button>
                        </div>
                    </div>


                </section>
            </form>
        </div>
    );
}

export default AddUser
