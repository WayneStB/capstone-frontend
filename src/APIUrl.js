let APIUrl = "http://localhost:3001";

// handles if we are running heroku
if (window.location.host.indexOf(".herokuapp.com") !== -1) {
    APIUrl = "https://dashboard.heroku.com/apps/waynestb-capstone-backend";
}

export default APIUrl;
