from flask import Flask, render_template


app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/sharkwords-final")
def sharkwords():
    return render_template("sharkwords-final.html")


@app.route("/more")
def more_demos():
    return render_template("more-demos-index.html")


@app.route("/more/sharkwords-class-components")
def sharkwords_classes():
    return render_template("sharkwords-class-components.html")

@app.route("/more/sharkwords-jquery")
def sharkwords_advanced():
    return render_template("sharkwords-jquery.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
