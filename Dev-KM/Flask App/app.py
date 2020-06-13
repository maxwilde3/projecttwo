# resources:
# https://stackoverflow.com/questions/11178426/how-can-i-pass-data-from-flask-to-javascript-in-a-template
# https://benalexkeen.com/creating-graphs-using-flask-and-d3/

# dependencies
from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import test_score_api

# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/score_app")

# Route to render index.html template using data from Mongo
@app.route("/")
def home():

    # Find one record of data from the mongo database
    score_data = mongo.db.collection.find_one()

    # Return template and data
    return render_template("index.html", mars=score_data)

# Route that will trigger the scrape function
@app.route("/scrape")
def scrape():

    # Run the scrape function
    score_dictionary = test_score_api.get_data()

    # Update the Mongo database using update and upsert=True
    mongo.db.collection.update({}, score_dictionary, upsert=True)

    # Redirect back to home page
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)
