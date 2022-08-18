const About = () => {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${
                        process.env.PUBLIC_URL +
                        "/Photos-001/istockphoto-1188746069-1024x1024.jpg"
                    })`,
                }}
            >
                Hello World
            </div>
            <p></p>
        </>
    );
};

export default About;
