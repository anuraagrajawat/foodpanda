import { useState, useEffect } from "react";

const About = () => {
    const [user, setUser] = useState(null); 

    const fetchUser = async () => {
        try {
            const response = await fetch("https://api.github.com/users/anuraagrajawat");
            const json = await response.json();
            setUser(json); 
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        fetchUser(); 
    }, []);

    if (!user) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <p className="text-xl font-semibold text-orange-500">Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-100 via-white to-orange-50 py-10">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <img
                        src={user.avatar_url}
                        alt="avatar"
                        className="w-48 h-48 rounded-full shadow-md border-4 border-orange-500"
                    />
                    <div className="md:ml-10 mt-6 md:mt-0 text-center md:text-left">
                        <h1 className="text-4xl font-bold text-gray-800">{user.name || "N/A"}</h1>
                        <h2 className="text-xl text-gray-600 mt-2">{user.bio || "No bio available"}</h2>
                        <p className="text-lg text-gray-500 mt-1">
                            <strong>Location:</strong> {user.location || "Not specified"}
                        </p>
                        <p className="text-lg text-gray-500 mt-1">
                            <strong>Company:</strong> {user.company || "Not specified"}
                        </p>
                        <p className="text-lg text-gray-500 mt-1">
                            <strong>Twitter:</strong>{" "}
                            {user.twitter_username ? (
                                <a
                                    href={"https://x.com/Anuraag_Rajawat"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-500 underline"
                                >
                                    {user.twitter_username}
                                </a>
                            ) : (
                                "Not available"
                            )}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    <div className="bg-orange-100 p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-2xl font-bold text-orange-600">{user.public_repos}</h3>
                        <p className="text-gray-700">Public Repositories</p>
                    </div>
                    <div className="bg-orange-100 p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-2xl font-bold text-orange-600">{user.followers}</h3>
                        <p className="text-gray-700">Followers</p>
                    </div>
                    <div className="bg-orange-100 p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-2xl font-bold text-orange-600">{user.following}</h3>
                        <p className="text-gray-700">Following</p>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <a
                        href={user.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 transition"
                    >
                        Visit GitHub Profile
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
